import React, { useContext, useEffect } from 'react';
import { ReviewContext } from '../../Context/ReviewContext';

const UserReview = () => {
  const { reviews,getAllReview } = useContext(ReviewContext);
  useEffect(() => {
    getAllReview();
  },[])
  return (
    <div className='bg-secondary-dark'>
      <div className='flex flex-wrap justify-center gap-5 max-w-[1000px] w-full mx-auto py-5'>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className='p-3 bg-primary-dark h-auto w-full hover:bg-black rounded-lg shadow-2xl'>
              <div className="flex flex-col justify-start items-center">
                <h3 className="mt-1 text-[25px] text-slate-400 self-start font-semibold">{review.title}</h3>
                <h3 className="mt-4 text-l text-slate-500 self-start">{review.description}</h3>
                {/* <h3 className="mt-4 text-l text-slate-300 font-semibold self-start">-{review.user}</h3> */}
                <h3 className="mt-4 text-l text-yellow-200 font-semibold self-end">{review.rating}.0 out of 5</h3>
              </div>
            </div>
          ))
        ) : (null)}
      </div>
    </div>
  )
}

export default UserReview
