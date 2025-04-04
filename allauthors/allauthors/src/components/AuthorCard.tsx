import React from 'react';
import { BookOpenIcon, AwardIcon, TagIcon, ArrowRightIcon, StarIcon } from 'lucide-react';
const AuthorCard = ({
  author
}) => {
  return <div className="author-card bg-[#1A1A1A] rounded-lg overflow-hidden border border-[#FFD700]/20">
      <div className="h-56 overflow-hidden relative">
        <img src={author.image} alt={author.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0D0F1F] to-transparent h-16"></div>
        <div className="absolute top-3 right-3 bg-[#FFD700] text-[#0D0F1F] px-2 py-1 rounded-full text-xs font-bold flex items-center">
          <StarIcon size={12} className="mr-1" />
          {author.rating}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-[#F5F5DC] mb-2">{author.name}</h3>
        <div className="flex items-center mb-3">
          <TagIcon size={16} className="text-[#FFD700] mr-2" />
          <div className="flex flex-wrap gap-1">
            {author.genres.map((genre, index) => <span key={index} className="text-xs bg-[#FFD700]/10 text-[#FFD700] px-2 py-1 rounded-full">
                {genre}
              </span>)}
          </div>
        </div>
        <div className="mb-3">
          <div className="flex items-start mb-2">
            <BookOpenIcon size={16} className="text-[#0F52BA] mr-2 mt-1 flex-shrink-0" />
            <div>
              <p className="text-xs text-[#F5F5DC]/70 mb-1">Notable Books:</p>
              <p className="text-sm text-[#F5F5DC]">
                {author.notableBooks.join(', ')}
              </p>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-start">
            <AwardIcon size={16} className="text-[#FFD700] mr-2 mt-1 flex-shrink-0" />
            <div>
              <p className="text-xs text-[#F5F5DC]/70 mb-1">Awards:</p>
              <p className="text-sm text-[#F5F5DC]">
                {author.awards.join(', ')}
              </p>
            </div>
          </div>
        </div>
        <button className="w-full bg-[#0D0F1F] hover:bg-[#0F52BA] text-[#F5F5DC] py-2 rounded-lg transition-all duration-300 flex items-center justify-center border border-[#FFD700]/20 group">
          <span className="mr-2">Read More</span>
          <ArrowRightIcon size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>;
};
export default AuthorCard;