import React from 'react'
import {FaFacebookF, FaWhatsapp, FaPhone, FaInstagram} from 'react-icons/fa'
import {MdMail} from 'react-icons/md'

const Footer = () => {
  return (
    <>
        <footer className='w-full h-auto bg-blue-500 p-4 '>
          <div className='flex flex-wrap gap-10 w-full h-full'>
            <div className='w-1/2'>
              <p className='font-extrabold text-xl'>SHOPiBAG</p>
              <h3 className='font-extrabold'>About</h3>
              <p className='text-justify text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptatum aliquid eveniet atque exercitationem ut odit, nostrum beatae temporibus fugiat vel corporis cupiditate incidunt facere dicta quam consequuntur! Sint, quidem.</p>
            </div>
            <div>
              <p className='font-bold text-xl'>Quick Links</p>
              <ul className='h-full space-y-2 text-white'>
                <li><a href="">Night wears</a></li>
                <li><a href="">Women wears</a></li>
                <li><a href="">Men wears</a></li>
                <li><a href="">Kids wears</a></li>
                <li><a href="">Accessories wears</a></li>
                <li><a href="">Home wears</a></li>
                <li><a href="">Beauty wears</a></li>
              </ul>
            </div>
            <div>
              <p className='font-bold'>Contact us on:</p>
              <div className='flex gap-5 text-2xl mt-5 text-white'>
                <FaFacebookF className='hover:-translate-y-1 hover:text-gray-300 transition-all'/>
                <a href="https://wa.me/+2347085948512">
                  <FaWhatsapp 
                    className='hover:-translate-y-1 hover:text-gray-300 transition-all'/>
                </a>
                <a href="tel:+2348082926609">
                  <FaPhone 
                    className='hover:-translate-y-1 hover:text-gray-300 transition-all'/>
                </a>
                <FaInstagram className='hover:-translate-y-1 hover:text-gray-300 transition-all'/>
                <a href="mailto:lucidtechwrl9@gmail.com">
                  <MdMail
                    className='hover:-translate-y-1 hover:text-gray-300 transition-all'/>
                </a>
              </div>
            </div>
          </div>
          <p className='mt-4 text-center'>ShopiBag © Copyright 2025</p>
        </footer>
    </>
  )
}

export default Footer