import React from 'react';
import { MessageSquareIcon, ThumbsUpIcon, MessageCircleIcon, BotIcon } from 'lucide-react';
export const CommunitySection = () => {
  const discussions = [{
    id: 1,
    book: 'Gitanjali',
    question: "What does the last stanza in 'Gitanjali' mean?",
    answer: "It reflects Tagore's vision of a world without fear, where the mind is free.",
    likes: 24,
    replies: 7,
    timeAgo: '2 days ago'
  }, {
    id: 2,
    book: 'Madhushala',
    question: "Symbolism in Harivansh Rai Bachchan's poetry?",
    answer: "The tavern (madhushala) represents life's journey, while the wine symbolizes experiences and emotions we collect.",
    likes: 18,
    replies: 5,
    timeAgo: '1 week ago'
  }];
  return <section className="bg-[#0D0F1F]/70 rounded-2xl p-6 border border-[#DAA520]/20 shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold flex items-center">
          <MessageSquareIcon size={20} className="mr-2 text-[#DAA520]" />
          <span>Discussions & Reviews</span>
        </h2>
        <a href="#" className="text-sm text-[#DAA520] hover:underline">
          View All
        </a>
      </div>
      <div className="space-y-4 mb-6">
        {discussions.map(discussion => <div key={discussion.id} className="bg-[#1A1A1A]/40 rounded-lg p-4 border border-[#DAA520]/10">
            <div className="text-xs text-[#DAA520] mb-1">{discussion.book}</div>
            <div className="text-sm font-medium text-[#F5F5DC] mb-2">
              {discussion.question}
            </div>
            <div className="bg-[#0D0F1F]/50 rounded p-3 mb-3">
              <div className="flex items-start">
                <div className="bg-[#0F52BA]/20 p-1 rounded mr-2">
                  <BotIcon size={14} className="text-[#0F52BA]" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-[#F5F5DC]/90">
                    {discussion.answer}
                  </div>
                  <div className="text-xs text-[#F5F5DC]/50 mt-1">
                    AI Assistant
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center text-xs text-[#F5F5DC]/60">
              <div className="flex space-x-4">
                <button className="flex items-center hover:text-[#DAA520] transition-colors">
                  <ThumbsUpIcon size={14} className="mr-1" />
                  <span>{discussion.likes}</span>
                </button>
                <button className="flex items-center hover:text-[#DAA520] transition-colors">
                  <MessageCircleIcon size={14} className="mr-1" />
                  <span>{discussion.replies}</span>
                </button>
              </div>
              <div>{discussion.timeAgo}</div>
            </div>
          </div>)}
      </div>
      <div className="mt-6">
        <h3 className="text-sm uppercase tracking-wider text-[#DAA520] mb-3">
          Ask AI About Books
        </h3>
        <div className="bg-[#1A1A1A]/40 rounded-lg p-4 border border-[#DAA520]/10">
          <div className="flex items-center mb-4">
            <input type="text" placeholder="Ask about any book or passage..." className="flex-1 bg-[#0D0F1F] border border-[#DAA520]/30 rounded-l-md py-2 px-3 text-sm text-[#F5F5DC] placeholder:text-[#F5F5DC]/40 focus:outline-none focus:border-[#DAA520]" />
            <button className="bg-[#DAA520] text-[#0D0F1F] py-2 px-4 rounded-r-md hover:bg-[#DAA520]/80 transition-colors">
              <BotIcon size={16} />
            </button>
          </div>
          <div className="text-xs text-[#F5F5DC]/60">
            Try asking: "Explain the symbolism in Kabir's dohas" or "Compare
            Tagore and Premchand's writing styles"
          </div>
        </div>
      </div>
    </section>;
};