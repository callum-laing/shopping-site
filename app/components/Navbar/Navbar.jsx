import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
});

export default function Navbar() {
  return (
    <div className={styles.header}>
      <div>
        <h1 className={dancingScript.className}>Anglian</h1>
      </div>

      <nav className={styles.nav}>
        <Link className={styles.txt} href="/">
          Home
        </Link>
        <Link className={styles.txt} href="/shop">
          Shop
        </Link>
        <Link className={styles.txt} href="/cart">
          Cart
        </Link>
      </nav>
    </div>
  );
}
