import React, { Children } from 'react';
import { BookOpenIcon, TrophyIcon, UsersIcon, ArrowRightIcon } from 'lucide-react';
const BookClubs = () => {
  return <div className="bg-[#1A1A1A] rounded-lg border border-[#0F52BA]/20 overflow-hidden">
      <div className="bg-gradient-to-r from-[#0F52BA]/20 to-[#8B0000]/20 px-5 py-4 border-b border-[#0F52BA]/20">
        <h2 className="text-xl font-bold text-[#F5F5DC] flex items-center">
          <BookOpenIcon className="mr-2 text-[#FFD700]" size={20} />
          Book Clubs & Challenges
        </h2>
      </div>
      <div className="p-5">
        <div className="bg-gradient-to-br from-[#8B0000]/20 to-[#0F52BA]/20 rounded-lg p-4 mb-5 border border-[#FFD700]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
            <TrophyIcon size={80} className="text-[#FFD700]" />
          </div>
          <h3 className="text-[#FFD700] font-bold mb-1">Mythology Marathon</h3>
          <p className="text-sm text-[#F5F5DC]/80 mb-3">
            Read & discuss 3 books in 30 days!
          </p>
          <div className="flex justify-between items-center">
            <div className="text-xs text-[#F5F5DC]/60">
              <span className="text-[#FFD700]">126</span> participants
            </div>
            <button className="text-xs bg-[#FFD700]/20 hover:bg-[#FFD700]/30 text-[#FFD700] py-1 px-3 rounded-md transition-colors">
              Join Challenge
            </button>
          </div>
        </div>
        <h3 className="text-[#F5F5DC] font-medium mb-3">Popular Book Clubs</h3>
        <div className="space-y-3 mb-4">
          <BookClub name="Contemporary Indian Fiction" members={78} currentBook="The White Tiger" author="Aravind Adiga" />
          <BookClub name="Poetry Appreciation Society" members={42} currentBook="Selected Poems" author="Kamala Das" />
          <BookClub name="Historical Fiction Readers" members={63} currentBook="Midnight's Children" author="Salman Rushdie" />
        </div>
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-[#F5F5DC]/10">
          <div className="flex -space-x-2">
            {[...Array(5)].map((_, idx) => <div key={idx} className="w-6 h-6 rounded-full bg-gradient-to-br from-[#0F52BA] to-[#8B0000] flex items-center justify-center text-[10px] font-medium text-white border border-[#1A1A1A]">
                {['A', 'S', 'K', 'R', 'M'][idx]}
              </div>)}
            <div className="w-6 h-6 rounded-full bg-[#0D0F1F] flex items-center justify-center text-[10px] text-[#F5F5DC]/70 border border-[#1A1A1A]">
              +18
            </div>
          </div>
          <button className="text-xs flex items-center text-[#0F52BA] hover:text-[#0F52BA]/80 transition-colors">
            <span>View All Clubs</span>
            <ArrowRightIcon size={12} className="ml-1" />
          </button>
        </div>
      </div>
    </div>;
};
const BookClub = ({
  name,
  members,
  currentBook,
  author
}) => <div className="bg-[#0D0F1F] rounded-lg p-3 border border-[#F5F5DC]/10">
    <div className="flex justify-between">
      <h4 className="text-sm font-medium text-[#F5F5DC]">{name}</h4>
      <div className="flex items-center text-xs text-[#F5F5DC]/60">
        <UsersIcon size={12} className="mr-1" />
        <span>{members}</span>
      </div>
    </div>
    <div className="mt-1 text-xs">
      <span className="text-[#F5F5DC]/50">Currently reading: </span>
      <span className="text-[#0F52BA]">{currentBook}</span>
      <span className="text-[#F5F5DC]/70"> by {author}</span>
    </div>
  </div>;
export default BookClubs;