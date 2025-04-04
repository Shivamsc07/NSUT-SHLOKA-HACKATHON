import React from 'react';
import { PencilIcon, SaveIcon, EyeIcon, TagIcon, ImageIcon, DollarSignIcon } from 'lucide-react';
const StorySubmission = () => {
  return <section className="py-16 px-4 bg-[#0D0F1F] bg-gradient-to-b from-[#0D0F1F] to-[#0D0F1F]/95">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5DC] mb-4">
            <span className="text-[#FFD700]">Create</span> Your Masterpiece
          </h2>
          <p className="text-lg text-[#F5F5DC]/80 max-w-2xl mx-auto">
            Our powerful editor gives you everything you need to craft engaging
            stories that captivate readers.
          </p>
        </div>
        <div className="bg-[#1A1A1A] border border-[#DAA520] rounded-lg overflow-hidden shadow-xl shadow-[#DAA520]/5">
          {/* Editor Toolbar */}
          <div className="bg-[#0D0F1F] border-b border-[#DAA520] p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <PencilIcon className="h-5 w-5 text-[#FFD700]" />
              <input type="text" placeholder="Your Story Title" className="bg-transparent border-b border-[#DAA520]/30 text-[#F5F5DC] placeholder-[#F5F5DC]/50 focus:outline-none focus:border-[#FFD700] px-2 py-1 w-64" defaultValue="The Ancient Scroll of Wisdom" />
            </div>
            <div className="flex items-center space-x-3">
              <button className="flex items-center px-3 py-1.5 text-sm bg-[#1A1A1A] text-[#F5F5DC] rounded hover:bg-[#252525] border border-[#DAA520]/30">
                <SaveIcon className="h-4 w-4 mr-1" />
                Save Draft
              </button>
              <button className="flex items-center px-3 py-1.5 text-sm bg-[#1A1A1A] text-[#F5F5DC] rounded hover:bg-[#252525] border border-[#DAA520]/30">
                <EyeIcon className="h-4 w-4 mr-1" />
                Preview
              </button>
              <button className="flex items-center px-3 py-1.5 text-sm bg-[#FFD700] text-[#0D0F1F] font-medium rounded hover:bg-[#FFD700]/90">
                Publish
              </button>
            </div>
          </div>
          {/* Editor Main Content */}
          <div className="flex flex-col md:flex-row">
            {/* Writing Area */}
            <div className="w-full md:w-2/3 p-6 border-r border-[#DAA520]/30">
              <div className="mb-4 text-sm font-medium text-[#F5F5DC]/70">
                Chapter 1: The Discovery
              </div>
              <div className="min-h-[300px] bg-[#0D0F1F]/50 p-4 rounded-md border border-[#DAA520]/20">
                <p className="text-[#F5F5DC] mb-4">
                  The ancient library of Nalanda stood silently under the
                  moonlight, its weathered walls holding centuries of wisdom
                  within. Professor Sharma adjusted his glasses as he carefully
                  examined the fragile manuscript before him.
                </p>
                <p className="text-[#F5F5DC] mb-4">
                  "This can't be," he whispered to himself, his fingers
                  trembling as they traced the intricate symbols etched onto the
                  yellowed parchment. "The lost scroll of Emperor Ashoka...
                  after all these years."
                </p>
                <p className="text-[#F5F5DC]">
                  The legends spoke of a scroll containing secrets that could
                  change the course of history—a knowledge so powerful that it
                  had been hidden away for over two thousand years. And now, it
                  lay before him, its mysteries waiting to be unveiled.
                </p>
                <div className="border-l-4 border-[#FFD700] pl-3 mt-4 italic text-[#F5F5DC]/80">
                  <p>
                    AI Suggestion: Consider adding a sudden interruption
                    here—perhaps a noise or another character entering—to build
                    tension.
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm">
                <div className="text-[#F5F5DC]/60">Word count: 112</div>
                <button className="text-[#FFD700] hover:text-[#FFD700]/80">
                  Get AI writing suggestions
                </button>
              </div>
            </div>
            {/* Story Settings Sidebar */}
            <div className="w-full md:w-1/3 bg-[#0D0F1F]/30 p-6">
              <h3 className="text-lg font-medium text-[#F5F5DC] mb-4">
                Story Settings
              </h3>
              {/* Genre Tags */}
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <TagIcon className="h-4 w-4 text-[#FFD700] mr-2" />
                  <h4 className="text-[#F5F5DC]/90 text-sm font-medium">
                    Genre Tags
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="px-3 py-1 bg-[#0F52BA]/30 text-[#F5F5DC] text-xs rounded-full border border-[#0F52BA]/50">
                    Historical Fiction
                  </div>
                  <div className="px-3 py-1 bg-[#0F52BA]/30 text-[#F5F5DC] text-xs rounded-full border border-[#0F52BA]/50">
                    Mystery
                  </div>
                  <div className="px-3 py-1 bg-[#0D0F1F] text-[#F5F5DC]/70 text-xs rounded-full border border-[#DAA520]/30">
                    + Add Tag
                  </div>
                </div>
              </div>
              {/* Cover Image */}
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <ImageIcon className="h-4 w-4 text-[#FFD700] mr-2" />
                  <h4 className="text-[#F5F5DC]/90 text-sm font-medium">
                    Cover Image
                  </h4>
                </div>
                <div className="bg-[#0D0F1F] border border-dashed border-[#DAA520]/50 rounded-md p-2 flex items-center justify-center">
                  <div className="w-full aspect-[2/3] rounded overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=2080" alt="Story cover" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2 text-xs">
                  <button className="text-[#FFD700]">Change Cover</button>
                  <button className="text-[#FFD700]">Generate with AI</button>
                </div>
              </div>
              {/* Monetization */}
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <DollarSignIcon className="h-4 w-4 text-[#FFD700] mr-2" />
                  <h4 className="text-[#F5F5DC]/90 text-sm font-medium">
                    Monetization
                  </h4>
                </div>
                <div className="bg-[#0D0F1F] rounded-md p-4 border border-[#DAA520]/30">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-[#F5F5DC]/90">
                      Premium Story
                    </span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" />
                      <div className="w-9 h-5 bg-[#1A1A1A] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#FFD700]"></div>
                    </label>
                  </div>
                  <p className="text-xs text-[#F5F5DC]/70">
                    Make this a premium story to earn revenue when readers
                    purchase access.
                  </p>
                </div>
              </div>
              {/* AI Title Suggestions */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-[#F5F5DC]/90 text-sm font-medium">
                    AI Title Suggestions
                  </h4>
                  <button className="text-xs text-[#FFD700]">Refresh</button>
                </div>
                <div className="space-y-2">
                  <div className="bg-[#0D0F1F] p-2 rounded text-sm text-[#F5F5DC] hover:bg-[#0D0F1F]/70 cursor-pointer border border-[#DAA520]/20">
                    The Cursed Manuscript – A Tale from Ancient India
                  </div>
                  <div className="bg-[#0D0F1F] p-2 rounded text-sm text-[#F5F5DC] hover:bg-[#0D0F1F]/70 cursor-pointer border border-[#DAA520]/20">
                    Whispers of the Forgotten Scroll
                  </div>
                  <div className="bg-[#0D0F1F] p-2 rounded text-sm text-[#F5F5DC] hover:bg-[#0D0F1F]/70 cursor-pointer border border-[#DAA520]/20">
                    Secrets of Nalanda: The Emperor's Legacy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default StorySubmission;