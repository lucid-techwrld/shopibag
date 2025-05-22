import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import BackButton from "../components/BackButton";

const SearchPage = () => {
  const { query } = useParams();
  const [products, setProducts] = useState([]); // State to store the fetched products
  const [loading, setLoading] = useState(true); // State to handle loading state

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${
            import.meta.env.VITE_API_BASE_URL
          }/api/v1/products/search?query=${query}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await res.json();
        setProducts(data.products || []); // Update the products state
      } catch (error) {
        console.error("Error fetching products:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [query]);

  return (
    <div className="w-full min-h-screen bg-gray-100 p-4">
      <BackButton />
      <h1 className="text-2xl font-bold text-center mb-6">
        Search Results for "{query}"
      </h1>
      {loading ? (
        <p className="text-center text-lg">Loading...</p>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg">No products found for "{query}".</p>
      )}
    </div>
  );
};

export default SearchPage;
