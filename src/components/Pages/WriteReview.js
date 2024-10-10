import React,{useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import { ReviewContext } from '../../Context/ReviewContext';

const WriteReview = () => {
  const { addReview } = useContext(ReviewContext);

  const [ review, setReview ] = useState({product:"", title:"", description:"", rating:""})

  const onChange = (e) => {
    setReview({...review, [e.target.name]: e.target.value});
  }

  const handleClick = (e) => {
    e.preventDefault();
    addReview(review.product, review.title, review.description, review.rating);
  }

  return (
    <section className='bg-secondary-dark p-10'>
      <div className='max-w-[800px] bg-primary-dark flex flex-col items-center gap-7 mx-auto p-10 rounded-lg shadow-2xl'>

        <div className='flex flex-col gap-2 self-start mb-10'>
          <h1 className='text-4xl text-slate-300 font-bold self-start'>Product Review</h1>
          <h2 className='text-xl text-slate-500 font-bold self-start'>Be a Part of Our Community — Leave a Review!</h2>
        </div>

        <div className='w-full flex flex-col gap-2 rounded-lg px-10'>
          <h2 className='text-xl text-slate-300 font-semibold self-start'>Product Name</h2>
          <input className='w-full p-2 text-slate-400 bg-primary-dark  border-slate-500 border rounded-lg placeholder-slate-500 shadow-xl' type="text" placeholder='Enter the name of your product' name='product' onChange={onChange} />
        </div>

        <div className='w-full flex flex-col gap-2 rounded-lg px-10'>
          <h2 className='text-xl text-slate-300 font-semibold self-start'>Review Title</h2>
          <input className='w-full p-2 text-slate-400 bg-primary-dark  border-slate-500 border rounded-lg placeholder-slate-500 shadow-xl' type="text" placeholder='Enter the title for your review' name='title' onChange={onChange} />
        </div>

        <div className='w-full flex flex-col gap-2 rounded-lg px-10'>
          <h2 className='text-xl text-slate-300 font-semibold self-start'>Review Description</h2>
          <textarea className='w-full h-60 p-2 text-slate-400 bg-primary-dark  border-slate-500 border rounded-lg placeholder-slate-500 shadow-xl' type="text" placeholder='Write all your experience and thoughts on the product' name='description' onChange={onChange} />
        </div>

        <div className='w-full flex flex-col gap-2 rounded-lg px-10'>
          <h2 className='text-xl text-slate-300 font-semibold self-start'>Product Rating</h2>
          <select className='w-full p-2 text-slate-400 bg-primary-dark  border-slate-500 border rounded-lg placeholder-slate-500 shadow-xl' id="rating" name="rating" onChange={onChange} defaultValue={0}>
            <option value="0" disabled >Rate your product out of 5</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>

        <Link className=" w-40 shadow-2xl bg-slate-600 text-white rounded-md px-4 py-1 hover:bg-blue-800 mt-5 text-center" onClick={handleClick}>Submit</Link>

      </div>
    </section>
  )
}

export default WriteReview
