'use client';

import { Activity, Users, Clock, MapPin, Star, Tag, Calendar, ArrowRight, Footprints, Mountain, Heart, Lock } from 'lucide-react';
import Image from 'next/image'; 

export default function Events() {
  const registrationLink = 'https://galanesia.com/events/tel-u-run-2026/';
  const isRegistrationClosed = true; // Status pendaftaran
  
  const races = [
    {
      icon: Heart,
      title: '2.5K Post-Stroke Walk',
      shortDesc: 'Kategori inklusif & recovery',
      description:
        'Kategori walking 2.5 kilometer yang dirancang khusus untuk penyintas stroke dan pemulihan, dengan dukungan teknologi Picobot dan rute yang aman.',
      badge: 'Inclusive',
      badgeColor: 'bg-[#450099]',
      difficulty: 'Easy',
      distance: '2.5 Kilometer',
      price: {
        original: 'Rp0',
        earlyBird: 'Rp0',
        earlyBirdPeriod: '01 Mei - 30 June 2026',
        discount: 'Hemat 20%',
      },
      gradient: 'from-[#450099] via-[#6B4EE6] to-[#9C2163]',
      eventTime: '06.00-10:00',
      location: 'Tel-U Surabaya',
      features: [
        { icon: Footprints, label: 'Rute Aman' },
        { icon: Clock, label: 'Cut-off 1.5 Jam' },
      ],
    },
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
        original: 'Rp450.000',
        earlyBird: 'Rp350.000',
        earlyBirdPeriod: '01 Mei - 30 June 2026',
        discount: 'Hemat 22%',
      },
      gradient: 'from-[#9C2163] via-[#FF0020] to-[#450099]',
      eventTime: '05.00-10:00',
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
        original: 'Rp550.000',
        earlyBird: 'Rp450.000',
        earlyBirdPeriod: '01 Mei - 30 June 2026',
        discount: 'Hemat 18%',
      },
      gradient: 'from-[#450099] via-[#9C2163] to-[#FF0020]',
      eventTime: '05.00-12:00', // ✅ Incoming (lebih realistis untuk race 10K + cut-off 3 jam)
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
      '2.5K Post-Stroke Walk': '/images/events/run2.5k.jpg',
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
            Tel-U Run 2026 menghadirkan tiga kategori race termasuk kategori inklusif 2.5K untuk recovery. Pilih jarak yang sesuai dengan kemampuan dan target pribadi Anda!
          </p>

          {isRegistrationClosed && (
            <div className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-full font-semibold shadow-lg">
              <Lock size={20} />
              <span>Registration Closed</span>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {races.map((race, index) => {
            const imagePath = getImagePath(race.title);

            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col ${
                  isRegistrationClosed ? 'opacity-75' : 'hover:-translate-y-1'
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${race.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                ></div>

                {isRegistrationClosed && (
                  <div className="absolute inset-0 bg-gray-900/5 z-20 pointer-events-none"></div>
                )}

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

                  <div className="absolute top-4 right-4 z-10 pointer-events-none flex gap-2">
                    <span
                      className={`${race.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1`}
                    >
                      <Tag size={12} />
                      {race.badge}
                    </span>
                    {isRegistrationClosed && (
                      <span className="bg-gray-800 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                        <Lock size={12} />
                        Closed
                      </span>
                    )}
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

                  {/* ✅ HEAD: Box harga dengan state grayscale saat closed */}
                  <div className={`mb-6 p-4 bg-gradient-to-r from-[#450099]/5 to-[#FF0020]/5 rounded-xl border border-[#450099]/10 flex-shrink-0 ${
                    isRegistrationClosed ? 'opacity-60 grayscale' : ''
                  }`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="text-[#450099]" size={16} />
                        <span className="text-xs font-medium text-gray-600">Early Bird Price</span>
                      </div>
                      {/* ✅ HEAD: Badge diskon hanya muncul saat registration open */}
                      {race.price.discount && !isRegistrationClosed && (
                        <span className="text-xs px-2.5 py-1 bg-[#FF0020]/10 text-[#FF0020] font-bold rounded-full border border-[#FF0020]/20">
                          🔥 {race.price.discount}
                        </span>
                      )}
                    </div>
                    
                    {/* ✅ HEAD: Harga berubah abu-abu saat closed */}
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className={`text-3xl font-bold ${isRegistrationClosed ? 'text-gray-400' : 'text-[#FF0020]'}`}>
                        {race.price.earlyBird}
                      </span>
                      <span className="text-lg text-gray-400 line-through font-medium">
                        {race.price.original}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-500">
                        * Sudah termasuk Race Pack & benefit
                      </span>
                      <span className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-500 rounded">
                        {race.price.earlyBirdPeriod}
                      </span>
                    </div>
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
                    {isRegistrationClosed ? (
                      <button
                        disabled
                        className="group relative flex items-center justify-center gap-2 w-full py-3.5 bg-gray-300 text-gray-500 font-bold rounded-xl cursor-not-allowed overflow-hidden"
                      >
                        <Lock className="flex-shrink-0" size={18} />
                        <span className="relative z-10 flex items-center gap-2">
                          Pendaftaran Ditutup
                        </span>
                      </button>
                    ) : (
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
                    )}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#450099] via-[#9C2163] to-[#FF0020] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {isRegistrationClosed && (
          <div className="mt-12 text-center animate-fade-in-up">
            <div className="inline-block p-6 bg-gradient-to-r from-[#450099]/10 via-[#9C2163]/10 to-[#FF0020]/10 rounded-2xl border border-[#450099]/20">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Terima Kasih atas Antusiasme Anda!
              </h3>
              <p className="text-gray-600 max-w-xl">
                Pendaftaran Tel-U Run 2026 telah ditutup. Tetap ikuti informasi kami untuk event-event menarik selanjutnya.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}