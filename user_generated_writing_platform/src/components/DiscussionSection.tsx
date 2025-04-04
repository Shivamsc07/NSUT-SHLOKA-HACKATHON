import React from 'react';
import { MessageCircleIcon, ThumbsUpIcon, BookmarkIcon, StarIcon, SparklesIcon } from 'lucide-react';
const DiscussionSection = () => {
  return <section className="py-16 px-4 bg-gradient-to-b from-[#0D0F1F]/95 to-[#0D0F1F]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5DC] mb-4">
            <span className="text-[#FFD700]">Community</span> Discussions
          </h2>
          <p className="text-lg text-[#F5F5DC]/80 max-w-2xl mx-auto">
            Join the conversation and share your thoughts on stories with our
            vibrant community.
          </p>
        </div>
        <div className="bg-[#1A1A1A] border border-[#DAA520] rounded-lg overflow-hidden shadow-xl shadow-[#DAA520]/5 mb-12">
          {/* Story Header */}
          <div className="p-6 border-b border-[#DAA520]/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-[#F5F5DC]">
                The Last Guardian of Varanasi
              </h3>
              <div className="flex items-center space-x-3">
                <button className="flex items-center text-[#F5F5DC]/70 hover:text-[#FFD700]">
                  <ThumbsUpIcon className="h-5 w-5 mr-1" />
                  <span>342</span>
                </button>
                <button className="flex items-center text-[#F5F5DC]/70 hover:text-[#FFD700]">
                  <BookmarkIcon className="h-5 w-5 mr-1" />
                  <span>Save</span>
                </button>
              </div>
            </div>
            <div className="flex items-center text-sm text-[#F5F5DC]/70 mb-4">
              <span>By Aditya Sharma</span>
              <span className="mx-2">•</span>
              <span>Historical Fiction</span>
              <span className="mx-2">•</span>
              <span>15 min read</span>
            </div>
            <p className="text-[#F5F5DC]/90">
              The ancient temple held secrets that spanned centuries, guarded by
              a lineage sworn to protect them from those who would misuse their
              power...
            </p>
          </div>
          {/* AI Smart Reviews */}
          <div className="bg-[#0D0F1F]/50 p-6 border-b border-[#DAA520]/30">
            <div className="flex items-center mb-4">
              <SparklesIcon className="h-5 w-5 text-[#FFD700] mr-2" />
              <h4 className="text-lg font-medium text-[#F5F5DC]">
                AI Smart Reviews
              </h4>
            </div>
            <div className="bg-[#0D0F1F] rounded-lg p-4 border border-[#DAA520]/20">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#0F52BA] flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-sm font-bold">AI</span>
                </div>
                <div>
                  <h5 className="text-[#FFD700] font-medium mb-2">
                    Review Summary
                  </h5>
                  <p className="text-[#F5F5DC]/90 mb-3">
                    90% of readers loved the suspense buildup & plot twists! The
                    vivid descriptions of Varanasi's ghats and temples received
                    particular praise, with many readers commenting on how they
                    could almost feel the spiritual atmosphere of the city.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <div className="px-3 py-1 bg-[#0F52BA]/20 text-[#F5F5DC] text-xs rounded-full">
                      ⭐ Engaging Characters
                    </div>
                    <div className="px-3 py-1 bg-[#0F52BA]/20 text-[#F5F5DC] text-xs rounded-full">
                      ⭐ Atmospheric Setting
                    </div>
                    <div className="px-3 py-1 bg-[#0F52BA]/20 text-[#F5F5DC] text-xs rounded-full">
                      ⭐ Unexpected Twists
                    </div>
                    <div className="px-3 py-1 bg-[#0F52BA]/20 text-[#F5F5DC] text-xs rounded-full">
                      ⭐ Cultural Authenticity
                    </div>
                  </div>
                  <div className="text-sm text-[#F5F5DC]/70">
                    Based on 56 reader reviews and comments
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* User Comments */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-lg font-medium text-[#F5F5DC]">
                Reader Comments
              </h4>
              <div className="flex items-center">
                <span className="text-sm text-[#F5F5DC]/70 mr-2">Sort by:</span>
                <select className="bg-[#0D0F1F] text-[#F5F5DC]/90 border border-[#DAA520]/30 rounded-md px-2 py-1 text-sm">
                  <option>Most Recent</option>
                  <option>Top Rated</option>
                  <option>Oldest First</option>
                </select>
              </div>
            </div>
            {/* Comment 1 */}
            <div className="mb-6 pb-6 border-b border-[#DAA520]/20">
              <div className="flex">
                <div className="w-10 h-10 rounded-full bg-[#0F52BA]/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-sm font-medium">NS</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <h5 className="font-medium text-[#F5F5DC]">Neha Singh</h5>
                      <div className="flex ml-2">
                        <StarIcon className="h-4 w-4 text-[#FFD700] fill-[#FFD700]" />
                        <StarIcon className="h-4 w-4 text-[#FFD700] fill-[#FFD700]" />
                        <StarIcon className="h-4 w-4 text-[#FFD700] fill-[#FFD700]" />
                        <StarIcon className="h-4 w-4 text-[#FFD700] fill-[#FFD700]" />
                        <StarIcon className="h-4 w-4 text-[#FFD700] fill-[#FFD700]" />
                      </div>
                    </div>
                    <span className="text-xs text-[#F5F5DC]/60">
                      2 days ago
                    </span>
                  </div>
                  <p className="text-[#F5F5DC]/90 mb-3">
                    This thriller kept me hooked till the last word! The way you
                    described the narrow alleys of Varanasi and the mysterious
                    temple rituals made me feel like I was right there. I
                    couldn't put it down and finished it in one sitting!
                  </p>
                  <div className="flex items-center text-sm">
                    <button className="flex items-center text-[#F5F5DC]/60 hover:text-[#FFD700] mr-4">
                      <ThumbsUpIcon className="h-4 w-4 mr-1" />
                      <span>24</span>
                    </button>
                    <button className="flex items-center text-[#F5F5DC]/60 hover:text-[#FFD700]">
                      <MessageCircleIcon className="h-4 w-4 mr-1" />
                      <span>Reply</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Comment 2 */}
            <div className="mb-6 pb-6 border-b border-[#DAA520]/20">
              <div className="flex">
                <div className="w-10 h-10 rounded-full bg-[#8B0000]/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-sm font-medium">RK</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <h5 className="font-medium text-[#F5F5DC]">
                        Rahul Kumar
                      </h5>
                      <div className="flex ml-2">
                        <StarIcon className="h-4 w-4 text-[#FFD700] fill-[#FFD700]" />
                        <StarIcon className="h-4 w-4 text-[#FFD700] fill-[#FFD700]" />
                        <StarIcon className="h-4 w-4 text-[#FFD700] fill-[#FFD700]" />
                        <StarIcon className="h-4 w-4 text-[#FFD700] fill-[#FFD700]" />
                        <StarIcon className="h-4 w-4 text-[#F5F5DC]/30" />
                      </div>
                    </div>
                    <span className="text-xs text-[#F5F5DC]/60">
                      5 days ago
                    </span>
                  </div>
                  <p className="text-[#F5F5DC]/90 mb-3">
                    The historical research that went into this story is
                    impressive. I appreciated how you wove in actual historical
                    events with the fictional narrative. The only reason I'm
                    giving 4 stars instead of 5 is that I found the ending a bit
                    rushed. Otherwise, a fantastic read!
                  </p>
                  <div className="flex items-center text-sm">
                    <button className="flex items-center text-[#F5F5DC]/60 hover:text-[#FFD700] mr-4">
                      <ThumbsUpIcon className="h-4 w-4 mr-1" />
                      <span>16</span>
                    </button>
                    <button className="flex items-center text-[#F5F5DC]/60 hover:text-[#FFD700]">
                      <MessageCircleIcon className="h-4 w-4 mr-1" />
                      <span>Reply</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Comment 3 with Author Reply */}
            <div className="mb-6">
              <div className="flex mb-4">
                <div className="w-10 h-10 rounded-full bg-[#0F52BA]/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-sm font-medium">MP</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <h5 className="font-medium text-[#F5F5DC]">
                        Meera Patel
                      </h5>
                      <div className="flex ml-2">
                        <StarIcon className="h-4 w-4 text-[#FFD700] fill-[#FFD700]" />
                        <StarIcon className="h-4 w-4 text-[#FFD700] fill-[#FFD700]" />
                        <StarIcon className="h-4 w-4 text-[#FFD700] fill-[#FFD700]" />
                        <StarIcon className="h-4 w-4 text-[#FFD700] fill-[#FFD700]" />
                        <StarIcon className="h-4 w-4 text-[#FFD700] fill-[#FFD700]" />
                      </div>
                    </div>
                    <span className="text-xs text-[#F5F5DC]/60">
                      1 week ago
                    </span>
                  </div>
                  <p className="text-[#F5F5DC]/90 mb-3">
                    I have a question about the character of the old priest -
                    was he based on a real historical figure? His knowledge of
                    the ancient texts seemed so detailed and authentic. Also,
                    will there be a sequel? I'm dying to know what happens next!
                  </p>
                  <div className="flex items-center text-sm">
                    <button className="flex items-center text-[#F5F5DC]/60 hover:text-[#FFD700] mr-4">
                      <ThumbsUpIcon className="h-4 w-4 mr-1" />
                      <span>19</span>
                    </button>
                    <button className="flex items-center text-[#F5F5DC]/60 hover:text-[#FFD700]">
                      <MessageCircleIcon className="h-4 w-4 mr-1" />
                      <span>Reply</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* Author Reply */}
              <div className="flex ml-14">
                <div className="w-8 h-8 rounded-full bg-[#8B0000]/30 flex items-center justify-center mr-3 flex-shrink-0 border border-[#DAA520]/50">
                  <span className="text-xs font-medium">AS</span>
                </div>
                <div className="flex-1 bg-[#0D0F1F]/50 rounded-lg p-3 border border-[#DAA520]/20">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium text-[#FFD700] flex items-center">
                      Aditya Sharma
                      <span className="ml-2 px-2 py-0.5 bg-[#8B0000]/20 text-[#FFD700] text-xs rounded-full border border-[#DAA520]/30">
                        Author
                      </span>
                    </h5>
                    <span className="text-xs text-[#F5F5DC]/60">
                      5 days ago
                    </span>
                  </div>
                  <p className="text-[#F5F5DC]/90">
                    Thank you for your question, Meera! The character of the
                    priest is actually a composite of several historical
                    figures, including some 18th century Sanskrit scholars from
                    Varanasi. And yes, I am currently working on a sequel that
                    will follow Arjun's journey to Tibet. Stay tuned!
                  </p>
                </div>
              </div>
            </div>
            {/* Add Comment Form */}
            <div className="mt-8">
              <h4 className="text-lg font-medium text-[#F5F5DC] mb-4">
                Join the Discussion
              </h4>
              <div className="flex">
                <div className="w-10 h-10 rounded-full bg-[#0D0F1F] border border-[#DAA520]/30 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-sm font-medium">YO</span>
                </div>
                <div className="flex-1">
                  <textarea className="w-full bg-[#0D0F1F] border border-[#DAA520]/30 rounded-lg p-3 text-[#F5F5DC] placeholder-[#F5F5DC]/50 focus:outline-none focus:border-[#FFD700] resize-none" placeholder="Share your thoughts on this story..." rows={4}></textarea>
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-5 w-5 text-[#F5F5DC]/30 hover:text-[#FFD700] cursor-pointer" />)}
                      <span className="text-xs text-[#F5F5DC]/60 ml-2 self-center">
                        Rate this story
                      </span>
                    </div>
                    <button className="px-4 py-2 bg-[#FFD700] text-[#0D0F1F] font-medium rounded-md hover:bg-[#FFD700]/90">
                      Post Comment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Continue Reading Feature */}
        <div className="bg-[#1A1A1A] border border-[#DAA520] rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-[#F5F5DC]">
              Continue Reading
            </h3>
            <button className="text-[#FFD700] text-sm hover:text-[#FFD700]/80">
              View All Bookmarks
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => <div key={i} className="bg-[#0D0F1F] rounded-md overflow-hidden border border-[#DAA520]/30 hover:border-[#DAA520] transition-colors">
                <div className="h-40 overflow-hidden relative">
                  <img src={`https://source.unsplash.com/random/300x200?india,story,book&sig=${i + 10}`} alt="Bookmarked story" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0D0F1F] to-transparent h-16"></div>
                  <div className="absolute bottom-2 left-2 bg-[#0D0F1F]/80 px-2 py-1 rounded-md text-xs text-[#F5F5DC]/90">
                    {i === 0 ? '60% read' : i === 1 ? '25% read' : '75% read'}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-[#F5F5DC] font-medium mb-1">
                    {i === 0 ? 'The Forgotten Kingdom' : i === 1 ? 'Echoes from the Himalayas' : 'Secrets of the Spice Route'}
                  </h3>
                  <p className="text-xs text-[#F5F5DC]/70 mb-3">
                    by{' '}
                    {i === 0 ? 'Vikram Mehta' : i === 1 ? 'Anjali Gupta' : 'Sanjay Kapoor'}
                  </p>
                  <button className="w-full py-2 bg-[#0D0F1F]/50 text-[#FFD700] rounded-md hover:bg-[#0D0F1F] border border-[#DAA520]/30 text-sm">
                    Continue Reading
                  </button>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default DiscussionSection;