import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Ticker from '@/components/Ticker';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import SearchFlow from '@/components/SearchFlow';

function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const openSearch = () => setSearchOpen(true);

  return (
    <div className="flex min-h-screen flex-col" style={{ background: 'radial-gradient(ellipse 130% 45% at 50% 0%, rgba(241,209,137,0.75) 0%, #FAF8F2 52%)' }}>
      <Header onOpenSearch={openSearch} />
      <main className="flex-1">
        <Hero onOpenSearch={openSearch} />
        <Ticker />
        <Features />
        <HowItWorks />
        <Reviews />
        <CTA onOpenSearch={openSearch} />
        <FAQ />
      </main>
      <Footer />
      <SearchFlow isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}

export default App;
