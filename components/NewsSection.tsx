
'use client';
import Link from 'next/link';

export default function NewsSection() {
  const news = [
    {
      id: 1,
      image: 'https://readdy.ai/api/search-image?query=University%20students%20in%20graduation%20ceremony%20celebration%20with%20academic%20caps%20and%20gowns%2C%20joyful%20atmosphere%2C%20modern%20university%20building%20background%2C%20natural%20lighting%2C%20professional%20photography%2C%20inspiring%20educational%20achievement%20moment%2C%20group%20of%20diverse%20students%20celebrating%20success&width=400&height=250&seq=news-1&orientation=landscape',
      title: 'Wisuda Sarjana Periode Februari 2024',
      excerpt: 'Sebanyak 1,247 mahasiswa diwisuda dalam upacara wisuda yang berlangsung khidmat di Auditorium Utama.',
      date: '15 Februari 2024',
      category: 'Akademik'
    },
    {
      id: 2,
      image: 'https://readdy.ai/api/search-image?query=University%20startup%20competition%20event%20with%20students%20presenting%20innovative%20projects%2C%20modern%20presentation%20setup%2C%20technology%20and%20innovation%20theme%2C%20professional%20indoor%20lighting%2C%20contemporary%20meeting%20room%20environment%2C%20entrepreneurship%20and%20business%20development%20atmosphere&width=400&height=250&seq=news-2&orientation=landscape',
      title: 'Kompetisi Startup Mahasiswa 2024',
      excerpt: 'BEM menggelar kompetisi startup dengan hadiah total 100 juta rupiah untuk mendorong jiwa kewirausahaan.',
      date: '10 Februari 2024',
      category: 'Kompetisi'
    },
    {
      id: 3,
      image: 'https://readdy.ai/api/search-image?query=University%20community%20service%20volunteers%20helping%20local%20communities%2C%20students%20working%20together%20in%20social%20activities%2C%20outdoor%20community%20development%20project%2C%20natural%20lighting%2C%20humanitarian%20and%20social%20work%20atmosphere%2C%20collaborative%20teamwork%20environment&width=400&height=250&seq=news-3&orientation=landscape',
      title: 'Program Pengabdian Masyarakat',
      excerpt: 'Mahasiswa dan dosen berkolaborasi dalam program pengabdian di Desa Sukamaju, Bogor.',
      date: '5 Februari 2024',
      category: 'Sosial'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Berita & Kegiatan</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Update terbaru tentang kegiatan dan pencapaian BEM serta kehidupan kampus
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((article) => (
            <article key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <i className="ri-calendar-line mr-2"></i>
                  {article.date}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <Link 
                  href={`/berita/${article.id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center cursor-pointer"
                >
                  Baca Selengkapnya
                  <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/berita" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer inline-block"
          >
            Lihat Semua Berita
          </Link>
        </div>
      </div>
    </section>
  );
}
