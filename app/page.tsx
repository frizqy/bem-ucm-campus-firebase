
'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ProgramSection from '@/components/ProgramSection';
import NewsSection from '@/components/NewsSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProgramSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}
