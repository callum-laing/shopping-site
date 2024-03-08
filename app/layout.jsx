import "./globals.css";
// import { createContext } from "react";

// components
import Navbar from "./components/Navbar/Navbar.jsx";

export const metadata = {
  title: "Shopping Site",
  description: "Created using NextJS",
};

// const cartContext = createContext("cart");

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="app">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
