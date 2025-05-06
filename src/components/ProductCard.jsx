import React, { useState } from 'react'
import { MdAddBox } from 'react-icons/md'
import useCart from '../hooks/useCart'

const ProductCard = ({ product }) => {
  const { handleAddToCart } = useCart()
  const [imageLoaded, setImageLoaded] = useState(false) // Track image loading state

  const addToCart = () => {
    handleAddToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      description: product.description,
      imageUrl: product.imageUrl,
    })
  }

  return (
    <div className="bg-blue-500 rounded-2xl overflow-hidden w-full h-auto flex flex-col">
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
          <p>{'$' + product.price}</p>
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