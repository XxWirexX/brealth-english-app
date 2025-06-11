'use client';

import useTranslation from '@/hooks/useTranslation';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <img src="/img/logo.png" alt="Brealth" className={styles.footerLogoImg} />
            <h3>Brealth</h3>
            <p>{t('common.main.footer.slogan')}</p>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h4>{t('common.footer.about')}</h4>
              <ul>
                <li><a href="/">{t('common.footer.home')}</a></li>
                <li><a href="mission">{t('common.footer.our_mission')}</a></li>
                <li><a href="projects">{t('common.footer.projects')}</a></li>
                <li><a href="contact">{t('common.footer.contact')}</a></li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h4>{t('common.footer.support_us')}</h4>
              <ul>
                <li><a onClick={(e) => {e.preventDefault(); alert("12")}}>{t('common.footer.become_volunteer')}</a></li>
                <li><a href="donation">{t('common.footer.donate')}</a></li>
                <li><a onClick={(e) => {e.preventDefault(); alert("12")}}>{t('common.footer.partnerships')}</a></li>
                <li><a onClick={(e) => {e.preventDefault(); alert("12")}}>{t('common.footer.legacy')}</a></li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h4>{t('common.footer.follow_us')}</h4>
              <div className={styles.socialLinks}>
                {/* Tes icônes SVG de réseaux ici */}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2025 Brealth. {t('common.footer.rights')}</p>
          <div className={styles.footerBottomLinks}>
            <a onClick={(e) => {e.preventDefault(); alert("12")}}>{t('common.footer.privacy_policy')}</a>
            <a onClick={(e) => {e.preventDefault(); alert("12")}}>{t('common.footer.legal_notice')}</a>
            <a onClick={(e) => {e.preventDefault(); alert("12")}}>{t('common.footer.accessibility')}</a>
          </div>
        </div>
      </footer>
  );
}
