import React,{ useContext } from 'react'
import logo_icon from '../assets/logo-icon.png'
import logo_text from '../assets/logo-text.png'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';

const Footer = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div className='flex-col bg-primary-dark px-10 py-5'>
      <div className='max-w-[1000px] w-full mx-auto'>
        <div className='flex  my-5'>
          <div className="w-full lg:w-2/5 bg-primary-dark flex justify-start gap-2">
            <img className="drop-shadow-2xl h-6" src={logo_icon} alt="" />
            <img className="drop-shadow-2xl h-6" src={logo_text} alt="" />
          </div>
          <div className='flex w-3/5 text-slate-500 justify-between items-start'>
            <ul hidden={isAuthenticated}>
              <li className='text-slate-400 font-semibold mb-2'><h1>Authentication</h1></li>
              <li className='hover:underline'><Link to="/signin">Sign In</Link></li>
              <li className='hover:underline'><Link to="/signup">Sign Up</Link></li>
            </ul>
            <ul hidden={!isAuthenticated}>
              <li className='text-slate-400 font-semibold mb-2'><h1>Page Routes</h1></li>
              <li className='hover:underline'><Link to="/">Home</Link></li>
              {/* <li className='hover:underline'><Link to="/categories">Categories</Link></li> */}
              {/* <li className='hover:underline'><Link to="/alerts">Price Alerts</Link></li> */}
              {/* <li className='hover:underline'><Link to="/wishlist">Wishlist</Link></li> */}
              <li className='hover:underline'><Link to="/write">Write a Review</Link></li>
            </ul>
            <ul>
              <li className='text-slate-400 font-semibold mb-2'><h1>Documentation</h1></li>
              <li className='hover:underline'><Link>About Us</Link></li>
              <li className='hover:underline'><Link>Terms & Conditions</Link></li>
              <li className='hover:underline'><Link>Privacy Policy</Link></li>
              <li className='hover:underline'><Link>Help/FAQ</Link></li>
            </ul>
            <ul>
              <li className='text-slate-400 font-semibold mb-2'><h1>Contact Us</h1></li>
              <li className='hover:underline'><Link>GitHub</Link></li>
              <li className='hover:underline'><Link>Twitter</Link></li>
              <li className='hover:underline'><Link>Discord</Link></li>
              <li className='hover:underline'><Link>LinkedIn</Link></li>
            </ul>
          </div>
        </div>
        <hr className=' border-t-1 border-slate-500' />
        <div className=' w-full flex justify-between mt-3 pb-3 text-slate-400'>
          <div className='text-slate-400 font-semibold mb-2'>
            Discover | Compare | Choose Wisely
          </div>
          <div className='flex gap-5 text-slate-500'>
            © 2024 Review Hub. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer