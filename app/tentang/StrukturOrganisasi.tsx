'use client';
import { NextResponse } from "next/server";
import { useEffect, useState } from "react";
import anggota from "@/app/staff_organization.json"

export default function StrukturOrganisasi() {
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
             {anggota.map((ang: any) => (
                <div  
                  className={`p-6 bg-[#060771] text-white rounded-xl shadow-2xl transition duration-300 transform hover:scale-[1.02] h-full flex flex-col items-center text-center`}
                >
                  <div className="flex items-center space-x-4 mb-4 border-b border-white/30 pb-3 w-full justify-center">
                    <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">{ang.role}</h3>
                  </div>
                  <div className="relative w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-md">
                    {ang.imageUrl ? (
                      <img src={ang.imageUrl} alt={ang.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="w-full h-full flex items-center justify-center text-6xl text-white/70 bg-white/20">👤</span>
                    )}
                  </div>
                  <p className="text-xl font-semibold mb-2">{ang.name}</p>
                  <p className="text-sm opacity-90 italic mb-4">{ang.description}</p>
                </div>
              ))}
          </div>
      </section>
    </div>
  );
}