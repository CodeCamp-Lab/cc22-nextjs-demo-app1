import styles from "./page.module.css";
import Link from "next/link";

export default function ProductsPage() {
  const products = [
    { id: 1, name: "Modern Desk Lamp", price: 1200 },
    { id: 2, name: "Mechanical Keyboard", price: 3500 },
    { id: 3, name: "Wireless Mouse", price: 1500 },
    { id: 4, name: "USB-C Hub", price: 890 },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Products</h1>
      <p className={styles.subtitle}>Discover products.</p>
      <div className={styles.grid}>
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className={`group ${styles.card}`}
          >
            <div key={product.id} className={styles.cardContent}>
              <h2 className={styles.productName}>{product.name}</h2>
              <p className={styles.productPrice}>
                {product.price.toLocaleString()} THB
              </p>
              <span className={styles.viewDetail}>View Details</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
