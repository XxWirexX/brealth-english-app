import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MissionHero from '@/components/MissionHero';

export default function Mission() {
  return (
    <>
      <Header scrollEffect={false} />
      <MissionHero />
      <Footer/>
    </>
  );
}
