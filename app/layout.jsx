import "./globals.css";

// components
import Navbar from "./components/Navbar/Navbar.jsx";

export const metadata = {
  title: "Shopping Site",
  description: "Created using NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
