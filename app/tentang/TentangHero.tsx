
'use client';

export default function TentangHero() {
  return (
    <section 
      className="relative bg-gradient-to-br from-blue-600 to-purple-700 min-h-[400px] flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.85), rgba(126, 34, 206, 0.85)), url('https://readdy.ai/api/search-image?query=Professional%20university%20student%20council%20meeting%20with%20diverse%20students%20discussing%20around%20conference%20table%2C%20modern%20meeting%20room%20with%20glass%20walls%2C%20natural%20lighting%2C%20contemporary%20office%20setting%2C%20students%20in%20business%20casual%20attire%2C%20collaborative%20atmosphere%2C%20inspiring%20educational%20leadership%20environment&width=1200&height=400&seq=tentang-hero&orientation=landscape')`,
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
