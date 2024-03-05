import styles from "./page.module.css";
import Link from "next/link";

function Home() {
  return (
    <main className={styles.container}>
      <Link className={styles.txt} href="/shop">
        <button className={styles.shopBtn}>BROWSE</button>
      </Link>
    </main>
  );
}

export default Home;
