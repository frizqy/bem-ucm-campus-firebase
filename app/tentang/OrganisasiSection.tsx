
'use client';

export default function OrganisasiSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/image/bg5.jpg"
              alt="Organisasi BEM"
              className="rounded-lg shadow-lg object-cover w-full h-80"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Tujuan BEM UCM Campus Medan
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Tujuan utama BEM UCM Campus Medan adalah menjadi wadah aspirasi resmi bagi seluruh mahasiswa dan menjembatani komunikasi efektif dengan pihak kampus, sekaligus berfungsi sebagai motor penggerak untuk mengembangkan potensi mahasiswa di bidang vokasi, kepemimpinan, dan kewirausahaan melalui program kerja yang sinergis dengan Unit Kegiatan Mahasiswa (UKM), demi menghasilkan lulusan yang berintegritas, kompeten, dan siap berkontribusi nyata di dunia kerja dan masyarakat.
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
