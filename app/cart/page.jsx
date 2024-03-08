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
  const id = searchParams.id;

  const [items, setItems] = useState(posts);

  useEffect(() => {
    const newItem = items.filter((item) => item.id === id);
    setItems(newItem);
  }, []);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items"));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div>
      <h2>Please proceed to give me your card details!</h2>
      <p>
        {items.map((item) => (
          <div key={item.id}>
            {item.id}
            {item.name}
            {item.price}
            {item.image}
          </div>
        ))}
      </p>
    </div>
  );
};

export default Cart;
