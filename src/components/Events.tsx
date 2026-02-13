'use client';

import { Activity, Users, Package, Award, Clock, MapPin, Star, User, Timer, Tag } from 'lucide-react';
import Image from 'next/image'; 

export default function Events() {
  const events = [
    {
      icon: Activity,
      title: 'Fun Run 5K',
      description: 'Lari santai 5 kilometer untuk semua level. Nikmati suasana ceria sambil berolahraga bersama komunitas Telkom University.',
      badge: 'Terbatas',
      badgeColor: 'bg-[#FF0020]',
      price: {
        earlyBird: 'Rp 120.000',
        normal: 'Rp 170.000',
        quota: '9 Kuota'
      },
      requirements: [
        'Usia 12-65 Tahun',
        'Cut Off Time: 2 Jam',
        'Medali Finisher'
      ],
      gradient: 'from-[#450099] via-[#9C2163] to-[#FF0020]',
      link: 'https://tel-u.ac.id/funrun',
      isExternal: true,
    },
    {
      icon: Users,
      title: 'Fun Walk 3K',
      description: 'Jalan santai 3 kilometer yang ramah untuk keluarga. Cocok untuk semua usia dan tingkat kebugaran serta nikmati suasana ceria.',
      badge: 'Terbatas',
      badgeColor: 'bg-[#9C2163]',
      price: {
        earlyBird: 'Rp 170.000',
        normal: 'Rp 200.000',
        quota: '9 Kuota'
      },
      requirements: [
        'Anak 1-5 Tahun (Ditemani 1 Orang Tua)',
        'Cut Off Time: 1 Jam',
        'E-Certificate'
      ],
      gradient: 'from-[#9C2163] via-[#FF0020] to-[#450099]',
      link: 'https://tel-u.ac.id/funwalk',
      isExternal: true,
    },
    {
      icon: Package,
      title: 'Paket Bundling',
      description: 'Hemat dengan paket bundling untuk 3 orang! Cocok untuk keluarga atau teman-teman yang ingin berpartisipasi bersama.',
      badge: 'Terbatas',
      badgeColor: 'bg-[#450099]',
      price: {
        bundle: 'Rp 350.000',
        details: '2 Fun Run + 1 Fun Walk',
        savings: 'Hemat Rp 60.000!'
      },
      requirements: [
        '3 Peserta Fun Run 5K',
        'Cut Off Time: 2 Jam',
        'Daftar Bersama'
      ],
      gradient: 'from-[#FF0020] via-[#450099] to-[#9C2163]',
       link: 'https://tel-u.ac.id/funrun',
      isExternal: true,
    },
  ];

  const getImagePath = (title: string) => {
    const map: Record<string, string> = {
      'Fun Run 5K': '/images/events/funrun.jpg', 
      'Fun Walk 3K': '/images/events/funwalk.jpg', 
      'Paket Bundling': '/images/events/group_photo.jpg', 
    };
    return map[title] || '/images/events/community.jpg';
  };

  return (
    <section id="events" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#450099]/10 to-[#FF0020]/10 rounded-full mb-4 mx-auto">
            <Star size={18} className="text-[#FF0020]" />
            <span className="text-sm font-semibold text-[#450099]">Kategori Event</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#450099] via-[#9C2163] to-[#FF0020]">
              Pilih Kategori Kamu
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Pilih kategori yang sesuai dengan minat dan kemampuan Anda. 
            Semua kategori dirancang untuk memberikan pengalaman yang menyenangkan!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => {
            const eventLink = event.link;


            const imagePath = getImagePath(event.title);

            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2 border border-gray-100"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="h-52 relative overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      src={imagePath}
                      alt={`${event.title} Background`}
                      fill
                      className="object-cover object-center"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  
                  <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-70`}></div>
                  
                  <div className="relative h-full">
                    <div className="absolute top-4 right-4 z-10">
                      <span className={`${event.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1`}>
                        <Tag size={12} />
                        {event.badge}
                      </span>
                    </div>

                    <div className="flex items-center justify-center h-full relative">
                      <div className="absolute w-32 h-32 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
                      <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-white/30">
                        <event.icon className="text-white" size={48} />
                      </div>
                    </div>

                    <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/10 rounded-full"></div>
                    <div className="absolute -top-8 -left-8 w-20 h-20 bg-white/10 rounded-full"></div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#450099] transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Requirements Section */}
                  <div className="space-y-3 mb-6">
                    {event.requirements.map((req, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-start gap-3 group-feature"
                      >
                        <div className={`w-8 h-8 bg-gradient-to-br ${event.gradient} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:group-feature:scale-110 transition-transform duration-300`}>
                          {idx === 0 ? (
                            <User className="text-white" size={16} />
                          ) : idx === 1 ? (
                            <Timer className="text-white" size={16} />
                          ) : (
                            <Award className="text-white" size={16} />
                          )}
                        </div>
                        <span className="text-sm text-gray-700 font-medium">{req}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-2 group-hover:text-[#450099] transition-colors duration-300">
                      <Clock size={18} className="text-[#9C2163]" />
                      <span className="font-medium">06:00 WIB</span>
                    </div>
                    <div className="flex items-center gap-2 group-hover:text-[#FF0020] transition-colors duration-300">
                      <MapPin size={18} className="text-[#450099]" />
                      <span className="font-medium">Telkom University Surabaya</span>
                    </div>
                  </div>

                  <a 
                    href={eventLink}
                    target={event.isExternal ? "_blank" : "_blank"}
                    rel="noopener noreferrer"
                    className="block w-full py-3.5 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 font-bold rounded-xl hover:bg-gradient-to-r hover:from-[#450099] hover:via-[#9C2163] hover:to-[#FF0020] hover:text-white transition-all duration-300 hover:shadow-lg group-hover:scale-105 text-center"
                    aria-label={`Daftar ${event.title} - Tel-U Run 2026`}
                  >
                    Daftar Sekarang
                    <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#450099] via-[#9C2163] to-[#FF0020] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}