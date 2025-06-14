'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Layout({ children, scrollEffect = false }) {
  return (
    <>
      <Header scrollEffect={scrollEffect} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
