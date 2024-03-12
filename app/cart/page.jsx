// Server SIDE ONLY
// import React from "react";
// import posts from "../data";

// export default function Cart({ searchParams }) {
//   console.log(searchParams.id); // Logs post.id value from url
//   const id = searchParams.id;
//   const item = posts.filter((post) => post.id !== id);
//   console.log(item);

//   return (
//     <div>
//       <h2>Please proceed to give me your card details!</h2>
//       <p>
//         {item[0].id}
//         {item[0].name}
//         {item[0].price}
//         {item[0].image}
//       </p>
//     </div>
//   );
// }

//client SIDE ONLY
"use client";
import posts from "../data";
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const Cart = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [items, setItems] = useState(() =>
    JSON.parse(localStorage.getItem("items") || "[]")
  );

  useEffect(() => {
    const newItem = posts.find((item) => item.id === parseInt(id));

    if (newItem) {
      return () => {
        setItems((prevItems) => [...prevItems, newItem]);
        localStorage.setItem("items", JSON.stringify([...items, newItem]));
      };
    }
  }, []);

  return (
    <div>
      <h2>Please proceed to give me your card details!</h2>
      {items.map((item, index) => (
        <div key={index}>
          {item.id}
          {item.name}
          {item.price}
          {item.image}
        </div>
      ))}
    </div>
  );
};

export default Cart;
