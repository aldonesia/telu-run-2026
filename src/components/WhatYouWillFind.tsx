'use client';

import { Flag, Microscope, Handshake, PartyPopper } from 'lucide-react';

export default function WhatYouWillFind() {
  const items = [
    {
      icon: Flag,
      title: 'Fun Run & Fun Walk',
      description:
        'Rasakan keseruan olahraga bersama dalam suasana penuh energi dan kebersamaan.',
      gradient: 'from-[#450099] to-[#9C2163]',
    },
    {
      icon: Microscope,
      title: 'Pameran Riset & Teknologi Terapan',
      description:
        'Eksplorasi inovasi terbaru dari mahasiswa dan kolaborasi akademik yang inspiratif.',
      gradient: 'from-[#9C2163] to-[#FF0020]',
    },
    {
      icon: Handshake,
      title: 'Booth Inovasi & Kolaborasi Industri',
      description:
        'Temukan berbagai booth interaktif dari mitra industri dan komunitas kreatif.',
      gradient: 'from-[#450099] to-[#FF0020]',
    },
    {
      icon: PartyPopper,
      title: 'Hiburan & Aktivitas Komunitas',
      description:
        'Nikmati hiburan seru, games, dan aktivitas komunitas yang membuat event semakin meriah.',
      gradient: 'from-[#FF0020] to-[#9C2163]',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#450099]/10 to-[#FF0020]/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-[#450099]">
              ✨ Event Experience
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#450099] via-[#9C2163] to-[#FF0020]">
              Apa yang Bisa Kamu Temukan?
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tel-U Run 2026 bukan hanya tentang berlari, tetapi juga tentang
            inovasi, kolaborasi, dan pengalaman komunitas yang menyenangkan.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:-translate-y-2"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
              ></div>

              <div
                className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon className="text-white" size={30} />
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#450099] transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
