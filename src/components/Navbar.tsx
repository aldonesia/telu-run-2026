'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Events', href: '#events' },        
  { name: 'Timeline', href: '#timeline' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Rules', href: '#rules' },          
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navbarBgClass = isScrolled 
    ? 'bg-white/95 backdrop-blur-sm shadow-2xl shadow-black/10 border border-gray-100' 
    : 'bg-transparent';
  
  const textColorClass = isScrolled ? 'text-gray-800' : 'text-white';
  const logoGradientClass = isScrolled 
    ? 'bg-clip-text text-transparent bg-gradient-to-r from-[#450099] via-[#9C2163] to-[#FF0020]' 
    : 'text-white';
  const navHoverClass = isScrolled 
    ? 'hover:text-[#450099]' 
    : 'hover:text-white/90';
  const mobileMenuBgClass = isScrolled ? 'bg-white' : 'bg-[#450099]/95 backdrop-blur-sm'; 

  return (
    <>
      <nav className={`w-11/12 mx-auto py-3 px-6 md:px-8 rounded-full flex justify-between items-center fixed left-1/2 -translate-x-1/2 top-8 z-[999] transition-all duration-300 ${navbarBgClass}`}>
        <a
          href="#home"
          onClick={(e) => handleClick(e, '#home')}
          className="flex items-center space-x-3 group"
        >
          <div className="relative w-12 h-12 overflow-hidden group-hover:scale-110 transition-transform duration-300">
            <Image
              src="/images/logo.png"
              alt="Tel-U Run 2026 Logo"
              fill
              className="object-contain p-0.5"
              priority
            />
          </div>
          
          <span className={`text-2xl md:text-3xl font-bold font-poppins ${logoGradientClass} group-hover:scale-105 transition-transform duration-300`}>
            Tel-U Run 2026
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`group relative font-poppins font-semibold text-base md:text-lg ${textColorClass} ${navHoverClass} transition-all duration-300`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-1 rounded-full transition-all duration-300 group-hover:w-full ${
                isScrolled 
                  ? 'bg-gradient-to-r from-[#450099] via-[#9C2163] to-[#FF0020]' 
                  : 'bg-white/80'
              }`}></span>
            </a>
          ))}
        </div>

        <button
          className={`hidden md:block px-8 py-3 font-poppins font-bold text-base rounded-full transition-all duration-300 hover:scale-105 hover:brightness-110 ${
            isScrolled
              ? 'bg-gradient-to-r from-[#450099] via-[#9C2163] to-[#FF0020] text-white shadow-lg hover:shadow-2xl'
              : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
          }`}
          onClick={() => window.location.href = '#events'}
        >
          Get Started
        </button>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-3 rounded-full transition-all duration-300 ${
            isScrolled
              ? 'text-gray-800 hover:bg-gradient-to-r hover:from-[#450099] hover:via-[#9C2163] hover:to-[#FF0020] hover:text-white'
              : 'text-white hover:bg-white/20'
          }`}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className={`w-11/12 mx-auto fixed left-1/2 -translate-x-1/2 top-28 z-[998] rounded-2xl shadow-2xl border py-6 px-5 md:hidden transition-all duration-300 ${
          isScrolled 
            ? 'bg-white border-gray-100' 
            : 'bg-[#450099]/95 backdrop-blur-sm border-[#450099]/50' 
        }`}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`block px-6 py-4 font-poppins font-semibold text-lg transition-all duration-300 rounded-xl ${
                isScrolled
                  ? 'text-gray-800 hover:bg-gradient-to-r hover:from-[#450099]/10 hover:via-[#9C2163]/10 hover:to-[#FF0020]/10 hover:text-[#450099]'
                  : 'text-white hover:bg-[#450099]/10 hover:text-white' 
              }`}
            >
              {item.name}
            </a>
          ))}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-4"></div>
          <button
            className={`w-full mt-2 font-poppins font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg ${
              isScrolled
                ? 'bg-gradient-to-r from-[#450099] via-[#9C2163] to-[#FF0020] text-white hover:opacity-90 hover:shadow-2xl'
                : 'bg-gradient-to-r from-[#450099] via-[#9C2163] to-[#FF0020] text-white hover:opacity-90 hover:shadow-2xl' 
            }`}
            onClick={() => {
              window.location.href = '#contact';
              setIsMobileMenuOpen(false);
            }}
          >
            Get Started
          </button>
        </div>
      )}
    </>
  );
}