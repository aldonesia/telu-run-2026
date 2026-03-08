'use client';

import { 
  MapPin, 
  Clock, 
  Mail, 
  Phone, 
  Instagram, 
  Youtube,
  MessageSquare,
  ArrowRight,
  Star,
  Award,
  Users,
  Trophy,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Tentang Race', href: '#about' },
    { name: 'Kategori Race', href: '#events' },
    { name: 'Benefit Peserta', href: '#highlights' },
    { name: 'FAQ', href: '#faq' },
  ];

  const whatsappNumber = '6285760621999';
  const whatsappMessage = 'Halo, saya ingin bertanya tentang Tel-U Run 2026. Mohon informasi lebih lanjut.';
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  const email = '*';
  const instagramLink = '*';
  const youtubeLink = 'https://www.youtube.com/@Telkomuniversity_Surabaya';

  return (
    <footer className="bg-linear-to-r from-purple-900 via-pink-900 to-purple-900 text-white border-t border-purple-800 overflow-hidden relative">
      <div className="absolute inset-0 opacity-15">
        <div className="w-48 h-48 rounded-full bg-pink-600 absolute -top-24 -left-24 animate-bounce-slow"></div>
        <div className="w-40 h-40 rounded-full bg-purple-600 absolute -bottom-20 -right-20 animate-bounce-slow delay-1000"></div>
        <div className="w-32 h-32 rounded-full bg-purple-500 absolute top-1/2 left-1/4 animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 relative z-10">
  
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="space-y-5">
            <div className="space-y-2">
              <div className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-300">
                Tel-U Run 2026
              </div>
              <p className="text-purple-100 text-sm leading-relaxed">
                Official running race oleh Telkom University Surabaya. 
                Tantang batas diri, raih target pribadi, rayakan pencapaian!
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <MapPin size={16} className="text-purple-300" />
              <span className="text-purple-100">Telkom University Surabaya</span>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <MessageSquare size={18} className="text-purple-300" />
                Navigasi
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-purple-100 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <ChevronRight size={14} className="text-purple-300 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                      <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Clock size={18} className="text-purple-300" />
                Info Event
              </h3>
              <ul className="space-y-3">
                <li className="text-purple-100">
                  <span className="font-medium text-white">🏃 Race Day:</span> 02 Agustus 2026
                </li>
                <li className="text-purple-100">
                  <span className="font-medium text-white">⏰ Start Time:</span> 06.00 WIB
                </li>
                <li className="text-purple-100">
                  <span className="font-medium text-white">📍 Location:</span> Tel-U Surabaya
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                Hubungi Kami
              </h3>
              
              <div className="space-y-3">
                {/* <a 
                  href={`mailto:${email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <Mail size={18} className="text-purple-300 mt-1 group-hover:text-white transition-colors" />
                  <div>
                    <p className="text-purple-100 text-xs">Email</p>
                    <p className="text-white group-hover:text-pink-300 transition-colors text-sm font-medium">
                      {email}
                    </p>
                  </div>
                </a> */}
                
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <Phone size={18} className="text-purple-300 mt-1 group-hover:text-white transition-colors" />
                  <div>
                    <p className="text-purple-100 text-xs">WhatsApp</p>
                    <p className="text-white group-hover:text-pink-300 transition-colors text-sm font-medium">
                      +62 857 6062 1999
                    </p>
                  </div>
                </a>
              </div>

              <div className="mt-5">
                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  Media Sosial
                </h4>
                
                <div className="flex flex-col gap-3">
                  {/* <a 
                    href={instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group"
                  >
                    <Instagram size={18} className="text-purple-300 mt-1 group-hover:text-white transition-colors" />
                    <div>
                      <p className="text-purple-100 text-xs">Instagram</p>
                      <p className="text-white group-hover:text-pink-300 transition-colors text-sm font-medium">
                        @*
                      </p>
                    </div>
                  </a> */}

                  <a 
                    href={youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group"
                  >
                    <Youtube size={18} className="text-purple-300 mt-1 group-hover:text-white transition-colors" />
                    <div>
                      <p className="text-purple-100 text-xs">YouTube</p>
                      <p className="text-white group-hover:text-pink-300 transition-colors text-sm font-medium">
                        Telkom University Surabaya
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-purple-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-purple-100 text-sm mb-2">
              ©{currentYear} Tel-U Run 2026. All rights reserved.
            </p>
            <p className="text-purple-300 text-xs">
              Designed with by ValenNz • Powered by Telkom University Surabaya
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}