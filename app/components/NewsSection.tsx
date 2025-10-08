
'use client';
import Link from 'next/link';
import news from '../news.json'
import { useState } from 'react';

export default function NewsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(news.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNews = news.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Semua Berita</h2>
            <p className="text-gray-600">Menampilkan {news.length} berita kegiatan BEM</p>
          </div>
          <div className="flex items-center space-x-4">
            
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentNews.map((article) => (
            <Link
            href={`/berita/${article.slug}`}
             key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-56 object-cover object-top"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
                
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between text-gray-500 text-sm mb-3">
                  <div className="flex items-center">
                    <i className="ri-calendar-line mr-2"></i>
                    {article.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
                  {article.title}
                </h3>
                
                <div className="flex items-center justify-between">
                  <Link 
                    href={`/berita/${article.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-semibold flex items-center cursor-pointer group"
                  >
                    Baca Selengkapnya
                    <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </Link>
                  
                  <div className="flex items-center space-x-3">
                    <button className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer">
                      <i className="ri-heart-line text-lg"></i>
                    </button>
                    <button className="text-gray-400 hover:text-blue-500 transition-colors cursor-pointer">
                      <i className="ri-share-line text-lg"></i>
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
