import React, { useState, useEffect, useContext } from 'react'
import { MdAddBox } from "react-icons/md";
import img from '../assets/images/nysc cartoon.jpg'
import CartContext from '../context/CartContext';



const Products = () => {

  const cartContext = useContext(CartContext);
  //console.log(cartContext); // should show an object
  
  if (!cartContext) {
    console.error('CartContext is undefined!');
  }
  
  const {cartItems, setCartItems, cartCount, setCartCount} = cartContext || {};
  
 //console.log('cartItems:', cartItems);
 //console.log('cartCount:', cartCount);
 
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
    
      // Show the popup
      setShowToaster(true);
      setTimeout(() => {
        setShowToaster(false);
      }, 800);
      
    };
    
    useEffect(() => {
        console.log('Cart Items:', cartItems);
        console.log('Cart Count:', cartCount);
      }, [cartItems, cartCount]);

     

  return (
    <div className='relative'>
      <p className='text-center font-bold'>Trending Fashion</p>
      <div className="grid grid-cols-2 gap-2 px-2 py-3">
        {products.map((product, index) => (
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

const products = [
  {
    "name": "Classic Men's Cotton Shirt",
    "price": 29.99,
    "description": "A timeless cotton shirt perfect for formal and casual occasions.",
    "imageUrl": "https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhzfGVufDB8fDB8fHww"
  },
  {
    "name": "Women's Summer Floral Dress",
    "price": 49.99,
    "description": "A light and breezy floral dress ideal for summer outings.",
    "imageUrl": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpcnR8ZW58MHx8MHx8fDA%3D"
  },
  {
    "name": "Unisex Denim Jacket",
    "price": 59.99,
    "description": "A stylish denim jacket suitable for all genders and seasons.",
    "imageUrl": "https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhzfGVufDB8fDB8fHww"
  },
  {
    "name": "Men's Leather Wallet",
    "price": 19.99,
    "description": "A durable leather wallet with multiple compartments.",
    "imageUrl": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpcnR8ZW58MHx8MHx8fDA%3D"
  },
]

