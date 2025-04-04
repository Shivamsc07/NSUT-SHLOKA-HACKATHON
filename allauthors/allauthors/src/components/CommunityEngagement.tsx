import React from 'react';
import { MessageCircleIcon, CalendarIcon, StarIcon, BookmarkIcon } from 'lucide-react';
const CommunityEngagement = () => {
  return <section className="py-16 px-4 bg-gradient-to-b from-[#0D0F1F] to-[#0D0F1F]/95">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5DC]">
            Community & Discussions
          </h2>
          <p className="text-[#F5F5DC]/70 mt-3 max-w-3xl mx-auto">
            Connect with fellow readers and participate in AI-powered literary
            discussions
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Virtual Q&A Events */}
          <div className="bg-[#1A1A1A] rounded-xl border border-[#FFD700]/20 overflow-hidden">
            <div className="bg-[#0F52BA]/10 px-6 py-4 border-b border-[#FFD700]/10">
              <div className="flex items-center">
                <MessageCircleIcon size={22} className="text-[#0F52BA] mr-3" />
                <h3 className="text-xl font-bold text-[#F5F5DC]">
                  Virtual Q&A with Authors
                </h3>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {qaEvents.map(event => <div key={event.id} className="border-b border-[#FFD700]/10 pb-5 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-semibold text-[#F5F5DC]">
                        {event.title}
                      </h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${event.status === 'upcoming' ? 'bg-[#0F52BA]/20 text-[#0F52BA]' : 'bg-[#FFD700]/10 text-[#FFD700]'}`}>
                        {event.status === 'upcoming' ? 'Upcoming' : 'Submit Questions'}
                      </span>
                    </div>
                    <p className="text-sm text-[#F5F5DC]/80 mb-3">
                      {event.description}
                    </p>
                    <div className="flex items-center text-[#F5F5DC]/60 text-sm">
                      <CalendarIcon size={14} className="mr-2" />
                      <span>{event.date}</span>
                    </div>
                  </div>)}
              </div>
              <button className="w-full mt-6 bg-[#0D0F1F] hover:bg-[#0F52BA]/80 text-[#F5F5DC] py-2 rounded-lg transition-all duration-300 border border-[#FFD700]/20">
                View All Events
              </button>
            </div>
          </div>
          {/* AI-Powered Literary Discussions */}
          <div className="bg-[#1A1A1A] rounded-xl border border-[#FFD700]/20 overflow-hidden">
            <div className="bg-[#FFD700]/10 px-6 py-4 border-b border-[#FFD700]/10">
              <div className="flex items-center">
                <BrainIcon size={22} className="text-[#FFD700] mr-3" />
                <h3 className="text-xl font-bold text-[#F5F5DC]">
                  AI Literary Discussions
                </h3>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-[#0D0F1F]/50 p-4 rounded-lg mb-6">
                <p className="text-[#F5F5DC]/80 text-sm mb-4">
                  Our AI assistant can help you explore an author's work, style,
                  and literary significance. Try asking:
                </p>
                <ul className="space-y-2 text-sm text-[#F5F5DC]/70">
                  <li className="bg-[#0D0F1F] p-2 rounded">
                    • "Summarize Arundhati Roy's writing style"
                  </li>
                  <li className="bg-[#0D0F1F] p-2 rounded">
                    • "What themes does Ruskin Bond explore in his works?"
                  </li>
                  <li className="bg-[#0D0F1F] p-2 rounded">
                    • "Compare Rabindranath Tagore and Sarojini Naidu"
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                {aiDiscussions.map(discussion => <div key={discussion.id} className="flex items-start">
                    <div className="bg-[#FFD700]/10 p-2 rounded-full mr-3 flex-shrink-0">
                      <BookIcon size={16} className="text-[#FFD700]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#F5F5DC] text-sm">
                        {discussion.topic}
                      </h4>
                      <p className="text-xs text-[#F5F5DC]/60 mt-1">
                        {discussion.participants} readers participating
                      </p>
                    </div>
                  </div>)}
              </div>
              <button className="w-full mt-6 bg-[#0D0F1F] hover:bg-[#FFD700]/80 hover:text-[#0D0F1F] text-[#F5F5DC] py-2 rounded-lg transition-all duration-300 border border-[#FFD700]/20">
                Start New Discussion
              </button>
            </div>
          </div>
          {/* User Reviews & Bookmarks */}
          <div className="bg-[#1A1A1A] rounded-xl border border-[#FFD700]/20 overflow-hidden">
            <div className="bg-[#8B0000]/10 px-6 py-4 border-b border-[#FFD700]/10">
              <div className="flex items-center">
                <StarIcon size={22} className="text-[#8B0000] mr-3" />
                <h3 className="text-xl font-bold text-[#F5F5DC]">
                  Reviews & Bookmarks
                </h3>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-5 mb-6">
                {reviews.map(review => <div key={review.id} className="border-b border-[#FFD700]/10 pb-4 last:border-0 last:pb-0">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-[#F5F5DC]">
                        {review.author}
                      </h4>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => <StarIcon key={i} size={14} className={i < review.rating ? 'text-[#FFD700]' : 'text-[#F5F5DC]/20'} fill={i < review.rating ? '#FFD700' : 'none'} />)}
                      </div>
                    </div>
                    <p className="text-sm text-[#F5F5DC]/80 mb-2">
                      {review.comment}
                    </p>
                    <p className="text-xs text-[#F5F5DC]/50">{review.date}</p>
                  </div>)}
              </div>
              <div className="flex space-x-3">
                <button className="flex-1 bg-[#8B0000]/10 hover:bg-[#8B0000]/20 text-[#F5F5DC] py-2 rounded-lg transition-all duration-300 text-sm flex items-center justify-center">
                  <StarIcon size={14} className="mr-2" />
                  <span>Write Review</span>
                </button>
                <button className="flex-1 bg-[#0D0F1F] hover:bg-[#0D0F1F]/80 text-[#F5F5DC] py-2 rounded-lg transition-all duration-300 text-sm flex items-center justify-center border border-[#FFD700]/20">
                  <BookmarkIcon size={14} className="mr-2" />
                  <span>My Bookmarks</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Community Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#0F52BA]/20 to-[#0D0F1F] rounded-xl p-6 border border-[#0F52BA]/30">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-[#F5F5DC] mb-2">
                Join the live discussion on Rabindranath Tagore's literary
                impact
              </h3>
              <p className="text-[#F5F5DC]/70">
                This Sunday at 6:00 PM IST • Hosted by Prof. Amartya Sen
              </p>
            </div>
            <button className="bg-[#0F52BA] hover:bg-[#0F52BA]/80 text-[#F5F5DC] px-6 py-3 rounded-full transition-all duration-300 flex items-center">
              <CalendarIcon size={18} className="mr-2" />
              <span>Add to Calendar</span>
            </button>
          </div>
        </div>
      </div>
    </section>;
};
// Missing component
const BrainIcon = ({
  size,
  className
}) => {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z" />
    </svg>;
};
const BookIcon = ({
  size,
  className
}) => {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>;
};
const ChartIcon = ({
  size,
  className
}) => {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 3v18h18" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </svg>;
};
// Sample data
const qaEvents = [{
  id: 1,
  title: 'In Conversation with Amitav Ghosh',
  description: "Discuss 'The Ibis Trilogy' and the author's approach to historical fiction.",
  date: 'July 25, 2023 • 6:00 PM IST',
  status: 'questions'
}, {
  id: 2,
  title: 'Poetry Session with Gulzar',
  description: 'Submit your questions about poetry, lyrics, and the creative process.',
  date: 'August 3, 2023 • 7:30 PM IST',
  status: 'upcoming'
}, {
  id: 3,
  title: 'Exploring Mythology with Devdutt Pattanaik',
  description: 'Learn about Indian mythology and its modern interpretations.',
  date: 'August 12, 2023 • 5:00 PM IST',
  status: 'upcoming'
}];
const aiDiscussions = [{
  id: 1,
  topic: "The symbolism in Arundhati Roy's 'The God of Small Things'",
  participants: 247
}, {
  id: 2,
  topic: 'Comparing the writing styles of Premchand and Tagore',
  participants: 183
}, {
  id: 3,
  topic: 'The evolution of Indian English literature since Independence',
  participants: 312
}];
const reviews = [{
  id: 1,
  author: 'Vikram Seth',
  rating: 5,
  comment: 'A masterful storyteller who weaves complex characters with historical events seamlessly.',
  date: '2 days ago'
}, {
  id: 2,
  author: 'Jhumpa Lahiri',
  rating: 4,
  comment: 'Her exploration of cultural identity resonates deeply with my own experiences.',
  date: '1 week ago'
}, {
  id: 3,
  author: 'Amish Tripathi',
  rating: 5,
  comment: 'Brilliant reimagining of mythology for the modern reader.',
  date: '2 weeks ago'
}];
export default CommunityEngagement;