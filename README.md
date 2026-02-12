# Tel-U Run 2026 - Landing Page

Website landing page modern dan interaktif untuk acara Tel-U Run 2026 menggunakan Next.js 15 dengan App Router.

## 🎯 Fitur

- ✅ **Single Page Application** - Landing page responsif dengan smooth scrolling
- ✅ **Modern UI/UX** - Desain clean, sporty, dan professional
- ✅ **Fully Responsive** - Optimized untuk mobile, tablet, dan desktop
- ✅ **SEO Optimized** - Meta tags lengkap untuk search engine
- ✅ **Performance** - Fast loading dengan Next.js optimization
- ✅ **Interactive Components** - Hover effects, animations, dan transitions
- ✅ **Ready to Deploy** - Siap deploy ke Vercel

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI Library:** React 18
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Language:** TypeScript

## 📋 Struktur Halaman

1. **Navbar** - Sticky navigation dengan smooth scroll
2. **Hero Section** - Judul besar dengan gradient background dan CTA buttons
3. **About Section** - Informasi tentang Tel-U Run 2026
4. **Events** - Grid card untuk kategori event (Fun Run, Fun Walk, Community Activity)
5. **Gallery** - Grid foto dengan lightbox modal
6. **Timeline** - Timeline event dengan animasi
7. **Sponsors** - Grid logo sponsor dengan hover effects
8. **Contact** - Informasi kontak dengan CTA WhatsApp dan Google Form
9. **Footer** - Links, social media, dan copyright

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm atau yarn

### Installation

1. Clone atau download project ini

2. Install dependencies:
```bash
npm install
# atau
yarn install
```

3. Jalankan development server:
```bash
npm run dev
# atau
yarn dev
```

4. Buka browser dan akses:
```
http://localhost:3000
```

## 📦 Build & Deploy

### Build untuk Production

```bash
npm run build
npm start
```

### Deploy ke Vercel

1. Push kode ke GitHub repository
2. Import project ke Vercel
3. Vercel akan otomatis detect Next.js dan deploy

Atau gunakan Vercel CLI:
```bash
npm i -g vercel
vercel
```

## 🎨 Kustomisasi

### Warna Tema

Edit `tailwind.config.ts` untuk mengubah warna:

```typescript
colors: {
  primary: {
    orange: '#FF6B35',  // Ubah ke warna favorit
    blue: '#004E89',
    light: '#1A659E',
  },
}
```

### Content

Edit file-file component di `src/components/` untuk mengubah konten:

- `Hero.tsx` - Judul dan deskripsi utama
- `About.tsx` - Informasi tentang event
- `Events.tsx` - Daftar kategori event
- `Timeline.tsx` - Jadwal acara
- `Contact.tsx` - Informasi kontak

### Metadata SEO

Edit `src/app/layout.tsx` untuk mengubah metadata:

```typescript
export const metadata: Metadata = {
  title: "Tel-U Run 2026 - Your Title",
  description: "Your description",
  // ...
};
```

## 📁 Struktur Folder

```
motion-festival/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout dengan metadata
│   │   ├── page.tsx        # Main page (home)
│   │   └── globals.css     # Global styles
│   └── components/
│       ├── Navbar.tsx      # Navigation bar
│       ├── Hero.tsx        # Hero section
│       ├── About.tsx       # About section
│       ├── Events.tsx      # Events section
│       ├── Gallery.tsx     # Gallery section
│       ├── Timeline.tsx    # Timeline section
│       ├── Sponsors.tsx    # Sponsors section
│       ├── Contact.tsx     # Contact section
│       └── Footer.tsx      # Footer
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── next.config.ts          # Next.js configuration
└── package.json
```

## 🔗 Links & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)
- [Vercel Deployment](https://vercel.com/docs)

## 📝 Notes

- Semua placeholder images menggunakan gradients untuk demonstrasi
- Ganti dengan images asli di production
- Update links WhatsApp dan Google Form dengan yang sebenarnya
- Tambahkan Google Maps embed untuk lokasi event
- Implementasi real social media links

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Tel-U Run 2026 Team

---

**Happy Coding! 🚀**