'use client';

import styles from './MissionHero.module.css';
import useTranslation from '@/hooks/useTranslation';

export default function MissionHero() {
  const { t } = useTranslation();

  return (
    <main className={styles.page}>
      {/* Bloc Citation Impact */}
      <section className={styles.impactQuote}>
        <blockquote className={styles.quote}>
          {t('mission.quote.text')}
        </blockquote>
        <cite className={styles.author}>{t('mission.quote.author')}</cite>
        <p className={styles.intro}>{t('mission.intro')}</p>
      </section>

      {/* Timeline "Our journey" */}
      <section className={styles.timelineSection}>
        <h2 className={styles.sectionTitle}>{t('mission.timeline.title')}</h2>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}><span>2001</span><p>{t('mission.timeline.items.2001')}</p></div>
          <div className={styles.timelineItem}><span>2005</span><p>{t('mission.timeline.items.2005')}</p></div>
          <div className={styles.timelineItem}><span>2020</span><p>{t('mission.timeline.items.2020')}</p></div>
          <div className={styles.timelineItem}><span>2024</span><p>{t('mission.timeline.items.2024')}</p></div>
        </div>
      </section>

      {/* Bloc "Our Approach" */}
      <section className={styles.approachSection}>
        <h2 className={styles.sectionTitle}>{t('mission.approach.title')}</h2>
        <p>{t('mission.approach.intro')}</p>
        <div className={styles.approachGrid}>
          {['establish', 'deploy', 'empower'].map((key) => (
            <div className={styles.approachCard} key={key}>
              <h3>{t(`mission.approach.${key}.title`)}</h3>
              <p>{t(`mission.approach.${key}.text`)}</p>
              <button onClick={() => alert("12")}>{t('mission.approach.readMore')}</button>
            </div>
          ))}
        </div>
      </section>

      {/* Bloc Témoignage fondateur */}
      <section className={styles.testimonySection}>
        <div className={styles.testimonyContent}>
          <p className={styles.testimonyText}>
            {t('mission.testimony.text')}
          </p>
          <cite className={styles.testimonyAuthor}>{t('mission.testimony.author')}</cite>
        </div>
      </section>

      {/* Bloc équipe principale */}
      <section className={styles.teamSection}>
        <h2 className={styles.sectionTitle}>{t('mission.team.title')}</h2>
        <p className={styles.teamIntro}>{t('mission.team.intro')}</p>
        <div className={styles.teamGrid}>
          <div className={styles.teamCard}>
            <img src="/img/team1.jpg" alt="Team member 1" className={styles.teamPhoto} />
            <h3>Dr. GAGNON Kylian</h3>
            <p>{t('mission.team.members.kylian')}</p>
          </div>
          <div className={styles.teamCard}>
            <img src="/img/team2.webp" alt="Team member 2" className={styles.teamPhoto} />
            <h3>Dr. ROSSI Noah</h3>
            <p>{t('mission.team.members.noah')}</p>
          </div>
          <div className={styles.teamCard}>
            <img src="/img/team3.webp" alt="Team member 3" className={styles.teamPhoto} />
            <h3>Dr. CILETTI Kenzo</h3>
            <p>{t('mission.team.members.kenzo')}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
