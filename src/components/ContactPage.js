'use client';

import styles from './ContactPage.module.css';
import dynamic from 'next/dynamic';

const LeafletMap = dynamic(() => import('@/components/MapHQ'), { ssr: false });

export default function ContactPage() {
  return (
    <section className={styles.contactSection}>
      <h1 className={styles.title}>Contact us</h1>
      <p className={styles.intro}>Have questions or want to know more? We’re here to listen.</p>

      <form className={styles.form}>
        <label>
          Name
          <input type="text" name="name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Subject
          <input type="text" name="subject" required />
        </label>
        <label>
          Message
          <textarea name="message" rows="5" required></textarea>
        </label>
        <button type="submit">Send</button>
      </form>

      <div className={styles.infoBlock}>
        <h3>Headquarters</h3>
        <p>25 Rue de la Paix<br />75002 Paris, France</p>
        <p><strong>Phone:</strong> +33 (0)1 45 67 89 10</p>
        <p><strong>Email:</strong> contact@brealth.org</p>
      </div>

      <div className={styles.mapBlock}>
        <LeafletMap />
      </div>

      <div className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faqItem}>
          <h4>Can I become a volunteer?</h4>
          <p>Absolutely! Visit our “Help Us” page to learn how you can contribute as a volunteer or professional.</p>
        </div>
        <div className={styles.faqItem}>
          <h4>Are donations tax-deductible?</h4>
          <p>Yes, in many countries your donation to Brealth can be deducted. Contact us for documentation.</p>
        </div>
        <div className={styles.faqItem}>
          <h4>Where does my money go?</h4>
          <p>Funds support field missions, local professional training, and free psychological care services.</p>
        </div>
      </div>
    </section>
  );
} 
