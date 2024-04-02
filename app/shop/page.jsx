"use client";
import React, { useState, useEffect } from "react";
import Styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { fetchProducts } from "../data";
import { useCart } from "../cartContext";

const Shop = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts({ limit: 10 });
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main className={Styles.shopContainer}>
      {products.map((product) => (
        <div key={product.id} className={Styles.card}>
          <Image
            className="imgCard"
            src={product.image}
            alt={product.title}
            width={450}
            height={600}
            sizes="100vw"
          />
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      ))}
    </main>
  );
};

export default Shop;
