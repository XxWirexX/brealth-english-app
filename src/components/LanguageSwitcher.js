'use client';

import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
  const { locale, pathname, asPath, query } = useRouter();

  const languages = ['fr', 'en'];

  return (
    <div className={styles.switcher}>
      {languages.map((lng) => (
        <Link
          key={lng}
          href={{ pathname, query }}
          as={asPath}
          locale={lng}
          scroll={false}
        >
          <button
            className={`${styles.button} ${
              locale === lng ? styles.active : ''
            }`}
          >
            {lng.toUpperCase()}
          </button>
        </Link>
      ))}
    </div>
  );
}
