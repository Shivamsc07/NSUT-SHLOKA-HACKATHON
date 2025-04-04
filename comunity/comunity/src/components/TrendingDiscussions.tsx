import React, { useState } from 'react';
import DiscussionCard from './DiscussionCard';
import { TrendingUpIcon, ClockIcon, HeartIcon, AwardIcon } from 'lucide-react';
const TrendingDiscussions = () => {
  const [activeFilter, setActiveFilter] = useState('engaging');
  const discussions = [{
    id: 1,
    title: "Did R.K. Narayan's 'Malgudi Days' shape modern Indian storytelling?",
    author: 'BookLover07',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    replies: '42',
    views: '387',
    lastActivity: '10 mins ago',
    tags: ['Fiction', 'Classic', 'Analysis'],
    sentiment: 'thought-provoking'
  }, {
    id: 2,
    title: "The symbolism of rivers in Rabindranath Tagore's poetry",
    author: 'LitExplorer',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    replies: '36',
    views: '294',
    lastActivity: '2 hours ago',
    tags: ['Poetry', 'Symbolism', 'Tagore'],
    sentiment: 'emotional'
  }, {
    id: 3,
    title: "Is 'The God of Small Things' Arundhati Roy's finest work?",
    author: 'NovelNomad',
    authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    replies: '58',
    views: '512',
    lastActivity: '1 day ago',
    tags: ['Contemporary', 'Booker Prize', 'Analysis'],
    sentiment: 'controversial'
  }, {
    id: 4,
    title: "Humor techniques in Ruskin Bond's short stories",
    author: 'MountainReader',
    authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    replies: '27',
    views: '215',
    lastActivity: '5 hours ago',
    tags: ['Short Stories', 'Humor', 'Technique'],
    sentiment: 'funny'
  }, {
    id: 5,
    title: "Exploring feminist themes in Mahasweta Devi's works",
    author: 'LitCritic22',
    authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    replies: '49',
    views: '423',
    lastActivity: '3 hours ago',
    tags: ['Feminism', 'Social Commentary', 'Analysis'],
    sentiment: 'thought-provoking'
  }, {
    id: 6,
    title: "The influence of mythology in Amish Tripathi's novels",
    author: 'MythosReader',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    replies: '62',
    views: '578',
    lastActivity: '6 hours ago',
    tags: ['Mythology', 'Contemporary', 'Fiction'],
    sentiment: 'informative'
  }];
  return <section className="mt-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[#F5F5DC] flex items-center">
          <TrendingUpIcon className="mr-2 text-[#FFD700]" size={24} />
          Trending Discussions
        </h2>
        <div className="flex space-x-2 bg-[#0D0F1F] rounded-lg p-1">
          <FilterButton active={activeFilter === 'engaging'} onClick={() => setActiveFilter('engaging')} icon={<TrendingUpIcon size={14} />} label="Most Engaging" />
          <FilterButton active={activeFilter === 'newest'} onClick={() => setActiveFilter('newest')} icon={<ClockIcon size={14} />} label="Newest" />
          <FilterButton active={activeFilter === 'liked'} onClick={() => setActiveFilter('liked')} icon={<HeartIcon size={14} />} label="Most Liked" />
          <FilterButton active={activeFilter === 'author'} onClick={() => setActiveFilter('author')} icon={<AwardIcon size={14} />} label="Author-Led" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {discussions.map(discussion => <DiscussionCard key={discussion.id} {...discussion} />)}
      </div>
      <div className="flex justify-center mt-8">
        <button className="border border-[#0F52BA] text-[#0F52BA] hover:bg-[#0F52BA]/10 font-medium py-2 px-6 rounded-full transition-colors">
          View All Discussions
        </button>
      </div>
    </section>;
};
const FilterButton = ({
  active,
  onClick,
  icon,
  label
}) => <button onClick={onClick} className={`flex items-center space-x-1 px-3 py-1 rounded-md text-sm transition-colors ${active ? 'bg-[#0F52BA] text-white' : 'text-[#F5F5DC]/70 hover:text-[#F5F5DC] hover:bg-[#1A1A1A]'}`}>
    <span>{icon}</span>
    <span className="hidden md:inline">{label}</span>
  </button>;
export default TrendingDiscussions;