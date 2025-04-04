import React from 'react';
import { BrainIcon, BookmarkIcon, TrendingUpIcon } from 'lucide-react';
const PersonalizedRecommendations = () => {
  return <section className="py-16 px-4 bg-[#0D0F1F]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <div className="flex items-center mb-2">
              <BrainIcon size={24} className="text-[#FFD700] mr-3" />
              <h2 className="text-3xl font-bold text-[#F5F5DC]">
                Personalized Author Recommendations
              </h2>
            </div>
            <p className="text-[#F5F5DC]/70">
              Discover new authors tailored to your unique reading preferences
            </p>
          </div>
        </div>
        {/* Achievement Banner */}
        <div className="bg-gradient-to-r from-[#1A1A1A] to-[#0D0F1F] rounded-xl p-6 border border-[#FFD700]/20 mb-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="bg-[#FFD700]/10 p-4 rounded-full mb-4 md:mb-0 md:mr-6">
              <TrendingUpIcon size={32} className="text-[#FFD700]" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-[#F5F5DC] mb-2">
                You discovered 10 new authors this month!
              </h3>
              <p className="text-[#F5F5DC]/70 mb-4">
                Keep exploring to earn the 'Literary Explorer' badge
              </p>
              <div className="w-full bg-[#0D0F1F] rounded-full h-2.5">
                <div className="bg-[#FFD700] h-2.5 rounded-full" style={{
                width: '70%'
              }}></div>
              </div>
              <p className="text-xs text-[#F5F5DC]/60 mt-2">
                70% progress to next level
              </p>
            </div>
          </div>
        </div>
        {/* Author Recommendations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedAuthors.map(author => <div key={author.id} className="bg-[#1A1A1A] rounded-lg overflow-hidden border border-[#FFD700]/20 hover:border-[#FFD700]/40 transition-all duration-300 flex flex-col">
              <div className="h-40 overflow-hidden relative">
                <img src={author.image} alt={author.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F1F] to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-lg font-bold text-[#F5F5DC]">
                        {author.name}
                      </h3>
                      <p className="text-xs text-[#F5F5DC]/70">
                        {author.genres.join(', ')}
                      </p>
                    </div>
                    <button className="bg-[#0D0F1F]/70 hover:bg-[#0D0F1F] p-2 rounded-full transition-all duration-300">
                      <BookmarkIcon size={16} className="text-[#FFD700]" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4 flex-grow">
                <div className="flex items-start mb-3">
                  <div className="bg-[#FFD700]/10 p-1 rounded-full mr-2 flex-shrink-0">
                    <BrainIcon size={12} className="text-[#FFD700]" />
                  </div>
                  <p className="text-xs text-[#F5F5DC]/80">{author.aiReason}</p>
                </div>
                <div className="mt-auto">
                  <p className="text-xs text-[#F5F5DC]/60 mb-1">Start with:</p>
                  <p className="text-sm font-medium text-[#F5F5DC]">
                    {author.recommendedBook}
                  </p>
                </div>
              </div>
              <div className="px-4 pb-4">
                <button className="w-full bg-[#0D0F1F] hover:bg-[#0F52BA] text-[#F5F5DC] py-2 rounded-lg text-sm transition-all duration-300 border border-[#FFD700]/20">
                  Explore Author
                </button>
              </div>
            </div>)}
        </div>
        {/* Virtual Bookshelf */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-[#F5F5DC]">
              Your Virtual Bookshelf
            </h3>
            <button className="text-[#FFD700] hover:text-[#FFD700]/80 transition-colors duration-300">
              View All
            </button>
          </div>
          <div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#FFD700]/20">
            <div className="flex items-center justify-center h-40">
              <div className="text-center">
                <BookmarkIcon size={32} className="text-[#F5F5DC]/30 mx-auto mb-4" />
                <p className="text-[#F5F5DC]/70">
                  Start following authors to build your virtual bookshelf
                </p>
                <button className="mt-4 bg-[#FFD700]/10 hover:bg-[#FFD700]/20 text-[#FFD700] px-4 py-2 rounded-full text-sm transition-all duration-300">
                  Discover Authors to Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
// Sample data for recommended authors
const recommendedAuthors = [{
  id: 1,
  name: 'Shashi Tharoor',
  genres: ['Non-fiction', 'History', 'Politics'],
  image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  aiReason: 'Based on your interest in Indian history and political commentary.',
  recommendedBook: 'An Era of Darkness: The British Empire in India'
}, {
  id: 2,
  name: 'Anita Desai',
  genres: ['Fiction', 'Novel'],
  image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  aiReason: "Her writing style is similar to Jhumpa Lahiri, whom you've rated highly.",
  recommendedBook: 'Clear Light of Day'
}, {
  id: 3,
  name: 'Perumal Murugan',
  genres: ['Fiction', 'Tamil Literature'],
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  aiReason: "Explores rural themes similar to those in R.K. Narayan's works that you enjoyed.",
  recommendedBook: 'Poonachi: Or the Story of a Black Goat'
}, {
  id: 4,
  name: 'Kamala Das',
  genres: ['Poetry', 'Autobiography'],
  image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  aiReason: 'Her confessional poetry style might appeal to you based on your recent readings.',
  recommendedBook: 'My Story'
}];
export default PersonalizedRecommendations;