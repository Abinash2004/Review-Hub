const express = require('express');
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');
const querystring = require('querystring');

// Static conversion rate (1 USD to INR)
const conversionRate = 83;
function convertUsdToInr(usdPrice) {
  const priceInRupees = (parseFloat(usdPrice) * conversionRate).toFixed(2);
  return priceInRupees;
}

// Function to search Amazon by product name
async function searchAmazon(productName) {
  const products = []; // Array to hold product details

  try {
    // Create a search URL based on the product name
    const searchUrl = `https://www.amazon.com/s?${querystring.stringify({
      k: productName
    })}`;

    // Fetch the search results page
    const { data } = await axios.get(searchUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.5938.62 Safari/537.36'
      }
    });

    // Load the HTML into Cheerio
    const $ = cheerio.load(data);

    // Iterate over all search result products
    $('div[data-component-type="s-search-result"]').each((index, element) => {
      const product = $(element);
      const productTitle = product.find('h2 a span').text().trim();
      const productLink = 'https://www.amazon.com' + product.find('h2 a').attr('href');
      const priceWhole = product.find('.a-price-whole').first().text().trim();
      const priceFraction = product.find('.a-price-fraction').first().text().trim();
      const price = priceWhole && priceFraction ? `${priceWhole}.${priceFraction}` : 'Price not available';
      
      // Convert price to INR if available
      const priceInINR = price !== 'Price not available' ? convertUsdToInr(priceWhole) : 'Price not available';

      // const rating = product.find('i span.a-icon-alt').text().trim() || 'Rating not available';
      const numReviews = product.find('span.a-size-base').first().text().trim() || 'No reviews';
      const imageUrl = product.find('img.s-image').attr('src') || 'Image not available';

      // Add product details to the array
      products.push({
        title: productTitle,
        link: productLink,
        priceInINR,
        numReviews,
        imageUrl
      });
    });

    return products;

  } catch (error) {
    console.error('Error fetching product details:', error.message);
    return []; // Return empty array in case of error
  }
}

// Route 1: Define the POST route for product search
router.post('/product', async (req, res) => {
  const productName = req.body.name;

  if (!productName) {
    return res.status(400).json({ error: 'Product name is required.' });
  }

  const products = await searchAmazon(productName);
  return res.json(products); // Send the product details as JSON response
});

module.exports = router;


// ----------------------------------------------------------------------------------------------------------


// Function to scrape reviews using axios and cheerio
async function scrapeAmazonReviews(productUrl) {
    try {
        // Fetch the product page HTML using Axios
        const { data } = await axios.get(productUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
                'Accept-Language': 'en-US,en;q=0.9',
            },
        });

        // Load the HTML into Cheerio for parsing
        const $ = cheerio.load(data);

        // Extract the product title
        const productTitle = $('#productTitle').text().trim();

        // Find all review blocks
        const reviews = [];
        $('div[data-hook="review"]').each((i, el) => {
            const reviewTitle = $(el).find('a[data-hook="review-title"]').text().trim();
            const reviewRating = $(el).find('i[data-hook="review-star-rating"]').text().trim();
            const reviewText = $(el).find('span[data-hook="review-body"]').text().trim();
            const reviewAuthor = $(el).find('span.a-profile-name').text().trim();

            // Push each review into the reviews array
            reviews.push({
                title: reviewTitle,
                rating: reviewRating,
                author: reviewAuthor,
                text: reviewText,
            });
        });

        // Return the product title and reviews
        return {
            product: productTitle,
            reviews: reviews,
        };

    } catch (error) {
        return { error: error.message };
    }
}

// Endpoint to scrape reviews by URL
router.post('/review', async (req, res) => {
    const { productUrl } = req.body;

    if (!productUrl) {
        return res.status(400).json({ error: 'Product URL is required' });
    }

    // Scrape the Amazon reviews
    const result = await scrapeAmazonReviews(productUrl);
    
    // Send the scraped reviews back as JSON
    res.json(result);
});
