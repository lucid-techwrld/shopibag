import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useCart } from "../hooks/useCart.jsx";
import BackButton from "../components/BackButton";
import PopUpToaster from "../components/PopUpToaster";

const CategoryPage = () => {
  const { category } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [popupData, setPopupData] = useState(null);
  const { handleAddToCart } = useCart();

  const fetchProductCategory = async (category) => {
    try {
      setLoading(true);
      const res = await fetch(
        `http://localhost:5000/api/v1/products/category/${category}`
      );
      if (!res.ok) {
        throw new Error("Something went wrong, please try again later");
      }
      const data = await res.json();
      setCategoryProducts(data.products);
    } catch (error) {
      setPopupData({
        type: "error",
        header: "Error",
        message: error.message || "Failed to fetch category products.",
        text: "",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductCategory(category.toLowerCase());
  }, [category]);

  return (
    <div className="w-full h-full px-4 py-6">
      {popupData && (
        <PopUpToaster
          type={popupData.type}
          header={popupData.header}
          message={popupData.message}
          text={popupData.text}
          onClose={() => setPopupData(null)}
        />
      )}
      <div className="mb-4">
        <BackButton />
      </div>
      <div className="bg-blue-500 text-white py-6 px-4 rounded-lg mb-6">
        <h1 className="text-3xl font-bold text-center capitalize">
          Explore {category} Products
        </h1>
        <p className="text-center mt-2">
          Discover the latest trends and best deals in {category}. Shop now and
          elevate your style!
        </p>
      </div>
      {loading ? (
        <div className="w-full h-20 flex justify-center items-center">
          <div className="loader"></div>
        </div>
      ) : categoryProducts.length > 0 ? (
        <div>
          <h3 className="text-lg font-semibold mb-4">Available Products:</h3>
          <div className="grid grid-cols-2 gap-4">
            {categoryProducts.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">
          No products available in this category. Please check back later!
        </p>
      )}
    </div>
  );
};

export default CategoryPage;
