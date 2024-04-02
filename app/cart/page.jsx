"use client";
import React from "react";
import Styles from "./page.module.css";
import Image from "next/image";
import { useCart } from "../cartContext";

const CartComponent = () => {
  const { items, removeFromCart, incrementQuantity, decrementQuantity } =
    useCart();

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
            alt={item.title}
            width={100}
            height={100}
            priority
          />
          <div className={Styles.itemDetails}>
            <div className={Styles.titleAndPrice}>
              <h3 className={Styles.cartTitle}>
                {item.title.substring(0, 20)}
              </h3>
              <p className={Styles.cartPrice}>
                ${(item.price * item.quantity).toFixed(2)}
              </p>{" "}
              {/* Display total price */}
            </div>
            <p>Quantity: {item.quantity}</p>
            <div className={Styles.cartBtns}>
              <button
                className={Styles.quantityBtn}
                onClick={() => incrementQuantity(item.id)}
              >
                +
              </button>
              <button
                className={Styles.quantityBtn}
                onClick={() => decrementQuantity(item.id)}
              >
                -
              </button>
              <button
                className={Styles.removeBtn}
                onClick={() => removeFromCart(item.id)}
              >
                X
              </button>
            </div>
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
