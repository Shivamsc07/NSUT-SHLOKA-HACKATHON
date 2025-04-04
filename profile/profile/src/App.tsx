import React from 'react';
import Navbar from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { LibrarySection } from './components/LibrarySection';
import { InsightsSection } from './components/InsightsSection';
import { NotesSection } from './components/NotesSection';
import { CommunitySection } from './components/CommunitySection';
import { AchievementsSection } from './components/AchievementsSection';
import { SubscriptionSection } from './components/SubscriptionSection';
import { DigestSection } from './components/DigestSection';
import Footer from './components/Footer';
export function App() {
  return <div className="min-h-screen w-full bg-[#0D0F1F] text-[#F5F5DC]">
      <Navbar />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <HeroSection />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          <LibrarySection />
          <InsightsSection />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          <NotesSection />
          <CommunitySection />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          <AchievementsSection />
          <SubscriptionSection />
        </div>
        <DigestSection />
      </main>
      <Footer />
    </div>;
}