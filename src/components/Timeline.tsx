'use client';

import { Calendar, CheckCircle, Trophy, Rocket, Star } from 'lucide-react';

export default function Timeline() {
  const timelineEvents = [
    {
      icon: Rocket,
      title: 'Open Registration',
      date: '1 Desember 2025 - 15 Februari 2026',
      description: 'Pendaftaran dibuka untuk Fun Run 5K dan Fun Walk 3K. Dapatkan harga early bird jika mendaftar sebelum 10 Januari 2026!',
      status: 'completed',
      color: '#450099',
    },
    {
      icon: Calendar,
      title: 'Race Pack Collection',
      date: '20 - 25 Februari 2026',
      description: 'Pengambilan race pack di Telkom University Surabaya. Race pack berisi BIB number, goodie bag, merchandise eksklusif, dan informasi lengkap event.',
      status: 'current',
      color: '#9C2163',
    },
    {
      icon: CheckCircle,
      title: 'Event Day',
      date: '28 Februari 2026',
      description: 'Hari H Tel-U Run 2026! Start pukul 06.00 WIB. Fun Run 5K, Fun Walk 3K, dan Community Activity. Sertakan semangat dan energi positif Anda!',
      status: 'upcoming',
      color: '#FF0020',
    },
    {
      icon: Trophy,
      title: 'Awarding Ceremony',
      date: '28 Februari 2026 (11.00 WIB)',
      description: 'Pengumuman pemenang, pembagian medali finisher, sertifikat digital, dan doorprize menarik. Semua peserta berhak mendapatkan merchandise eksklusif.',
      status: 'upcoming',
      color: '#FF0020',
    },
  ];

  return (
    <section id="timeline" className="py-16 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#450099]/10 to-[#FF0020]/10 rounded-full mb-4 mx-auto">
            <Star size={18} className="text-[#FF0020]" />
            <span className="text-sm font-semibold text-[#450099]">Jadwal Acara</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#450099] via-[#9C2163] to-[#FF0020]">
              Perjalanan Kami
            </span>
          </h2>
          
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Ikuti setiap tahapan persiapan hingga hari perayaan Tel-U Run 2026
          </p>
        </div>

        <div className="hidden lg:block relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#450099] via-[#9C2163] to-[#FF0020] transform -translate-y-1/2 opacity-30"></div>

          <div className="grid grid-cols-4 gap-8 relative">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              return (
                <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`pt-12 ${index % 2 === 0 ? 'pb-6' : ''}`}>
                    <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#450099]/5 via-[#9C2163]/5 to-[#FF0020]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative p-6">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`} style={{ backgroundColor: event.color }}>
                          <Icon className="text-white" size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#450099] transition-colors duration-300">
                          {event.title}
                        </h3>
                        <div className="text-sm font-bold mb-3" style={{ color: event.color }}>
                          {event.date}
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:hidden relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#450099] via-[#9C2163] to-[#FF0020] opacity-30"></div>

          <div className="space-y-8">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              return (
                <div key={index} className="relative pl-24 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="absolute left-5 top-8 transform -translate-x-1/2">
                    <div className="relative">
                      <div className={`w-8 h-8 bg-gradient-to-br from-[#450099] via-[#9C2163] to-[#FF0020] rounded-full border-4 border-white shadow-lg ${event.status === 'current' ? 'animate-pulse' : ''}`}></div>
                      <div className="absolute inset-0 bg-white/20 rounded-full blur-sm animate-ping"></div>
                    </div>
                  </div>

                  <div className="absolute left-0 top-0">
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center shadow-lg`} style={{ backgroundColor: event.color }}>
                      <Icon className="text-white" size={32} />
                    </div>
                  </div>

                  <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                    <div className="relative p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#450099] transition-colors duration-300">
                        {event.title}
                      </h3>
                      <div className="text-sm font-bold mb-3" style={{ color: event.color }}>
                        {event.date}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center gap-8 mt-8 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#450099] rounded-full"></div>
            <span className="text-sm text-gray-700 font-medium">Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#9C2163] rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-700 font-medium">In Progress</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#FF0020] rounded-full"></div>
            <span className="text-sm text-gray-700 font-medium">Upcoming</span>
          </div>
        </div>
      </div>
    </section>
  );
}