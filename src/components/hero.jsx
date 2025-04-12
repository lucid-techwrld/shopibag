import React from 'react'
import Slider from './slider'


const hero = () => {
  return (
    <>
       <div className='w-ful h-full'>
            <Slider/>
          <div>
            {/*free shipping section*/}
            <div className='mt-3 w-full h-auto flex justify-between px-2 gap-2'>
              <div className='h-full w-1/2 rounded-sm bg-amber-100 text-xs p-3'>
                <h2 className='font-bold text-emerald-900 text-sm'>Free Shipping</h2>
                <p>On order of N5K+</p>
              </div>
              <div className='h-full w-1/2 rounded-sm bg-amber-100 text-xs p-3'>
                <h2 className='font-bold text-emerald-900 text-sm'>Free Returns</h2>
                <p>*Conditions apply</p>
              </div>
            </div>
            {/*discount advert section*/}
            <div className='mt-3 w-full h-auto px-2'>
              <div className='flex item-center gap-1 p-1 w-full h-full bg-red-100/50 rounded-sm  text-orange-500'>
                <div className='w-2/5 h-full bg-white rounded-sm flex flex-col p-2 justify-center items-center'>
                  <div>
                    <h1 className='font-extrabold text-sm mb-1'>30% OFF</h1>
                    <p className='text-[0.6rem]'>Over N9,900</p>
                  </div>
                  <p className='text-[0.5rem] border-t-2 border-orange-500 w-full text-center border-dashed'>Applies to Select Products</p>
                </div>
    
                <div className='w-2/5 h-full bg-white rounded-sm flex flex-col p-2 justify-center items-center'>
                  <div>
                    <h1 className='font-extrabold text-sm mb-1'>30% OFF</h1>
                    <p className='text-[0.6rem]'>Over N9,900</p>
                  </div>
                  <p className='text-[0.5rem] border-t-2 border-orange-500 w-full text-center border-dashed'>Applies to Select Products</p>
                </div>
    
                <div className='flex-1 bg-red-200 flex justify-center items-center  rounded-tl-md rounded-bl-md'>
                  <button className='bg-orange-500 text-white px-3 py-1 text-[0.5rem] rounded-full font-bold bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600 animate-bounce'>Collect</button>
                </div>
              </div>
            </div>
          </div>
          <marquee behavior="smotth" direction="left" scroll-amount="5" className='text-red-400 font-bold'> Flash sale on the 12th November 2027</marquee>
       </div>
    </>
   
  )
}

export default hero