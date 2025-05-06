import React, { useRef, useEffect, useState } from 'react'
import slider2 from '../assets/images/slider2.png'
import slider3 from '../assets/images/slider3.jfif'
import slider4 from '../assets/images/slider4.jfif'
import slider5 from '../assets/images/slider5.jfif'
import slider6 from '../assets/images/slider6.jfif'

const Slider = () => {
  const sliderRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const totalImages = 5

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < totalImages - 1 ? prevIndex + 1 : 0
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`
    }
  }, [currentIndex])

  return (
    <div className="relative w-full h-56 md:h-80 overflow-hidden">
      <div
        ref={sliderRef}
        className="flex transition-transform duration-500 ease-in-out"
        id="slider"
      >
        {[slider2, slider3, slider4, slider5, slider6].map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full">
            <img
              src={image}
              alt={`slider-${index}`}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider
