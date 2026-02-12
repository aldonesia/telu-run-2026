import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Events from '@/components/Events';
import Timeline from '@/components/Timeline';
import Gallery from '@/components/Gallery';
import Rules from '@/components/Rules';
import Sponsors from '@/components/Sponsors';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Highlights from '@/components/Highlights';
import WhatYouWillFind from '@/components/WhatYouWillFind';

export default function Home() {
  return (
    <main className="min-h-screen">
    <Navbar />
    <Hero />    
    <About />
    <WhatYouWillFind />       
    <Events />  
    <Highlights />                
    <Timeline />       
    <Gallery />       
    <Rules />  


    {/* <Sponsors />       */}
    <Contact />  
    <Footer />

    </main>
  );
}