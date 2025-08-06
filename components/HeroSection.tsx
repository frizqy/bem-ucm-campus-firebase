
'use client';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section 
      className="relative bg-gradient-to-br from-blue-600 to-purple-700 min-h-[600px] flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.85), rgba(126, 34, 206, 0.85)), url('https://readdy.ai/api/search-image?query=Modern%20university%20campus%20with%20students%20walking%20together%2C%20vibrant%20student%20life%20atmosphere%2C%20contemporary%20architecture%20buildings%20in%20background%2C%20natural%20lighting%2C%20professional%20photography%20style%2C%20wide%20angle%20shot%20showing%20campus%20community%20spirit%20and%20academic%20environment%2C%20clean%20and%20inspiring%20educational%20setting&width=1200&height=600&seq=hero-bem&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-700/90"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Badan Eksekutif
            <span className="block text-yellow-300">Mahasiswa</span>
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
            <Link 
              href="/program" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Program Kami
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
