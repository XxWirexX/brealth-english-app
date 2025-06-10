'use client';

import styles from './Header.module.css';
import { useEffect, useState } from 'react';
import useTranslation from '../lib/useTranslation';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight * 0.85;

      if (scrolled > viewportHeight) {
        document.documentElement.style.setProperty('--text-color', '#2b2b2b');
        setScrolled(true);
      } else {
        document.documentElement.style.setProperty('--text-color', '#fff');
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.active : ''}`}>
      <div className={styles.title}>
        <img src="/img/logo.png" alt="Logo" className={styles.logo} />
      </div>

      <nav className={styles.navbar}>
        <ul className={styles['navbar-nav']}>
          <li className={styles['nav-item']}>
            <a href="#mission" className={styles['nav-link']}>
              {t('header.mission')}
            </a>
          </li>
          <li className={styles['nav-item']}>
            <a href="#actions" className={styles['nav-link']}>
              {t('header.actions')}
            </a>
          </li>
          <li className={styles['nav-item']}>
            <a href="#aider" className={styles['nav-link']}>
              {t('header.help')}
            </a>
          </li>
          <li className={styles['nav-item']}>
            <a href="#contact" className={styles['nav-link']}>
              {t('header.contact')}
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.rightSide}>
        <button className={styles['donation-btn']}>{t('header.donate')}</button>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
