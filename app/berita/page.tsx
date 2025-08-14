'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BeritaHero from './BeritaHero';
import BeritaGrid from './BeritaGrid';
import BeritaCategories from './BeritaCategories';

export default function BeritaPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <BeritaHero />
        {/*<BeritaCategories />*/}
        <BeritaGrid />
      </main>
      <Footer />
    </div>
  );
}