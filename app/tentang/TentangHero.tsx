
'use client';

export default function TentangHero() {
  return (
    <section 
      className="relative min-h-[400px] flex items-center"
      style={{
        backgroundImage: ` url('/image/bg2.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-700/90"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tentang Kami
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Mengenal lebih dekat Badan Eksekutif Mahasiswa sebagai representasi suara dan aspirasi seluruh mahasiswa
          </p>
        </div>
      </div>
    </section>
  );
}
