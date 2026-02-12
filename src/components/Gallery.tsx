'use client';

import { useState } from 'react';
import { X, ZoomIn, Star } from 'lucide-react';
import Image from 'next/image';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { 
      id: 1, 
      src: '/images/gallery/funrun.jpg',
      label: 'Fun Run 2025',
      description: 'Momen seru peserta Fun Run'
    },
    { 
      id: 2, 
      src: '/images/gallery/community.jpg',
      label: 'Community Activity',
      description: 'Kegiatan komunitas yang meriah'
    },
    { 
      id: 3, 
      src: '/images/gallery/award.jpg',
      label: 'Award Ceremony',
      description: 'Penghargaan untuk para pemenang'
    },
    { 
      id: 4, 
      src: '/images/gallery/group_photo.jpg',
      label: 'Group Photo',
      description: 'Kebersamaan para peserta'
    },
  ];

  return (
    <>
      <section id="gallery" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#450099]/10 to-[#FF0020]/10 rounded-full mb-4 mx-auto">
              <Star size={18} className="text-[#FF0020]" />
              <span className="text-sm font-semibold text-[#450099]">Galeri Kegiatan</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#450099] via-[#9C2163] to-[#FF0020]">
                Momen Berharga
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Lihat momen-momen berharga dari Tel-U Run 2026 sebelumnya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {images.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.label}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    priority
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col items-center justify-center p-8">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 border-2 border-white/30">
                      <span className="text-3xl font-bold text-white">{image.id}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2 text-center">
                      {image.label}
                    </h3>
                    
                    <p className="text-white/80 text-center text-sm max-w-xs">
                      {image.description}
                    </p>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                    <div className="flex flex-col items-center gap-3">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <ZoomIn className="text-white" size={24} />
                      </div>
                      <span className="text-white text-sm font-medium">Lihat Detail</span>
                    </div>
                  </div>

                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors hover:scale-110"
            onClick={() => setSelectedImage(null)}
          >
            <X className="text-white" size={28} />
          </button>

          <div
            className="relative max-w-4xl w-full aspect-video rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].label}
                fill
                className="object-cover"
                priority
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col items-center justify-center p-12">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-8 border-2 border-white/30">
                  <span className="text-5xl font-bold text-white">{images[selectedImage].id}</span>
                </div>
                
                <h3 className="text-4xl font-bold text-white mb-4">
                  {images[selectedImage].label}
                </h3>
                
                <p className="text-xl text-white/90 mb-6">
                  {images[selectedImage].description}
                </p>
                
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  <Star size={20} className="text-[#FF0020]" />
                  <span className="text-white font-medium">Tel-U Run 2026</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-6">
            <button
              className="px-6 py-3 bg-gradient-to-r from-[#450099] via-[#9C2163] to-[#FF0020] text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : images.length - 1));
              }}
            >
              ← Previous
            </button>
            
            <div className="text-white text-lg font-bold">
              {selectedImage + 1} / {images.length}
            </div>
            
            <button
              className="px-6 py-3 bg-gradient-to-r from-[#450099] via-[#9C2163] to-[#FF0020] text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => (prev! < images.length - 1 ? prev! + 1 : 0));
              }}
            >
              Next →
            </button>
          </div>

          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === selectedImage ? 'bg-white w-6' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}