'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappNumber = '6287731419936'; // Pastikan ini SAMA dengan nomor di WhatsApp Business
  const whatsappMessage = 'Halo, saya ingin bertanya tentang Tel-U Run 2026. Mohon informasi lebih lanjut.';
  const encodedMessage = encodeURIComponent(whatsappMessage);
  
  // ✅ PERBAIKAN: 
  // 1. Hapus SPASI di URL (WAJIB!)
  // 2. Pastikan format nomor benar
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] group"
      aria-label="Chat WhatsApp Tel-U Run 2026"
    >
      <div className="relative flex items-center">
        {/* ✅ TOOLTIP untuk tampilkan nama di website */}
        <span 
          className="absolute -left-40 bottom-8 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md"
          aria-hidden="true"
        >
          Tel-U Run 2026
        </span>
        
        {/* WhatsApp Button */}
        <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
          <MessageCircle size={28} className="text-white" />
        </div>
      </div>
    </a>
  );
}