import { useContext } from 'react'
import PageContext from '../context/PageContext'

const useCart = () => {
  const pageContext = useContext(PageContext)
  const { cartItems, setCartItems, cartCount, setCartCount } = pageContext || {}

  const handleAddToCart = (product) => {
    if (!cartItems || !setCartItems || !setCartCount) return

    const existingItem = cartItems.find((item) => item.id === product.id)

    if (existingItem) {
      // Update quantity if the product already exists in the cart
      const updatedItems = cartItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })
      setCartItems(updatedItems)
    } else {
      // Add new product to the cart
      const newItem = { ...product, quantity: 1 }
      setCartItems((prevItems) => [...prevItems, newItem])
    }

    // Update cart count
    setCartCount((prevCount) => prevCount + 1)
  }

  const handleRemoveFromCart = (id) => {
    if (!cartItems || !setCartItems || !setCartCount) return

    const existingItem = cartItems.find((item) => item.id === id)
    if (!existingItem) return

    let updatedItems
    if (existingItem.quantity > 1) {
      // Decrease quantity if more than 1
      updatedItems = cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 }
        }
        return item
      })
    } else {
      // Remove product from cart if quantity is 1
      updatedItems = cartItems.filter((item) => item.id !== id)
    }

    setCartItems(updatedItems)

    // Update cart count
    const newCartCount = updatedItems.reduce((count, item) => count + item.quantity, 0)
    setCartCount(newCartCount)
  }

  return { handleAddToCart, handleRemoveFromCart }
}

export default useCart