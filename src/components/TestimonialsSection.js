'use client';

import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    name: 'Maria, Nepal',
    quote: 'After the earthquake, I was completely lost. Brealth’s psychologists helped me regain a sense of safety and manage my trauma. Their presence was key to my recovery.'
  },
  {
    name: 'Ahmed, Lebanon',
    quote: 'The Brealth center in our refugee camp is a peaceful haven. Thanks to their support, we regained hope despite our difficult situation.'
  },
  {
    name: 'Fatima, Mali',
    quote: 'As a psychologist trained by Brealth, I now have the skills needed to help my own community. This knowledge transfer is invaluable to our region.'
  }
];

export default function TestimonialsSection() {
  return (
    <section className={styles.testimonials}>
      <h2 className={styles.title}>Voices from the field</h2>
      <div className={styles.grid}>
        {testimonials.map((t, i) => (
          <div key={i} className={styles.card}>
            <p className={styles.quote}>“{t.quote}”</p>
            <p className={styles.author}>— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
