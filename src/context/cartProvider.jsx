import { useEffect, useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ( {children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCartItems = localStorage.getItem('cartItems')
        return savedCartItems ? JSON.parse(savedCartItems) : []
    })
    const [cartCount, setCartCount] = useState(() => {
        const savedCartCount = localStorage.getItem('cartCount')
        return savedCartCount ? JSON.parse(savedCartCount) : 0
    })


    useEffect(()=> {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
        localStorage.setItem('cartCount', JSON.stringify(cartCount))
    }, [cartItems, cartCount])
    return (
        <CartContext.Provider value={{cartItems, setCartItems, cartCount, setCartCount}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;