
'use client';

export default function VisiMisiSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Visi & Misi
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Komitmen kami dalam membangun universitas yang lebih baik untuk seluruh mahasiswa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Visi */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <i className="ri-eye-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Visi</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              "Menjadi Badan Eksekutif Mahasiswa yang profesional, inovatif, dan responsif dalam mewujudkan mahasiswa yang berkualitas, berkarakter, dan berdaya saing tinggi untuk kemajuan universitas dan bangsa."
            </p>
          </div>

          {/* Misi */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                <i className="ri-target-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Misi</h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Menjalankan fungsi eksekutif dengan profesional dan bertanggung jawab untuk kepentingan seluruh mahasiswa</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Mengembangkan program-program inovatif yang mendukung pengembangan akademik dan non-akademik mahasiswa</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Menjadi jembatan komunikasi yang efektif antara mahasiswa, universitas, dan masyarakat</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Membentuk karakter kepemimpinan dan jiwa entrepreneurship mahasiswa</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Menciptakan lingkungan kampus yang kondusif untuk pembelajaran dan pengembangan diri</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Nilai-nilai */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Nilai-Nilai Organisasi
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-blue-600 text-2xl"></i>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Integritas</h4>
              <p className="text-sm text-gray-600">Berkomitmen pada kejujuran dan transparansi dalam setiap tindakan</p>
            </div>
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-team-line text-green-600 text-2xl"></i>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Kolaborasi</h4>
              <p className="text-sm text-gray-600">Membangun kerja sama yang solid untuk mencapai tujuan bersama</p>
            </div>
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-rocket-line text-purple-600 text-2xl"></i>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Inovasi</h4>
              <p className="text-sm text-gray-600">Selalu mencari solusi kreatif untuk tantangan yang dihadapi</p>
            </div>
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-heart-line text-yellow-600 text-2xl"></i>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Dedikasi</h4>
              <p className="text-sm text-gray-600">Mengabdikan diri sepenuhnya untuk kepentingan mahasiswa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
