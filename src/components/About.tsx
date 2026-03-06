'use client';

import { 
  Trophy, 
  Users, 
  Target, 
  Star, 
  MapPin, 
  Calendar, 
  Clock, 
  Zap,
  Medal,
} from 'lucide-react';

export default function About() {
  const raceValues = [
    {
      icon: Target,
      title: 'Rute Menantang',
      description: 'Lintasan yang dirancang profesional untuk menguji kemampuan dan daya tahan pelari',
      gradient: 'from-[#450099] to-[#9C2163]',
    },
    {
      icon: Zap,
      title: 'Timing Profesional',
      description: 'Sistem chip timing akurat untuk mencatat hasil race resmi setiap peserta',
      gradient: 'from-[#9C2163] to-[#FF0020]',
    },
    {
      icon: Users,
      title: 'Komunitas Solid',
      description: 'Bergabung dengan ribuan pelari dari berbagai latar belakang dalam satu semangat',
      gradient: 'from-[#450099] to-[#FF0020]',
    },
    {
      icon: Trophy,
      title: 'Penghargaan Bergengsi',
      description: 'Kesempatan meraih podium, medali, dan pengakuan atas pencapaian terbaik Anda',
      gradient: 'from-[#FF0020] to-[#450099]',
    },
  ];

  const youtubeVideoId = '8kQkLf3BuzY';

  const eventInfo = {
    date: '02 Agustus 2026',
    time: '06.00 WIB',
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
                <span className="text-sm font-semibold text-[#450099]">About The Race</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#450099] via-[#9C2163] to-[#FF0020]">
                  Tel-U Run 2026
                </span>
              </h2>
              
              <p className="text-lg text-gray-700 mb-4 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Tel-U Run adalah <strong>official running race</strong> yang diselenggarakan oleh 
                Telkom University Surabaya. Event ini menghadirkan pengalaman lari kompetitif 
                dengan rute menantang, sistem timing profesional, dan atmosfer komunitas yang solid.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Bukan sekadar lari. Ini adalah tentang <strong>menantang batas diri</strong>, 
                <strong>meraih target pribadi</strong>, dan <strong>merayakan pencapaian </strong> 
                bersama ribuan pelari lainnya.
              </p>
            </div>

            <div className="space-y-4">
              {raceValues.map((value, index) => (
                <div
                  key={index}
                  className="group relative flex gap-5 p-5 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-100 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  <div className="relative flex-shrink-0">
                    <div className={`w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="text-white" size={28} />
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-[#450099] transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-[#450099]/3 via-[#9C2163]/3 to-[#FF0020]/3"></div>
              
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
                      <Medal size={20} className="text-[#FF0020]" />
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#450099]/5 to-[#FF0020]/5 rounded-xl p-4 border border-gray-100 mb-4">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Saksikan momen inspiratif dari Tel-U Run 2026. 
                    Bergabunglah bersama ribuan pelari dalam pengalaman race yang tak terlupakan!
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-[#450099]/5 to-[#FF0020]/5 rounded-lg">
                    <Calendar className="text-[#450099] flex-shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="text-xs text-gray-500">Race Day</p>
                      <p className="font-semibold text-gray-900">{eventInfo.date}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-[#450099]/5 to-[#FF0020]/5 rounded-lg">
                    <Clock className="text-[#450099] flex-shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="text-xs text-gray-500">Start Time</p>
                      <p className="font-semibold text-gray-900">{eventInfo.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-[#450099]/5 to-[#FF0020]/5 rounded-lg">
                    <MapPin className="text-[#450099] flex-shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="text-xs text-gray-500">Start Line</p>
                      <p className="font-semibold text-gray-900">{eventInfo.location}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 mt-4">
                  <div className="w-6 h-1 bg-gradient-to-r from-[#450099] to-[#FF0020] rounded-full"></div>
                  <span className="text-xs font-semibold text-[#450099]">Ready to Run?</span>
                  <div className="w-6 h-1 bg-gradient-to-r from-[#450099] to-[#FF0020] rounded-full"></div>
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