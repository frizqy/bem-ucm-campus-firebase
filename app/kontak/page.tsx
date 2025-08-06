
'use client';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function KontakPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-20">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20university%20campus%20building%20with%20students%20walking%20around%2C%20professional%20campus%20environment%20with%20blue%20sky%20and%20green%20trees%2C%20academic%20atmosphere%20with%20contemporary%20architecture%20and%20learning%20spaces&width=1200&height=600&seq=kontak-hero&orientation=landscape')`
            }}
          ></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hubungi Kami</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Jangan ragu untuk menghubungi Badan Eksekutif Mahasiswa. Kami siap mendengar aspirasi dan masukan dari seluruh mahasiswa.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Informasi Kontak</h2>
                
                {/* Gmail */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border-l-4 border-red-500">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4">
                      <i className="ri-gmail-fill text-white text-xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Email Resmi</h3>
                  </div>
                  <p className="text-gray-600 mb-3">Untuk komunikasi resmi dan pengajuan proposal:</p>
                  <a 
                    href="mailto:bem.universitas@gmail.com" 
                    className="text-red-600 font-semibold hover:text-red-700 transition-colors cursor-pointer"
                  >
                    bem.universitas@gmail.com
                  </a>
                </div>

                {/* Instagram */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border-l-4 border-pink-500">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                      <i className="ri-instagram-fill text-white text-xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Instagram Oficial</h3>
                  </div>
                  <p className="text-gray-600 mb-3">Ikuti aktivitas dan update terbaru BEM:</p>
                  <a 
                    href="https://instagram.com/bem_universitas" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 font-semibold hover:text-pink-700 transition-colors cursor-pointer"
                  >
                    @bem_universitas
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border-l-4 border-green-500">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                      <i className="ri-whatsapp-fill text-white text-xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">WhatsApp</h3>
                  </div>
                  <p className="text-gray-600 mb-3">Untuk komunikasi cepat dan informasi:</p>
                  <a 
                    href="https://wa.me/6281234567890" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 font-semibold hover:text-green-700 transition-colors cursor-pointer"
                  >
                    +62 812-3456-7890
                  </a>
                </div>

                {/* Alamat */}
                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <i className="ri-map-pin-fill text-white text-xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Alamat Sekretariat</h3>
                  </div>
                  <p className="text-gray-600 mb-2">Gedung Student Center Lt. 2</p>
                  <p className="text-gray-600 mb-2">Jl. Kampus Raya No. 1, Jakarta Selatan</p>
                  <p className="text-gray-600">Jakarta 12345</p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Kirim Pesan</h2>
                <form className="bg-white rounded-xl shadow-lg p-8">
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Masukkan nama lengkap Anda"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Masukkan email Anda"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subjek
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Subjek pesan"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tulis pesan Anda di sini (maksimal 500 karakter)"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 whitespace-nowrap"
                  >
                    <i className="ri-send-plane-2-fill mr-2"></i>
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Lokasi Kami</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Temukan sekretariat BEM di kampus dan kunjungi kami untuk diskusi lebih lanjut tentang program dan kegiatan mahasiswa.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.2087634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sMonas!5e0!3m2!1sen!2sid!4v1635174240000!5m2!1sen!2sid"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi BEM Universitas"
              ></iframe>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Mari Berkolaborasi!</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              BEM selalu terbuka untuk kolaborasi dan kerjasama dalam mengembangkan kampus yang lebih baik untuk semua mahasiswa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/tentang" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors cursor-pointer whitespace-nowrap"
              >
                Pelajari Tentang Kami
              </Link>
              <Link 
                href="/program" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap"
              >
                Lihat Program Kami
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
