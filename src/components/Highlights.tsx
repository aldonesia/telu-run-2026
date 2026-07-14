'use client';

import { 
  Shirt,
  Award, 
  Medal, 
  FileText, 
  Droplet, 
  Star, 
  Shield, 
  ShieldCheck,
  Package,
} from 'lucide-react';

export default function Highlights() {
  const highlights = [
    {
      icon: Shirt,
      title: 'Official Jersey',
      description: 'Jersey premium dengan desain eksklusif Tel-U Run 2026 yang nyaman dan breathable',
      gradient: 'from-[#450099] to-[#9C2163]',
      color: '#450099',
    },
    {
      icon: Package,
      title: 'Race Pack',
      description: 'BIB Number eksklusif dan merchandise official Tel-U Run 2026',
      gradient: 'from-[#9C2163] to-[#FF0020]',
      color: '#9C2163',
    },
    {
      icon: Shield,
      title: 'Asuransi',
      description: 'Asuransi kecelakaan untuk menjamin keamanan dan perlindungan peserta selama race',
      gradient: 'from-[#450099] to-[#FF0020]',
      color: '#450099',
    },
    
    {
      icon: Droplet,
      title: 'Refreshment',
      description: 'Water station dengan air mineral dan makanan ringan di setiap pos',
      gradient: 'from-[#FF0020] to-[#450099]',
      color: '#FF0020',
    },
    {
      icon: ShieldCheck,
      title: 'Medical Support',
      description: 'Tim medis dan ambulans siaga di sepanjang rute race',
      gradient: 'from-[#9C2163] via-[#450099] to-[#FF0020]',
      color: '#450099',
    },
    
    {
      icon: Medal,
      title: 'Finisher Medal',
      description: 'Medali eksklusif untuk semua peserta yang menyelesaikan race',
      gradient: 'from-[#450099] via-[#9C2163] to-[#FF0020]',
      color: '#9C2163',
    },
    {
      icon: FileText,
      title: 'E-Certificate',
      description: 'Sertifikat digital resmi dari Telkom University Surabaya',
      gradient: 'from-[#FF0020] to-[#9C2163]',
      color: '#FF0020',
    },
    {
      icon: Award,
      title: 'Awards & Prizes',
      description: 'Trofi dan hadiah menarik untuk para pemenang setiap kategori',
      gradient: 'from-[#FFD700] to-[#FF0020]',
      color: '#FFD700',
    },
  ];

  return (
    <section id="highlights" className="py-16 lg:py-20 bg-gradient-to-b from-white via-purple-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#450099]/10 to-[#FF0020]/10 rounded-full mb-4 mx-auto">
            <Star size={18} className="text-[#FF0020]" />
            <span className="text-sm font-semibold text-[#450099]">
              What You Get
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#450099] via-[#9C2163] to-[#FF0020]">
              Benefit Peserta
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Setiap peserta Tel-U Run 2026 berhak mendapatkan benefit eksklusif berikut untuk pengalaman race yang profesional dan berkesan
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden flex flex-col h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative p-6 flex flex-col flex-grow">
                  <div className="mb-4 flex-shrink-0">
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={26} strokeWidth={2} />
                    </div>
                  </div>
                  
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-[#450099] transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}