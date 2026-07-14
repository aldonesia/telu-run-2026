'use client';

import { Trophy, TrendingUp, Users, Crown } from 'lucide-react';

export default function Awards() {
  const awardCategories = [
    {
      category: '5K Race',
      icon: TrendingUp,
      totalPrize: 'IDR 12.000.000',
      gradient: 'from-[#450099] to-[#9C2163]',
      categories: [
        {
          name: 'Male',
          prizes: [
            { position: '1st', amount: '3.000.000' },
            { position: '2nd', amount: '2.000.000' },
            { position: '3rd', amount: '1.000.000' },
          ],
        },
        {
          name: 'Female',
          prizes: [
            { position: '1st', amount: '3.000.000' },
            { position: '2nd', amount: '2.000.000' },
            { position: '3rd', amount: '1.000.000' },
          ],
        },
      ],
    },
    {
      category: '10K Race',
      icon: Trophy,
      totalPrize: 'IDR 24.000.000',
      gradient: 'from-[#9C2163] to-[#FF0020]',
      categories: [
        {
          name: 'Male',
          prizes: [
            { position: '1st', amount: '5.000.000' },
            { position: '2nd', amount: '4.000.000' },
            { position: '3rd', amount: '3.000.000' },
          ],
        },
        {
          name: 'Female',
          prizes: [
            { position: '1st', amount: '5.000.000' },
            { position: '2nd', amount: '4.000.000' },
            { position: '3rd', amount: '3.000.000' },
          ],
        },
      ],
    },
    {
      category: '5K Master 45+',
      icon: Users,
      totalPrize: 'IDR 7.500.000',
      gradient: 'from-[#450099] to-[#9C2163]',
      note: 'Usia 45+ tahun',
      categories: [
        {
          name: 'Male',
          prizes: [
            { position: '1st', amount: '1.500.000' },
            { position: '2nd', amount: '1.250.000' },
            { position: '3rd', amount: '1.000.000' },
          ],
        },
        {
          name: 'Female',
          prizes: [
            { position: '1st', amount: '1.500.000' },
            { position: '2nd', amount: '1.250.000' },
            { position: '3rd', amount: '1.000.000' },
          ],
        },
      ],
    },
    {
      category: '10K Master 45+',
      icon: Users,
      totalPrize: 'IDR 10.500.000',
      gradient: 'from-[#9C2163] to-[#FF0020]',
      note: 'Usia 45+ tahun',
      categories: [
        {
          name: 'Male',
          prizes: [
            { position: '1st', amount: '2.000.000' },
            { position: '2nd', amount: '1.750.000' },
            { position: '3rd', amount: '1.500.000' },
          ],
        },
        {
          name: 'Female',
          prizes: [
            { position: '1st', amount: '2.000.000' },
            { position: '2nd', amount: '1.750.000' },
            { position: '3rd', amount: '1.500.000' },
          ],
        },
      ],
    },
  ];

  const totalPrizePool = 'IDR 54.000.000';

  return (
    <section id="awards" className="py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#450099]/10 to-[#FF0020]/10 rounded-full mb-4 mx-auto">
            <Crown size={18} className="text-[#FFD700]" />
            <span className="text-sm font-semibold text-[#450099]">
              Total Prize Pool: {totalPrizePool}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#450099] via-[#9C2163] to-[#FF0020]">
              Awards & Prizes
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Raih kemenangan dan bawa pulang hadiah menarik!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {awardCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden flex flex-col"
              >
                <div className={`bg-gradient-to-r ${cat.gradient} p-4`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <Icon className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white leading-tight">
                          {cat.category}
                        </h3>
                        {cat.note && (
                          <p className="text-white/80 text-xs">{cat.note}</p>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white/80 text-xs">Total Prize</p>
                      <p className="text-white font-bold text-sm">{cat.totalPrize}</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 flex-grow">
                  <div className="space-y-3">
                    {cat.categories.map((subCat, subIdx) => (
                      <div key={subIdx}>
                        <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                          {subCat.name}
                        </p>
                        <div className="space-y-1.5">
                          {subCat.prizes.map((prize, prizeIdx) => (
                            <div
                              key={prizeIdx}
                              className="flex items-center justify-between px-3 py-2 bg-gray-50 rounded-lg"
                            >
                              <div className="flex items-center gap-2">
                                <div className={`w-6 h-6 rounded-md bg-gradient-to-br ${
                                  prizeIdx === 0 ? 'from-yellow-400 to-amber-500' :
                                  prizeIdx === 1 ? 'from-gray-300 to-gray-400' :
                                  'from-amber-600 to-amber-700'
                                } flex items-center justify-center`}>
                                  <span className="text-white font-bold text-xs">
                                    {prizeIdx + 1}
                                  </span>
                                </div>
                                <span className="text-sm font-medium text-gray-700">
                                  {prize.position}
                                </span>
                              </div>
                              <span className="text-sm font-bold text-[#FF0020]">
                                IDR {prize.amount}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-4 pb-4"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}