import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AuthorDirectory from './components/AuthorDirectory';
import SimilarAuthors from './components/SimilarAuthors';
import AuthorSpotlight from './components/AuthorSpotlight';
import CommunityEngagement from './components/CommunityEngagement';
import PersonalizedRecommendations from './components/PersonalizedRecommendations';
import Footer from './components/Footer';
export function App() {
  // State for filters and sorting
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeSort, setActiveSort] = useState('trending');
  return <div className="min-h-screen w-full bg-[#0D0F1F] text-[#F5F5DC]">
      <Navbar />
      <main className="w-full">
        <HeroSection />
        <AuthorDirectory activeFilter={activeFilter} setActiveFilter={setActiveFilter} activeSort={activeSort} setActiveSort={setActiveSort} />
        <SimilarAuthors />
        <AuthorSpotlight />
        <CommunityEngagement />
        <PersonalizedRecommendations />
      </main>
      <Footer />
    </div>;
}