import React from "react";
import Styles from "../shop/page.module.css";
import posts from "../data";

const Shop = () => {
  return (
    <main className={Styles.shopContainer}>
      <div className={Styles.cards}>
        {posts.map((post) => (
          <div key={post.id} className={Styles.card}>
            <img className="imgCard" src={`/cleats.jpg`} alt={post.name} />
            <h2>{post.name}</h2>
            <p>${post.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Shop;
