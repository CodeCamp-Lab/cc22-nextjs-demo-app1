import { use } from "react";
import styles from "./page.module.css";
import Link from "next/link";

type ProductDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = use(params);

  const products = [
    {
      id: 1,
      name: "Modern Desk Lamp",
      price: 1200,
      description: "A sleek and energy-efficient lamp for your workspace.",
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      price: 3500,
      description: "Tactile and responsive keyboard for developers and gamers.",
    },
    {
      id: 3,
      name: "Wireless Mouse",
      price: 1500,
      description: "Ergonomic design with long battery life.",
    },
    {
      id: 4,
      name: "USB-C Hub",
      price: 890,
      description: "7-in-1 connectivity for all your peripherals.",
    },
  ];

  const product = products.find((p) => p.id === +id);

  if (!product) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Product Not Found</h1>
        <Link href="/products" className={styles.backLink}>
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Link href="/products" className={styles.backLink}>
        Back to Products
      </Link>
      <div className={styles.detailCard}>
        <div className={styles.badge}>Product ID: {product.id}</div>
        <h1 className={styles.title}>{product.name}</h1>
        <p className={styles.price}>{product.price.toLocaleString()} THB</p>
        <div className={styles.divider}></div>
        <div className={styles.description}>{product.description}</div>
        <button className={styles.buyButton}>Add to Cart</button>
      </div>
    </div>
  );
}
