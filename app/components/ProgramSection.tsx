
'use client';
import Link from 'next/link';

export default function ProgramSection() {
  const programs = [
    {
      icon: 'ri-book-open-line',
      title: 'Beasiswa Prestasi',
      description: 'Program beasiswa untuk mahasiswa berprestasi dalam bidang akademik dan non-akademik.',
      color: 'bg-blue-500'
    },
    {
      icon: 'ri-team-line',
      title: 'Pengembangan Soft Skills',
      description: 'Workshop dan training untuk mengembangkan kemampuan kepemimpinan dan komunikasi.',
      color: 'bg-green-500'
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Inkubator Startup',
      description: 'Mendukung mahasiswa dalam mengembangkan ide bisnis dan startup teknologi.',
      color: 'bg-purple-500'
    },
    {
      icon: 'ri-heart-line',
      title: 'Kegiatan Sosial',
      description: 'Program pengabdian masyarakat dan kegiatan sosial untuk membantu sesama.',
      color: 'bg-red-500'
    },
    {
      icon: 'ri-mic-line',
      title: 'Aspirasi Mahasiswa',
      description: 'Platform untuk menyalurkan aspirasi dan keluhan mahasiswa kepada pihak universitas.',
      color: 'bg-yellow-500'
    },
    {
      icon: 'ri-calendar-event-line',
      title: 'Event Kampus',
      description: 'Mengorganisir berbagai acara kampus seperti festival, seminar, dan kompetisi.',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Program Unggulan</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Berbagai program yang dirancang untuk mendukung pengembangan mahasiswa dalam segala aspek kehidupan kampus
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className={`w-16 h-16 ${program.color} rounded-full flex items-center justify-center mb-4`}>
                <i className={`${program.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h3>
              <p className="text-gray-600 leading-relaxed">{program.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/program" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer inline-block"
          >
            Lihat Semua Program
          </Link>
        </div>
      </div>
    </section>
  );
}
