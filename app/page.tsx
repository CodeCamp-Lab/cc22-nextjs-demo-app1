import styles from "./page.module.css";

export default function HomePage() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          Welcome to <span>Next.js</span>
        </h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolore quidem aut commodi asperiores, officia est, architecto perspiciatis aliquam totam debitis temporibus ipsa? Aspernatur est, itaque soluta illo iure excepturi?
        </p>
      </div>
    </section>
  );
}
