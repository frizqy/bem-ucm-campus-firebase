
'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <i className="ri-graduation-cap-fill text-white text-xl"></i>
              </div>
              <span className="text-xl font-bold">BEM Universitas</span>
            </div>
            <p className="text-gray-400 mb-4">
              Badan Eksekutif Mahasiswa adalah organisasi kemahasiswaan yang berperan sebagai lembaga eksekutif di tingkat universitas, berkomitmen untuk mewakili aspirasi dan kepentingan seluruh mahasiswa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <i className="ri-instagram-line text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <i className="ri-twitter-line text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <i className="ri-youtube-line text-lg"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Beranda</Link></li>
              <li><Link href="/tentang" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Tentang Kami</Link></li>
              <li><Link href="/berita" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Berita</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Kontak</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <i className="ri-map-pin-line"></i>
                <span>Jl. Kampus No. 1, Jakarta</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="ri-phone-line"></i>
                <span>+62 21 123 4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="ri-mail-line"></i>
                <span>info@bem.ac.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 BEM Universitas. Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
