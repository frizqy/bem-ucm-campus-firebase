'use client';
import { useState } from 'react';

export default function BeritaCategories({ onCategoryChange }: { onCategoryChange?: (category: string) => void }) {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  
  const categories = [
    { name: 'Semua', icon: 'ri-apps-line', count: 24 },
    { name: 'Akademik', icon: 'ri-book-line', count: 8 },
    { name: 'Kompetisi', icon: 'ri-trophy-line', count: 6 },
    { name: 'Sosial', icon: 'ri-heart-line', count: 5 },
    { name: 'Workshop', icon: 'ri-tools-line', count: 3 },
    { name: 'Event', icon: 'ri-calendar-event-line', count: 2 }
  ];

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    onCategoryChange?.(categoryName);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Kategori Berita</h2>
          <p className="text-lg text-gray-600">Pilih kategori untuk melihat berita yang lebih spesifik</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => handleCategoryClick(category.name)}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer ${
                selectedCategory === category.name
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
              }`}
            >
              <i className={`${category.icon} mr-2 text-lg`}></i>
              {category.name}
              <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                selectedCategory === category.name
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}