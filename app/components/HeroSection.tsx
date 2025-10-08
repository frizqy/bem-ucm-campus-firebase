
'use client';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-[600px] flex items-center"
      style={{
        backgroundImage: `url('/image/bg1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-700/90"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Badan Eksekutif Mahasiswa
            <span className="block text-yellow-300">Politeknik Unggulan Cipta Mandiri Medan</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Mewakili aspirasi mahasiswa, mewujudkan perubahan positif, dan membangun masa depan universitas yang lebih baik bersama-sama.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tentang" 
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Tentang Kami
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
