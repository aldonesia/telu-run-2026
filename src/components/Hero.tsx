'use client';

import { ArrowRight, Play, Calendar, Clock } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect, useMemo } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface Particle {
  size: number;
  top: number;
  left: number;
  delay: number;
  duration: number;
}

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [particles, setParticles] = useState<Particle[]>([]);

  const eventDate = useMemo(
    () => new Date('2026-11-08T00:00:00').getTime(),
    []
  );

  const registrationLink = 'https://galanesia.com/events/tel-u-run-2026/';

  useEffect(() => {
    setIsMounted(true);

    const generated: Particle[] = [...Array(12)].map(() => ({
      size: Math.random() * 50 + 20,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 12,
    }));

    setParticles(generated);

    const calculateTimeLeft = () => {
      const now = Date.now();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center mb-2 shadow-lg">
        <span className="text-2xl sm:text-3xl font-bold text-white">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs sm:text-sm text-white/80 font-medium">
        {label}
      </span>
    </div>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0">
        <Image
          src="/images/hero1.png"
          alt="Tel-U Run Background"
          fill
          className="object-cover object-position-bottom"
          style={{ objectPosition: 'center bottom' }}
          priority
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#450099]/90 via-[#9C2163]/80 to-transparent"></div>

      {isMounted && (
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((p, i) => (
            <div
              key={i}
                className="absolute bg-white rounded-full opacity-10 animate-float"
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                top: `${p.top}%`,
                left: `${p.left}%`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
              }}
            />
          ))}
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

          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20 mb-6">
              <Calendar className="w-5 h-5" />
              <span className="text-sm font-medium">08 November 2026</span>
            </div>
            
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4">
              <TimeUnit value={timeLeft.days} label="Hari" />
              <span className="text-3xl sm:text-4xl font-bold text-white/50 mt-4">:</span>
              <TimeUnit value={timeLeft.hours} label="Jam" />
              <span className="text-3xl sm:text-4xl font-bold text-white/50 mt-4">:</span>
              <TimeUnit value={timeLeft.minutes} label="Menit" />
              <span className="text-3xl sm:text-4xl font-bold text-white/50 mt-4">:</span>
              <TimeUnit value={timeLeft.seconds} label="Detik" />
            </div>
            
            <div className="flex items-center justify-center gap-2 text-white/70 text-sm">
              <Clock className="w-4 h-4" />
              <span>Menuju Acara Besar</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-7 py-3.5 bg-white text-[#450099] font-bold text-base rounded-full hover:bg-white/95 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
              aria-label="Daftar Tel-U Run 2026"
            >
              Daftar Sekarang
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
            </a>

            <a
              href="#events"
              className="px-7 py-3.5 bg-white/10 backdrop-blur-sm text-white font-bold text-base rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 flex items-center justify-center gap-2 group"
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