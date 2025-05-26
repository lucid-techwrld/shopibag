import React, { useEffect } from "react";
import CartProductCard from "../components/CartProductCard";
import Products from "../components/products";
import BackButton from "../components/BackButton";
import emptyCart from "../assets/icons/undraw_empty-cart_574u.svg";
import CartSummary from "../components/CartSummary.jsx";
import { useCart } from "../hooks/useCart.jsx";

const CartPage = () => {
  const { fetchCart, cartItems } = useCart();

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="w-full h-full px-2 py-6 md:px-10 lg:px-20">
      {/* Back Button */}
      <div className="mb-4">
        <BackButton />
      </div>

      <h1 className="text-2xl font-bold text-center mb-6 md:text-3xl lg:text-4xl">
        Your Cart
      </h1>
      {cartItems?.length > 0 ? (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold md:text-3xl">Shopping Cart</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400 md:px-6 md:py-3 md:text-lg">
              Checkout
            </button>
          </div>
          {cartItems.map((product) => (
            <CartProductCard key={product.productId._id} product={product} />
          ))}
          <CartSummary cartItems={cartItems} />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <img
            src={emptyCart}
            alt="empty cart"
            width={"150px"}
            height={"150px"}
          />
          <p className="text-center text-lg md:text-xl">Your cart is empty</p>
          <h2 className="text-lg font-semibold mt-4">Explore products</h2>
          <Products />
        </div>
      )}
    </div>
  );
};

export default CartPage;
