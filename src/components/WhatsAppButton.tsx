'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappNumber = '6281230350677';
  const whatsappMessage = 'Halo, saya ingin bertanya tentang Tel-U Run 2026. Mohon informasi lebih lanjut.';
  const encodedMessage = encodeURIComponent(whatsappMessage);
  
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 z-[9999] group"
      aria-label="Chat WhatsApp Tel-U Run 2026"
    >
      <div className="relative flex items-center">
        <span 
          className="absolute -left-40 top-0 bg-gray-800 text-white text-sm rounded-lg py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl transform -translate-x-4 group-hover:translate-x-0"
          aria-hidden="true"
        >
          Tel-U Run 2026
        </span>
        
        <div className="w-40 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl overflow-hidden">
          <div className="flex items-center gap-2">
            <MessageCircle size={20} className="text-white" />
            <span className="text-white font-bold text-base">WhatsApp</span>
          </div>
        </div>
      </div>
    </a>
  );
}