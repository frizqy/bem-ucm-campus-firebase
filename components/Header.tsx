
'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <i className="ri-graduation-cap-fill text-white text-xl"></i>
              </div>
              <span className="text-xl font-bold text-gray-900">BEM</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors cursor-pointer">
              Beranda
            </Link>
            <Link href="/tentang" className="text-gray-600 hover:text-blue-600 font-medium transition-colors cursor-pointer">
              Tentang Kami
            </Link>
            <Link href="/berita" className="text-gray-600 hover:text-blue-600 font-medium transition-colors cursor-pointer">
              Berita
            </Link>
            <Link href="/kontak" className="text-gray-600 hover:text-blue-600 font-medium transition-colors cursor-pointer">
              Kontak
            </Link>
          </nav>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 cursor-pointer"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                Beranda
              </Link>
              <Link href="/tentang" className="text-gray-600 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                Tentang Kami
              </Link>
              <Link href="/berita" className="text-gray-600 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                Berita
              </Link>
              <Link href="/kontak" className="text-gray-600 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                Kontak
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
