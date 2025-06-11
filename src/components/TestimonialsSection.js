'use client';

import styles from './TestimonialsSection.module.css';
import useTranslation from '@/hooks/useTranslation';

export default function TestimonialsSection() {
  const { t } = useTranslation();

  const testimonials = [
    { key: 'maria' },
    { key: 'ahmed' },
    { key: 'fatima' }
  ];

  return (
    <section className={styles.testimonials}>
      <h2 className={styles.title}>{t('testimonials.title')}</h2>
      <div className={styles.grid}>
        {testimonials.map((tItem, i) => (
          <div key={i} className={styles.card}>
            <p className={styles.quote}>“{t(`testimonials.items.${tItem.key}.text`)}”</p>
            <p className={styles.author}>— {t(`testimonials.items.${tItem.key}.author`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
