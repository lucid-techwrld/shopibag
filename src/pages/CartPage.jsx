import React, { useContext } from 'react'
import PageContext from '../context/PageContext'
import CartProductCard from '../components/CartProductCard'
import Products from '../components/products'
import BackButton from '../components/BackButton'


const CartPage = () => {
  const cartContext = useContext(PageContext)
  if (!cartContext) {
    console.error('Cart context is not defined')
  }
  const { cartItems } = cartContext || {}

  return (
    <div className="w-full h-full px-2 py-6 md:px-10 lg:px-20">
      {/* Back Button */}
      <div className="mb-4">
        <BackButton />
      </div>

      <h1 className="text-2xl font-bold text-center mb-6 md:text-3xl lg:text-4xl">Your Cart</h1>
      {cartItems?.length > 0 ? (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold md:text-3xl">Shopping Cart</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400 md:px-6 md:py-3 md:text-lg">
              Checkout
            </button>
          </div>
          {cartItems.map((product) => (
            <CartProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <p className="text-center text-lg md:text-xl">Your cart is empty</p>
          <Products />
        </div>
      )}
    </div>
  )
}

export default CartPage