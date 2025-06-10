import EventsSection from '@/components/EventsSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ProjectsPage from '@/components/ProjectsPage';
import TestimonialsSection from '@/components/TestimonialsSection';

import dynamic from 'next/dynamic';
const WorldMap = dynamic(() => import('@/components/WorldMap'), { ssr: false });


export default function Projects() {
  return (
    <>
      <Header scrollEffect={false} />
      <ProjectsPage/>
      <EventsSection/>
      <WorldMap/>
      <TestimonialsSection/>
      <Footer/>
    </>
  );
}
