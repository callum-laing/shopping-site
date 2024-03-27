"use client";
import React, { useState, useEffect } from "react";
import Styles from "./page.module.css";
import Image from "next/image";

const CartComponent = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedItems = JSON.parse(localStorage.getItem("items")) || [];
        const products = storedItems.map((item) => JSON.parse(item.product));
        setItems(products);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchData();
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
          <Image
            className={Styles.cartImage}
            src={item.image}
            alt={item.name}
            width={100}
            height={100}
            priority
          />
          <div className={Styles.itemDetails}>
            <h3 className={Styles.cartTitle}>{item.name}</h3>
            <span className={Styles.itemTxt}>
              <p className={Styles.cartPrice}>£{item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </span>
            <button
              className={Styles.btnAdd}
              onClick={() => increaseQuantity(index)}
            >
              +
            </button>
            <button
              className={Styles.btnSub}
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

export default CartComponent;
