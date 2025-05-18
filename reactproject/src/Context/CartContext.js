import { createContext, useContext, useEffect, useState } from "react"

const CartContext = createContext();
export const useCart = () => useContext(CartContext)

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cart")
    return stored ? JSON.parse(stored) : []
  })

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (newItem) => {
  setCartItems((prev) => {
    const existingItem = prev.find((item) => item._id === newItem._id)
    if (existingItem) {
      return prev.map((item) =>
        item._id === newItem._id
          ? { ...item, quantity: (item.quantity) + 1 }
          : item
      )
    } else {
        return [...prev, { ...newItem, quantity: 1 }]
      }
    })
  }

const removeFromCart = (_id) => {
  setCartItems((prev) =>
    prev
      .map((item) =>
        item._id === _id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
  )
}

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}
