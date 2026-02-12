'use client';

import { Heart, Users, Target, Star, Lightbulb, Zap, MapPin, Calendar, Clock } from 'lucide-react';

export default function About() {
  const goals = [
    {
      icon: Heart,
      title: 'Bergerak lebih sehat',
      description: 'Menginspirasi masyarakat untuk menjalani gaya hidup sehat',
      gradient: 'from-[#450099] to-[#9C2163]',
    },
    {
      icon: Users,
      title: 'Belajar hal baru',
      description: 'Menciptakan ruang pertemuan untuk mempererat hubungan antar komunitas',
      gradient: 'from-[#9C2163] to-[#FF0020]',
    },
    {
      icon: Target,
      title: 'Bertemu komunitas inspiratif',
      description: 'Terbuka untuk semua kalangan tanpa batasan usia dan latar belakang',
      gradient: 'from-[#450099] to-[#FF0020]',
    },
    {
      icon: Lightbulb,
      title: 'Mengenal inovasi yang berdampak nyata',
      description: 'Menjelajahi teknologi dan inovasi yang dapat mengubah hidup sehari-hari',
      gradient: 'from-[#FF0020] to-[#450099]',
    },
    {
      icon: Zap,
      title: 'Mengalami festival yang berbeda dari biasanya',
      description: 'Menikmati pengalaman unik yang menggabungkan gerak dan gagasan',
      gradient: 'from-[#9C2163] to-[#450099]',
    },
  ];

  const youtubeVideoId = '8kQkLf3BuzY';

  // Event Information
  const eventInfo = {
    date: '07 Desember 2026',
    time: '06.00 - 11.00 WIB',
    location: 'Telkom University Surabaya',
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div className="text-center lg:text-left mb-8">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#450099]/10 to-[#FF0020]/10 rounded-full mb-4 mx-auto lg:mx-0">
                <Star size={18} className="text-[#FF0020]" />
                <span className="text-sm font-semibold text-[#450099]">Tentang Kami</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#450099] via-[#9C2163] to-[#FF0020]">
                  Tel-U Run 2026
                </span>
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Festival ini menghadirkan pengalaman unik yang menggabungkan aktivitas fisik, edukasi, dan inovasi teknologi dalam satu rangkaian acara yang seru, interaktif, dan penuh inspirasi.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Bukan sekadar fun run. Bukan sekadar pameran teknologi.
                Ini adalah pertemuan antara gerak dan gagasan.
              </p>
            </div>

            <div className="space-y-4">
              {goals.map((goal, index) => (
                <div
                  key={index}
                  className="group relative flex gap-5 p-5 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${goal.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  <div className="relative flex-shrink-0">
                    <div className={`w-14 h-14 bg-gradient-to-br ${goal.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <goal.icon className="text-white" size={28} />
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-[#450099] transition-colors duration-300">
                      {goal.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {goal.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-[#450099]/3 via-[#9C2163]/3 to-[#FF0020]/3"></div>
              
              {/* YouTube Video */}
              <div className="relative aspect-video bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${youtubeVideoId}&rel=0&modestbranding=1`}
                  title="Tel-U Run 2026 Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">
                      Telkom University Surabaya
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Official Tel-U Run 2026 Partner
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[#FF0020]/10 rounded-full flex items-center justify-center">
                      <Star size={20} className="text-[#FF0020]" />
                    </div>
                  </div>
                </div>

                {/* Saksikan Momen */}
                <div className="bg-gradient-to-r from-[#450099]/5 to-[#FF0020]/5 rounded-xl p-4 border border-gray-100 mb-4">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Saksikan momen seru dan inspiratif dari Tel-U Run 2026 yang diselenggarakan 
                    bekerja sama dengan Telkom University Surabaya. Bergabunglah bersama kami 
                    dalam perayaan gerakan dan kebersamaan!
                  </p>
                </div>

                {/* Event Info - Simple & Clean */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-[#450099]/5 to-[#FF0020]/5 rounded-lg">
                    <Calendar className="text-[#450099] flex-shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="text-xs text-gray-500">Tanggal</p>
                      <p className="font-semibold text-gray-900">{eventInfo.date}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-[#450099]/5 to-[#FF0020]/5 rounded-lg">
                    <Clock className="text-[#450099] flex-shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="text-xs text-gray-500">Waktu</p>
                      <p className="font-semibold text-gray-900">{eventInfo.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-[#450099]/5 to-[#FF0020]/5 rounded-lg">
                    <MapPin className="text-[#450099] flex-shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="text-xs text-gray-500">Lokasi</p>
                      <p className="font-semibold text-gray-900">{eventInfo.location}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 mt-4">
                  <div className="w-6 h-1 bg-gradient-to-r from-[#450099] to-[#FF0020] rounded-full"></div>
                  <span className="text-xs font-semibold text-[#450099]">Watch & Join Us</span>
                  <div className="w-6 h-1 bg-gradient-to-r from-[#450099] to-[#FF0020] rounded-full"></div>
                </div>
              </div>

              <div className="absolute inset-0 opacity-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#450099] via-[#9C2163] to-[#FF0020] rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5 3l14 9-14 9V3z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#450099] to-[#FF0020] rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-gradient-to-br from-[#9C2163] to-[#FF0020] rounded-full blur-2xl opacity-30 animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}