import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from '../../Context/ProductContext';

const ReviewCard = () => {
  const { productTerm } = useContext(ProductContext); // Get the product term from context
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productTerm) return; // Do nothing if product term is empty

    const fetchReviews = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("http://localhost:5000/search/review", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ productUrl: productTerm }), // Use product term from context
        });

        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }

        const data = await response.json();
        setReviews(data.reviews || []); // Assuming 'data.reviews' contains the list of reviews
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [productTerm]); // Trigger API call when productTerm changes

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return <p className='text-lg text-red-400'>Server Problem : {error} [ Please Retry ]</p>;
  }

  const displayReviews = reviews.slice(0, 15); // Show only the first 15 reviews
  const formatTitle = (title) => {
    // Split the title at the word "stars" and return the part after it
    const parts = title.split('stars');
    return parts.length > 1 ? parts[1].trim() : title; // Return the second part if it exists, else return the original title
  };

  return (
    <div className='flex flex-wrap justify-center gap-5 max-w-[1000px] w-full mx-auto '>
      {displayReviews.length > 0 ? (
        displayReviews.map((review, index) => (
          <div key={index} className='p-3 bg-primary-dark h-auto w-full hover:bg-black rounded-lg shadow-2xl'>
            <div className="flex flex-col justify-start items-center">
              <h3 className="mt-1 text-[25px] text-slate-400 self-start font-semibold">{formatTitle(review.title)}</h3>
              <h3 className="mt-4 text-l text-slate-500 self-start">{review.text}</h3>
              <h3 className="mt-4 text-l text-slate-300 font-semibold self-start">-{review.author}</h3>
              <h3 className="mt-4 text-l text-yellow-200 font-semibold self-end">{review.rating}</h3>
            </div>
          </div>
        ))
      ) : (null)}
    </div>
  );
};

export default ReviewCard;
