"use client";
import React from "react";
import Styles from "./page.module.css";
import Image from "next/image";
import { useCart } from "../cartContext";

const CartComponent = () => {
  const { items, removeFromCart, incrementQuantity, decrementQuantity } =
    useCart();

  // Calculate total price
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className={Styles.cartContainer}>
      {items.map((item) => (
        <div className={Styles.cartItem} key={item.id}>
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
              <p className={Styles.cartPrice}>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => incrementQuantity(item.id)}>+</button>
              <button onClick={() => decrementQuantity(item.id)}>-</button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </span>
          </div>
        </div>
      ))}
      <div className={Styles.total}>
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default CartComponent;
