'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './HeroSlider.module.css';
import useTranslation from '../hooks/useTranslation';

export default function HeroSlider() {
  const { t } = useTranslation();

  const slides = [
    {
      title: t('home.hero.title1'),
      text: t('home.hero.text1'),
      image: '/img/slide1.jpg',
    },
    {
      title: t('home.hero.title2'),
      text: t('home.hero.text2'),
      image: '/img/slide2.jpg',
    },
    {
      title: t('home.hero.title3'),
      text: t('home.hero.text3'),
      image: '/img/slide3.jpg',
    },
  ];

  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  function startTimer() {
    return setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
  }

  function handleManualSelect(index) {
    setCurrent(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = startTimer();
  }

  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${slides[current].image})` }}
    >
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.slider}>
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`${styles.slide} ${i === current ? styles.active : ''}`}
            >
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>
              <div className={styles.buttons}>
                <button onClick={() => window.location.href="/donation"} className={styles.primary}>{t('home.hero.donate')}</button>
                <button onClick={() => window.location.href="/projects"} className={styles.secondary}>{t('home.hero.discover')}</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.dots}>
        {slides.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => handleManualSelect(i)}
          ></span>
        ))}
      </div>

      <a href="#mission" className={styles.afterBtn}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
             fill="currentColor" viewBox="0 0 24 24">
          <path d="m12 15.41 5.71-5.7-1.42-1.42-4.29 4.3-4.29-4.3-1.42 1.42z"></path>
        </svg>
      </a>
    </section>
  );
}
