'use client';

import styles from './ProjectsPage.module.css';
import useTranslation from '@/hooks/useTranslation';

export default function ProjectsPage() {
  const { t } = useTranslation();

  const projects = [
    {
      key: 'nigeria',
      flag: '🇳🇬'
    },
    {
      key: 'brazil',
      flag: '🇧🇷'
    },
    {
      key: 'france',
      flag: '🇫🇷'
    },
    {
      key: 'usa',
      flag: '🇺🇸'
    },
    {
      key: 'chile',
      flag: '🇨🇱'
    },
    {
      key: 'mali',
      flag: '🇲🇱'
    }
  ];

  return (
    <main className={styles.page}>
      <section className={styles.intro}>
        <h1>{t('projects.title')}</h1>
        <p>{t('projects.intro')}</p>
      </section>

      <section className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.flag}>{project.flag}</div>
            <h3>{t(`projects.items.${project.key}.country`)}</h3>
            <span className={styles.type}>{t(`projects.items.${project.key}.type`)}</span>
            <span className={styles.year}>{t(`projects.items.${project.key}.year`)}</span>
            <p>{t(`projects.items.${project.key}.description`)}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
