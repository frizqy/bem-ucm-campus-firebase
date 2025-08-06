'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function BeritaGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const allNews = [
    {
      id: 1,
      image: 'https://readdy.ai/api/search-image?query=University%20students%20in%20graduation%20ceremony%20celebration%20with%20academic%20caps%20and%20gowns%2C%20joyful%20atmosphere%2C%20modern%20university%20building%20background%2C%20natural%20lighting%2C%20professional%20photography%2C%20inspiring%20educational%20achievement%20moment%2C%20group%20of%20diverse%20students%20celebrating%20success&width=400&height=300&seq=berita-1&orientation=landscape',
      title: 'Wisuda Sarjana Periode Februari 2024',
      excerpt: 'Sebanyak 1,247 mahasiswa diwisuda dalam upacara wisuda yang berlangsung khidmat di Auditorium Utama. Rektor menyampaikan apresiasi atas pencapaian luar biasa para lulusan.',
      date: '15 Februari 2024',
      category: 'Akademik',
      author: 'Tim Media BEM',
      readTime: '3 min'
    },
    {
      id: 2,
      image: 'https://readdy.ai/api/search-image?query=University%20startup%20competition%20event%20with%20students%20presenting%20innovative%20projects%2C%20modern%20presentation%20setup%2C%20technology%20and%20innovation%20theme%2C%20professional%20indoor%20lighting%2C%20contemporary%20meeting%20room%20environment%2C%20entrepreneurship%20and%20business%20development%20atmosphere&width=400&height=300&seq=berita-2&orientation=landscape',
      title: 'Kompetisi Startup Mahasiswa 2024',
      excerpt: 'BEM menggelar kompetisi startup dengan hadiah total 100 juta rupiah untuk mendorong jiwa kewirausahaan mahasiswa. 150 tim dari berbagai fakultas berpartisipasi.',
      date: '10 Februari 2024',
      category: 'Kompetisi',
      author: 'Divisi Kewirausahaan',
      readTime: '5 min'
    },
    {
      id: 3,
      image: 'https://readdy.ai/api/search-image?query=University%20community%20service%20volunteers%20helping%20local%20communities%2C%20students%20working%20together%20in%20social%20activities%2C%20outdoor%20community%20development%20project%2C%20natural%20lighting%2C%20humanitarian%20and%20social%20work%20atmosphere%2C%20collaborative%20teamwork%20environment&width=400&height=300&seq=berita-3&orientation=landscape',
      title: 'Program Pengabdian Masyarakat Desa Sukamaju',
      excerpt: 'Mahasiswa dan dosen berkolaborasi dalam program pengabdian masyarakat di Desa Sukamaju, Bogor. Program fokus pada edukasi digital dan pemberdayaan ekonomi.',
      date: '5 Februari 2024',
      category: 'Sosial',
      author: 'Tim Pengabdian',
      readTime: '4 min'
    },
    {
      id: 4,
      image: 'https://readdy.ai/api/search-image?query=Workshop%20technology%20and%20programming%20training%20session%20with%20students%20learning%20computer%20skills%2C%20modern%20classroom%20with%20laptops%20and%20screens%2C%20educational%20technology%20environment%2C%20professional%20indoor%20lighting%2C%20collaborative%20learning%20atmosphere&width=400&height=300&seq=berita-4&orientation=landscape',
      title: 'Workshop Digital Marketing untuk Mahasiswa',
      excerpt: 'BEM menyelenggarakan workshop digital marketing yang diikuti 200 mahasiswa. Materi mencakup social media strategy, content creation, dan online advertising.',
      date: '28 Januari 2024',
      category: 'Workshop',
      author: 'Divisi Pengembangan',
      readTime: '3 min'
    },
    {
      id: 5,
      image: 'https://readdy.ai/api/search-image?query=University%20sports%20competition%20with%20students%20participating%20in%20various%20athletic%20activities%2C%20outdoor%20sports%20field%20with%20university%20buildings%20in%20background%2C%20energetic%20and%20competitive%20atmosphere%2C%20natural%20lighting%2C%20healthy%20campus%20lifestyle&width=400&height=300&seq=berita-5&orientation=landscape',
      title: 'Turnamen Olahraga Antar Fakultas 2024',
      excerpt: 'Kompetisi olahraga terbesar tahun ini melibatkan 12 fakultas dalam 8 cabang olahraga. Fakultas Teknik berhasil meraih juara umum.',
      date: '20 Januari 2024',
      category: 'Event',
      author: 'Divisi Olahraga',
      readTime: '4 min'
    },
    {
      id: 6,
      image: 'https://readdy.ai/api/search-image?query=University%20scholarship%20award%20ceremony%20with%20students%20receiving%20certificates%20and%20awards%2C%20formal%20academic%20setting%2C%20proud%20and%20inspiring%20moment%2C%20professional%20indoor%20lighting%2C%20achievement%20and%20recognition%20atmosphere&width=400&height=300&seq=berita-6&orientation=landscape',
      title: 'Pemberian Beasiswa Prestasi Semester Ganjil',
      excerpt: '500 mahasiswa berprestasi menerima beasiswa dari berbagai sponsor. Total dana beasiswa mencapai 2 miliar rupiah untuk mendukung pendidikan berkualitas.',
      date: '15 Januari 2024',
      category: 'Akademik',
      author: 'Divisi Akademik',
      readTime: '2 min'
    },
    {
      id: 7,
      image: 'https://readdy.ai/api/search-image?query=University%20debate%20competition%20with%20students%20presenting%20arguments%20in%20formal%20debate%20setting%2C%20academic%20competition%20atmosphere%2C%20professional%20indoor%20lighting%2C%20intellectual%20discussion%20and%20critical%20thinking%20environment&width=400&height=300&seq=berita-7&orientation=landscape',
      title: 'Kompetisi Debat Nasional Universitas',
      excerpt: 'Tim debat universitas berhasil meraih juara 2 dalam kompetisi debat nasional. Prestasi membanggakan setelah persiapan intensif selama 6 bulan.',
      date: '8 Januari 2024',
      category: 'Kompetisi',
      author: 'Unit Debat',
      readTime: '3 min'
    },
    {
      id: 8,
      image: 'https://readdy.ai/api/search-image?query=University%20environmental%20campaign%20with%20students%20planting%20trees%20and%20promoting%20green%20initiatives%2C%20outdoor%20campus%20environment%2C%20sustainability%20and%20eco-friendly%20activities%2C%20natural%20lighting%2C%20environmental%20awareness%20atmosphere&width=400&height=300&seq=berita-8&orientation=landscape',
      title: 'Kampanye Go Green Campus 2024',
      excerpt: 'BEM meluncurkan program Go Green Campus dengan penanaman 1000 pohon di area kampus. Inisiatif untuk menciptakan lingkungan kampus yang berkelanjutan.',
      date: '2 Januari 2024',
      category: 'Sosial',
      author: 'Divisi Lingkungan',
      readTime: '4 min'
    },
    {
      id: 9,
      image: 'https://readdy.ai/api/search-image?query=University%20job%20fair%20event%20with%20students%20meeting%20recruiters%20and%20company%20representatives%2C%20professional%20networking%20atmosphere%2C%20career%20development%20and%20recruitment%20setting%2C%20indoor%20exhibition%20hall%20lighting&width=400&height=300&seq=berita-9&orientation=landscape',
      title: 'Job Fair dan Career Expo 2024',
      excerpt: 'Lebih dari 100 perusahaan berpartisipasi dalam job fair terbesar tahun ini. 5000 mahasiswa mengikuti acara dengan tingkat penyerapan kerja 70%.',
      date: '20 Desember 2023',
      category: 'Event',
      author: 'Divisi Karir',
      readTime: '5 min'
    },
    {
      id: 10,
      image: 'https://readdy.ai/api/search-image?query=University%20leadership%20training%20workshop%20with%20students%20in%20group%20discussions%20and%20team%20building%20activities%2C%20professional%20development%20setting%2C%20collaborative%20learning%20environment%2C%20modern%20training%20facility%20lighting&width=400&height=300&seq=berita-10&orientation=landscape',
      title: 'Training Leadership untuk Aktivis Mahasiswa',
      excerpt: 'Program pelatihan kepemimpinan intensif selama 3 hari untuk 100 aktivis mahasiswa dari berbagai organisasi. Fokus pada soft skill dan manajemen organisasi.',
      date: '15 Desember 2023',
      category: 'Workshop',
      author: 'Divisi Pengembangan',
      readTime: '3 min'
    },
    {
      id: 11,
      image: 'https://readdy.ai/api/search-image?query=University%20cultural%20festival%20with%20students%20performing%20traditional%20arts%20and%20music%2C%20colorful%20stage%20performance%2C%20cultural%20diversity%20celebration%2C%20evening%20outdoor%20lighting%2C%20festive%20and%20artistic%20atmosphere&width=400&height=300&seq=berita-11&orientation=landscape',
      title: 'Festival Seni dan Budaya Nusantara',
      excerpt: 'Perayaan kekayaan budaya Indonesia melalui pertunjukan seni dari 34 provinsi. Acara berlangsung 5 hari dengan 200 penampil dari berbagai daerah.',
      date: '10 Desember 2023',
      category: 'Event',
      author: 'Divisi Seni Budaya',
      readTime: '4 min'
    },
    {
      id: 12,
      image: 'https://readdy.ai/api/search-image?query=University%20blood%20donation%20drive%20with%20students%20donating%20blood%20for%20humanitarian%20cause%2C%20medical%20setting%20with%20professional%20healthcare%20staff%2C%20altruistic%20and%20caring%20atmosphere%2C%20clean%20medical%20facility%20lighting&width=400&height=300&seq=berita-12&orientation=landscape',
      title: 'Donor Darah Sukarela Mahasiswa',
      excerpt: 'Kegiatan donor darah yang diikuti 800 mahasiswa berhasil mengumpulkan 600 kantong darah untuk PMI. Bentuk kepedulian mahasiswa terhadap sesama.',
      date: '5 Desember 2023',
      category: 'Sosial',
      author: 'Divisi Kesehatan',
      readTime: '2 min'
    }
  ];

  const totalPages = Math.ceil(allNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNews = allNews.slice(startIndex, startIndex + itemsPerPage);

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
            <p className="text-gray-600">Menampilkan {allNews.length} berita kegiatan BEM</p>
          </div>
          <div className="flex items-center space-x-4">
            <select className="border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Terbaru</option>
              <option>Terpopuler</option>
              <option>A-Z</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentNews.map((article) => (
            <article key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
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
                <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs flex items-center">
                  <i className="ri-time-line mr-1"></i>
                  {article.readTime}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between text-gray-500 text-sm mb-3">
                  <div className="flex items-center">
                    <i className="ri-calendar-line mr-2"></i>
                    {article.date}
                  </div>
                  <div className="flex items-center">
                    <i className="ri-user-line mr-1"></i>
                    {article.author}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <Link 
                    href={`/berita/${article.id}`}
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
            </article>
          ))}
        </div>

        {/* Pagination */}
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
            disabled={currentPage === totalPages}
            className={`p-2 rounded-lg ${
              currentPage === totalPages
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-600 hover:bg-gray-100 cursor-pointer'
            }`}
          >
            <i className="ri-arrow-right-line text-lg"></i>
          </button>
        </div>
      </div>
    </section>
  );
}