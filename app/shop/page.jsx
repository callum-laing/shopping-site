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
  const [hoveredProductId, setHoveredProductId] = useState(null);

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

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main className={Styles.shopContainer}>
      {products.map((product) => (
        <div
          key={product.id}
          className={Styles.card}
          onMouseEnter={() => setHoveredProductId(product.id)}
          onMouseLeave={() => setHoveredProductId(null)}
        >
          <div className={Styles.imageContainer}>
            <Image
              className={Styles.imgCard}
              src={product.image}
              alt={product.title}
              width={250}
              height={300}
              sizes="100vw"
            />
            {hoveredProductId === product.id && (
              <button
                className={Styles.addToCartBtn}
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            )}
          </div>
          <h2 className={Styles.itemName}>{product.title}</h2>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </main>
  );
};

export default Shop;
