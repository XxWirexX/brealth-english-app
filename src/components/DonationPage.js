'use client';

import styles from './DonationPage.module.css';
import { useState } from 'react';

export default function DonationPage() {
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('once');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your ${type === 'monthly' ? 'monthly' : 'one-time'} donation of €${amount}! 💖`);
  };

  return (
    <section className={styles.donationSection}>
      <h1 className={styles.title}>Support our mission</h1>
      <p className={styles.intro}>Every donation helps us reach more people in need of mental health support. Choose how you'd like to contribute:</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Amount (€)
          <input
            type="number"
            min="1"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>

        <label>
          Donation type
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="once">One-time</option>
            <option value="monthly">Monthly</option>
          </select>
        </label>

        <button type="submit">Donate now</button>
      </form>

      <div className={styles.info}>
        <h2>Why give to Brealth?</h2>
        <ul>
          <li>📍 We operate in over 6 countries</li>
          <li>👩‍⚕️ 12 field psychologists worldwide</li>
          <li>🧠 Mental health is a right, not a privilege</li>
        </ul>
      </div>
    </section>
  );
} 
