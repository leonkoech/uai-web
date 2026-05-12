'use client';

import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.hero}>
      <Image
        src="/IMG_9289.jpeg"
        alt=""
        fill
        priority
        sizes="100vw"
        className={styles.bgImage}
      />
      <div className={styles.overlay} />

      <header className={styles.header}>
        <a href="mailto:tim@uai.tech" className={styles.contactLink}>
          Contact
        </a>
      </header>

      <div className={styles.content}>
        <Image
          src="/Uspaces.png"
          alt="USpaces"
          width={240}
          height={240}
          priority
          className={styles.logo}
        />
        <h1 className={styles.tagline}>
          Real-Time <span className={styles.highlight}>Intelligent Spaces.</span>
        </h1>
      </div>
    </main>
  );
}
