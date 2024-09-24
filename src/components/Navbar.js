import React from 'react'
import logo_icon from '../assets/logo-icon.png'
import logo_text from '../assets/logo-text.png'
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <header className="w-full bg-[#252530] flex items-center h-12 z-10 shadow-2xl">
            <div className=" w-1/4 flex flex-1 items-center pl-5 gap-2">
                <img className="drop-shadow-2xl h-6" src={logo_icon} alt="" />
                <img className="drop-shadow-2xl h-6" src={logo_text} alt="" />
            </div>
            <div className=" w-3/4 flex text-sm justify-end items-center text-slate-400 gap-5 mx-5 duration-500">
                    <Link className=' hover:text-gray-300' to="/">Home</Link>
                    <Link className=' hover:text-gray-300' to="/categories">Categories</Link>
                    <Link className=' hover:text-gray-300' to="/alerts">Price Alerts</Link>
                    <Link className=' hover:text-gray-300' to="/write">Write Review</Link>
                    <Link className=' hover:text-gray-300' to="/wishlist">Wishlist</Link>
                    <h1 className='text-3xl cursor-default mb-1'>|</h1>
                    <Link className='shadow-2xl border border-slate-500  rounded-md px-4 py-1 hover:border-blue-600' to="/signin">Sign In</Link>
                    <Link className="shadow-2xl bg-slate-600 text-white rounded-md px-4 py-1 hover:bg-blue-800" to="signup">Get Started</Link>
                </div>
        </header>
    )
}

export default Navbar