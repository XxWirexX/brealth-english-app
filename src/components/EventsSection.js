'use client';

import styles from './EventsSection.module.css';

const events = [
  {
    title: 'Mental Health Awareness Day – Paris',
    date: '2025-10-10',
    location: 'France',
    description: 'Workshops and public awareness actions in Parisian schools and universities.',
    action: 'Volunteer'
  },
  {
    title: 'Refugee Camp Support Mission – Lebanon',
    date: '2025-08-15',
    location: 'Lebanon',
    description: 'Deployment of temporary mental health units in Bekaa Valley.',
    action: 'Join as Psychologist'
  },
  {
    title: 'Fundraiser – Online Global Stream',
    date: '2025-07-01',
    location: 'Global',
    description: 'Live event to raise funds for ongoing actions in South America and Africa.',
    action: 'Donate'
  }
];

import { useEffect, useState } from 'react';

function formatDate(dateStr) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Intl.DateTimeFormat('en-GB', options).format(new Date(dateStr));
}


export default function EventsSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Upcoming Events</h2>
      <div className={styles.grid}>
        {events.map((event, index) => (
          <div key={index} className={styles.card}>
            <h3>{event.title}</h3>
            <p className={styles.date}>{formatDate(event.date)}</p>

            <p className={styles.location}>📍 {event.location}</p>
            <p className={styles.description}>{event.description}</p>
            <button className={styles.cta}>{event.action}</button>
          </div>
        ))}
      </div>
    </section>
  );
}
