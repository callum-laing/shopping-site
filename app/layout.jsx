export const metadata = {
  title: "Shopping Site",
  description: "Created using NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
