import React from 'react';
import { AwardIcon, TrophyIcon, BookOpenIcon, MessageSquareIcon } from 'lucide-react';
export const AchievementsSection = () => {
  const achievements = [{
    id: 1,
    title: 'Literary Explorer',
    description: 'Read 10 books in 30 days',
    icon: <BookOpenIcon size={16} className="text-[#DAA520]" />,
    progress: 100,
    completed: true
  }, {
    id: 2,
    title: 'Wisdom Seeker',
    description: 'Reviewed 5 books',
    icon: <MessageSquareIcon size={16} className="text-[#DAA520]" />,
    progress: 100,
    completed: true
  }, {
    id: 3,
    title: 'Poetry Enthusiast',
    description: 'Read 15 poetry collections',
    icon: <BookOpenIcon size={16} className="text-[#DAA520]" />,
    progress: 80,
    completed: false
  }, {
    id: 4,
    title: 'Consistent Reader',
    description: 'Read every day for 30 days',
    icon: <TrophyIcon size={16} className="text-[#DAA520]" />,
    progress: 70,
    completed: false
  }];
  return <section className="bg-[#0D0F1F]/70 rounded-2xl p-6 border border-[#DAA520]/20 shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold flex items-center">
          <AwardIcon size={20} className="mr-2 text-[#DAA520]" />
          <span>Achievements</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {achievements.map(achievement => <div key={achievement.id} className={`bg-[#1A1A1A]/40 rounded-lg p-4 border ${achievement.completed ? 'border-[#DAA520]' : 'border-[#DAA520]/10'} relative overflow-hidden`}>
            {achievement.completed && <div className="absolute top-0 right-0">
                <div className="bg-[#DAA520] text-[#0D0F1F] text-xs py-1 px-3 font-medium transform rotate-45 translate-x-2 -translate-y-1">
                  Earned
                </div>
              </div>}
            <div className="flex items-center mb-3">
              <div className={`p-2 rounded-full ${achievement.completed ? 'bg-[#DAA520]/20' : 'bg-[#1A1A1A]'} mr-3`}>
                {achievement.icon}
              </div>
              <div>
                <h3 className="text-sm font-medium text-[#F5F5DC]">
                  {achievement.title}
                </h3>
                <p className="text-xs text-[#F5F5DC]/60">
                  {achievement.description}
                </p>
              </div>
            </div>
            <div className="w-full h-1.5 bg-[#1A1A1A] rounded-full overflow-hidden">
              <div className={`h-full ${achievement.completed ? 'bg-gradient-to-r from-[#DAA520] to-[#FFD700]' : 'bg-[#0F52BA]'}`} style={{
            width: `${achievement.progress}%`
          }}></div>
            </div>
            <div className="text-xs text-[#F5F5DC]/60 mt-1 text-right">
              {achievement.progress}%
            </div>
          </div>)}
      </div>
      <div className="mt-6">
        <h3 className="text-sm uppercase tracking-wider text-[#DAA520] mb-3">
          Reader Leaderboard
        </h3>
        <div className="bg-[#1A1A1A]/40 rounded-lg p-4 border border-[#DAA520]/10">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-medium text-[#F5F5DC]">
              Top Readers This Month
            </div>
            <a href="#" className="text-xs text-[#DAA520] hover:underline">
              See Full Board
            </a>
          </div>
          <div className="space-y-3">
            <LeaderboardItem position={1} name="Aanya Sharma" books={24} isUser={false} />
            <LeaderboardItem position={2} name="Vikram Patel" books={21} isUser={false} />
            <LeaderboardItem position={3} name="Rahul Sharma" books={18} isUser={true} />
            <LeaderboardItem position={4} name="Meera Desai" books={15} isUser={false} />
          </div>
        </div>
      </div>
    </section>;
};
const LeaderboardItem = ({
  position,
  name,
  books,
  isUser
}) => <div className={`flex items-center p-2 rounded ${isUser ? 'bg-[#DAA520]/10' : ''}`}>
    <div className="w-6 text-center font-medium text-sm">
      {position === 1 && <span className="text-[#FFD700]">🥇</span>}
      {position === 2 && <span className="text-[#C0C0C0]">🥈</span>}
      {position === 3 && <span className="text-[#CD7F32]">🥉</span>}
      {position > 3 && <span className="text-[#F5F5DC]/60">{position}</span>}
    </div>
    <div className="w-8 h-8 rounded-full bg-[#1A1A1A] border border-[#DAA520]/30 flex items-center justify-center mx-3">
      {isUser ? <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" alt={name} className="w-full h-full rounded-full object-cover" /> : <span className="text-xs text-[#F5F5DC]">{name.charAt(0)}</span>}
    </div>
    <div className="flex-1">
      <div className="text-sm text-[#F5F5DC]">{name}</div>
      <div className="text-xs text-[#F5F5DC]/60">{books} books read</div>
    </div>
    {isUser && <div className="text-xs bg-[#DAA520]/20 text-[#DAA520] px-2 py-0.5 rounded">
        You
      </div>}
  </div>;