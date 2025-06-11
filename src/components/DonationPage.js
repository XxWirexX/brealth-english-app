'use client';

import styles from './DonationPage.module.css';
import { useState } from 'react';
import useTranslation from '@/hooks/useTranslation';

export default function DonationPage() {
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('once');
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      t('donation.alert')
        .replace('{type}', t(`donation.types.${type}`))
        .replace('{amount}', amount)
    );
  };

  return (
    <section className={styles.donationSection}>
      <h1 className={styles.title}>{t('donation.title')}</h1>
      <p className={styles.intro}>{t('donation.intro')}</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          {t('donation.form.amount')}
          <input
            type="number"
            min="1"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>

        <label>
          {t('donation.form.type')}
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="once">{t('donation.types.once')}</option>
            <option value="monthly">{t('donation.types.monthly')}</option>
          </select>
        </label>

        <button type="submit">{t('donation.form.submit')}</button>
      </form>

      <div className={styles.info}>
        <h2>{t('donation.why.title')}</h2>
        <ul>
          <li>{t('donation.why.point1')}</li>
          <li>{t('donation.why.point2')}</li>
          <li>{t('donation.why.point3')}</li>
        </ul>
      </div>
    </section>
  );
}
