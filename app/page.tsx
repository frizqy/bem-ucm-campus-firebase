
'use client';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import ProgramSection from '@/app/components/ProgramSection';
import NewsSection from '@/app/components/NewsSection';
import { useState } from 'react';

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
