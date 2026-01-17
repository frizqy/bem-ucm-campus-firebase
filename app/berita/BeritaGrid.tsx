'use client';
import { getDatabase , ref, onValue, get, child } from "firebase/database";
import { app } from '@/firebase/firebaseconfig';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function BeritaGrid() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchData = async () => {
      const dbRef = ref(getDatabase(app));
      try {
        const snapshot = await get(child(dbRef, 'event'));
        if (snapshot.exists()) {
          const data = snapshot.val();
          const newsArray = Object.keys(data).map(key => ({
            id: key,
            ...data[key]
          }));
          setNews(newsArray.reverse()); 
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  const totalNewsCount = news.length;
  const totalPages = Math.ceil(totalNewsCount / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNews = news.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSkeleton = () => (
    [...Array(itemsPerPage)].map((_, index) => (
      <div key={index} className="bg-gray-100 rounded-xl shadow-lg overflow-hidden animate-pulse h-80">
        <div className="h-40 bg-gray-300 w-full"></div>
        <div className="p-6">
          <div className="h-4 bg-gray-300 rounded w-1/4 mb-3"></div>
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    ))
  );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Semua Berita</h2>
            <p className="text-gray-600">
              {isLoading ? 'Memuat jumlah berita...' : `Menampilkan ${news.length} berita kegiatan BEM`}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            {/* ... */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {isLoading ? (
            renderSkeleton()
          ) : news.length === 0 ? (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500 text-lg">Tidak ada berita yang ditemukan.</p>
            </div>
          ) : (
            currentNews.map((article: any) => (
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
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>

        {!isLoading && news.length > 0 && (
          <div className="flex justify-center items-center space-x-2">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`p-2 rounded-lg ${
                currentPage === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-600 hover:bg-gray-100 cursor-pointer'
              }`}
            >
              <i className="ri-arrow-left-line text-lg"></i>
            </button>

            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all cursor-pointer ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              );
            })}

            <button
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages || totalPages === 0}
              className={`p-2 rounded-lg ${
                currentPage === totalPages || totalPages === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-600 hover:bg-gray-100 cursor-pointer'
              }`}
            >
              <i className="ri-arrow-right-line text-lg"></i>
            </button>
          </div>
        )}
      </div> 
    </section>
  );
}