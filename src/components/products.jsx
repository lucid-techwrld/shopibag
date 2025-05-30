import React, { useState, useEffect, useContext } from "react";
import ProductCard from "./ProductCard";
import { useCart } from "../hooks/useCart";

const Products = () => {
  const [loadedProducts, setLoadedProducts] = useState([]);
  const [loadingProduct, setLoadingProduct] = useState(false);
  const { handleAddToCart } = useCart(loadedProducts);

  const fetchProducts = async () => {
    try {
      setLoadingProduct(true);
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/products/all`
      );

      const contentType = res.headers.get("content-type");
      if (!res.ok || !contentType.includes("application/json")) {
        const text = await res.text();
        throw new Error(`Invalid response: ${text}`);
      }
      // if (!res.ok) {
      //   throw new Error("Something went wrong, please try again later");
      // }

      const data = await res.json();
      console.log("Products fetched:", data.products);
      setLoadedProducts(data.products);
    } catch (error) {
      console.log(error);
      console.log("Failed to get product");
    } finally {
      setLoadingProduct(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="relative">
      <p className="text-center font-bold">Trending Fashion</p>
      {loadingProduct && (
        <div className="w-full h-20 flex justify-center items-center">
          <div className="loader"></div>
        </div>
      )}
      {loadedProducts?.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-2 py-3">
          {loadedProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      ) : (
        !loadingProduct && <p className="text-center">No products available</p>
      )}
    </div>
  );
};

export default Products;
