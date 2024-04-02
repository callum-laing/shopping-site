import styles from "./page.module.css";
import Link from "next/link";

function Home() {
  return (
    <main className={styles.container}>
      <div>
        <h2 className={styles.introTxt}>
          Discover trendy fashion with a single click!
        </h2>
        <Link className={styles.txt} href="/shop">
          <button className={styles.shopBtn}>SHOP NOW</button>
        </Link>
      </div>
    </main>
  );
}

export default Home;
