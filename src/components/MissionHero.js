'use client';

import styles from './MissionHero.module.css';

export default function MissionHero() {
  return (
    <main className={styles.page}>
      {/* Bloc Citation Impact */}
      <section className={styles.impactQuote}>
        <blockquote className={styles.quote}>
          “We don’t treat statistics. We listen to wounds no one else sees.”
        </blockquote>
        <cite className={styles.author}>— Dr. Selma N’Diaye, Founding Member</cite>
        <p className={styles.intro}>Brealth was born to fill a silence. The one around mental health. Our story began where most others ended — with the invisible wounds of the mind.</p>
      </section>

      {/* Timeline "Our journey" */}
      <section className={styles.timelineSection}>
        <h2 className={styles.sectionTitle}>A story of resilience. A mission of healing.</h2>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}><span>2001</span><p>USA: Brealth is born after 9/11</p></div>
          <div className={styles.timelineItem}><span>2005</span><p>Nigeria: first mobile intervention</p></div>
          <div className={styles.timelineItem}><span>2020</span><p>France: mental support during pandemic</p></div>
          <div className={styles.timelineItem}><span>2024</span><p>Active in 6 countries with 12 psychologists</p></div>
        </div>
      </section>

      {/* Bloc "Our Approach" */}
      <section className={styles.approachSection}>
        <h2 className={styles.sectionTitle}>How we help</h2>
        <p>Our mission relies on a structured and proven method focused on three pillars of intervention.</p>
        <div className={styles.approachGrid}>
          <div className={styles.approachCard}>
            <h3>Establish</h3>
            <p>We set up permanent care centers in France and the United States, offering long-term psychological support.</p>
            <button>Read more</button>
          </div>
          <div className={styles.approachCard}>
            <h3>Deploy</h3>
            <p>Our psychologists intervene rapidly in crisis zones or underserved areas to offer immediate relief and support.</p>
            <button>Read more</button>
          </div>
          <div className={styles.approachCard}>
            <h3>Empower</h3>
            <p>We train local professionals and build awareness to ensure continuity and fight the stigma around mental health.</p>
            <button>Read more</button>
          </div>
        </div>
      </section>

      {/* Bloc Témoignage fondateur */}
      <section className={styles.testimonySection}>
        <div className={styles.testimonyContent}>
          <p className={styles.testimonyText}>
            “After 9/11, I saw what silence does. We created Brealth so it wouldn’t win.”
          </p>
          <cite className={styles.testimonyAuthor}>— Founding Psychologist</cite>
        </div>
      </section>

      {/* Bloc équipe principale */}
      <section className={styles.teamSection}>
        <h2 className={styles.sectionTitle}>Meet our founding team</h2>
        <p className={styles.teamIntro}>Brealth was founded by a collective of passionate psychologists determined to bring mental health care where it’s most needed. Here are three of our core members:</p>
        <div className={styles.teamGrid}>
          <div className={styles.teamCard}>
            <img src="/img/team1.jpg" alt="Team member 1" className={styles.teamPhoto} />
            <h3>Dr. Selma N’Diaye</h3>
            <p>Trauma specialist active in conflict zones and refugee camps.</p>
          </div>
          <div className={styles.teamCard}>
            <img src="/img/team2.jpg" alt="Team member 2" className={styles.teamPhoto} />
            <h3>Dr. Alex Romero</h3>
            <p>Coordinator of sustainable programs in Latin America.</p>
          </div>
          <div className={styles.teamCard}>
            <img src="/img/team3.jpg" alt="Team member 3" className={styles.teamPhoto} />
            <h3>Dr. Amina El Hariri</h3>
            <p>Expert in training and community empowerment in West Africa.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
