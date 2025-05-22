import { createContext, useContext, useState, useEffect } from "react";
import PopUpToaster from "../components/PopUpToaster";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [popupData, setPopupData] = useState(null);

  // Fetch cart data from the backend when the component mounts
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/v1/getCart`,
          {
            method: "GET",
            credentials: "include", // Include cookies in the request
          }
        );

        const data = await res.json();

        if (!res.ok) {
          throw new Error(
            data.message ||
              "Please check your internet connection and try again"
          );
        }

        if (data.success) {
          setCartItems(data.cart);
          setCartCount(data.cartTotal);
        }
      } catch (error) {
        setPopupData({
          type: "error",
          header: "Error",
          message: error.message || "Failed to fetch cart data.",
          text: "",
        });
      }
    };

    fetchCart();
  }, []);

  const handleAddToCart = async (product) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/addCart`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            productId: product._id,
            quantity: 1,
          }),
        }
      );

      const data = await res.json();
      if (!res.ok) {
        throw new Error(
          data.message || "Something went wrong. Please try again later."
        );
      }

      if (data.success) {
        setCartItems(data.cart);
        setCartCount(data.cartTotal);
      }
    } catch (error) {
      setPopupData({
        type: "error",
        header: "Error",
        message: error.message || "Failed to add product to cart.",
        text: "",
      });
    }
  };

  const handleRemoveFromCart = async (productId) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/removeCart`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ productId }),
        }
      );

      const data = await res.json();
      if (!res.ok) {
        throw new Error(
          data.message || "Something went wrong. Please try again later."
        );
      }

      if (data.success) {
        setCartItems(data.cart);
        setCartCount(data.cartTotal);
        setPopupData({
          type: "success",
          header: "Success",
          message: "Product removed from cart successfully!",
          text: "",
        });
      }
    } catch (error) {
      setPopupData({
        type: "error",
        header: "Error",
        message: error.message || "Failed to remove product from cart.",
        text: "",
      });
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        cartCount,
        setCartCount,
        handleAddToCart,
        handleRemoveFromCart,
      }}
    >
      {popupData && (
        <PopUpToaster
          type={popupData.type}
          header={popupData.header}
          message={popupData.message}
          text={popupData.text}
          onClose={() => setPopupData(null)}
        />
      )}
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
