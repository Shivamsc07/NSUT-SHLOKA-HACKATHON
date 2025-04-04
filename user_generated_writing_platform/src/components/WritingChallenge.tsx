import React from 'react';
import { SparklesIcon, CalendarIcon, TrophyIcon, BrainIcon } from 'lucide-react';
const WritingChallenge = () => {
  return <section className="py-16 px-4 bg-gradient-to-b from-[#0D0F1F] to-[#0D0F1F]/95">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5DC] mb-4">
            Daily <span className="text-[#FFD700]">Writing Challenge</span>
          </h2>
          <p className="text-lg text-[#F5F5DC]/80 max-w-2xl mx-auto">
            Sharpen your skills with AI-powered daily writing prompts and
            receive personalized feedback.
          </p>
        </div>
        <div className="bg-[#1A1A1A] border border-[#DAA520] rounded-lg overflow-hidden">
          <div className="p-6 border-b border-[#DAA520]/30">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <SparklesIcon className="h-6 w-6 text-[#FFD700] mr-2" />
                <h3 className="text-xl font-bold text-[#F5F5DC]">
                  Today's Challenge
                </h3>
              </div>
              <div className="flex items-center text-sm text-[#F5F5DC]/70">
                <CalendarIcon className="h-4 w-4 mr-1" />
                <span>Refreshes in 13:45:22</span>
              </div>
            </div>
            <div className="bg-[#0D0F1F] rounded-lg p-6 border border-[#DAA520]/30">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-2/3">
                  <h4 className="text-lg font-medium text-[#FFD700] mb-3">
                    Write a modern take on an old folktale
                  </h4>
                  <p className="text-[#F5F5DC]/90 mb-4">
                    Take a classic folktale from Indian tradition (like a
                    Panchatantra story) and reimagine it in a modern setting.
                    Your story should maintain the moral or lesson of the
                    original tale while bringing the characters and situation
                    into the present day.
                  </p>
                  <div className="bg-[#0F52BA]/10 border border-[#0F52BA]/30 rounded-lg p-4 mb-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-[#0F52BA] flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-xs font-bold">AI</span>
                      </div>
                      <div>
                        <h5 className="text-[#FFD700] font-medium mb-1">
                          AI Tip
                        </h5>
                        <p className="text-[#F5F5DC]/90 text-sm">
                          Try incorporating time travel into a Panchatantra
                          story! Perhaps a modern character finds themselves
                          transported into the world of the original tale, or an
                          ancient character visits present-day India.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-[#F5F5DC]/70">
                      Word limit: 500 words
                    </span>
                    <span className="text-sm text-[#F5F5DC]/70">•</span>
                    <span className="text-sm text-[#F5F5DC]/70">
                      Time estimate: 30 minutes
                    </span>
                  </div>
                </div>
                <div className="w-full md:w-1/3 bg-[#0D0F1F]/50 rounded-lg p-4 border border-[#DAA520]/20">
                  <h4 className="text-lg font-medium text-[#F5F5DC] mb-3">
                    Your Challenge Streak
                  </h4>
                  <div className="flex items-center space-x-2 mb-4">
                    {[...Array(7)].map((_, i) => <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center ${i < 5 ? 'bg-[#FFD700] text-[#0D0F1F] font-medium' : 'bg-[#0D0F1F] text-[#F5F5DC]/50 border border-dashed border-[#DAA520]/30'}`}>
                        {i + 1}
                      </div>)}
                  </div>
                  <div className="flex items-center justify-between text-sm mb-4">
                    <span className="text-[#F5F5DC]/70">Current streak:</span>
                    <span className="text-[#FFD700] font-medium">5 days</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#F5F5DC]/70">Longest streak:</span>
                    <span className="text-[#FFD700] font-medium">12 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Writing Area */}
          <div className="p-6">
            <textarea className="w-full bg-[#0D0F1F] border border-[#DAA520]/30 rounded-lg p-4 text-[#F5F5DC] placeholder-[#F5F5DC]/50 focus:outline-none focus:border-[#FFD700] resize-none mb-4" placeholder="Start writing your response to today's challenge here..." rows={8}></textarea>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <button className="px-5 py-2.5 bg-[#FFD700] text-[#0D0F1F] font-medium rounded-md hover:bg-[#FFD700]/90">
                  Submit Challenge
                </button>
                <button className="px-5 py-2.5 bg-[#0D0F1F] text-[#FFD700] rounded-md hover:bg-[#0D0F1F]/70 border border-[#DAA520]/30">
                  Save as Draft
                </button>
              </div>
              <button className="flex items-center text-[#FFD700] hover:text-[#FFD700]/80">
                <BrainIcon className="h-5 w-5 mr-1" />
                <span>Get AI Writing Suggestions</span>
              </button>
            </div>
          </div>
        </div>
        {/* Past Challenges */}
        <div className="mt-8 bg-[#1A1A1A] border border-[#DAA520] rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <TrophyIcon className="h-6 w-6 text-[#FFD700] mr-2" />
              <h3 className="text-xl font-bold text-[#F5F5DC]">
                Your Past Challenges
              </h3>
            </div>
            <button className="text-sm text-[#FFD700]">View All</button>
          </div>
          <div className="space-y-4">
            {/* Challenge 1 */}
            <div className="bg-[#0D0F1F] rounded-lg p-4 border border-[#DAA520]/30">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h4 className="font-medium text-[#F5F5DC]">
                  Write a 500-word ghost story
                </h4>
                <div className="flex items-center">
                  <span className="text-sm text-[#F5F5DC]/70 mr-3">
                    Completed 2 days ago
                  </span>
                  <div className="px-3 py-1 bg-[#0F52BA]/20 text-[#F5F5DC]/90 text-xs rounded-full border border-[#0F52BA]/30">
                    92% Score
                  </div>
                </div>
              </div>
              <p className="text-sm text-[#F5F5DC]/80 mb-3 line-clamp-2">
                The old haveli stood abandoned for decades, its walls whispering
                secrets of the past. Riya never believed in ghosts until the
                night she decided to spend in her ancestral home...
              </p>
              <div className="bg-[#0D0F1F]/50 p-3 rounded border border-[#DAA520]/20 mb-3">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-[#0F52BA] flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-xs font-bold">AI</span>
                  </div>
                  <div>
                    <h5 className="text-[#FFD700] text-sm font-medium mb-1">
                      AI Feedback
                    </h5>
                    <p className="text-[#F5F5DC]/90 text-xs">
                      Excellent atmosphere and tension building! Your
                      descriptions of the haveli created a vivid sense of place.
                      Consider developing the ghost's backstory more to add
                      emotional depth to the haunting.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button className="text-sm text-[#FFD700]">
                  View Full Story & Feedback
                </button>
                <button className="text-sm text-[#F5F5DC]/70">
                  Share to Community
                </button>
              </div>
            </div>
            {/* Challenge 2 */}
            <div className="bg-[#0D0F1F] rounded-lg p-4 border border-[#DAA520]/30">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h4 className="font-medium text-[#F5F5DC]">
                  Create a story inspired by a Hindi proverb
                </h4>
                <div className="flex items-center">
                  <span className="text-sm text-[#F5F5DC]/70 mr-3">
                    Completed 4 days ago
                  </span>
                  <div className="px-3 py-1 bg-[#0F52BA]/20 text-[#F5F5DC]/90 text-xs rounded-full border border-[#0F52BA]/30">
                    88% Score
                  </div>
                </div>
              </div>
              <p className="text-sm text-[#F5F5DC]/80 mb-3 line-clamp-2">
                "Jaise karni, waise bharni" (As you sow, so shall you reap).
                Vikram was the most successful lawyer in Delhi, winning every
                case by any means necessary. But when his own son faced false
                accusations...
              </p>
              <div className="bg-[#0D0F1F]/50 p-3 rounded border border-[#DAA520]/20 mb-3">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-[#0F52BA] flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-xs font-bold">AI</span>
                  </div>
                  <div>
                    <h5 className="text-[#FFD700] text-sm font-medium mb-1">
                      AI Feedback
                    </h5>
                    <p className="text-[#F5F5DC]/90 text-xs">
                      Strong moral message that effectively illustrates the
                      proverb. The character arc is compelling, though the
                      ending felt slightly rushed. Consider expanding the
                      courtroom scene for more dramatic impact.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button className="text-sm text-[#FFD700]">
                  View Full Story & Feedback
                </button>
                <button className="text-sm text-[#F5F5DC]/70">
                  Share to Community
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default WritingChallenge;