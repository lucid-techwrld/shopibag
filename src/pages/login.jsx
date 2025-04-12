import React from 'react'
import logo from '../assets/images/shopibag-logo1.png'

const login = () => {
  return (
    <div className="bg-[url('./assets/background/shopibag-bg.png')] bg-cover bg-center bg-no-repeat bg-fixed min-h-screen w-full">
         <div className='flex flex-col justify-center items-center text-white text-md w-full h-auto'>
          <img src={logo} alt="logo" className='w-[80px] h-[80px] mt-14' />
            <p className='text-3xl font-bold'>SHOPiBAG</p>
            <h1>Welcome to Shopibag</h1>
            <p>Where fashion meets function</p>
         </div>
         <form onSubmit={() => {
          handleSubmit()
         }} className='p-6 flex flex-col  bg-white/45 rounded-t-3xl w-full mt-5'>
          <h2 className='mb-5 text-2xl font-bold text-center text-blue-700'>Login</h2>
          <input
            type="email"
            name="email"
            id="emailID"
            placeholder='Email'
            className='w-full h-16 py-3 px-6 rounded-full text-sm mb-5'
            required/>
          <input 
            type="password"
            name="password"
            id="pwdID"
            placeholder='password'
            className='w-full h-16 py-3 px-6 rounded-full text-sm mb-5'
            required/>
          <button type="submit" className='w-full h-20 bg-blue-500 rounded-full mt-2 text-xl font-bold text-white hover:text-gray-600'>Login</button>
          <p className='text-center mt-2 text-md'>
            Don't have an account?
            <a href="/signup" className='text-blue-600 underline'>
            Create Account</a>
          </p>
          <button className='w-full h-20 bg-white rounded-full mt-2 text-xl font-bold text-black hover:text-gray-600'>
            Sign in with Google
            </button>
          <button className='w-full h-20 bg-slate-700 rounded-full mt-2 text-xl font-bold text-white hover:text-black'>
            Sign in with iCloud
          </button>
          <p className='text-center text-sm italic mt-4'>where fashion meets function </p>
        </form>
    </div>
  )
}

export default login