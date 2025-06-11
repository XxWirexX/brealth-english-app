'use client'; // Si jamais tu veux l'utiliser côté client exclusivement (optionnel ici)

import styles from './ContactPage.module.css';
import dynamic from 'next/dynamic';
import useTranslation from '@/hooks/useTranslation';

const LeafletMap = dynamic(() => import('@/components/MapHQ'), { ssr: false });

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <section className={styles.contactSection}>
      <h1 className={styles.title}>{t('contact.title')}</h1>
      <p className={styles.intro}>{t('contact.intro')}</p>

      <form className={styles.form}>
        <label>
          {t('contact.form.name')}
          <input type="text" name="name" required />
        </label>
        <label>
          {t('contact.form.email')}
          <input type="email" name="email" required />
        </label>
        <label>
          {t('contact.form.subject')}
          <input type="text" name="subject" required />
        </label>
        <label>
          {t('contact.form.message')}
          <textarea name="message" rows="5" required></textarea>
        </label>
        <button type="submit">{t('contact.form.submit')}</button>
      </form>

      <div className={styles.infoBlock}>
        <h3>{t('contact.headquarters')}</h3>
        <p>{t('contact.address')}</p>
        <p><strong>{t('contact.phoneTitle')}:</strong> {t('contact.phone')}</p>
        <p><strong>{t('contact.emailTitle')}:</strong> {t('contact.email')}</p>
      </div>

      <div className={styles.mapBlock}>
        <LeafletMap />
      </div>

      <div className={styles.faqSection}>
        <h2>{t('contact.faq.title')}</h2>

        <div className={styles.faqItem}>
          <h4>{t('contact.faq.q1.title')}</h4>
          <p>{t('contact.faq.q1.answer')}</p>
        </div>
        <div className={styles.faqItem}>
          <h4>{t('contact.faq.q2.title')}</h4>
          <p>{t('contact.faq.q2.answer')}</p>
        </div>
        <div className={styles.faqItem}>
          <h4>{t('contact.faq.q3.title')}</h4>
          <p>{t('contact.faq.q3.answer')}</p>
        </div>
      </div>
    </section>
  );
}
