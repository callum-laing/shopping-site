import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import Logo from "../Navbar/shopping-cart.png";

export default function Navbar() {
  return (
    <div className={styles.header}>
      <div>
        <h1 className={styles.title}>Shopping Cart</h1>
      </div>

      <nav className={styles.nav}>
        <Link className={styles.txt} href="/">
          Home
        </Link>
        <Link className={styles.txt} href="/shop">
          Shop
        </Link>
        <Link className={styles.txt} href="/about">
          About Us
        </Link>
      </nav>

      <Link href="/cart">
        <button className={styles.shoppingCart}>
          <span>
            <Image src={Logo} alt="cart logo" />
          </span>
        </button>
      </Link>
    </div>
  );
}
