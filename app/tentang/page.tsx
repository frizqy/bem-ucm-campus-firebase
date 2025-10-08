
'use client';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import TentangHero from './TentangHero';
import OrganisasiSection from './OrganisasiSection';
import VisiMisiSection from './VisiMisiSection';
import StrukturSection from './StrukturSection';
import StrukturOrganisasi from './StrukturOrganisasi';

export default function TentangPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <TentangHero />
        <OrganisasiSection />
        <VisiMisiSection />
        <StrukturOrganisasi />
        {/*<StrukturSection />*/}
      </main>
      <Footer />
    </div>
  );
}
