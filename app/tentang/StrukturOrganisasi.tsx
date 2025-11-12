
'use client';

export default function StrukturOrganisasi() {
  const executiveLeadership = [
  {
    role: "Ketua BEM",
    name: "Ferdinan",
    icon: "👑",
    color: "bg-red-500",
    imageUrl: "/fotopengurus/ferdinan.jpg", // Example image
    description: "",
  },
  {
    role: "Wakil Ketua BEM",
    name: "Adhyaksa Natha Dwi Sembiring",
    icon: "🤝", // Handshake
    color: "bg-red-500",
    imageUrl: "/fotopengurus/aksa.jpg",
    description: "",
  },
];

const operationalRoles = [
  {
    role: "Sekretaris",
    name: "Chyntia Ayu Ramadani",
    icon: "📜",
    color: "bg-gray-700",
    imageUrl: "/fotopengurus/cyntia.jpg",
  },
  {
    role: "Bendahara",
    name: "Defani Pramesti",
    icon: "💰",
    color: "bg-gray-700",
    imageUrl: "/fotopengurus/defani.jpg",
    description: "",
  },
];

const ministries = [
  {
    name: "Event",
    head: "Koordinator",
    headName: "Naisyila Amanda Nasution",
    imageUrl: "/fotopengurus/naisyila.jpg",
    color: "bg-purple-600",
    focus: "",
  },
  {
    name: "Event",
    head: "Anggota",
    headName: "Nayara Azzahra",
    imageUrl: "https://images.unsplash.com/photo-1508214751196-cadf41b18ce0?q=80&w=250&h=250&fit=crop&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "📢",
    color: "bg-purple-600",
    focus: "",
  },

  {
    name: "Public Relation",
    head: "Koordinator",
    headName: "Valentino Yap",
    imageUrl: "/fotopengurus/valentino.jpg",
    icon: "🤝",
    color: "bg-yellow-600",
    focus: "",
  },
  {
    name: "Public Relation",
    head: "Anggota",
    headName: "Dinda Ayu Sukmadana",
    imageUrl: "/fotopengurus/dinda.jpg",
    icon: "🤝",
    color: "bg-yellow-600",
    focus: "",
  },

  {
    name: "Logistik",
    head: "Koordinator",
    headName: "Zio Sultani",
    imageUrl: "/fotopengurus/zio.jpg",
    icon: "📦",
    color: "bg-pink-600",
    focus: "",
  },
  {
    name: "Logistik",
    head: "Anggota",
    headName: "Adryan Pratama",
    imageUrl: "/fotopengurus/adryan.jpg",
    icon: "📦",
    color: "bg-pink-600",
    focus: "",
  },

  {
    name: "Dokumentasi",
    head: "Koordinator",
    headName: "Nur Halisa",
    imageUrl: "/fotopengurus/lisa.jpg",
    icon: "🎨",
    color: "bg-pink-600",
    focus: "",
  },
  {
    name: "Dokumentasi",
    head: "Anggota",
    headName: "Fatia Tri Anisa",
    imageUrl: "/fotopengurus/fatia.jpg",
    color: "bg-pink-600",
    focus: "",
  },
  {
    name: "Dokumentasi",
    head: "Anggota",
    headName: "Frizqy Mahrizal",
    imageUrl: "/fotopengurus/frizqy.jpg",
    color: "bg-pink-600",
    focus: "",
  },
];

  return (
    <div className="max-w-7xl mx-auto">
      <header className="text-center mb-12 pt-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2 tracking-tight">
        Struktur Organisasi BEM UCM Campus Medan
        </h1>
        <p className="text-xl text-red-600 font-medium">
            {new Date().getFullYear()}-{new Date().getFullYear() + 1}
        </p>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8 border-b-2 border-red-500 inline-block mx-auto pb-1">
          Pimpinan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {executiveLeadership.map(({ role, name, icon, color, imageUrl, description }, index) => (
            <div 
              key={index} 
              className={`p-6 ${color} text-white rounded-xl shadow-2xl transition duration-300 transform hover:scale-[1.02] h-full flex flex-col items-center text-center`}
            >
              <div className="flex items-center space-x-4 mb-4 border-b border-white/30 pb-3 w-full justify-center">
                <span className="text-3xl md:text-4xl">{icon}</span>
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">{role}</h3>
              </div>
              <div className="relative w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-md">
                {imageUrl ? (
                  <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
                ) : (
                  <span className="w-full h-full flex items-center justify-center text-6xl text-white/70 bg-white/20">👤</span>
                )}
              </div>
              <p className="text-xl font-semibold mb-2">{name}</p>
              <p className="text-sm opacity-90 italic mb-4">{description}</p>
            </div>
          ))}
        </div>
      </section>
      {/*
      * Visual Connector *
      <div className="connector-line my-6"></div>
      <div className="text-center text-gray-700 font-semibold mb-8">
          The Executive Cabinet
      </div>
        */}

      {/* Section 2: Core Operations (Secretary & Treasurer) */}
      <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8 border-b-2 border-red-500 inline-block mx-auto pb-1">
              Staff Administrasi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
             {operationalRoles.map(({ role, name, icon, color, imageUrl, description }, index) => (
                <div 
                  key={index} 
                  className={`p-6 ${color} text-white rounded-xl shadow-2xl transition duration-300 transform hover:scale-[1.02] h-full flex flex-col items-center text-center`}
                >
                  <div className="flex items-center space-x-4 mb-4 border-b border-white/30 pb-3 w-full justify-center">
                    <span className="text-3xl md:text-4xl">{icon}</span>
                    <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">{role}</h3>
                  </div>
                  <div className="relative w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-md">
                    {imageUrl ? (
                      <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="w-full h-full flex items-center justify-center text-6xl text-white/70 bg-white/20">👤</span>
                    )}
                  </div>
                  <p className="text-xl font-semibold mb-2">{name}</p>
                  <p className="text-sm opacity-90 italic mb-4">{description}</p>
                </div>
              ))}
          </div>
      </section>
      {/*
      Visual Connector
      <div className="connector-line my-6"></div>
      <div className="text-center text-gray-700 font-semibold mb-8">
          Oversight of Ministries & Divisions
      </div>
        */}

      {/* Section 3: Ministries and Operational Divisions */}
      <section className="pb-[20px]">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8 border-b-2 border-red-500 inline-block mx-auto pb-1">
          Divisi
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ministries.map(({ name, head, headName, imageUrl, icon, color, focus }, index) => (
            <div 
              key={index} 
              className="bg-white p-5 rounded-xl shadow-lg border border-gray-100 transition duration-300 hover:shadow-xl hover:border-red-500/30 h-full flex flex-col items-center text-center"
            >
              <div className="flex items-start justify-between mb-3 w-full">
                <h3 className="text-xl font-bold text-gray-800 leading-tight flex-grow text-left">{name}</h3>
                <span className={`text-2xl ${color.replace('bg-', 'text-')}`}>{icon}</span>
              </div>
              <div className="relative w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-2 border-red-500 shadow-sm">
                {imageUrl ? (
                  <img src={imageUrl} alt={headName} className="w-full h-full object-cover" />
                ) : (
                  <span className="w-full h-full flex items-center justify-center text-5xl text-gray-400 bg-gray-100">👤</span>
                )}
              </div>
              <p className="text-sm font-semibold text-red-500 uppercase mb-1">
                {head}
              </p>
              <p className="text-lg font-bold text-gray-800 mb-3">{headName}</p>
              <p className="text-sm text-gray-600 mt-auto">
                 {focus}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}