import React from 'react'
import { MdAddBox, MdRemoveCircle } from 'react-icons/md'
import useCart from '../hooks/useCart'
import formatPrice from '../utils/formatPrice'

const CartProductCard = ({ product }) => {
  const { handleAddToCart, handleRemoveFromCart } = useCart()

  if (!product) {
    return null // Do not render if product is undefined
  }

  return (
    <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex items-center gap-4">
        <img
          src={product.imageUrl || '/placeholder-image.png'} // Fallback for image
          alt={product.name || 'Product'}
          className="w-16 h-16 object-cover rounded-md"
        />
        <div>
          <p className="font-bold">{product.name || 'Unknown Product'}</p> {/* Fallback for name */}
          <p className="text-sm text-gray-600">{'$' + (formatPrice(product.price) || '0.00')}</p> {/* Fallback for price */}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <MdRemoveCircle
          onClick={() => handleRemoveFromCart(product.id)}
          className="text-red-500 text-2xl cursor-pointer"
        />
        <p className="font-bold">{product.quantity || 0}</p> {/* Fallback for quantity */}
        <MdAddBox
          onClick={() => handleAddToCart(product)}
          className="text-green-500 text-2xl cursor-pointer"
        />
      </div>
    </div>
  )
}

export default CartProductCard