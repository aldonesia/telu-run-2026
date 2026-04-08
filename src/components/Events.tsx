'use client';

import { Activity, Users, Clock, MapPin, Star, Tag, Calendar, ArrowRight, Footprints, Mountain } from 'lucide-react';
import Image from 'next/image'; 

export default function Events() {
  const registrationLink = 'https://galanesia.com/events/tel-u-run-2026/';
  
  const races = [
    {
      icon: Users,
      title: '5K Race',
      shortDesc: 'Cocok untuk pemula & family',
      description:
        'Race lari 5 kilometer dengan rute yang ramah untuk pelari pemula, keluarga, atau siapa saja yang ingin memulai gaya hidup aktif.',
      badge: 'All Levels',
      badgeColor: 'bg-[#9C2163]',
      difficulty: 'Easy',
      distance: '5 Kilometer',
      price: {
        earlyBird: 'Rp350.000',
        earlyBirdPeriod: '09 Maret - 31 Mei 2026',
      },
      gradient: 'from-[#9C2163] via-[#FF0020] to-[#450099]',
      eventTime: '06:00-12:00',
      location: 'Tel-U Surabaya',
      features: [
        { icon: Footprints, label: 'Rute Datar' },
        { icon: Clock, label: 'Cut-off 2 Jam' },
      ],
    },
    {
      icon: Activity,
      title: '10K Race',
      shortDesc: 'Untuk pelari berpengalaman',
      description:
        'Race lari 10 kilometer dengan rute menantang untuk menguji kecepatan, strategi, dan ketahanan pelari berpengalaman.',
      badge: 'Competitive',
      badgeColor: 'bg-[#FF0020]',
      difficulty: 'Intermediate',
      distance: '10 Kilometer',
      price: {
        earlyBird: 'Rp450.000',
        earlyBirdPeriod: '09 Maret - 31 Mei 2026',
      },
      gradient: 'from-[#450099] via-[#9C2163] to-[#FF0020]',
      eventTime: '06:00-12:00',
      location: 'Tel-U Surabaya',
      features: [
        { icon: Mountain, label: 'Rute Menantang' },
        { icon: Clock, label: 'Cut-off 3 Jam' },
      ],
    },
  ];

  const getImagePath = (title: string) => {
    const map: Record<string, string> = {
      '10K Race': '/images/events/run10k.jpg',
      '5K Race': '/images/events/run5k.jpg',
    };
    return map[title] || '/images/events/run5k.jpg';
  };

  return (
    <section id="events" className="py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#450099]/10 to-[#FF0020]/10 rounded-full mb-4 mx-auto">
            <Star size={18} className="text-[#FF0020]" />
            <span className="text-sm font-semibold text-[#450099]">
              Race Categories
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#450099] via-[#9C2163] to-[#FF0020]">
              Pilih Kategori Race
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Tel-U Run 2026 menghadirkan dua kategori race. Pilih jarak yang sesuai dengan kemampuan dan target pribadi Anda!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {races.map((race, index) => {
            const imagePath = getImagePath(race.title);

            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1 border border-gray-100 flex flex-col"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${race.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                ></div>

                <div className="h-48 relative overflow-hidden flex-shrink-0">
                  <Image
                    src={imagePath}
                    alt={race.title}
                    fill
                    className="object-cover object-center"
                    priority={index === 0}
                  />
                  
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${race.gradient} opacity-60 pointer-events-none`}
                  ></div>

                  <div className="absolute top-4 right-4 z-10 pointer-events-none">
                    <span
                      className={`${race.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1`}
                    >
                      <Tag size={12} />
                      {race.badge}
                    </span>
                  </div>

                  <div className="flex items-center justify-center h-full relative z-10 pointer-events-none">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/40">
                      <race.icon className="text-white" size={48} />
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#450099] transition-colors duration-300">
                      {race.title}
                    </h3>
                    <p className="text-sm text-[#9C2163] font-medium mt-1">
                      {race.shortDesc}
                    </p>
                  </div>

                  <p className="text-gray-600 mb-5 leading-relaxed text-sm">
                    {race.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-5">
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-semibold rounded-lg">
                      📏 {race.distance}
                    </span>
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-semibold rounded-lg">
                      ⏱️ {race.features[1].label}
                    </span>
                    <span className={`px-3 py-1.5 text-xs font-semibold rounded-lg ${
                      race.difficulty === 'Easy' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      {race.difficulty}
                    </span>
                  </div>

                  <div className="mb-6 p-4 bg-gradient-to-r from-[#450099]/5 to-[#FF0020]/5 rounded-xl border border-[#450099]/10 flex-shrink-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="text-[#450099]" size={16} />
                        <span className="text-xs font-medium text-gray-600">Early Bird</span>
                      </div>
                      <span className="text-xs px-2 py-1 bg-[#FF0020]/10 text-[#FF0020] font-semibold rounded-full">
                        {race.price.earlyBirdPeriod}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-[#FF0020]">
                        {race.price.earlyBird}
                      </span>
                      <span className="text-xs text-gray-500">IDR</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      * Sudah termasuk Race Pack & benefit lengkap
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-6 pb-4 border-b border-gray-100 flex-shrink-0">
                    <div className="flex items-center gap-1.5">
                      <Clock size={16} className="text-[#9C2163] flex-shrink-0" />
                      <span className="font-medium">{race.eventTime} WIB</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={16} className="text-[#450099] flex-shrink-0" />
                      <span className="font-medium">{race.location}</span>
                    </div>
                  </div>

                  <div className="mt-auto relative z-10">
                    <a
                      href={registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-[#450099] via-[#9C2163] to-[#FF0020] text-white font-bold rounded-xl hover:from-[#450099]/90 hover:via-[#9C2163]/90 hover:to-[#FF0020]/90 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] overflow-hidden"
                    >
                      <span className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                      
                      <span className="relative z-10 flex items-center gap-2">
                        Daftar Sekarang
                        <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
                      </span>
                    </a>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#450099] via-[#9C2163] to-[#FF0020] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}