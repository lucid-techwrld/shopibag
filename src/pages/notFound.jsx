import React from 'react'
import illustration from '../assets/images/404.png'
import {MdArrowBackIosNew} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'



const notFound = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }
  return (
    <div className='p-4 w-full h-full text-white flex flex-col justify-center items-center bg-black space-y-10 text-2xl 
    '>
      <p className='text-center text-xl'>Sorry the page you're looking for is not available</p>
      <img src={illustration} alt="404" className='w-full h-auto'/>
      <p>Seems you're lost</p>
      <div className='text-white flex items-center gap-4' onClick={handleClick}>
        <MdArrowBackIosNew className='text-xl animate1'/>
        <p className='text-sm'>Back to home</p>
      </div>
    </div>
  )
}

export default notFound