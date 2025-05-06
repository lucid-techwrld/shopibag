import React from 'react'
import Hero from '../components/hero'
import Products from '../components/products'
import Footer from '../components/footer'
import { useState } from 'react'
import MenuBar from '../components/menuBar'



const  Home = () => {

  return (
      <div className='w-screen h-full relative'>
          <div className='mt-[115px]'>
            <Hero/>
            <Products/>
            <Footer/>
          </div> 
      </div>
  )
}
 export default Home