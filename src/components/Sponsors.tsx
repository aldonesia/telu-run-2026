'use client';

import { Star } from 'lucide-react';
import Image from 'next/image';

export default function Sponsors() {
  const sponsors = [
    { id: 1, name: 'Cheers', image: '/images/sponsors/cheers.png' },
  ];

  const partners = [
    { id: 1, name: 'Motion', image: '/images/partners/motion.png' },
    { id: 2, name: 'Moshe', image: '/images/partners/moshe.png' },
    { id: 3, name: 'Picobot', image: '/images/partners/picobot.jpg' },
    { id: 4, name: 'Telu', image: '/images/partners/telu.png' },
  ];

  return (
    <section id="sponsors" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#450099]/10 to-[#FF0020]/10 rounded-full mb-4 mx-auto">
            <Star size={18} className="text-[#FF0020]" />
            <span className="text-sm font-semibold text-[#450099]">Sponsor & Partner</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#450099] via-[#9C2163] to-[#FF0020]">
              Terima Kasih
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Terima kasih kepada para sponsor dan partner yang mendukung Tel-U Run 2026
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-lg font-bold text-center mb-6 text-gray-800">Official Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 max-w-2xl mx-auto gap-4">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="group relative bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex items-center justify-center"
              >
                <div className="relative h-14 w-full">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold text-center mb-6 text-gray-900">Main Sponsor</h3>
          <div className="grid grid-cols-1 max-w-sm mx-auto gap-4">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex items-center justify-center"
              >
                <div className="relative h-20 w-full">
                  <Image
                    src={sponsor.image}
                    alt={sponsor.name}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-[#450099] via-[#9C2163] to-[#FF0020] rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-3">Tertarik Menjadi Sponsor?</h3>
          <p className="text-base mb-6 text-white/90 max-w-xl mx-auto">
            Bergabunglah dengan kami dalam mendukung gaya hidup sehat dan membangun komunitas yang lebih kuat
          </p>
          <button className="px-6 py-3 bg-white text-[#450099] font-bold rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-lg flex items-center gap-2 mx-auto">
            <Star size={18} />
            Hubungi Kami
          </button>
        </div>
      </div>
    </section>
  );
}