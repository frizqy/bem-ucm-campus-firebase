
'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TentangHero from './TentangHero';
import OrganisasiSection from './OrganisasiSection';
import VisiMisiSection from './VisiMisiSection';
import StrukturSection from './StrukturSection';

export default function TentangPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <TentangHero />
        <OrganisasiSection />
        <VisiMisiSection />
        <StrukturSection />
      </main>
      <Footer />
    </div>
  );
}
