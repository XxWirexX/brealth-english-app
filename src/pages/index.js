import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import Main from '../components/Main';
import LanguageSwitcher from '../components/LanguageSwitcher';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* <LanguageSwitcher /> */}
      <Header scrollEffect={true} />
      <Main />
      <Footer/>
    </>
  );
}
