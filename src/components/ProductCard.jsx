import React, { useState } from 'react'
import { MdAddBox } from 'react-icons/md'
import useCart from '../hooks/useCart'
import formatPrice from '../utils/formatPrice' // Import the formatPrice utility

const ProductCard = ({ product }) => {
  const { handleAddToCart } = useCart()
  const [imageLoaded, setImageLoaded] = useState(false) // Track image loading state
  const [showPopup, setShowPopup] = useState(false) // Track popup visibility

  const addToCart = () => {
    handleAddToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      description: product.description,
      imageUrl: product.imageUrl,
    })

    // Show popup for 2 seconds
    setShowPopup(true)
    setTimeout(() => {
      setShowPopup(false)
    }, 2000)
  }

  return (
    <div className="bg-blue-500 rounded-2xl overflow-hidden w-full h-auto flex flex-col relative">
      {/* Popup Notification */}
      {showPopup && (
        <div className="absolute top-2 right-2 bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-md shadow-md animate-fade-in-out">
          Added successfully!
        </div>
      )}

      {/* Image Section */}
      <div className="h-[60%] w-full bg-gray-400 relative">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-300 animate-pulse"></div> // Skeleton loader
        )}
        <img
          src={product.imageUrl}
          alt={product.name}
          className={`object-cover w-full h-full transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)} // Set imageLoaded to true when the image is fully loaded
        />
      </div>

      {/* Details Section */}
      <div className="flex flex-col justify-between flex-1 bg-blue-500 p-4">
        <div>
          <p className="text-md text-white font-extrabold">{product.name}</p>
          <p className="text-sm text-white">{product.description}</p>
        </div>
        <div className="flex justify-between items-center text-white font-bold text-md mt-2">
          {/* Use formatPrice to display the formatted price */}
          <p>{'$' + formatPrice(product.price)}</p>
          <MdAddBox
            onClick={addToCart}
            className="text-4xl cursor-pointer hover:text-blue-300 transition-all"
          />
        </div>
      </div>
    </div>
  )
}

export default ProductCard