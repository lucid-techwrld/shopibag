import { useEffect, useState } from "react"
import PageContext from "./PageContext"

const StateProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems')
    return savedCartItems ? JSON.parse(savedCartItems) : []
  })
  const [cartCount, setCartCount] = useState(() => {
    const savedCartCount = localStorage.getItem('cartCount')
    return savedCartCount ? JSON.parse(savedCartCount) : 0
  })

  const [isLoggedIn, setIsLoggedIn] = useState(true)

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    localStorage.setItem('cartCount', JSON.stringify(cartCount))
  }, [cartItems, cartCount])

  return (
    <PageContext.Provider value={{ cartItems, setCartItems, cartCount, setCartCount, isLoggedIn, setIsLoggedIn }}>
      {children}
    </PageContext.Provider>
  )
}

export default StateProvider