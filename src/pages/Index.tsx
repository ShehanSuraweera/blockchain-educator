
import { useState } from 'react';
import { ChevronDown, BookOpen, Network, Lock, Cpu, TrendingUp, Wallet, FileText, Rocket, Palette, Clock, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Hero from '@/components/Hero';
import IntroSection from '@/components/IntroSection';
import HowItWorks from '@/components/HowItWorks';
import HistorySection from '@/components/HistorySection';
import ConsensusSection from '@/components/ConsensusSection';
import CryptographySection from '@/components/CryptographySection';
import MiningSection from '@/components/MiningSection';
import ProsConsSection from '@/components/ProsConsSection';
import UseCasesSection from '@/components/UseCasesSection';
import NFTsSection from '@/components/NFTsSection';
import EmergingBlockchainsSection from '@/components/EmergingBlockchainsSection';
import WalletsSection from '@/components/WalletsSection';
import SmartContractsSection from '@/components/SmartContractsSection';
import FutureSection from '@/components/FutureSection';
import PublicPrivateSection from '@/components/PublicPrivateSection';
import Navigation from '@/components/Navigation';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', title: 'Home', icon: BookOpen },
    { id: 'intro', title: 'What is Blockchain?', icon: BookOpen },
    { id: 'how-it-works', title: 'How It Works', icon: Network },
    { id: 'public-private', title: 'Public vs Private', icon: Shield },
    { id: 'history', title: 'History', icon: Clock },
    { id: 'consensus', title: 'Consensus', icon: Cpu },
    { id: 'cryptography', title: 'Cryptography', icon: Lock },
    { id: 'mining', title: 'Mining', icon: TrendingUp },
    { id: 'pros-cons', title: 'Pros & Cons', icon: TrendingUp },
    { id: 'use-cases', title: 'Use Cases', icon: FileText },
    { id: 'nfts', title: 'NFTs', icon: Palette },
    { id: 'emerging', title: 'Emerging Blockchains', icon: Zap },
    { id: 'wallets', title: 'Wallets', icon: Wallet },
    { id: 'smart-contracts', title: 'Smart Contracts', icon: FileText },
    { id: 'future', title: 'Future', icon: Rocket },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Navigation sections={sections} activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="pt-20">
        <section id="hero" className="min-h-screen flex items-center justify-center">
          <Hero />
        </section>

        <section id="intro" className="py-20">
          <IntroSection />
        </section>

        <section id="how-it-works" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
          <HowItWorks />
        </section>

        <section id="public-private" className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
          <PublicPrivateSection />
        </section>

        <section id="history" className="py-20">
          <HistorySection />
        </section>

        <section id="consensus" className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
          <ConsensusSection />
        </section>

        <section id="cryptography" className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
          <CryptographySection />
        </section>

        <section id="mining" className="py-20">
          <MiningSection />
        </section>

        <section id="pros-cons" className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
          <ProsConsSection />
        </section>

        <section id="use-cases" className="py-20">
          <UseCasesSection />
        </section>

        <section id="nfts" className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
          <NFTsSection />
        </section>

        <section id="emerging" className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
          <EmergingBlockchainsSection />
        </section>

        <section id="wallets" className="py-20 bg-gradient-to-r from-yellow-50 to-orange-50">
          <WalletsSection />
        </section>

        <section id="smart-contracts" className="py-20">
          <SmartContractsSection />
        </section>

        <section id="future" className="py-20 bg-gradient-to-r from-violet-50 to-purple-50">
          <FutureSection />
        </section>
      </main>
    </div>
  );
};

export default Index;
