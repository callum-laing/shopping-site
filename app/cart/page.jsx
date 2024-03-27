"use client";
import posts from "../data";
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import Styles from "./page.module.css";

const CartComponent = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [items, setItems] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("items") || "[]");
    } else {
      return [];
    }
  });

  useEffect(() => {
    const newItem = posts.find((item) => item.id === parseInt(id));

    if (newItem) {
      setItems([...items, { ...newItem, quantity: 1 }]);
      localStorage.setItem(
        "items",
        JSON.stringify([...items, { ...newItem, quantity: 1 }])
      );
    }
  }, []);

  const increaseQuantity = (index) => {
    const updatedItems = [...items];
    updatedItems[index].quantity += 1;
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  const decreaseQuantity = (index) => {
    const updatedItems = [...items];
    updatedItems[index].quantity -= 1;
    setItems(updatedItems.filter((item) => item.quantity > 0));
    localStorage.setItem(
      "items",
      JSON.stringify(updatedItems.filter((item) => item.quantity > 0))
    );
  };

  return (
    <div className={Styles.cartContainer}>
      {items.map((item, index) => (
        <div className={Styles.cartItem} key={index}>
          <img className={Styles.cartImage} src={item.image} alt={item.name} />
          <div className={Styles.itemDetails}>
            <h3 className={Styles.CartTitle}>{item.name}</h3>
            <span className={Styles.itemTxt}>
              <p className={Styles.cartName}>£{item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </span>
            <button
              className={Styles.btnAdd}
              onClick={() => increaseQuantity(index)}
            >
              +
            </button>
            <button
              classNAme={Styles.btnSub}
              onClick={() => decreaseQuantity(index)}
            >
              -
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Cart() {
  return (
    <Suspense>
      <CartComponent />
    </Suspense>
  );
}
