'use client';

import useTranslation from '@/lib/useTranslation';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useTranslation();

  return (
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
  );
}
