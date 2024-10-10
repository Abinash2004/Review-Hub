import React, { useState, useContext } from 'react'
import email from '../../assets/email.png'
import password from '../../assets/password.png'
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext';

const SignIn = () => {

  const { setIsAuthenticated } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({email:"", password:""});

  let history = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    const response = await fetch("http://localhost:5000/auth/signin", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email: credentials.email,password: credentials.password})
    });

    const json = await response.json();
    
    if(json.success) {
      // save the auth token and redirect
      localStorage.setItem('token',json.authToken);
      setIsAuthenticated(true);
      alert("Successfully Signed In");
      history("/");
      
    } else {
      alert("Invalid Credentials");
    }
  }

  const onChange = (e) => {
    setCredentials({...credentials,[e.target.name]: e.target.value});
  }

  return (
    <form className='bg-secondary-dark p-10'>
      <div className='max-w-[600px] bg-primary-dark flex flex-col items-center gap-5 mx-auto p-10 rounded-lg shadow-2xl'>
        
        <div className='flex flex-col gap-2 self-start mb-10'>
          <h1 className='text-4xl text-slate-300 font-bold self-start'>Welcome Back</h1>
          <h2 className='text-xl text-slate-500 font-bold self-start'>Sign in to access personalized deals and trusted reviews.</h2>
        </div>
        
        <div className='w-full flex gap-2 rounded-lg px-10'>
          <img className='w-10 bg-secondary-dark p-2 rounded-lg shadow-xl' src={email} alt='Search-image' />
          <input className='w-full p-2 text-slate-400 bg-primary-dark  border-slate-500 border rounded-lg placeholder-slate-500 shadow-xl' type="text" placeholder='Email' value={credentials.email} onChange={onChange} name='email' />
        </div>
        
        <div className='w-full flex gap-2 rounded-lg px-10'>
          <img className='w-10 bg-secondary-dark p-2 rounded-lg shadow-xl' src={password} alt='Search-image' />
          <input className='w-full p-2 text-slate-400 bg-primary-dark  border-slate-500 border rounded-lg placeholder-slate-500 shadow-xl' type="password" placeholder='Password' value={credentials.password} onChange={onChange} name='password' />
        </div>
        
        <Link className=' text-base text-slate-400 self-end hover:text-slate-300  mx-10' to="/signup">Don't have an account?</Link>
        
        <Link className=" w-40 shadow-2xl bg-slate-600 text-white rounded-md px-4 py-1 hover:bg-blue-800 mt-5 text-center" onClick={handleSubmit} >Sign In</Link>
      
      </div>
    </form>
  )
}

export default SignIn
