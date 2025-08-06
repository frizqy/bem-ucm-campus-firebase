
'use client';

export default function OrganisasiSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://readdy.ai/api/search-image?query=University%20student%20government%20organization%20members%20working%20together%20in%20modern%20office%20space%2C%20diverse%20group%20of%20young%20leaders%20collaborating%20on%20projects%2C%20professional%20workspace%20with%20computers%20and%20documents%2C%20bright%20natural%20lighting%2C%20contemporary%20university%20administration%20building%20interior%2C%20teamwork%20and%20leadership%20atmosphere&width=600&height=400&seq=organisasi-bem&orientation=landscape"
              alt="Organisasi BEM"
              className="rounded-lg shadow-lg object-cover w-full h-80"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Apa itu Badan Eksekutif Mahasiswa?
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Badan Eksekutif Mahasiswa (BEM) adalah lembaga eksekutif tertinggi di tingkat universitas yang berperan sebagai representasi resmi seluruh mahasiswa. BEM bertanggung jawab untuk menjalankan program-program kemahasiswaan dan menjadi penghubung antara mahasiswa dengan pihak universitas.
              </p>
              <p>
                Sebagai organisasi kemahasiswaan, BEM memiliki kewenangan untuk mengambil kebijakan-kebijakan yang berkaitan dengan kesejahteraan dan kepentingan mahasiswa. Organisasi ini juga berperan dalam mengembangkan potensi mahasiswa melalui berbagai program akademik dan non-akademik.
              </p>
              <p>
                BEM terdiri dari mahasiswa-mahasiswa terpilih yang memiliki dedikasi tinggi untuk melayani kepentingan bersama dan membawa perubahan positif bagi kehidupan kampus yang lebih baik.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-group-line text-blue-600 text-2xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900">Representasi</h3>
                <p className="text-sm text-gray-600 mt-2">Mewakili aspirasi seluruh mahasiswa</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-lightbulb-line text-purple-600 text-2xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900">Inovasi</h3>
                <p className="text-sm text-gray-600 mt-2">Menciptakan program-program inovatif</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-hands-heart-line text-yellow-600 text-2xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900">Pelayanan</h3>
                <p className="text-sm text-gray-600 mt-2">Melayani kepentingan mahasiswa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
