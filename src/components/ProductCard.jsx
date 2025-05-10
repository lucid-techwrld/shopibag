import React, { useState } from "react";
import { MdAddBox } from "react-icons/md";
import { useCart } from "../hooks/useCart.jsx";
import formatPrice from "../utils/formatPrice";

const ProductCard = ({ product }) => {
  const { handleAddToCart } = useCart();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const addToCart = async () => {
    await handleAddToCart(product);

    // Show popup for 2 seconds
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full h-auto flex flex-col relative hover:shadow-xl transition-shadow duration-300">
      {/* Popup Notification */}
      {showPopup && (
        <div className="z-50 absolute top-2 right-2 bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-md shadow-md animate-fade-in-out">
          Added successfully!
        </div>
      )}

      {/* Image Section */}
      <div className="h-[60%] w-full bg-gray-200 relative">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-300 animate-pulse"></div> // Skeleton loader
        )}
        <img
          src={product.imageUrl}
          alt={product.name}
          className={`object-cover w-full h-full transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Details Section */}
      <div className="flex flex-col justify-between flex-1 p-4">
        <div>
          <p className="text-lg font-bold text-gray-800 truncate">
            {product.name}
          </p>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
            {product.description}
          </p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-xl font-semibold text-blue-600">
            {"$" + formatPrice(product.price)}
          </p>
          <MdAddBox
            onClick={addToCart}
            className="text-4xl text-blue-600 cursor-pointer hover:text-blue-400 transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
