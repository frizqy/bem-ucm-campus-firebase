'use client';

export default function BeritaHero() {
  return (
    <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-blue-900 to-indigo-800 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/image/bg3.jpg')`
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