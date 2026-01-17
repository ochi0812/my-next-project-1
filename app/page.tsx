import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.top}>
      <div>
        <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
        <p className={styles.description}>
          私たちは市場をリードしているグローバルテックカンパニーです。
        </p>
      </div>
      <Image
        className={styles.bgImg}
        src="/img-moveBy.jpg"
        alt="背景画像"
        width={1200}
        height={400}
      />
    </section>
  );
}
