'use client';

import styles from './EventsSection.module.css';
import { useEffect, useState } from 'react';
import useTranslation from '@/hooks/useTranslation';

const events = [
  { key: 'paris', date: '2025-10-10' },
  { key: 'lebanon', date: '2025-08-15' },
  { key: 'global', date: '2025-07-01' }
];

function formatDate(dateStr) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Intl.DateTimeFormat('en-GB', options).format(new Date(dateStr));
}

export default function EventsSection() {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{t('events.title')}</h2>
      <div className={styles.grid}>
        {events.map((event, index) => (
          <div key={index} className={styles.card}>
            <h3>{t(`events.items.${event.key}.title`)}</h3>
            <p className={styles.date}>{formatDate(event.date)}</p>
            <p className={styles.location}>📍 {t(`events.items.${event.key}.location`)}</p>
            <p className={styles.description}>{t(`events.items.${event.key}.description`)}</p>
            <button
              onClick={() => alert("12")}
              className={styles.cta}
            >
              {t(`events.items.${event.key}.action`)}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
