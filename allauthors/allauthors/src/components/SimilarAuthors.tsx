import React from 'react';
import { BrainIcon, PlusIcon } from 'lucide-react';
const SimilarAuthors = () => {
  return <section className="py-16 px-4 bg-gradient-to-b from-[#0D0F1F] to-[#0D0F1F]/90">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <div className="flex items-center mb-2">
              <BrainIcon size={24} className="text-[#FFD700] mr-3" />
              <h2 className="text-3xl font-bold text-[#F5F5DC]">
                Similar Authors You Might Like
              </h2>
            </div>
            <p className="text-[#F5F5DC]/70 md:max-w-2xl">
              AI-curated recommendations based on your reading history and
              preferences
            </p>
          </div>
          <button className="mt-4 md:mt-0 bg-[#1A1A1A] hover:bg-[#FFD700]/20 text-[#FFD700] px-5 py-2 rounded-full flex items-center transition-all duration-300 border border-[#FFD700]/30">
            <span>Refresh Recommendations</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {similarAuthors.map(recommendation => <div key={recommendation.id} className="bg-[#1A1A1A] rounded-lg overflow-hidden border border-[#FFD700]/20 flex flex-col md:flex-row">
              <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                <img src={recommendation.author.image} alt={recommendation.author.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-5 md:w-2/3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-[#F5F5DC]">
                      {recommendation.author.name}
                    </h3>
                    <p className="text-sm text-[#F5F5DC]/70 mb-2">
                      {recommendation.author.genres.join(', ')}
                    </p>
                  </div>
                  <button className="bg-[#FFD700]/10 hover:bg-[#FFD700]/20 text-[#FFD700] p-2 rounded-full transition-all duration-300">
                    <PlusIcon size={18} />
                  </button>
                </div>
                <p className="text-[#F5F5DC]/80 text-sm mb-3">
                  {recommendation.reason}
                </p>
                <div className="bg-[#0D0F1F]/50 p-3 rounded-md">
                  <p className="text-xs text-[#F5F5DC]/60 mb-1">
                    Recommended Book:
                  </p>
                  <p className="text-sm text-[#F5F5DC] font-medium">
                    {recommendation.recommendedBook}
                  </p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
const similarAuthors = [{
  id: 1,
  author: {
    name: 'Devdutt Pattanaik',
    genres: ['Mythology', 'Non-fiction'],
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  reason: "Since you read Amish Tripathi, you might love Devdutt Pattanaik's unique perspective on Indian mythology.",
  recommendedBook: 'Myth = Mithya: A Handbook of Hindu Mythology'
}, {
  id: 2,
  author: {
    name: 'Khaled Hosseini',
    genres: ['Fiction', 'Historical Fiction'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  reason: 'Based on your interest in emotionally powerful stories like those by Arundhati Roy.',
  recommendedBook: 'The Kite Runner'
}, {
  id: 3,
  author: {
    name: 'Anita Desai',
    genres: ['Fiction', 'Novel'],
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  reason: "If you enjoyed Jhumpa Lahiri's exploration of cultural identity, you'll appreciate Anita Desai's work.",
  recommendedBook: 'Clear Light of Day'
}];
export default SimilarAuthors;