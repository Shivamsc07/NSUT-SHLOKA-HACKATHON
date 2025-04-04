import React from 'react';
import { BookOpenIcon, AwardIcon } from 'lucide-react';
export const HeroSection = () => {
  return <section className="bg-gradient-to-r from-[#0D0F1F] to-[#0F52BA]/20 rounded-2xl p-6 md:p-8 border border-[#DAA520]/20 shadow-lg">
      <div className="flex flex-col md:flex-row items-center">
        <div className="relative mb-6 md:mb-0 md:mr-8">
          <div className="w-32 h-32 rounded-full border-4 border-[#DAA520] overflow-hidden shadow-[0_0_15px_rgba(255,215,0,0.3)]">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" alt="Rahul Sharma" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-[#FFD700] text-[#0D0F1F] rounded-full p-2 shadow-lg border-2 border-[#0D0F1F]">
            <AwardIcon size={18} />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-[#F5F5DC]">
                Rahul Sharma
              </h2>
              <div className="mt-1 flex items-center">
                <span className="bg-[#FFD700]/20 text-[#FFD700] text-xs px-3 py-1 rounded-full border border-[#FFD700]/30 flex items-center">
                  <AwardIcon size={12} className="mr-1" />
                  Premium Subscriber
                </span>
                <span className="ml-2 text-sm text-[#F5F5DC]/70">
                  Access to 500+ Exclusive Books
                </span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <button className="px-4 py-2 bg-[#1A1A1A] text-[#F5F5DC] rounded-md border border-[#DAA520]/30 hover:bg-[#1A1A1A]/70 hover:border-[#DAA520] transition-all flex items-center shadow-md">
                <BookOpenIcon size={16} className="mr-2 text-[#DAA520]" />
                <span>Edit Profile</span>
              </button>
            </div>
          </div>
          <div className="mt-6 p-4 bg-[#0D0F1F]/50 rounded-lg border border-[#DAA520]/10">
            <h3 className="text-sm uppercase tracking-wider text-[#DAA520] mb-2">
              Favorite Quote
            </h3>
            <blockquote className="text-lg italic text-[#F5F5DC]/90">
              "ज्ञान ही शक्ति है"{' '}
              <span className="text-sm not-italic">(Knowledge is power)</span>
            </blockquote>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <Stat icon="📚" label="Books Read" value="42" />
        <Stat icon="🏆" label="Reading Streak" value="21 Days" />
        <Stat icon="⭐" label="Reviews Written" value="15" />
      </div>
    </section>;
};
const Stat = ({
  icon,
  label,
  value
}) => <div className="bg-[#1A1A1A]/40 rounded-lg p-4 border border-[#DAA520]/10 flex items-center">
    <div className="text-2xl mr-3">{icon}</div>
    <div>
      <div className="text-sm text-[#F5F5DC]/70">{label}</div>
      <div className="text-xl font-semibold text-[#F5F5DC]">{value}</div>
    </div>
  </div>;