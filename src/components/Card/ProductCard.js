import React, { useState, useEffect, useContext } from 'react';
import '../../App.css';
import { ProductContext } from '../../Context/ProductContext';
import { SearchContext } from '../../Context/SearchContext'; // Import the search context

const ProductCard = () => {
  const { setProductTerm } = useContext(ProductContext); // Set product term in context
  const { searchTerm } = useContext(SearchContext); // Get the search term from context
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchTerm) return; // Do nothing if search term is empty

    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("http://localhost:5000/search/product", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: searchTerm }), // Use search term from context
        });

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data); // Assuming 'data' contains the list of products
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchTerm]); // Trigger API call when searchTerm changes

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return <p className='text-lg text-red-400 mt-5'>Server Problem : {error} [ Please Retry ]</p>;
  }

  const truncateTitle = (title, maxLength) => {
    return title.length > maxLength ? title.substring(0, maxLength) + '...' : title;
  };

  const displayProducts = products.slice(0, 15); // Show only the first 15 products

  // Pass product link to context on click
  const handleClick = (productLink) => {
    setProductTerm(productLink); // Set the product link in the ProductContext
  };

  return (
    <>
      <div className='flex flex-wrap justify-center gap-2 max-w-[1000px] w-full mx-auto'>
        {displayProducts.map((product, index) => (
          <div
            key={index}
            onClick={() => handleClick(product.link)} // Set product link on click
            className='p-3 bg-white opacity-80 h-auto w-48 hover:opacity-50 rounded-lg shadow-2xl cursor-pointer'
          >
            <div className="flex flex-col justify-start items-center">
              <img
                alt={product.title}
                src={product.imageUrl}
                className="h-[120px]"
              />
              <h3 className="mt-4 text-l text-slate-800 font-semibold">
                {truncateTitle(product.title, 45)} {/* Truncate title */}
              </h3>
              <h3 className="mt-1 text-[20px] font-bold text-gray-900 self-start">
                ₹ {product.priceInINR} {/* Display product price */}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCard;
