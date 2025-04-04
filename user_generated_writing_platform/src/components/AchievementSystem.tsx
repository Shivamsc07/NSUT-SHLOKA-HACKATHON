import React from 'react';
import { TrophyIcon, AwardIcon, UsersIcon } from 'lucide-react';
const AchievementSystem = () => {
  return <section className="py-16 px-4 bg-[#0D0F1F]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5DC] mb-4">
            <span className="text-[#FFD700]">Writer</span> Achievements
          </h2>
          <p className="text-lg text-[#F5F5DC]/80 max-w-2xl mx-auto">
            Celebrate your storytelling journey with badges and achievements
            that showcase your writing milestones.
          </p>
        </div>
        {/* User Stats Overview */}
        <div className="bg-[#1A1A1A] border border-[#DAA520] rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="w-20 h-20 rounded-full bg-[#0F52BA]/20 border-4 border-[#DAA520] flex items-center justify-center mr-6">
                <span className="text-2xl font-bold text-[#FFD700]">AR</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#F5F5DC]">
                  Ananya Rao
                </h3>
                <p className="text-[#F5F5DC]/70">
                  Storyteller Level:{' '}
                  <span className="text-[#FFD700]">Maestro</span>
                </p>
                <div className="flex items-center mt-2">
                  <div className="w-full bg-[#0D0F1F] rounded-full h-2.5 mr-2">
                    <div className="bg-[#FFD700] h-2.5 rounded-full" style={{
                    width: '85%'
                  }}></div>
                  </div>
                  <span className="text-xs text-[#F5F5DC]/70">85/100 XP</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FFD700]">12</div>
                <div className="text-sm text-[#F5F5DC]/70">
                  Stories Published
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FFD700]">1.8k</div>
                <div className="text-sm text-[#F5F5DC]/70">Total Reads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FFD700]">15</div>
                <div className="text-sm text-[#F5F5DC]/70">Badges Earned</div>
              </div>
            </div>
          </div>
        </div>
        {/* Achievements Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Recent Achievements */}
          <div className="bg-[#1A1A1A] border border-[#DAA520] rounded-lg p-6">
            <div className="flex items-center mb-6">
              <TrophyIcon className="h-6 w-6 text-[#FFD700] mr-2" />
              <h3 className="text-xl font-bold text-[#F5F5DC]">
                Recent Achievements
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center bg-[#0D0F1F] rounded-lg p-4 border border-[#DAA520]/30">
                <div className="w-12 h-12 rounded-full bg-[#8B0000]/30 flex items-center justify-center mr-4">
                  <TrophyIcon className="h-6 w-6 text-[#FFD700]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-[#FFD700] font-medium">
                    Rising Storyteller
                  </h4>
                  <p className="text-sm text-[#F5F5DC]/80">
                    Published your first story that received over 100 reads
                  </p>
                </div>
                <div className="text-xs text-[#F5F5DC]/60">2 days ago</div>
              </div>
              <div className="flex items-center bg-[#0D0F1F] rounded-lg p-4 border border-[#DAA520]/30">
                <div className="w-12 h-12 rounded-full bg-[#0F52BA]/30 flex items-center justify-center mr-4">
                  <AwardIcon className="h-6 w-6 text-[#FFD700]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-[#FFD700] font-medium">
                    Most Discussed Story
                  </h4>
                  <p className="text-sm text-[#F5F5DC]/80">
                    Your story "The Last Guardian of Varanasi" received 100+
                    comments
                  </p>
                </div>
                <div className="text-xs text-[#F5F5DC]/60">1 week ago</div>
              </div>
              <div className="flex items-center bg-[#0D0F1F] rounded-lg p-4 border border-[#DAA520]/30">
                <div className="w-12 h-12 rounded-full bg-[#0F52BA]/30 flex items-center justify-center mr-4">
                  <UsersIcon className="h-6 w-6 text-[#FFD700]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-[#FFD700] font-medium">
                    Community Influencer
                  </h4>
                  <p className="text-sm text-[#F5F5DC]/80">
                    Gained 50+ followers who enjoy your storytelling style
                  </p>
                </div>
                <div className="text-xs text-[#F5F5DC]/60">2 weeks ago</div>
              </div>
            </div>
          </div>
          {/* Badge Collection */}
          <div className="bg-[#1A1A1A] border border-[#DAA520] rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <AwardIcon className="h-6 w-6 text-[#FFD700] mr-2" />
                <h3 className="text-xl font-bold text-[#F5F5DC]">
                  Your Badge Collection
                </h3>
              </div>
              <button className="text-sm text-[#FFD700]">View All</button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {/* Badge 1 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFD700] to-[#DAA520] flex items-center justify-center mb-2 shadow-lg shadow-[#FFD700]/20">
                  <div className="w-14 h-14 rounded-full bg-[#0D0F1F] flex items-center justify-center">
                    <TrophyIcon className="h-8 w-8 text-[#FFD700]" />
                  </div>
                </div>
                <h4 className="text-sm font-medium text-[#F5F5DC] text-center">
                  Prolific Writer
                </h4>
                <p className="text-xs text-[#F5F5DC]/60 text-center">
                  10+ stories
                </p>
              </div>
              {/* Badge 2 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C0C0C0] to-[#E0E0E0] flex items-center justify-center mb-2 shadow-lg shadow-[#C0C0C0]/20">
                  <div className="w-14 h-14 rounded-full bg-[#0D0F1F] flex items-center justify-center">
                    <AwardIcon className="h-8 w-8 text-[#C0C0C0]" />
                  </div>
                </div>
                <h4 className="text-sm font-medium text-[#F5F5DC] text-center">
                  Mythology Master
                </h4>
                <p className="text-xs text-[#F5F5DC]/60 text-center">
                  5+ mythology stories
                </p>
              </div>
              {/* Badge 3 - Locked */}
              <div className="flex flex-col items-center opacity-50">
                <div className="w-16 h-16 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-2 border-2 border-dashed border-[#DAA520]/30">
                  <div className="w-14 h-14 rounded-full bg-[#0D0F1F] flex items-center justify-center">
                    <UsersIcon className="h-8 w-8 text-[#DAA520]/50" />
                  </div>
                </div>
                <h4 className="text-sm font-medium text-[#F5F5DC] text-center">
                  Collaboration King
                </h4>
                <p className="text-xs text-[#F5F5DC]/60 text-center">
                  3/5 co-written stories
                </p>
              </div>
              {/* Badge 4 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#B87333] to-[#CD7F32] flex items-center justify-center mb-2 shadow-lg shadow-[#B87333]/20">
                  <div className="w-14 h-14 rounded-full bg-[#0D0F1F] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#B87333]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-sm font-medium text-[#F5F5DC] text-center">
                  Daily Writer
                </h4>
                <p className="text-xs text-[#F5F5DC]/60 text-center">
                  30 day streak
                </p>
              </div>
              {/* Badge 5 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFD700] to-[#DAA520] flex items-center justify-center mb-2 shadow-lg shadow-[#FFD700]/20">
                  <div className="w-14 h-14 rounded-full bg-[#0D0F1F] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-sm font-medium text-[#F5F5DC] text-center">
                  Top Rated
                </h4>
                <p className="text-xs text-[#F5F5DC]/60 text-center">
                  4.9/5 average
                </p>
              </div>
              {/* Badge 6 - Locked */}
              <div className="flex flex-col items-center opacity-50">
                <div className="w-16 h-16 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-2 border-2 border-dashed border-[#DAA520]/30">
                  <div className="w-14 h-14 rounded-full bg-[#0D0F1F] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#DAA520]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-sm font-medium text-[#F5F5DC] text-center">
                  Premium Author
                </h4>
                <p className="text-xs text-[#F5F5DC]/60 text-center">
                  0/3 premium stories
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Leaderboard */}
        <div className="mt-8 bg-[#1A1A1A] border border-[#DAA520] rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <TrophyIcon className="h-6 w-6 text-[#FFD700] mr-2" />
              <h3 className="text-xl font-bold text-[#F5F5DC]">
                Writer's Leaderboard
              </h3>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-[#F5F5DC]/70 mr-2">This Month</span>
              <select className="bg-[#0D0F1F] text-[#F5F5DC] border border-[#DAA520]/30 rounded-md px-2 py-1 text-sm">
                <option>Most Read</option>
                <option>Top Rated</option>
                <option>Most Comments</option>
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-[#DAA520]/30">
                  <th className="pb-3 text-[#F5F5DC]/70 font-medium">Rank</th>
                  <th className="pb-3 text-[#F5F5DC]/70 font-medium">Author</th>
                  <th className="pb-3 text-[#F5F5DC]/70 font-medium">
                    Top Story
                  </th>
                  <th className="pb-3 text-[#F5F5DC]/70 font-medium text-right">
                    Reads
                  </th>
                  <th className="pb-3 text-[#F5F5DC]/70 font-medium text-right">
                    Rating
                  </th>
                </tr>
              </thead>
              <tbody>
                {[{
                rank: 1,
                name: 'Vikram Mehta',
                story: 'Echoes of Ancient Delhi',
                reads: '3.2k',
                rating: '4.9'
              }, {
                rank: 2,
                name: 'Ananya Rao',
                story: 'The Last Guardian of Varanasi',
                reads: '2.8k',
                rating: '4.8'
              }, {
                rank: 3,
                name: 'Raj Malhotra',
                story: 'Whispers from the Ganges',
                reads: '2.5k',
                rating: '4.7'
              }, {
                rank: 4,
                name: 'Priya Patel',
                story: 'Monsoon Memories',
                reads: '1.9k',
                rating: '4.9'
              }, {
                rank: 5,
                name: 'Arjun Singh',
                story: 'The Forgotten Kingdom',
                reads: '1.7k',
                rating: '4.6'
              }].map((author, index) => <tr key={index} className={`border-b border-[#DAA520]/10 ${author.rank === 2 ? 'bg-[#0F52BA]/10' : ''}`}>
                    <td className="py-4">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${author.rank === 1 ? 'bg-[#FFD700] text-[#0D0F1F] font-bold' : author.rank === 2 ? 'bg-[#C0C0C0] text-[#0D0F1F] font-bold' : author.rank === 3 ? 'bg-[#CD7F32] text-[#0D0F1F] font-bold' : 'bg-[#0D0F1F] text-[#F5F5DC]'}`}>
                        {author.rank}
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-[#0F52BA]/20 flex items-center justify-center mr-3">
                          <span className="text-xs font-medium">
                            {author.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className="text-[#F5F5DC] font-medium">
                          {author.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 text-[#F5F5DC]/80">{author.story}</td>
                    <td className="py-4 text-right text-[#FFD700]">
                      {author.reads}
                    </td>
                    <td className="py-4 text-right">
                      <div className="flex items-center justify-end">
                        <span className="text-[#FFD700] mr-1">
                          {author.rating}
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#FFD700]" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-center">
            <button className="text-[#FFD700] text-sm hover:text-[#FFD700]/80">
              View Complete Leaderboard
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default AchievementSystem;