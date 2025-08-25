'use client';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import BeritaHero from './BeritaHero';
import BeritaGrid from './BeritaGrid';
import BeritaCategories from './BeritaCategories';
import allNews from '../news.json'

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