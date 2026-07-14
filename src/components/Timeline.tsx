'use client';

import { CheckCircle, Trophy, Rocket, Star, Package, Ticket } from 'lucide-react';

export default function Timeline() {
  const timelineEvents = [
    {
      icon: Rocket,
      title: 'Early Bird Registration',
      date: '01 Mei - 30 Juni 2026',
      description: 'Pendaftaran gelombang pertama dibuka! Dapatkan harga spesial Early Bird untuk 5K dan 10K Race sebelum kuota habis.',
      color: '#450099',
      position: 'top' as const,
    },
    {
      icon: Ticket,
      title: 'Regular Registration',
      date: '01 Juli - 31 Oktober 2026',
      description: 'Pendaftaran gelombang kedua dengan harga Normal. Segera amankan slot Anda sebelum pendaftaran ditutup.',
      color: '#6B4EE6',
      position: 'bottom' as const,
    },
    {
      icon: Package,
      title: 'Race Pack Collection',
      date: '06 November - 07 November 2026',
      description: 'Pengambilan Race Pack di Telkom University Surabaya. Berisi BIB Number, Timing Chip, Official Jersey, dan informasi lengkap event.',
      color: '#9C2163',
      position: 'top' as const,
    },
    {
      icon: CheckCircle,
      title: 'Race Day',
      date: '08 November 2026 | 05.00 WIB',
      description: 'Hari H Tel-U Run 2026! Start pukul 05.00 WIB. 5K Race dan 10K Race dengan rute profesional. Sertakan semangat dan energi positif Anda!',
      color: '#FF0020',
      position: 'bottom' as const,
    },
    {
      icon: Trophy,
      title: 'Finish & Awards',
      date: '08 November 2026 | Selesai Race',
      description: 'Pembagian Finisher Medal untuk semua peserta, E-Certificate digital, dan Awarding Ceremony untuk pemenang kategori 5K & 10K Race.',
      color: '#FF0020',
      position: 'top' as const,
    },
  ];

  const renderCard = (event: typeof timelineEvents[0], isTop: boolean) => {
    const Icon = event.icon;
    return (
      <div className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden ${
        isTop ? 'hover:-translate-y-2' : 'hover:translate-y-2'
      }`}>
        <div
          className={`absolute ${isTop ? 'top-0' : 'bottom-0'} left-0 right-0 h-1`}
          style={{ backgroundColor: event.color }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#450099]/5 via-[#9C2163]/5 to-[#FF0020]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="relative p-5">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300"
            style={{ backgroundColor: event.color }}
          >
            <Icon className="text-white" size={20} />
          </div>
          <h3 className="text-sm font-bold mb-1.5 text-gray-900 group-hover:text-[#450099] transition-colors duration-300 leading-tight">
            {event.title}
          </h3>
          <div className="text-[11px] font-bold mb-2" style={{ color: event.color }}>
            {event.date}
          </div>
          <p className="text-gray-600 text-[11px] leading-relaxed">
            {event.description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section id="timeline" className="py-16 lg:py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#450099]/10 to-[#FF0020]/10 rounded-full mb-4 mx-auto">
            <Star size={18} className="text-[#FF0020]" />
            <span className="text-sm font-semibold text-[#450099]">Jadwal Acara</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#450099] via-[#9C2163] to-[#FF0020]">
              Timeline Event
            </span>
          </h2>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Ikuti setiap tahapan persiapan hingga hari perayaan Tel-U Run 2026
          </p>
        </div>

        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="grid grid-cols-5 gap-5 mb-0">
            {timelineEvents.map((event, index) => {
              const isTop = event.position === 'top';
              return (
                <div key={`top-${index}`} className="flex flex-col items-center">
                  {isTop ? (
                    <>
                      <div className="w-full animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                        {renderCard(event, true)}
                      </div>
                      <div className="w-0.5 h-6 opacity-30" style={{ backgroundColor: event.color }}></div>
                    </>
                  ) : (
                    <div className="w-full" />
                  )}
                </div>
              );
            })}
          </div>

          <div className="relative grid grid-cols-5 gap-5 items-center py-2">
            <div className="absolute top-1/2 left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-[#450099] via-[#9C2163] to-[#FF0020] transform -translate-y-1/2 opacity-30 rounded-full z-0"></div>

            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              return (
                <div key={`node-${index}`} className="flex justify-center relative z-10">
                  <div className="relative group">
                    <div
                      className="absolute -inset-1 rounded-full opacity-20 blur-sm group-hover:opacity-40 transition-opacity duration-300"
                      style={{ backgroundColor: event.color }}
                    ></div>
                    <div
                      className="relative w-12 h-12 rounded-full flex items-center justify-center shadow-xl border-[3px] border-white cursor-default hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: event.color }}
                    >
                      <Icon className="text-white" size={20} />
                    </div>
                    <div
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold border-2 border-white shadow-md"
                      style={{ backgroundColor: event.color }}
                    >
                      {index + 1}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-5 gap-5 mt-0">
            {timelineEvents.map((event, index) => {
              const isTop = event.position === 'top';
              return (
                <div key={`bottom-${index}`} className="flex flex-col items-center">
                  {!isTop ? (
                    <>
                      <div className="w-0.5 h-6 opacity-30" style={{ backgroundColor: event.color }}></div>
                      <div className="w-full animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                        {renderCard(event, false)}
                      </div>
                    </>
                  ) : (
                    <div className="w-full" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:hidden relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#450099] via-[#9C2163] to-[#FF0020] opacity-30 rounded-full"></div>

          <div className="space-y-8">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              return (
                <div
                  key={index}
                  className="relative pl-24 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute left-0 top-0">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: event.color }}
                    >
                      <Icon className="text-white" size={28} />
                    </div>
                  </div>

                  <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1"
                      style={{ backgroundColor: event.color }}
                    ></div>
                    <div className="relative p-5">
                      <h3 className="text-lg font-bold mb-1.5 text-gray-900 group-hover:text-[#450099] transition-colors duration-300">
                        {event.title}
                      </h3>
                      <div className="text-sm font-bold mb-2" style={{ color: event.color }}>
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
      </div>
    </section>
  );
}