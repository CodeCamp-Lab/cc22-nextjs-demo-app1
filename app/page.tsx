import styles from "./page.module.css";
import Image from "next/image";

export default function HomePage() {

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          Welcome to <span>Next.js</span>
        </h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          dolore quidem aut commodi asperiores, officia est, architecto
          perspiciatis aliquam totam debitis temporibus ipsa? Aspernatur est,
          itaque soluta illo iure excepturi?
        </p>
        <div className="text-left">
          Image - Next.js
          <Image src="/images/866-536x354.jpg" width={300} height={0} alt="" /><br/>
          HTML5
          <img src="/images/866-536x354.jpg" width={300} height={0} alt="" />
        </div>
      </div>
    </section>
  );
}
