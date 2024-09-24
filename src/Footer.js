import React from 'react'
import logo_icon from '../assets/logo-icon.png'
import logo_text from '../assets/logo-text.png'

const Footer = () => {
  return (
    <div className='flex-col bg-[#252530]'>
      <div className="w-full bg-[#252530] flex justify-center items-center h-12 z-10 pl-5 gap-2">
        <img className="drop-shadow-2xl h-6" src={logo_icon} alt="" />
        <img className="drop-shadow-2xl h-6" src={logo_text} alt="" />
      </div>
      <hr className='mx-20 border-t-1 border-slate-500'/>
      <div className='flex-col'>
        <div className='flex gap-5 my-5 mx-20'>
          <div className='flex-col w-1/2 p-2 px-4 border border-slate-400'>
            <h1 className='text-slate-300 text-xl font-semibold'>Privacy Policy</h1>
            <p className='text-slate-500'>Your privacy is important to us. We collect personal information, such as email addresses and product reviews, to enhance your experience on our platform. This data is securely stored and will never be shared with third parties without your consent, except as required by law. We may use cookies to improve site functionality and analyze user behavior. You have the right to access, modify, or delete your personal information at any time. By using our website, you consent to our privacy practices.</p>
          </div>
          <div className='flex-col w-1/2 p-2 px-4 border border-slate-400'>
            <h2 className='text-slate-300 text-xl font-semibold'>Terms of Services</h2>
            <p className='text-slate-500'>By using our website, you agree to comply with these terms. You must be at least 13 years old to use our services. All content, including product reviews and comparisons, is for informational purposes only and should not be considered advice. Users are responsible for the accuracy of their submissions and must ensure they have the rights to any content shared. We reserve the right to modify or remove content that violates our guidelines. We may update these terms periodically, and your continued use signifies acceptance of any changes.</p>
          </div>
        </div>
        <div className='flex gap-5 my-5 mx-20'>
          <div className='flex-col w-1/2 p-2 px-4 border border-slate-400'>
            <h1 className='text-slate-300 text-xl font-semibold'>About Us</h1>
            <p className='text-slate-500'>Welcome to <b>Review Hub</b>, your go-to platform for comprehensive product reviews and comparisons from various e-commerce websites. Our mission is to empower consumers by providing honest and detailed insights to help them make informed purchasing decisions. We believe that transparency is key, which is why we encourage users to share their experiences and reviews, including offline purchases with bill verification. Our dedicated team is committed to continuously improving our services and fostering a community of informed shoppers. Thank you for visiting us; we hope you find the information helpful!</p>
          </div>
          <div className='flex-col w-1/2 p-2 px-4 border border-slate-400'>
            <h1 className='text-slate-300 text-xl font-semibold'>Features</h1>
            <p className='text-slate-500'><b>Comprehensive Reviews:</b> Access detailed product reviews from various e-commerce platforms, helping you make informed decisions.<br/><b>Product Comparisons:</b> Easily compare products across multiple websites to find the best deals and features.<br/><b>User Contributions:</b> Share your experiences by submitting reviews of products purchased from offline stores, verified with a bill.<br/><b>Real-Time Alerts:</b> Sign up for price alerts to receive notifications on your favorite products when they drop in price.</p>
          </div>
        </div>
      </div>
      <hr className='mx-20 border-t-1 border-slate-500'/>
      <div className=' w-full flex justify-between px-20 mt-2 pb-2 text-slate-300'>
        <div>
          © 2024 Review Hub. All rights reserved.
        </div>
        <div className='flex gap-5 text-slate-400'>
          <a href="/" className='hover:text-gray-300'>GitHub</a>
          <a href="/" className='hover:text-gray-300'>Twitter</a>
          <a href="/" className='hover:text-gray-300'>Facebook</a>
          <a href="/" className='hover:text-gray-300'>Instagram</a>
          <a href="/" className='hover:text-gray-300'>Linked In</a>
        </div>
      </div>
    </div>
  )
}

export default Footer