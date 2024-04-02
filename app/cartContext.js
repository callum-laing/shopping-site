"use client";
import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const initialState = {
  items: JSON.parse(localStorage.getItem("cartItems")) || [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const updatedItemsAdd = [
        ...state.items,
        { ...action.payload, quantity: 1 },
      ];
      localStorage.setItem("cartItems", JSON.stringify(updatedItemsAdd));
      return {
        ...state,
        items: updatedItemsAdd,
      };
    case "REMOVE_FROM_CART":
      const updatedItemsRemove = state.items.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedItemsRemove));
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
      localStorage.setItem("cartItems", JSON.stringify(updatedItemsIncrement));
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
      localStorage.setItem("cartItems", JSON.stringify(updatedItemsDecrement));
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

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
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
