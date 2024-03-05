import React from "react";
import Card from "../components/Card";
import Styles from "./page.module.css";
import posts from "../data";

const Shop = () => {
  return (
    <main className={Styles.shopContainer}>
      <div className={Styles.cards}>
        {posts.map((post) => (
          <Card key={post.id} {...post} />
        ))}
      </div>
    </main>
  );
};

export default Shop;
