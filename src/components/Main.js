'use client';

import styles from './Main.module.css';
import HeroSlider from './HeroSlider';
import useTranslation from '../lib/useTranslation';

export default function Main() {
  const { t } = useTranslation();

  return (
    <main className={styles.main}>
      <HeroSlider />

      {/* Section Notre Mission */}
      <section id="mission" className={`${styles.section} ${styles.alt}`}>
        <div className={styles.container}>
          <h2 className={styles.title}>{t('main.mission.title')}</h2>
          <p className={styles.text}>{t('main.mission.p1')}</p>
          <p className={styles.text}>{t('main.mission.p2')}</p>
          <button className={styles.button}>{t('main.mission.cta')}</button>
        </div>
      </section>

      {/* Section Nos Actions */}
      <section id="actions" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.title}>{t('main.actions.title')}</h2>
          <p className={styles.text}>{t('main.actions.intro')}</p>

          <div className={styles.actionGrid}>
            <div className={styles.actionCard}>
              <h3>{t('main.actions.card1.title')}</h3>
              <p>{t('main.actions.card1.text')}</p>
            </div>
            <div className={styles.actionCard}>
              <h3>{t('main.actions.card2.title')}</h3>
              <p>{t('main.actions.card2.text')}</p>
            </div>
            <div className={styles.actionCard}>
              <h3>{t('main.actions.card3.title')}</h3>
              <p>{t('main.actions.card3.text')}</p>
            </div>
          </div>

          <p className={styles.text}>{t('main.actions.stats')}</p>
          <button className={styles.button}>{t('main.actions.cta')}</button>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className={`${styles.section} ${styles.alt}`}>
        <div className={styles.container}>
          <h2 className={styles.title}>{t('main.testimonials.title')}</h2>

          <div className={styles.testimonialGrid}>
            <div className={styles.testimonial}>
              <p>{t('main.testimonials.t1.text')}</p>
              <span>{t('main.testimonials.t1.author')}</span>
            </div>
            <div className={styles.testimonial}>
              <p>{t('main.testimonials.t2.text')}</p>
              <span>{t('main.testimonials.t2.author')}</span>
            </div>
            <div className={styles.testimonial}>
              <p>{t('main.testimonials.t3.text')}</p>
              <span>{t('main.testimonials.t3.author')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section Nous Aider */}
      <section id="aider" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.title}>{t('main.help.title')}</h2>
          <p className={styles.text}>{t('main.help.intro')}</p>

          <ul className={styles.list}>
            <li>{t('main.help.item1')}</li>
            <li>{t('main.help.item2')}</li>
            <li>{t('main.help.item3')}</li>
            <li>{t('main.help.item4')}</li>
            <li>{t('main.help.item5')}</li>
          </ul>

          <p className={styles.text}>{t('main.help.conclusion')}</p>

          <div className={styles.donationButtons}>
            <button className={styles.button}>{t('main.help.donate')}</button>
            <button className={`${styles.button} ${styles.secondary}`}>{t('main.help.volunteer')}</button>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className={`${styles.section} ${styles.alt}`}>
        <div className={styles.container}>
          <h2 className={styles.title}>{t('main.contact.title')}</h2>
          <p className={styles.text}>{t('main.contact.intro')}</p>

          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <h3>{t('main.contact.headquarters')}</h3>
              <p>{t('main.contact.address')}</p>
            </div>
            <div className={styles.contactItem}>
              <h3>{t('main.contact.phoneTitle')}</h3>
              <p>{t('main.contact.phone')}</p>
            </div>
            <div className={styles.contactItem}>
              <h3>{t('main.contact.emailTitle')}</h3>
              <p>{t('main.contact.email')}</p>
            </div>
          </div>

          <form className={styles.contactForm}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name">{t('main.contact.form.name')}</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">{t('main.contact.form.email')}</label>
                <input type="email" id="email" name="email" required />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject">{t('main.contact.form.subject')}</label>
              <input type="text" id="subject" name="subject" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">{t('main.contact.form.message')}</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>

            <button type="submit" className={styles.button}>{t('main.contact.form.submit')}</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <img src="/img/logo.png" alt="Brealth" className={styles.footerLogoImg} />
            <h3>Brealth</h3>
            <p>{t('main.footer.slogan')}</p>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h4>{t('footer.about')}</h4>
              <ul>
                <li><a href="#mission">{t('footer.our_mission')}</a></li>
                <li><a href="#actions">{t('footer.our_actions')}</a></li>
                <li><a href="#">{t('footer.our_team')}</a></li>
                <li><a href="#">{t('footer.annual_reports')}</a></li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h4>{t('footer.support_us')}</h4>
              <ul>
                <li><a href="#aider">{t('footer.become_volunteer')}</a></li>
                <li><a href="#aider">{t('footer.donate')}</a></li>
                <li><a href="#">{t('footer.partnerships')}</a></li>
                <li><a href="#">{t('footer.legacy')}</a></li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h4>{t('footer.follow_us')}</h4>
              <div className={styles.socialLinks}>
                {/* Tes icônes SVG de réseaux ici */}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2025 Brealth. {t('footer.rights')}</p>
          <div className={styles.footerBottomLinks}>
            <a href="#">{t('footer.privacy_policy')}</a>
            <a href="#">{t('footer.legal_notice')}</a>
            <a href="#">{t('footer.accessibility')}</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
