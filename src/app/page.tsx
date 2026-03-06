import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Events from '@/components/Events';
import Timeline from '@/components/Timeline';
import Gallery from '@/components/Gallery';
import Rules from '@/components/Rules';
import Footer from '@/components/Footer';
import Highlights from '@/components/Highlights';
import WhatYouWillFind from '@/components/WhatYouWillFind';
import Awards from '@/components/Awards';

export default function Home() {
  return (
    <main className="min-h-screen"> 
    <Navbar />
    <Hero />    
    <About />
    <WhatYouWillFind />       
    <Events />  
    <Highlights /> 
    <Awards />               
    <Timeline />       
    <Gallery />       
    <Rules />  
    <Footer />
    </main>
  );
}