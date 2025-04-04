import React from 'react';
import { MessageSquareIcon, EyeIcon, ClockIcon, HeartIcon } from 'lucide-react';
const DiscussionCard = ({
  title,
  author,
  authorAvatar,
  replies,
  views,
  lastActivity,
  tags,
  sentiment
}) => {
  const getSentimentEmoji = () => {
    switch (sentiment) {
      case 'thought-provoking':
        return '🤔';
      case 'funny':
        return '😂';
      case 'emotional':
        return '❤️';
      case 'controversial':
        return '🔥';
      case 'informative':
        return '💡';
      default:
        return '💬';
    }
  };
  return <div className="bg-[#1A1A1A] rounded-lg p-5 border border-[#0F52BA]/20 hover:border-[#0F52BA]/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(15,82,186,0.2)]">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-medium text-[#F5F5DC] flex items-center gap-2">
          <span className="text-xl" aria-hidden="true">
            {getSentimentEmoji()}
          </span>
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2 mt-3">
        {tags.map((tag, idx) => <span key={idx} className="text-xs px-2 py-1 rounded-full bg-[#0D0F1F] text-[#F5F5DC]/70 border border-[#F5F5DC]/10">
            {tag}
          </span>)}
      </div>
      <div className="flex items-center justify-between mt-4 text-sm">
        <div className="flex items-center space-x-2">
          <img src={authorAvatar} alt={author} className="w-6 h-6 rounded-full border border-[#0F52BA]/30" />
          <span className="text-[#F5F5DC]/70">
            by <span className="text-[#0F52BA]">@{author}</span>
          </span>
        </div>
        <div className="flex items-center space-x-4 text-[#F5F5DC]/60">
          <div className="flex items-center space-x-1">
            <MessageSquareIcon size={14} />
            <span>{replies}</span>
          </div>
          <div className="flex items-center space-x-1">
            <EyeIcon size={14} />
            <span>{views}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#F5F5DC]/10 text-xs text-[#F5F5DC]/60">
        <div className="flex items-center space-x-1">
          <ClockIcon size={12} />
          <span>Last reply: {lastActivity}</span>
        </div>
        <div className="flex items-center space-x-1">
          <HeartIcon size={12} className="text-[#8B0000]/70" />
          <span>{Math.floor(Math.random() * 20) + 5}</span>
        </div>
      </div>
    </div>;
};
export default DiscussionCard;