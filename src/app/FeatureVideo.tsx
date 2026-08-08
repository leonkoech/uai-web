'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';

interface FeatureVideoProps {
  src: string;
  poster: string;
  title: string;
}

export default function FeatureVideo({ src, poster, title }: FeatureVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '600px 0px' }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.featureRow}>
      <div className={styles.featureVideoWrapper}>
        <video
          ref={videoRef}
          className={styles.featureVideo}
          poster={poster}
          muted
          loop
          autoPlay={shouldLoad}
          playsInline
          preload="none"
          src={shouldLoad ? src : undefined}
        />
        <div className={styles.videoOverlay} />
        <h3 className={styles.featureCaption}>{title}</h3>
      </div>
    </div>
  );
}
