import React from "react";
import Styles from "./page.module.css";
import posts from "../data";
import Image from "next/image";

const Shop = () => {
  return (
    <main className={Styles.shopContainer}>
      {posts.map((post) => (
        <div key={post.id} className={Styles.card}>
          <Image
            className="imgCard"
            src={post.image}
            alt={post.name}
            width={450}
            height={600}
            sizes="100vw"
          />
          <h2>{post.name}</h2>
          <p>Price: ${post.price}</p>
          <button className={Styles.btn}>Add to Cart</button>
        </div>
      ))}
    </main>
  );
};

export default Shop;
