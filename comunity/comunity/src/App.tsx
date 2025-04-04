import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrendingDiscussions from './components/TrendingDiscussions';
import AIFeatures from './components/AIFeatures';
import StartDiscussion from './components/StartDiscussion';
import LiveChatRooms from './components/LiveChatRooms';
import BookClubs from './components/BookClubs';
import Footer from './components/Footer';
export function App() {
  return <div className="min-h-screen bg-[#0D0F1F] text-[#F5F5DC] font-sans">
      <Navbar />
      <main className="w-full">
        <HeroSection />
        <div className="container mx-auto px-4 py-8">
          <TrendingDiscussions />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            <div className="lg:col-span-2">
              <StartDiscussion />
              <LiveChatRooms />
            </div>
            <div className="lg:col-span-1">
              <AIFeatures />
              <BookClubs />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
}