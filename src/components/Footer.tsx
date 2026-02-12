'use client';

import { Heart, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Tentang', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'Kontak', href: '#contact' },
  ];

  const socialMedia = [
    { icon: Instagram, name: 'Instagram', link: 'https://www.instagram.com/motion_festival/#' },
    { icon: Youtube, name: 'Youtube', link: 'https://youtu.be/8kQkLf3BuzY?si=ou1qu8KaH-lKsI7v' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="text-white font-bold text-lg">Tel-U Run 2026</div>
            
            <div className="flex gap-3">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="text-gray-400 hover:text-white transition-colors"
                  title={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="text-center md:text-right text-sm">
            <p>© {currentYear} Tel-U Run 2026</p>
            <p className="text-gray-500 mt-1 flex items-center justify-center md:justify-end gap-1">
              Made with ❤️ by ValenNz
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}