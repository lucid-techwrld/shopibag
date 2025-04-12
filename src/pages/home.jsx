import React from 'react'
import NavBar from '../components/header'
import Hero from '../components/hero'
import Products from '../components/products'
import Footer from '../components/footer'
import { useState } from 'react'
import MenuBar from '../components/menuBar'


const  Home = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='w-screen h-full relative'>
      <NavBar className='z-50'
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}/>
      <div className='mt-[115px]'>
        <Hero/>
        <Products/>
        <Footer/>
      </div>
      <MenuBar 
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}/>
        {menuOpen && (
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
          />
        )} 
    </div>
  )
}
 export default Home