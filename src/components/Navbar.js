import React, { useContext } from 'react'
import logo_icon from '../assets/logo-icon.png'
import logo_text from '../assets/logo-text.png'
import { useNavigate,Link } from "react-router-dom";
import { AuthContext } from '../Context/AuthContext';

function Navbar() {

    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    
    let history = useNavigate();
    
    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        history("/"); // Update context state
    };
    
    return (
        <header className="w-full bg-primary-dark flex items-center h-12 z-10 shadow-2xl">
            <div className=" w-1/4 flex flex-1 items-center pl-5 gap-2">
                <img className="drop-shadow-2xl h-6" src={logo_icon} alt="" />
                <img className="drop-shadow-2xl h-6" src={logo_text} alt="" />
            </div>
            <div className=" w-3/4 flex text-sm justify-end items-center text-slate-400 gap-5 mx-5 duration-500">
                <Link className=' hover:text-gray-300' to="/">Home</Link>
                {/* <Link hidden={!isAuthenticated} className=' hover:text-gray-300' to="/categories">Categories</Link> */}
                <Link hidden={!isAuthenticated} className=' hover:text-gray-300' to="/write">Write Review</Link>
                <Link hidden={!isAuthenticated} className=' hover:text-gray-300' to="userreview">Your Reviews</Link>
                <h1 className='text-3xl cursor-default mb-1'>|</h1>
                <Link hidden={isAuthenticated} className='shadow-2xl border border-slate-500  rounded-md px-4 py-1 hover:border-blue-600' to="/signin">Sign In</Link>
                <Link hidden={isAuthenticated} className="shadow-2xl bg-slate-600 text-white rounded-md px-4 py-1 hover:bg-blue-800" to="/signup">Sign Up</Link>
                <Link hidden={!isAuthenticated} className="shadow-2xl bg-slate-600 text-white rounded-md px-4 py-1 hover:bg-blue-800" onClick={handleLogout} >Log Out</Link>
            </div>
        </header>
    )
}

export default Navbar