'use client';

import { 
  Trophy, 
  Clock, 
  Package, 
  Medal, 
  Route, 
  ShieldCheck,
  Star 
} from 'lucide-react';

export default function WhatYouWillFind() {
  const raceItems = [
    {
      icon: Route,
      title: '5K Race',
      description: 'Lintasan 5 kilometer yang menantang, cocok untuk pemula maupun pelari berpengalaman.',
      gradient: 'from-[#450099] to-[#9C2163]',
      badge: 'All Levels',
    },
    {
      icon: Trophy,
      title: '10K Race',
      description: 'Tantangan 10 kilometer dengan rute profesional untuk menguji ketahanan dan kecepatan.',
      gradient: 'from-[#9C2163] to-[#FF0020]',
      badge: 'Competitive',
    },
    {
      icon: Clock,
      title: 'Professional Timing',
      description: 'Sistem chip timing akurat untuk mencatat hasil race resmi dan personal best Anda.',
      gradient: 'from-[#450099] to-[#FF0020]',
      badge: 'Official',
    },
    {
      icon: Package,
      title: 'Complete Race Pack',
      description: 'Dapatkan BIB Number, timing chip, race kit, dan merchandise eksklusif peserta.',
      gradient: 'from-[#FF0020] to-[#9C2163]',
      badge: 'Included',
    },
  ];

  const benefits = [
    { icon: Medal, label: 'Finisher Medal', desc: 'Untuk semua peserta yang menyelesaikan race' },
    { icon: Star, label: 'E-Certificate', desc: 'Sertifikat digital sebagai bukti pencapaian' },
    { icon: ShieldCheck, label: 'Medical Support', desc: 'Tim medis dan pos bantuan di sepanjang rute' },
    { icon: Trophy, label: 'Awards & Prizes', desc: 'Trofi dan hadiah untuk kategori pemenang' },
  ];

  return (
    <section id="experience" className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#450099]/10 to-[#FF0020]/10 rounded-full mb-4">
            <Star size={18} className="text-[#FF0020]" />
            <span className="text-sm font-semibold text-[#450099]">
              Race Experience
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#450099] via-[#9C2163] to-[#FF0020]">
              Apa yang Anda Dapatkan?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Tel-U Run 2026 menghadirkan pengalaman lari kompetitif dengan standar profesional, 
            benefit eksklusif, dan atmosfer komunitas yang solid.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {raceItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:-translate-y-1"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
              ></div>

              {item.badge && (
                <span className="absolute top-4 right-4 px-2.5 py-1 bg-[#450099]/10 text-[#450099] text-xs font-semibold rounded-full">
                  {item.badge}
                </span>
              )}

              <div
                className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon className="text-white" size={28} />
              </div>

              <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-[#450099] transition-colors duration-300">
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