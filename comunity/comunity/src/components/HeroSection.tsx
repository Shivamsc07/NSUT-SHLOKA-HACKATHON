import React, { useEffect, useState } from 'react';
import { MessageCircleIcon, TrendingUpIcon, UsersIcon } from 'lucide-react';
const HeroSection = () => {
  const [currentTopic, setCurrentTopic] = useState(0);
  const topics = ["What's your take on the ending of 'Godan' by Munshi Premchand?", 'How did Rabindranath Tagore influence modern Indian poetry?', "Let's discuss the symbolism in Amrita Pritam's 'Pinjar'", 'Was Premchand ahead of his time with social commentary?', "Exploring the feminist themes in Mahasweta Devi's works"];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTopic(prev => (prev + 1) % topics.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return <section className="relative w-full py-16 overflow-hidden bg-gradient-to-br from-[#0D0F1F] to-[#0D0F1F]/95">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-1/4 w-32 h-32 rounded-full bg-[#0F52BA]/10 blur-2xl"></div>
        <div className="absolute bottom-10 right-1/4 w-40 h-40 rounded-full bg-[#8B0000]/10 blur-2xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#F5F5DC] mb-4">
            Join the Literary{' '}
            <span className="text-[#FFD700]">Conversation</span>
          </h1>
          <p className="text-lg text-[#F5F5DC]/80 max-w-2xl mx-auto">
            Discover thought-provoking discussions on Indian literature, connect
            with fellow readers, and explore new perspectives with AI-enhanced
            literary insights.
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-[#1A1A1A] rounded-lg p-6 border border-[#0F52BA]/30 shadow-lg relative">
          <div className="absolute -top-3 -right-3 bg-[#0F52BA] text-[#F5F5DC] text-xs px-2 py-1 rounded">
            AI-Curated
          </div>
          <div className="h-24 flex items-center justify-center">
            {topics.map((topic, idx) => <p key={idx} className={`absolute text-xl text-center transition-all duration-1000 transform ${idx === currentTopic ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                "{topic}"
              </p>)}
          </div>
          <div className="flex justify-center mt-6">
            <button className="bg-[#0F52BA] hover:bg-[#0F52BA]/80 text-white font-medium py-2 px-6 rounded-full flex items-center space-x-2 transition-all duration-300 hover:shadow-[0_0_15px_rgba(15,82,186,0.5)]">
              <MessageCircleIcon size={18} />
              <span>Join the Discussion</span>
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <StatCard icon={<MessageCircleIcon size={20} className="text-[#0F52BA]" />} label="Active Discussions" value="120+" />
          <StatCard icon={<TrendingUpIcon size={20} className="text-[#8B0000]" />} label="Trending Topics" value="15" />
          <StatCard icon={<UsersIcon size={20} className="text-[#FFD700]" />} label="New Members This Week" value="250+" />
        </div>
      </div>
    </section>;
};
const StatCard = ({
  icon,
  label,
  value
}) => <div className="flex items-center space-x-3 bg-[#1A1A1A]/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-[#F5F5DC]/10">
    <div className="p-2 bg-[#0D0F1F] rounded-full">{icon}</div>
    <div>
      <p className="text-sm text-[#F5F5DC]/70">{label}</p>
      <p className="text-xl font-bold text-[#F5F5DC]">{value}</p>
    </div>
  </div>;
export default HeroSection;