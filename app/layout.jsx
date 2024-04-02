import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import { CartProvider } from "./cartContext"; // Adjust the path as necessary

export const metadata = {
  title: "Shopping Site",
  description: "Created using NextJS",
};

export default function RootLayout({ children }) {
  return (
    <CartProvider>
      <html lang="en">
        <body>
          <div id="app">
            <Navbar />
            {children}
          </div>
        </body>
      </html>
    </CartProvider>
  );
}
