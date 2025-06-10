import DonationPage from '@/components/DonationPage';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Donation() {
  return (
    <>
      <Header scrollEffect={false} />
      <DonationPage/>
      <Footer/>
    </>
  );
}
