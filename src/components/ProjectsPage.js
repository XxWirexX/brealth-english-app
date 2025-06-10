'use client';

import styles from './ProjectsPage.module.css';

const projects = [
  {
    country: 'Nigeria',
    type: 'Emergency',
    year: '2023',
    description: 'Psychological support deployed after severe flooding in northern regions.',
    flag: '🇳🇬'
  },
  {
    country: 'Brazil',
    type: 'Long-term',
    year: '2015–ongoing',
    description: 'Established a permanent care center in São Paulo for underprivileged communities.',
    flag: '🇧🇷'
  },
  {
    country: 'France',
    type: 'Awareness',
    year: '2022–2024',
    description: 'Mental health workshops for youth in public schools post-pandemic.',
    flag: '🇫🇷'
  },
  {
    country: 'USA',
    type: 'Long-term',
    year: '2001–ongoing',
    description: 'Headquarters in New York and support centers in urban zones.',
    flag: '🇺🇸'
  },
  {
    country: 'Chile',
    type: 'Emergency',
    year: '2020',
    description: 'Rapid intervention after a major earthquake in the south.',
    flag: '🇨🇱'
  },
  {
    country: 'Mali',
    type: 'Empowerment',
    year: '2023',
    description: 'Training of local psychological aid volunteers in rural areas.',
    flag: '🇲🇱'
  }
];

export default function ProjectsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.intro}>
        <h1>Our actions in the field</h1>
        <p>
          From urban centers to remote areas, Brealth acts where psychological support is missing. Our missions adapt
          to the local needs with urgency, care and dignity.
        </p>
      </section>

      <section className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.flag}>{project.flag}</div>
            <h3>{project.country}</h3>
            <span className={styles.type}>{project.type}</span>
            <span className={styles.year}>{project.year}</span>
            <p>{project.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
