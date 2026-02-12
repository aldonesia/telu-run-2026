'use client';

import { Heart, Instagram, Facebook, Twitter, Youtube, ArrowRight, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
 

  const socialMedia = [
    { icon: Instagram, name: 'Instagram', link: 'https://www.instagram.com/motion_festival/' },
    { icon: Youtube, name: 'Youtube', link: 'https://youtu.be/8kQkLf3BuzY' },
  ];

  return (
    <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white border-t border-purple-800 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-40 h-40 rounded-full bg-pink-600 absolute -top-20 -left-20 animate-bounce-slow"></div>
        <div className="w-32 h-32 rounded-full bg-purple-600 absolute -bottom-16 -right-16 animate-bounce-slow delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Event Identity */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-300">
              Tel-U Run 2026
            </div>
            <p className="text-purple-100 max-w-xs text-center md:text-left">
              Satu hari. Satu ruang. Ribuan energi.
            </p>
          </div>

          

          {/* Social & Copyright */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-purple-800/50 text-purple-200 hover:bg-purple-700/50 hover:text-white transition-all"
                  title={social.name}
                >
                  <social.icon size={20} />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-purple-900/90 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
            
            <div className="text-center text-sm">
              <p>© {currentYear} Tel-U Run 2026</p>
              <p className="mt-1 flex items-center justify-center gap-1 text-purple-100">
                Made with <Heart size={16} className="text-pink-400 animate-pulse" /> by ValenNz
              </p>
            </div>
          </div>
        </div>
        
    
      </div>
      
      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes energy-pulse {
          0% { width: 0%; }
          50% { width: 100%; }
          100% { width: 0%; }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 8s infinite;
        }
        
        .animate-energy-pulse {
          animation: energy-pulse 4s infinite linear;
        }
      `}</style>
    </footer>
  );
}