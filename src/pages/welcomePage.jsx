import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/images/shopibag-logo1.png'

const WelcomePage = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }

  return (
    <div className="bg-[url('./assets/background/shopibag-bg.png')] bg-cover bg-center bg-no-repeat bg-fixed min-h-screen w-full">
      <div className="text-white text-2xl font-bold py-20 flex flex-col justify-center items-center md:text-4xl">
        <h2>Welcome to</h2>
        <h1 className="text-5xl mb-3 md:text-7xl">SHOPiBAG</h1>
        <p className="text-sm md:text-lg">where fashion meets function</p>
      </div>
      <div className="w-full flex justify-center items-center">
        <img src={logo} alt="logo" className="w-[200px] h-[200px] md:w-[300px] md:h-[300px]" />
      </div>
      <div className="mt-20 flex flex-col justify-center items-center">
        <button
          onClick={handleClick}
          className="py-5 px-20 outline-none border-4 text-2xl rounded-full font-bold text-white hover:bg-blue-500/50 md:py-6 md:px-24 md:text-3xl"
        >
          Get Started
        </button>
        <p className="italic text-sm md:text-lg">where fashion meets function.....</p>
      </div>
    </div>
  )
}

export default WelcomePage