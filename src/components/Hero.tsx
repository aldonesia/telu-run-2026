'use client';

import { ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link'; 

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero1.png"
          alt="Tel-U Run 2026 Background"
          fill
          className="object-cover object-position-bottom"
          style={{ objectPosition: 'center bottom' }}
          priority
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#450099]/90 via-[#9C2163]/80 to-transparent"></div>
      
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => {
            const size = Math.random() * 60 + 20;
            const position = { top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` };
            const animation = { 
              delay: `${Math.random() * 5}s`, 
              duration: `${Math.random() * 10 + 10}s` 
            };
            
            return (
              <div
                key={i}
                className="absolute bg-white rounded-full opacity-10 animate-float"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  ...position,
                  animationDelay: animation.delay,
                  animationDuration: animation.duration,
                }}
              />
            );
          })}
        </div>
      )}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl opacity-30 animate-ping"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-2xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/20 mb-6">
            <span className="w-1.5 h-1.5 bg-[#FF0020] rounded-full"></span>
            <span className="text-xs font-medium">Acara Terbuka</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90 leading-tight">
            Tel-U Run 2026
          </h1>

          <p className="text-xl sm:text-2xl font-bold text-white/95 mb-8">
            Satu hari. Satu ruang. Ribuan energi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#events"
              rel="noopener noreferrer"
              className="group px-7 py-3.5 bg-white text-[#450099] font-bold text-base rounded-full hover:bg-white/95 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2"
              aria-label="Daftar Tel-U Run 2026"
            >
              Daftar Sekarang
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
            </a>

            <a
              href="#events"
              className="px-7 py-3.5 bg-white/10 backdrop-blur-sm text-white font-bold text-base rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 flex items-center gap-2 group"
              aria-label="Lihat daftar event Tel-U Run 2026"
            >
              <Play size={20} />
              Lihat Event
              <ArrowRight 
                className="group-hover:translate-x-1 transition-transform duration-300 opacity-0 group-hover:opacity-100"
                size={18} 
              />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-0.5 h-2 bg-white/60 rounded-full animate-bounce-slow"></div>
        </div>
      </div>
    </section>
  );
}