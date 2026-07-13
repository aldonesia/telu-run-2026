'use client';

import { Star } from 'lucide-react';
import Image from 'next/image';

export default function Sponsors() {
  const sponsors = [
    { id: 1, name: 'Cheers', image: '/images/sponsors/cheers.png' },
  ];

  const partners = [
    { id: 1, name: 'Telu', image: '/images/partners/telu.png' },
  ];

  return (
    <section id="sponsors" className="py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#450099]/10 to-[#FF0020]/10 rounded-full mb-4 mx-auto">
            <Star size={18} className="text-[#FF0020]" />
            <span className="text-sm font-semibold text-[#450099]">Sponsor & Partner</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#450099] via-[#9C2163] to-[#FF0020]">
              Mitra Pendukung
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Terima kasih kepada para sponsor dan partner yang telah mendukung kesuksesan Tel-U Run 2026
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center gap-3">
            <span className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#FF0020]"></span>
            Main Sponsor
            <span className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#FF0020]"></span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-6 max-w-5xl mx-auto">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="group relative w-full max-w-md bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#450099]/5 via-[#9C2163]/5 to-[#FF0020]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                
                <div className="relative h-24 w-full max-w-[280px]">
                  <Image
                    src={sponsor.image}
                    alt={`Logo Main Sponsor ${sponsor.name}`}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-center mb-8 text-gray-800 flex items-center justify-center gap-3">
            <span className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[#450099]"></span>
            Official Partners
            <span className="w-8 h-0.5 bg-gradient-to-l from-transparent to-[#450099]"></span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-6 max-w-5xl mx-auto">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="group relative w-full max-w-[240px] bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#450099]/5 via-[#9C2163]/5 to-[#FF0020]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                
                <div className="relative h-16 w-full max-w-[200px]">
                  <Image
                    src={partner.image}
                    alt={`Logo Official Partner ${partner.name}`}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}