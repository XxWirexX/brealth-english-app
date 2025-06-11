'use client';

import styles from './Main.module.css';
import HeroSlider from './HeroSlider';
import useTranslation from '../hooks/useTranslation';

export default function Main() {
  const { t } = useTranslation();

  return (
    <main className={styles.main}>
      <HeroSlider />

      {/* Section Notre Mission */}
      <section id="mission" className={`${styles.section} ${styles.alt}`}>
        <div className={styles.container}>
          <h2 className={styles.title}>{t('home.main.mission.title')}</h2>
          <p className={styles.text}>{t('home.main.mission.p1')}</p>
          <p className={styles.text}>{t('home.main.mission.p2')}</p>
          <a href="mission" className={styles.button}>{t('home.main.mission.cta')}</a>
        </div>
      </section>

      {/* Section Nos Actions */}
      <section id="actions" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.title}>{t('home.main.actions.title')}</h2>
          <p className={styles.text}>{t('home.main.actions.intro')}</p>

          <div className={styles.actionGrid}>
            <div className={styles.actionCard}>
              <h3>{t('home.main.actions.card1.title')}</h3>
              <p>{t('home.main.actions.card1.text')}</p>
            </div>
            <div className={styles.actionCard}>
              <h3>{t('home.main.actions.card2.title')}</h3>
              <p>{t('home.main.actions.card2.text')}</p>
            </div>
            <div className={styles.actionCard}>
              <h3>{t('home.main.actions.card3.title')}</h3>
              <p>{t('home.main.actions.card3.text')}</p>
            </div>
          </div>

          <p className={styles.text}>{t('home.main.actions.stats')}</p>
          <a href="mission" className={styles.button}>{t('home.main.projects.cta')}</a>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className={`${styles.section} ${styles.alt}`}>
        <div className={styles.container}>
          <h2 className={styles.title}>{t('home.main.testimonials.title')}</h2>

          <div className={styles.testimonialGrid}>
            <div className={styles.testimonial}>
              <p>{t('home.main.testimonials.t1.text')}</p>
              <span>{t('home.main.testimonials.t1.author')}</span>
            </div>
            <div className={styles.testimonial}>
              <p>{t('home.main.testimonials.t2.text')}</p>
              <span>{t('home.main.testimonials.t2.author')}</span>
            </div>
            <div className={styles.testimonial}>
              <p>{t('home.main.testimonials.t3.text')}</p>
              <span>{t('home.main.testimonials.t3.author')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section Nous Aider */}
      <section id="aider" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.title}>{t('home.main.help.title')}</h2>
          <p className={styles.text}>{t('home.main.help.intro')}</p>

          <ul className={styles.list}>
            <li>{t('home.main.help.item1')}</li>
            <li>{t('home.main.help.item2')}</li>
            <li>{t('home.main.help.item3')}</li>
            <li>{t('home.main.help.item4')}</li>
            <li>{t('home.main.help.item5')}</li>
          </ul>

          <p className={styles.text}>{t('home.main.help.conclusion')}</p>

          <div className={styles.donationButtons}>
            <a href="donate" className={styles.button}>{t('home.main.help.donate')}</a>
            <button onClick={() => alert("12")} className={`${styles.button} ${styles.secondary}`}>{t('home.main.help.volunteer')}</button>
          </div>
        </div>
      </section>
    </main>
  );
}
