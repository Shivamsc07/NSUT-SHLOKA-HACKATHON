import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StoryDiscovery from './components/StoryDiscovery';
import AITools from './components/AITools';
import StorySubmission from './components/StorySubmission';
import DiscussionSection from './components/DiscussionSection';
import AchievementSystem from './components/AchievementSystem';
import CommunityFeatures from './components/CommunityFeatures';
import WritingChallenge from './components/WritingChallenge';
import Footer from './components/Footer';
export function App() {
  return <div className="w-full min-h-screen bg-[#0D0F1F] text-[#F5F5DC] font-sans">
      <Navbar />
      <main className="w-full">
        <HeroSection />
        <StoryDiscovery />
        <AITools />
        <StorySubmission />
        <DiscussionSection />
        <AchievementSystem />
        <CommunityFeatures />
        <WritingChallenge />
      </main>
      <Footer />
    </div>;
}