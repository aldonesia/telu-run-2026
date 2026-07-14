'use client';

import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';

const GALLERY_IMAGES = [
  {
    id: 1,
    src: '/images/gallery/funrun.jpg',
    label: 'Fun Run 2025',
    description: 'Momen seru peserta Fun Run',
  },
  {
    id: 2,
    src: '/images/gallery/community.jpg',
    label: 'Community Activity',
    description: 'Kegiatan komunitas yang meriah',
  },
  {
    id: 3,
    src: '/images/gallery/award.jpg',
    label: 'Award Ceremony',
    description: 'Penghargaan untuk para pemenang',
  },
  {
    id: 4,
    src: '/images/gallery/group_photo.jpg',
    label: 'Group Photo',
    description: 'Kebersamaan para peserta',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const changeImage = useCallback(
    (direction: 'prev' | 'next') => {
      if (selectedImage === null) return;
      const newIndex =
        direction === 'prev'
          ? selectedImage > 0
            ? selectedImage - 1
            : GALLERY_IMAGES.length - 1
          : selectedImage < GALLERY_IMAGES.length - 1
          ? selectedImage + 1
          : 0;
      setSelectedImage(newIndex);
    },
    [selectedImage]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowLeft') changeImage('prev');
      if (e.key === 'ArrowRight') changeImage('next');
    };

    if (selectedImage !== null) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedImage, changeImage]);

  return (
    <>
      <section id="gallery" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-4">
              <Star size={16} className="text-[#FF0020]" fill="currentColor" />
              <span className="text-sm font-medium text-[#450099]">
                Galeri Kegiatan
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#450099] to-[#FF0020]">
                Momen Berharga
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lihat momen-momen berharga dari Tel-U Run sebelumnya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {GALLERY_IMAGES.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setSelectedImage(index)}
                className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <Image
                  src={image.src}
                  alt={image.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />

                <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/50">
                  <span className="text-2xl font-bold text-white">
                    {image.id}
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {image.label}
                  </h3>
                  <p className="text-white/80 text-sm">{image.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
          >
            <X className="text-white" size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              changeImage('prev');
            }}
            className="absolute left-4 lg:left-8 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
          >
            <ChevronLeft className="text-white" size={28} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              changeImage('next');
            }}
            className="absolute right-4 lg:right-8 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
          >
            <ChevronRight className="text-white" size={28} />
          </button>

          <div
            className="relative w-full max-w-5xl h-[60vh] lg:h-[70vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src={GALLERY_IMAGES[selectedImage].src}
                alt={GALLERY_IMAGES[selectedImage].label}
                fill
                className="object-cover"
                priority
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 lg:p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-[#FF0020] rounded-full" />
                      <span className="text-xs text-white/70 font-medium tracking-wider uppercase">
                        Tel-U Run
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-1">
                      {GALLERY_IMAGES[selectedImage].label}
                    </h3>
                    <p className="text-white/80 text-sm lg:text-base">
                      {GALLERY_IMAGES[selectedImage].description}
                    </p>
                  </div>
                  <div className="text-white/60 text-sm font-mono">
                    {String(selectedImage + 1).padStart(2, '0')} /{' '}
                    {String(GALLERY_IMAGES.length).padStart(2, '0')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
            {GALLERY_IMAGES.map((img, idx) => (
              <button
                key={img.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(idx);
                }}
                className={`relative w-16 h-16 rounded-xl overflow-hidden transition-all duration-300 ${
                  idx === selectedImage
                    ? 'ring-2 ring-[#FF0020] ring-offset-2 ring-offset-black scale-110'
                    : 'opacity-50 hover:opacity-100'
                }`}
              >
                <Image
                  src={img.src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}