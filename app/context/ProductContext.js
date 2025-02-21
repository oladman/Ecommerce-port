"use client"; // Ensure this runs only on the client side

import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteCart: () => {},
  getTotalCost: () => {},
  getProductData: () => {},
});

export function CartContextProvider({ children }) {
  const [cartProducts, setCartProducts] = useState(() => {
    if (typeof window !== "undefined") { // Ensure this runs in the browser
      const localValue = localStorage.getItem("ITEMS");
      return localValue ? JSON.parse(localValue) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("ITEMS", JSON.stringify(cartProducts));
    }
  }, [cartProducts]);

  // Get product quantity in cart
  function getProductQuantity(id) {
    return cartProducts.find((product) => product.id === id)?.quantity || 0;
  }

  // Add product to cart
  function addOneToCart(product, id) {
    setCartProducts((prevCart) => {
      const quantity = getProductQuantity(id);
      if (quantity === 0) {
        return [...prevCart, { ...product, id, quantity: 1 }];
      } else {
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
    });
  }

  function removeOneFromCart(id) {
    setCartProducts((currentCart) =>
      currentCart
        .map((product) =>
          product.id === id ? { ...product, quantity: product.quantity - 1 } : product
        )
        .filter((product) => product.quantity > 0) // Remove items with 0 quantity
    );
  }
  

  // Delete product from cart
  function deleteCart(id) {
    setCartProducts((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  // Calculate total cost of all products in cart
  function getTotalCost() {
    return cartProducts.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  // Get product data from cart
  function getProductData(id) {
    return cartProducts.find((product) => product.id === id);
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteCart,
    getTotalCost,
    getProductData,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}

export default CartContextProvider;
