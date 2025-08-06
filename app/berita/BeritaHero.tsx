'use client';

export default function BeritaHero() {
  return (
    <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-blue-900 to-indigo-800 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20university%20campus%20with%20students%20engaged%20in%20various%20activities%2C%20academic%20buildings%20in%20background%2C%20vibrant%20student%20life%20atmosphere%2C%20natural%20outdoor%20lighting%2C%20contemporary%20educational%20environment%2C%20diverse%20students%20collaborating%20and%20studying%20together%2C%20professional%20photography%20style&width=1200&height=400&seq=berita-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-5xl font-bold mb-6">
          Berita & Kegiatan BEM
        </h1>
        <p className="text-xl mb-8 leading-relaxed">
          Ikuti perkembangan terbaru kegiatan Badan Eksekutif Mahasiswa dan berbagai program unggulan untuk kemajuan mahasiswa
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex items-center text-lg">
            <i className="ri-newspaper-line mr-3 text-2xl"></i>
            <span>Update Terkini</span>
          </div>
          <div className="flex items-center text-lg">
            <i className="ri-calendar-event-line mr-3 text-2xl"></i>
            <span>Event Mendatang</span>
          </div>
        </div>
      </div>
    </section>
  );
}