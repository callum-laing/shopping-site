import React from "react";
import Styles from "./page.module.css";
import posts from "../data";

const Shop = () => {
  return (
    <main className={Styles.shopContainer}>
      {posts.map((post) => (
        <div key={post.id} className={Styles.card}>
          <img className="imgCard" src={`/cleats.jpg`} alt={post.name} />
          <h2>{post.name}</h2>
          <p>Price: ${post.price}</p>
          <button className={Styles.btn}>Add to Cart</button>
        </div>
      ))}
    </main>
  );
};

export default Shop;
