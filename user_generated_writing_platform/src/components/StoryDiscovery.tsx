import React, { useState } from 'react';
import { TrendingUpIcon, StarIcon, BookOpenIcon, HeartIcon, ThumbsUpIcon, MessageCircleIcon } from 'lucide-react';
const StoryDiscovery = () => {
  const [activeTab, setActiveTab] = useState('Mythology');
  const genres = [{
    id: 'Mythology',
    icon: '📖'
  }, {
    id: 'Fantasy',
    icon: '🌟'
  }, {
    id: 'Romance',
    icon: '💕'
  }, {
    id: 'Thriller',
    icon: '🔪'
  }, {
    id: 'Comedy',
    icon: '🤣'
  }, {
    id: 'Inspirational',
    icon: '💡'
  }];
  const trendingStories = [{
    id: 1,
    title: 'The Last Guardian of Varanasi',
    author: 'Aditya Sharma',
    likes: 342,
    comments: 56,
    excerpt: 'The ancient temple held secrets that spanned centuries...',
    cover: 'https://images.unsplash.com/photo-1533152162573-9ef7c0072e06?q=80&w=2070'
  }, {
    id: 2,
    title: 'Whispers of the Monsoon',
    author: 'Priya Patel',
    likes: 289,
    comments: 42,
    excerpt: 'When the rains came, they brought more than just water...',
    cover: 'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?q=80&w=2274'
  }, {
    id: 3,
    title: 'The Merchant of Dreams',
    author: 'Raj Malhotra',
    likes: 217,
    comments: 38,
    excerpt: 'In the bustling markets of Old Delhi, one man traded in the most valuable currency of all...',
    cover: 'https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?q=80&w=2080'
  }];
  return <section className="py-16 px-4 bg-gradient-to-b from-[#0D0F1F] to-[#0D0F1F]/95">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column - Trending Stories */}
          <div className="w-full md:w-1/3">
            <div className="bg-[#1A1A1A] border border-[#DAA520] rounded-lg p-6">
              <div className="flex items-center mb-6">
                <TrendingUpIcon className="w-6 h-6 text-[#FFD700] mr-2" />
                <h2 className="text-2xl font-bold text-[#F5F5DC]">
                  Trending Stories
                </h2>
              </div>
              <div className="space-y-6">
                {trendingStories.map(story => <div key={story.id} className="flex space-x-4 pb-5 border-b border-[#DAA520]/30 last:border-0 last:pb-0">
                    <div className="w-20 h-24 rounded-md overflow-hidden flex-shrink-0">
                      <img src={story.cover} alt={story.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-[#F5F5DC] hover:text-[#FFD700] cursor-pointer">
                        {story.title}
                      </h3>
                      <p className="text-sm text-[#F5F5DC]/70 mb-2">
                        by {story.author}
                      </p>
                      <div className="flex items-center space-x-3 text-xs text-[#F5F5DC]/60">
                        <span className="flex items-center">
                          <ThumbsUpIcon className="w-3 h-3 mr-1" />
                          {story.likes}
                        </span>
                        <span className="flex items-center">
                          <MessageCircleIcon className="w-3 h-3 mr-1" />
                          {story.comments}
                        </span>
                      </div>
                    </div>
                  </div>)}
                <button className="w-full py-2 text-center text-[#FFD700] hover:text-[#F5F5DC] text-sm">
                  View All Trending Stories
                </button>
              </div>
            </div>
          </div>
          {/* Right column - Story of the Day & Categories */}
          <div className="w-full md:w-2/3">
            {/* AI Story of the Day */}
            <div className="bg-[#1A1A1A] border border-[#DAA520] rounded-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <StarIcon className="w-6 h-6 text-[#FFD700] mr-2" />
                  <h2 className="text-2xl font-bold text-[#F5F5DC]">
                    AI-Powered Story of the Day
                  </h2>
                </div>
                <div className="px-3 py-1 bg-[#0F52BA] text-xs text-[#F5F5DC] rounded-full">
                  AI Picked
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/3">
                  <img src="https://images.unsplash.com/photo-1609421141652-f33a87b6c312?q=80&w=1936" alt="Vikram & Betaal – The Forgotten Tale" className="w-full h-48 object-cover rounded-md shadow-lg shadow-[#FFD700]/10" />
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl font-bold text-[#F5F5DC] mb-2">
                    Vikram & Betaal – The Forgotten Tale
                  </h3>
                  <p className="text-sm text-[#F5F5DC]/70 mb-3">
                    by Meera Krishnan • Hindi Mythology
                  </p>
                  <p className="text-[#F5F5DC]/90 mb-4">
                    A reimagining of the classic tale where King Vikramaditya
                    must carry a vampire (Betaal) who tells him stories with
                    riddles. But this time, the stakes are higher...
                  </p>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="px-2 py-1 bg-[#0D0F1F] text-xs text-[#F5F5DC]/80 rounded-full">
                      #Mythology
                    </div>
                    <div className="px-2 py-1 bg-[#0D0F1F] text-xs text-[#F5F5DC]/80 rounded-full">
                      #Adventure
                    </div>
                    <div className="px-2 py-1 bg-[#0D0F1F] text-xs text-[#F5F5DC]/80 rounded-full">
                      #Mystery
                    </div>
                  </div>
                  <div className="text-sm text-[#FFD700]">
                    <p>
                      📌 Based on your interest in Hindi mythology, you might
                      love this new story!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Categorized Tabs */}
            <div className="bg-[#1A1A1A] border border-[#DAA520] rounded-lg p-6">
              <div className="flex items-center mb-6">
                <BookOpenIcon className="w-6 h-6 text-[#FFD700] mr-2" />
                <h2 className="text-2xl font-bold text-[#F5F5DC]">
                  Explore by Genre
                </h2>
              </div>
              {/* Genre Tabs */}
              <div className="flex overflow-x-auto space-x-2 mb-6 pb-2">
                {genres.map(genre => <button key={genre.id} className={`px-4 py-2 rounded-full whitespace-nowrap flex items-center ${activeTab === genre.id ? 'bg-[#FFD700] text-[#0D0F1F] font-medium' : 'bg-[#0D0F1F] text-[#F5F5DC] hover:bg-[#0D0F1F]/70'}`} onClick={() => setActiveTab(genre.id)}>
                    <span className="mr-2">{genre.icon}</span>
                    {genre.id}
                  </button>)}
              </div>
              {/* Featured stories in selected category (simplified) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => <div key={i} className="bg-[#0D0F1F] rounded-md overflow-hidden border border-[#DAA520]/30 hover:border-[#DAA520] transition-colors">
                    <div className="h-40 overflow-hidden">
                      <img src={`https://source.unsplash.com/random/300x200?${activeTab.toLowerCase()},story&sig=${i}`} alt={`${activeTab} story`} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-[#F5F5DC] font-medium mb-1">
                        {activeTab === 'Mythology' ? 'The Divine Dance' : activeTab === 'Fantasy' ? 'Realm of Shadows' : activeTab === 'Romance' ? 'Monsoon Promises' : activeTab === 'Thriller' ? 'The Last Witness' : activeTab === 'Comedy' ? 'The Great Indian Family' : 'Echoes of Wisdom'}{' '}
                        {i + 1}
                      </h3>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-[#F5F5DC]/70">
                          by Author Name
                        </p>
                        <div className="flex items-center">
                          <HeartIcon className="w-4 h-4 text-[#8B0000] fill-[#8B0000] mr-1" />
                          <span className="text-xs text-[#F5F5DC]/70">
                            {120 + i * 35}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default StoryDiscovery;