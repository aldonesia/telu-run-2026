'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappNumber = '6285760621999';
  const whatsappMessage = 'Halo, saya ingin bertanya tentang Tel-U Run 2026. Mohon informasi lebih lanjut.';
  const encodedMessage = encodeURIComponent(whatsappMessage);
  
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] group"
      aria-label="Chat WhatsApp Tel-U Run 2026"
    >
      {/* Tooltip - hanya muncul di desktop */}
      <span 
        className="hidden sm:block absolute -left-32 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs rounded-lg py-1.5 px-3 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg"
        aria-hidden="true"
      >
        Hubungi Kami
      </span>
      
      {/* WhatsApp Button - Ukuran lebih kecil */}
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
        <MessageCircle size={24} className="sm:size-6 text-white" />
      </div>
    </a>
  );
}