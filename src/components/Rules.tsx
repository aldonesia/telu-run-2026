'use client';

import { useState } from 'react';
import { 
  FileText, 
  User, 
  Package, 
  AlertCircle, 
  CheckCircle2, 
  Clock,
  MapPin,
  ShieldAlert,
  ChevronDown,
  ChevronUp,
  Star
} from 'lucide-react';

export default function Rules() {
  const [expandedStates, setExpandedStates] = useState<boolean[]>([false, false, false, false, false, false]);

  const toggleSection = (index: number) => {
    setExpandedStates(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const rulesData = [
    {
      icon: FileText,
      title: 'Peraturan Pendaftaran',
      color: 'from-[#450099] via-[#9C2163] to-[#FF0020]',
      iconBg: 'bg-[#450099]/10',
      iconColor: 'text-[#450099]',
      rules: [
        'Pendaftaran hanya dapat dilakukan melalui website resmi Tel-U Run 2026 atau mitra resmi yang ditunjuk panitia.',
        'Peserta wajib mengisi data pribadi dengan benar, lengkap, dan sesuai dengan identitas resmi (KTP/SIM/Paspor).',
        'Pendaftaran bersifat non-transferable dan non-refundable (tidak dapat dipindahtangankan maupun dikembalikan).',
        'Biaya pendaftaran sudah termasuk racepack (jersey resmi, nomor BIB, dan souvenir lainnya).',
        'Peserta akan menerima konfirmasi pendaftaran melalui email setelah pembayaran berhasil diverifikasi.',
        'Pendaftaran akan ditutup apabila kuota peserta telah terpenuhi, meskipun sebelum batas waktu yang ditentukan.',
      ],
    },
    {
      icon: User,
      title: 'Peraturan Umum',
      color: 'from-[#9C2163] via-[#FF0020] to-[#450099]',
      iconBg: 'bg-[#9C2163]/10',
      iconColor: 'text-[#9C2163]',
      rules: [
        'Pihak penyelenggara berhak untuk mengubah ketentuan tanpa pemberitahuan terlebih dahulu.',
        'Peserta menyetujui untuk memberikan informasi yang benar dan akurat dalam formulir pendaftaran.',
        'Pihak penyelenggara berhak menutup pendaftaran sebelum tenggang waktu jika kuota sudah penuh.',
        'Apabila event dibatalkan karena force majeure, tidak ada pengembalian biaya pendaftaran.',
        'Pihak penyelenggara berhak menghentikan acara atau mengubah rute sewaktu-waktu.',
        'Cut Off Time 2 jam untuk kategori 5K (Start 05.00, COT 08:00).',
        'Peserta bertanggung jawab atas kesiapan fisik dan kesehatan sendiri.',
      ],
    },
    {
      icon: ShieldAlert,
      title: 'Ketentuan Peserta',
      color: 'from-[#FF0020] via-[#450099] to-[#9C2163]',
      iconBg: 'bg-[#FF0020]/10',
      iconColor: 'text-[#FF0020]',
      rules: [
        'Peserta datang 1 jam sebelum waktu start.',
        'Peserta dianjurkan mengenakan jersey yang telah disediakan oleh panitia.',
        'Peserta wajib menggunakan nomor BIB milik sendiri yang terpasang di depan dada.',
        'Peserta DILARANG KERAS memakai pakaian yang mengandung unsur SARA dan politik.',
        'Peserta DILARANG KERAS membawa minuman keras, senjata tajam, atau barang berbahaya.',
        'Peserta DILARANG KERAS merokok di area Tel-U Run 2026.',
      ],
    },
    {
      icon: Package,
      title: 'Pengambilan Racepack',
      color: 'from-[#450099] via-[#FF0020] to-[#9C2163]',
      iconBg: 'bg-[#450099]/10',
      iconColor: 'text-[#450099]',
      rules: [
        'Racepack meliputi jersey, nomor BIB, dan material promosi lainnya.',
        'Nomor BIB merupakan nomor yang telah ditentukan oleh panitia.',
        'Peserta tanpa BIB DILARANG MASUK ke dalam venue.',
        'Nomor BIB tidak dapat dipindahtangankan atau diperjualbelikan.',
        'Peserta wajib membawa email konfirmasi dan identitas resmi (KTP/SIM/PASSPORT).',
        'Pengambilan dapat diwakilkan dengan surat kuasa bermaterai.',
        'Panitia tidak melayani pengambilan di luar jadwal yang ditentukan.',
      ],
    },
    {
      icon: Clock,
      title: 'Jadwal Pengambilan',
      color: 'from-[#9C2163] via-[#450099] to-[#FF0020]',
      iconBg: 'bg-[#9C2163]/10',
      iconColor: 'text-[#9C2163]',
      isSchedule: true,
      schedule: [
        {
          day: 'Jumat, 06 November 2026',
          time: '09:00 - 15:00 WIB',
          location: 'Telkom University Surabaya',
        },
        {
          day: 'Sabtu, 07 November 2026',
          time: '09:00 - 15:00 WIB',
          location: 'Telkom University Surabaya',
        },
      ],
    },
    {
      icon: CheckCircle2,
      title: 'Persyaratan Peserta',
      color: 'from-[#450099] via-[#9C2163] to-[#FF0020]',
      iconBg: 'bg-[#450099]/10',
      iconColor: 'text-[#450099]',
      rules: [
        'Pendaftaran terbuka untuk WNI dan WNA.',
        'Peserta wajib memiliki identitas resmi (KTP/SIM/PASSPORT).',
        'Peserta wajib memilih kategori sesuai ketentuan yang berlaku.',
        'Pendaftaran tidak dapat dialihnamakan setelah konfirmasi.',
        'Pembatalan pendaftaran tidak dapat dilakukan dengan pengembalian dana.',
      ],
    },
  ];

  return (
    <section id="rules" className="py-12 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#450099]/10 via-[#9C2163]/10 to-[#FF0020]/10 rounded-full mb-4 mx-auto">
            <div className="w-1.5 h-1.5 bg-[#FF0020] rounded-full"></div>
            <Star size={16} className="text-[#FF0020]" />
            <span className="text-sm font-semibold text-[#450099] tracking-wide">Wajib Dibaca</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#450099] via-[#9C2163] to-[#FF0020]">
              Peraturan & Ketentuan
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Mohon baca dengan teliti seluruh peraturan sebelum melakukan pendaftaran
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto items-start">
          {rulesData.map((section, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => toggleSection(index)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="w-full p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 ${section.iconBg} backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <section.icon className={section.iconColor} size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#450099] transition-colors duration-300">{section.title}</h3>
                  </div>
                </div>
                {expandedStates[index] ? (
                  <ChevronUp className="text-gray-400 flex-shrink-0 group-hover:text-[#450099] transition-colors duration-300" size={24} />
                ) : (
                  <ChevronDown className="text-gray-400 flex-shrink-0 group-hover:text-[#450099] transition-colors duration-300" size={24} />
                )}
              </div>

              {expandedStates[index] && (
                <div className="px-6 pb-6 animate-fade-in-up">
                  <div className="pt-4 border-t border-gray-100">
                    {section.isSchedule && section.schedule ? (
                      <div className="space-y-4">
                        {section.schedule.map((item, idx) => (
                          <div
                            key={idx}
                            className="relative bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl border border-gray-200 hover:border-[#9C2163]/30 transition-all duration-300"
                          >
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 bg-[#9C2163]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Clock className="text-[#9C2163]" size={20} />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-gray-900 mb-1">{item.day}</h4>
                                <div className="flex items-center gap-2 text-gray-600 mb-1">
                                  <Clock size={16} className="text-[#9C2163]" />
                                  <span className="font-medium">{item.time}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                  <MapPin size={16} className="text-[#450099]" />
                                  <span className="font-medium">{item.location}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {section.rules?.map((rule, idx) => (
                          <div
                            key={idx}
                            className="relative flex items-start gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-[#450099]/5 hover:via-[#9C2163]/5 hover:to-[#FF0020]/5 transition-all duration-300"
                          >
                            <div className="flex-shrink-0 mt-1">
                              <div className={`w-7 h-7 bg-gradient-to-br ${section.color} rounded-full flex items-center justify-center shadow-sm`}>
                                <span className="text-white text-xs font-bold">{idx + 1}</span>
                              </div>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">{rule}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#450099] via-[#9C2163] to-[#FF0020] text-white p-5 rounded-xl overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
            
            <div className="relative z-10 flex items-start gap-4">
              <div className="flex-shrink-0 mt-1 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <AlertCircle className="text-white" size={20} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Perhatian Penting!</h4>
                <p className="text-white/95 text-sm leading-relaxed">
                  Dengan melakukan pendaftaran dan mengambil racepack, peserta dianggap telah membaca, 
                  memahami, dan menyetujui seluruh peraturan. Pelanggaran dapat berakibat diskualifikasi 
                  tanpa pengembalian biaya pendaftaran.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}