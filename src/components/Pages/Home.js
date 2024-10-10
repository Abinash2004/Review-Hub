import React, { useContext, useState } from 'react';
import search from '../../assets/search.png';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../Context/SearchContext';
import ProductCard from '../Card/ProductCard';
import ReviewCard from '../Card/ReviewCard';

const Home = () => {
  const { setSearchTerm } = useContext(SearchContext); // Only need setSearchTerm here
  const [localSearchTerm, setLocalSearchTerm] = useState(''); // Local state for input


  // Handle input change to update local state
  const handleInputChange = (e) => {
    setLocalSearchTerm(e.target.value); 
  };

  // Handle search button click
  const handleSearchClick = () => {
    setSearchTerm(localSearchTerm); // Update context with local search term when button is clicked
  };

  return (
    <section className='flex flex-col gap-5 items-center justify-center p-10 bg-secondary-dark'>
      <div className='max-w-[1000px] w-full mx-auto p-3 bg-primary-dark flex justify-center gap-2 rounded-lg shadow-xl'>
        <img className='w-10 bg-secondary-dark p-3 rounded-lg' src={search} alt='Search-image' />
        <input 
          className='w-[75%] flex-1 h-100% p-2 text-slate-400 bg-primary-dark focus:outline-none border-slate-800 border rounded-lg placeholder-slate-600' 
          type="text" 
          placeholder='Search Your Product' 
          value={localSearchTerm} // Bind input value to local state
          onChange={handleInputChange} // Update local state on change
        />
        <button 
          className='w-20 text-slate-300 bg-secondary-dark p-2 rounded-lg'
          onClick={handleSearchClick} // Update context only when button is clicked
        >
          Search
        </button>
      </div>

      <ProductCard /> {/* No need to pass productName explicitly */}
      <ReviewCard/>

      <div className='max-w-[1000px] w-full mx-auto flex gap-5'>
        <div className='w-[40%] h-80 flex-col flex gap-3 p-5 bg-primary-dark rounded-lg shadow-xl'>
          <h2 className='text-4xl text-slate-400 font-bold'>Explore All Features Now!</h2>
          <p className='text-base text-slate-500'>Why just browse reviews when you can write your own? Share your experience with us directly on the site and help others decide!</p>
          <Link className='text-lg text-slate-400 hover:underline mt-auto self-end' to="/write">Write a Review</Link>
        </div>

        <div className='w-[60%] h-80 bg-primary-dark rounded-lg shadow-xl p-5 flex'>
          <div className='flex flex-col gap-5'>
            <h2 className='text-4xl text-slate-400 font-bold'>Why Us?</h2>
            <p className='text-l text-slate-500'>Real buyers, bill-verified reviews ensure authenticity, while our platform lets you easily compare insights from multiple e-commerce sites. Join a trusted community sharing honest feedback, all while your data remains private and secure.</p>
            <p className='text-l text-slate-400'>Unlock genuine insights! Join our trusted community and share your honest reviews today!</p>
            <Link className='text-lg text-slate-400 hover:underline mt-auto self-end' to="/">About Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
