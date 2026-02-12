'use client';

import { MapPin, Phone, Mail, MessageCircle, FileText, Star } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Lokasi Event',
      content: 'Telkom University Surabaya',
      subContent: 'Jl. Ketintang No.156, Ketintang, Kec. Gayungan, Surabaya, Jawa Timur 60231',
    },
    {
      icon: Phone,
      title: 'Telepon',
      content: '+62 812-5225-5258',
      subContent: 'Senin - Jumat, 09:00 - 17:00',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@motionfestival.com',
      subContent: 'Respon dalam 24 jam',
    },
  ];

  const whatsappNumber = '6281252255258';
  const whatsappMessage = 'Halo, saya ingin bertanya tentang Tel-U Run 2026';
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  const googleFormLink = 'https://forms.google.com';

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#450099]/10 to-[#FF0020]/10 rounded-full mb-4 mx-auto">
            <Star size={16} className="text-[#FF0020]" />
            <span className="text-sm font-semibold text-[#450099]">Hubungi Kami</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#450099] to-[#FF0020]">
              Tetap Terhubung
            </span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Punya pertanyaan? Kami siap membantu Anda!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-6 animate-fade-in-up">
            <div className="bg-gradient-to-br from-[#450099] to-[#FF0020] rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Informasi Kontak</h3>
              
              <div className="space-y-5">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <info.icon className="text-white" size={20} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 text-white/90">{info.title}</h4>
                      <p className="text-white/95 font-medium">{info.content}</p>
                      <p className="text-white/70 text-sm">{info.subContent}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            
<div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
  <div className="aspect-video relative">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.983890556744!2d112.79250827472817!3d-7.307500184210552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f8c8a8b3b9a1%3A0x3c5d3b0b1d0d0d0d!2sTelkom%20University%20Surabaya!5e0!3m2!1sid!2sid!4v1707684321123!5m2!1sid!2sid"
      width="100%" 
      height="100%" 
      frameBorder="0" 
      style={{ border: 0 }}
      allowFullScreen
      title="Lokasi Telkom University Surabaya"
      className="absolute inset-0"
      loading="lazy"
      aria-label="Peta lokasi Telkom University Surabaya"
    ></iframe>
    
    <div className="absolute inset-0 bg-gray-100 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
      <div className="text-center p-4 bg-white rounded-lg shadow">
        <MapPin className="text-[#450099] mx-auto mb-2" size={24} />
        <p className="text-sm font-medium text-gray-700">Memuat peta lokasi...</p>
        <p className="text-xs text-gray-500 mt-1">Klik tombol di bawah jika peta tidak muncul</p>
      </div>
    </div>
  </div>
  
  <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
    <div className="flex items-center justify-center gap-2 mb-2 text-gray-700">
      <MapPin size={16} className="text-[#450099]" />
      <span className="text-sm font-medium">Telkom University Surabaya</span>
    </div>
    <a 
      href="https://www.google.com/maps/dir/?api=1&destination=Jl.+Ketintang+No.156,+Ketintang,+Kec.+Gayungan,+Surabaya,+Jawa+Timur+60231"
      target="_blank" 
      rel="noopener noreferrer" 
      className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 border border-[#450099] text-[#450099] font-medium px-4 py-2 rounded-lg shadow-sm transition-all"
      aria-label="Buka lokasi di Google Maps"
    >
      <MapPin size={18} />
      <span>Buka di Google Maps</span>
    </a>
  </div>
</div>
          </div>

          <div className="space-y-6 animate-fade-in-up">
            <div className="bg-white rounded-xl shadow-md p-6 border border-[#450099]/10 hover:shadow-lg transition-shadow">
              <div className="text-center mb-5">
                <div className="w-14 h-14 bg-[#450099]/15 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="text-[#450099]" size={28} strokeWidth={1.8} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
                  Daftar Sekarang
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Isi formulir pendaftaran dan amankan slot Anda
                </p>
              </div>
              <a
                href={googleFormLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full py-4 bg-gradient-to-r from-[#450099] to-[#FF0020] text-white font-semibold rounded-xl hover:shadow-md hover:scale-[1.02] transition-all duration-300 active:scale-[0.98]"
                aria-label="Buka form pendaftaran Tel-U Run 2026"
              >
                <span className="flex items-center justify-center gap-2">
                  <span>Buka Form Pendaftaran</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-green-500/10 hover:shadow-lg transition-shadow">
              <div className="text-center mb-5">
                <div className="w-14 h-14 bg-green-500/15 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="text-green-500" size={28} strokeWidth={1.8} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
                  Chat via WhatsApp
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Butuh bantuan cepat? Hubungi kami langsung
                </p>
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 hover:shadow-md hover:scale-[1.02] transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2"
                aria-label="Chat via WhatsApp untuk informasi Tel-U Run 2026"
              >
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                <span>Chat WhatsApp Sekarang</span>
                <span className="transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}