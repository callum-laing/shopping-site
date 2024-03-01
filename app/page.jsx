import styles from "./page.module.css";

function Home() {
  return (
    <main className={styles.container}>
      <img className={styles.shopImg} src="/shop.jpg" alt="shop front image" />
    </main>
  );
}

export default Home;
