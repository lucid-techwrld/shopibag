import React from 'react'
import { FaTimes } from 'react-icons/fa'

const MenuBar = ({menuOpen, setMenuOpen}) => {
  
  return (
    <>
        <div className={`w-1/2 h-full fixed bg-slate-50 right-0 top-0 z-50 transition-transform duration-300 ease-in-out ${menuOpen? 'translate-x-0': 'translate-x-full'}`}>
        <FaTimes onClick={() => setMenuOpen(false)} className='mt-10 text-4xl' />
        </div>
    </>
  )
}

export default MenuBar