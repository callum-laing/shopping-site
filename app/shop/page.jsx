import React from "react";
import Styles from "./page.module.css";
import posts from "../data";
import Image from "next/image";
import Link from "next/link";

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
          <Link
            href={{
              pathname: "/cart",
              query: {
                id: post.id,
                name: post.name,
                price: post.price,
                image: post.image,
              },
            }}
          >
            Add to cart
          </Link>
        </div>
      ))}
    </main>
  );
};

export default Shop;
