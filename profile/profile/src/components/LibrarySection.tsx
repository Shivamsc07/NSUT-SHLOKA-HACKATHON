import React from 'react';
import { BookOpenIcon, ChevronRightIcon, ChevronLeftIcon } from 'lucide-react';
export const LibrarySection = () => {
  const books = [{
    id: 1,
    title: 'Meghdoot',
    author: 'Kalidasa',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    progress: 75
  }, {
    id: 2,
    title: 'Gitanjali',
    author: 'Rabindranath Tagore',
    cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    progress: 30
  }, {
    id: 3,
    title: 'Godan',
    author: 'Munshi Premchand',
    cover: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    progress: 90
  }, {
    id: 4,
    title: 'Madhushala',
    author: 'Harivansh Rai Bachchan',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    progress: 50
  }, {
    id: 5,
    title: 'Panchatantra',
    author: 'Vishnu Sharma',
    cover: 'https://images.unsplash.com/photo-1495640452828-3df6795cf69b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    progress: 15
  }];
  return <section className="bg-[#0D0F1F]/70 rounded-2xl p-6 border border-[#DAA520]/20 shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold flex items-center">
          <BookOpenIcon size={20} className="mr-2 text-[#DAA520]" />
          <span>My Library</span>
        </h2>
        <a href="#" className="text-sm text-[#DAA520] hover:underline flex items-center">
          <span>View All</span>
          <ChevronRightIcon size={16} className="ml-1" />
        </a>
      </div>
      <div className="carousel-container relative">
        <div className="flex overflow-x-auto pb-6 -mx-2 scrollbar-hide">
          {books.map((book, index) => <div key={book.id} className="px-2 w-1/2 sm:w-1/3 flex-shrink-0">
              <div className="book-card transform transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:translate-y-[-5px]">
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
                  <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                    <h3 className="text-sm font-bold text-white truncate">
                      {book.title}
                    </h3>
                    <p className="text-xs text-white/80">{book.author}</p>
                  </div>
                  <div className="absolute top-0 right-0 bg-[#FFD700] text-[#0D0F1F] text-xs font-bold px-2 py-1 m-2 rounded-md">
                    {book.progress}%
                  </div>
                </div>
              </div>
            </div>)}
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          <button className="p-1 rounded-full bg-[#1A1A1A] border border-[#DAA520]/30 hover:border-[#DAA520] transition-colors">
            <ChevronLeftIcon size={16} className="text-[#DAA520]" />
          </button>
          {[1, 2].map(i => <button key={i} className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-[#DAA520]' : 'bg-[#DAA520]/30'}`}></button>)}
          <button className="p-1 rounded-full bg-[#1A1A1A] border border-[#DAA520]/30 hover:border-[#DAA520] transition-colors">
            <ChevronRightIcon size={16} className="text-[#DAA520]" />
          </button>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-sm uppercase tracking-wider text-[#DAA520] mb-3">
          Reading Insights
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <InsightCard icon="📅" label="Reading Streak" value="21 Days" />
          <InsightCard icon="🔥" label="Trending Genre" value="Poetry & Philosophy" />
          <InsightCard icon="📊" label="Most Read Author" value="Munshi Premchand" />
          <InsightCard icon="⏳" label="Avg. Reading Time" value="42 min/day" />
        </div>
      </div>
    </section>;
};
const InsightCard = ({
  icon,
  label,
  value
}) => <div className="bg-[#1A1A1A]/40 rounded-lg p-3 border border-[#DAA520]/10">
    <div className="flex items-center">
      <div className="text-xl mr-2">{icon}</div>
      <div>
        <div className="text-xs text-[#F5F5DC]/70">{label}</div>
        <div className="text-sm font-semibold text-[#F5F5DC]">{value}</div>
      </div>
    </div>
  </div>;