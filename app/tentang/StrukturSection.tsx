
'use client';

export default function StrukturSection() {
  const struktur = [
    {
      jabatan: 'Presiden BEM',
      nama: 'Ahmad Rizki Pratama',
      fakultas: 'Fakultas Teknik',
      foto: 'https://readdy.ai/api/search-image?query=Professional%20young%20Indonesian%20male%20university%20student%20leader%20in%20formal%20business%20attire%2C%20confident%20pose%2C%20modern%20office%20background%2C%20natural%20lighting%2C%20clean%20corporate%20headshot%20style%2C%20friendly%20and%20approachable%20expression%2C%20contemporary%20professional%20photography&width=300&height=300&seq=presiden-bem&orientation=squarish',
      desc: 'Memimpin dan mengoordinasikan seluruh kegiatan BEM'
    },
    {
      jabatan: 'Wakil Presiden BEM',
      nama: 'Sari Indah Permata',
      fakultas: 'Fakultas Ekonomi',
      foto: 'https://readdy.ai/api/search-image?query=Professional%20young%20Indonesian%20female%20university%20student%20leader%20in%20formal%20business%20attire%2C%20confident%20pose%2C%20modern%20office%20background%2C%20natural%20lighting%2C%20clean%20corporate%20headshot%20style%2C%20friendly%20and%20approachable%20expression%2C%20contemporary%20professional%20photography&width=300&height=300&seq=wakil-presiden&orientation=squarish',
      desc: 'Mendukung presiden dan memimpin divisi-divisi tertentu'
    },
    {
      jabatan: 'Sekretaris Jenderal',
      nama: 'Muhammad Fajar Sidiq',
      fakultas: 'Fakultas Hukum',
      foto: 'https://readdy.ai/api/search-image?query=Professional%20young%20Indonesian%20male%20university%20student%20secretary%20in%20formal%20business%20attire%2C%20organized%20and%20systematic%20appearance%2C%20modern%20office%20background%2C%20natural%20lighting%2C%20clean%20corporate%20headshot%20style%2C%20professional%20and%20detail-oriented%20expression&width=300&height=300&seq=sekjen-bem&orientation=squarish',
      desc: 'Mengurus administrasi dan dokumentasi organisasi'
    },
    {
      jabatan: 'Bendahara Umum',
      nama: 'Dewi Kartika Sari',
      fakultas: 'Fakultas Ekonomi',
      foto: 'https://readdy.ai/api/search-image?query=Professional%20young%20Indonesian%20female%20university%20student%20treasurer%20in%20formal%20business%20attire%2C%20trustworthy%20and%20reliable%20appearance%2C%20modern%20office%20background%2C%20natural%20lighting%2C%20clean%20corporate%20headshot%20style%2C%20professional%20and%20responsible%20expression&width=300&height=300&seq=bendahara-bem&orientation=squarish',
      desc: 'Mengelola keuangan dan anggaran organisasi'
    },
    {
      jabatan: 'Koordinator Akademik',
      nama: 'Budi Santoso',
      fakultas: 'Fakultas MIPA',
      foto: 'https://readdy.ai/api/search-image?query=Professional%20young%20Indonesian%20male%20university%20student%20academic%20coordinator%20in%20formal%20business%20attire%2C%20intellectual%20and%20scholarly%20appearance%2C%20modern%20office%20background%2C%20natural%20lighting%2C%20clean%20corporate%20headshot%20style%2C%20smart%20and%20dedicated%20expression&width=300&height=300&seq=koordinator-akademik&orientation=squarish',
      desc: 'Mengkoordinasikan program-program akademik'
    },
    {
      jabatan: 'Koordinator Kemahasiswaan',
      nama: 'Rina Maharani',
      fakultas: 'Fakultas Psikologi',
      foto: 'https://readdy.ai/api/search-image?query=Professional%20young%20Indonesian%20female%20university%20student%20affairs%20coordinator%20in%20formal%20business%20attire%2C%20energetic%20and%20sociable%20appearance%2C%20modern%20office%20background%2C%20natural%20lighting%2C%20clean%20corporate%20headshot%20style%2C%20enthusiastic%20and%20caring%20expression&width=300&height=300&seq=koordinator-kemahasiswaan&orientation=squarish',
      desc: 'Mengelola kegiatan dan kesejahteraan mahasiswa'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Struktur Organisasi
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tim kepemimpinan BEM yang terdiri dari mahasiswa-mahasiswa terbaik dari berbagai fakultas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {struktur.map((member, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <img 
                src={member.foto}
                alt={member.nama}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover object-top"
              />
              <h3 className="font-bold text-gray-900 text-lg mb-1">{member.nama}</h3>
              <p className="text-blue-600 font-semibold mb-2">{member.jabatan}</p>
              <p className="text-gray-600 text-sm mb-3">{member.fakultas}</p>
              <p className="text-gray-700 text-sm">{member.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Bergabung dengan Kami
          </h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Tertarik untuk menjadi bagian dari BEM? Kami selalu membuka kesempatan bagi mahasiswa yang ingin berkontribusi untuk kemajuan universitas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
              Pelajari Lebih Lanjut
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer">
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
