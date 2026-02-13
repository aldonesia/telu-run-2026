'use client';

import { Shirt, Medal, FileText, Droplet, Star } from 'lucide-react';

export default function Highlights() {
  const highlights = [
    {
      icon: Shirt,
      title: 'Jersey Eksklusif',
      description: 'Jersey premium dengan desain khusus Tel-U Run 2026',
      gradient: 'from-[#450099] to-[#9C2163]',
      color: '#450099',
    },
    {
      icon: Medal,
      title: 'Medali Finisher',
      description: 'Medali eksklusif untuk semua finisher',
      gradient: 'from-[#9C2163] to-[#FF0020]',
      color: '#9C2163',
    },
    {
      icon: FileText,
      title: 'E-Certificate',
      description: 'Sertifikat digital resmi dari Telkom University',
      gradient: 'from-[#450099] to-[#FF0020]',
      color: '#450099',
    },
    {
      icon: Droplet,
      title: 'Refreshment',
      description: 'Water station dengan air mineral & pisang',
      gradient: 'from-[#FF0020] to-[#9C2163]',
      color: '#FF0020',
    },
  ];

  return (
    <section id="highlights" className="py-20 bg-gradient-to-b from-white via-purple-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#450099]/10 to-[#FF0020]/10 rounded-full mb-4 mx-auto">
            <Star size={18} className="text-[#FF0020]" />
            <span className="text-sm font-semibold text-[#450099]">Yang Kamu Dapatkan</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#450099] via-[#9C2163] to-[#FF0020]">
              Highlights Event
            </span>
          </h2>
          
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Setiap peserta Tel-U Run 2026 berhak mendapatkan benefit eksklusif berikut
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden flex flex-col h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative p-6 flex flex-col">
                  <div className="mb-4 flex-shrink-0">
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={24} strokeWidth={1.8} />
                    </div>
                  </div>
                  
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#450099] transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}