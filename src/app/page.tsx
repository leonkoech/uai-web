'use client';

import Image from 'next/image';
import styles from './page.module.css';
import FeatureVideo from './FeatureVideo';

const features = [
  {
    title: 'Autonomous Scorekeeping',
    src: '/videos/autonomous-scorekeeping.mp4',
    poster: '/videos/autonomous-scorekeeping.jpg',
  },
  {
    title: 'Automated Social Feed',
    src: '/videos/automated-social-feed.mp4',
    poster: '/videos/automated-social-feed.jpg',
  },
  {
    title: 'Real-time Stats & Analysis',
    src: '/videos/realtime-stats-analysis.mp4',
    poster: '/videos/realtime-stats-analysis.jpg',
  },
  {
    title: 'Live Broadcast',
    src: '/videos/live-broadcast.mp4',
    poster: '/videos/live-broadcast.jpg',
  },
  {
    title: 'Voice Commands',
    src: '/videos/voice-commands.mp4',
    poster: '/videos/voice-commands.jpg',
  },
];

export default function Home() {
  return (
    <>
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
        <a href="mailto:info@uspaces.com" className={styles.contactLink}>
          Contact
        </a>
      </header>

      <div className={styles.content}>
        <Image
          src="/Universe by UAI Logo.png"
          alt="Universe by UAI"
          width={1317}
          height={576}
          priority
          className={styles.logoLockup}
        />
        <h1 className={styles.tagline}>
          A <span className={styles.highlight}>Spatial AI</span> revolutionizing sports production.
        </h1>
      </div>
    </main>

    <section className={styles.features}>
      {features.map((feature) => (
        <FeatureVideo
          key={feature.title}
          src={feature.src}
          poster={feature.poster}
          title={feature.title}
        />
      ))}
    </section>
    </>
  );
}
