import React, { useState, useEffect, useContext } from 'react'
import { MdAddBox } from "react-icons/md";
import CartContext from '../context/CartContext';



const Products = () => {

  const cartContext = useContext(CartContext);
  const [loadedProducts, setLoadedProducts] = useState([])
  const [loadingProduct, setLoadingProduct] = useState(false)
  
  console.log('product', loadedProducts)
  if (!cartContext) {
    console.error('CartContext is undefined!');
  }
  
  const {cartItems, setCartItems, cartCount, setCartCount} = cartContext || {};
  
 
 const fetchData = async () => {
  try {
        setLoadingProduct(true)
        const res = await fetch('http://localhost:5000/api/v1/products/all')
  
        if(!res.ok) {
          console.error('Something went please try again later', error)
        }
  
        const data = await res.json()
        console.log(data.products)
        setLoadedProducts(data.products)
      } catch (error) {
        console.log('Failed to get product')
      }
 }
  useEffect( () => {
    fetchData()
  }, [])

    const [showToaster, setShowToaster] = useState(false)
    const [imageLoading, setImageLoading] = useState(false)
  
    const handleAddToCart = (name, price) => {
      const newItem = { name, price, quantity: 1 };
    
      
      const existingItem = cartItems.find((item) => item.name === newItem.name);
    
      if (existingItem) {
        const updatedItems = cartItems.map((item) => {
          if (item.name === newItem.name) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        setCartItems(updatedItems);
      } else {
        setCartItems((prevItems) => [...prevItems, newItem]);
      }
    
      setCartCount((prevCount) => prevCount + 1);
    
     
      setShowToaster(true);
      setTimeout(() => {
        setShowToaster(false);
      }, 800);
      
    };
     

  return (
    <div className='relative'>
      <p className='text-center font-bold'>Trending Fashion</p>
      <div className="grid grid-cols-2 gap-2 px-2 py-3">
        {loadedProducts.map((product, index) => (
          <div key={index} className="bg-blue-500 rounded-2xl overflow-hidden w-full h-auto flex flex-col">
            
            {/* Image Section */}
            <div className={imageLoading ? 'h-[60%] w-full bg-gray-400': 'h-[60%] w-full'}>
              <img 
                src={product.imageUrl} 
                alt="product" 
                className="object-cover w-full h-full"
                onLoad={() => {
                  setImageLoading(true)
                }}
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
                  onClick={() => handleAddToCart(product.name, product.price)} 
                  className="text-4xl cursor-pointer hover:text-blue-300 transition-all"
                />
              </div>
            </div>
      
          </div>
        ))}
      </div>
      
        {
          showToaster && <div className='popup-animate fixed top-[50%] z-50 justify-center items-center w-full text-green-700 font-bold bg-white'>
                   <p className='text-center'>Added to cart successfully!!!</p>
                </div>
        }
    </div>
  )
}

export default Products


