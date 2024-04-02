"use client";
import React, { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const initialState = {
  items: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART":
      return {
        ...state,
        items: action.payload,
      };
    case "REMOVE_FROM_CART":
      const updatedItemsRemove = state.items.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        items: updatedItemsRemove,
      };
    case "INCREMENT_QUANTITY":
      const updatedItemsIncrement = state.items.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return {
        ...state,
        items: updatedItemsIncrement,
      };
    case "DECREMENT_QUANTITY":
      const updatedItemsDecrement = state.items.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      );
      return {
        ...state,
        items: updatedItemsDecrement,
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      dispatch({ type: "SET_CART", payload: JSON.parse(cartItems) });
    }
  }, []);

  const addToCart = (product) => {
    if (typeof window !== "undefined") {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === product.id
      );

      if (existingItemIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += 1;
        localStorage.setItem("cartItems", JSON.stringify(updatedItems));
        dispatch({ type: "SET_CART", payload: updatedItems });
      } else {
        const updatedItems = [...state.items, { ...product, quantity: 1 }];
        localStorage.setItem("cartItems", JSON.stringify(updatedItems));
        dispatch({ type: "SET_CART", payload: updatedItems });
      }
    }
  };

  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  const incrementQuantity = (productId) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: productId });
  };

  const decrementQuantity = (productId) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: productId });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
