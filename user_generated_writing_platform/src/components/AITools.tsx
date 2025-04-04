import React from 'react';
import { Sparkles as SparklesIcon, BookOpen as BookOpenIcon, Check as CheckIcon, Image as ImageIcon, Mic as MicIcon } from 'lucide-react';
const AITools = () => {
  return <section className="py-16 px-4 bg-gradient-to-b from-[#0D0F1F]/95 to-[#0D0F1F]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5DC] mb-4">
            AI-Powered{' '}
            <span className="text-[#FFD700]">Smart Story Writing</span> Tools
          </h2>
          <p className="text-lg text-[#F5F5DC]/80 max-w-2xl mx-auto">
            Enhance your storytelling with our suite of AI-powered tools
            designed to inspire, refine, and transform your creative writing
            process.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Tool 1: Story Starters */}
          <div className="bg-[#1A1A1A] border border-[#DAA520] rounded-lg p-6 hover:shadow-lg hover:shadow-[#FFD700]/10 transition-all">
            <div className="h-12 w-12 rounded-full bg-[#0F52BA]/20 flex items-center justify-center mb-4">
              <SparklesIcon className="h-6 w-6 text-[#FFD700]" />
            </div>
            <h3 className="text-xl font-bold text-[#F5F5DC] mb-2">
              Auto-Suggested Story Starters
            </h3>
            <p className="text-[#F5F5DC]/80 mb-4">
              Overcome writer's block with AI-generated prompts tailored to your
              preferred genres and themes.
            </p>
            <div className="bg-[#0D0F1F] p-4 rounded-md mb-4 border border-[#DAA520]/30">
              <p className="text-sm italic text-[#F5F5DC]/70">
                "I want to write a mystery story, but I don't know how to
                start."
              </p>
              <div className="flex items-start mt-3">
                <div className="w-8 h-8 rounded-full bg-[#0F52BA] flex items-center justify-center mr-3 mt-1">
                  <span className="text-xs font-bold">AI</span>
                </div>
                <div>
                  <p className="text-[#FFD700]">
                    What if a forgotten diary in an old Haveli holds the secret
                    to a lost treasure?
                  </p>
                </div>
              </div>
            </div>
            <button className="w-full py-2 bg-[#0D0F1F] text-[#FFD700] rounded-md hover:bg-[#0D0F1F]/80 transition-colors border border-[#DAA520]/30">
              Generate a Story Starter
            </button>
          </div>
          {/* Tool 2: Grammar & Style Enhancement */}
          <div className="bg-[#1A1A1A] border border-[#DAA520] rounded-lg p-6 hover:shadow-lg hover:shadow-[#FFD700]/10 transition-all">
            <div className="h-12 w-12 rounded-full bg-[#0F52BA]/20 flex items-center justify-center mb-4">
              <BookOpenIcon className="h-6 w-6 text-[#FFD700]" />
            </div>
            <h3 className="text-xl font-bold text-[#F5F5DC] mb-2">
              AI Grammar & Style Enhancement
            </h3>
            <p className="text-[#F5F5DC]/80 mb-4">
              Polish your prose with our AI writing assistant that refines
              grammar and enhances storytelling techniques.
            </p>
            <div className="bg-[#0D0F1F] p-4 rounded-md mb-4 border border-[#DAA520]/30">
              <p className="text-sm text-[#F5F5DC]/70 line-through">
                The old man walked slowly to the door. He was tired. He opened
                it.
              </p>
              <div className="flex items-start mt-3">
                <div className="w-8 h-8 rounded-full bg-[#0F52BA] flex items-center justify-center mr-3 mt-1">
                  <span className="text-xs font-bold">AI</span>
                </div>
                <div>
                  <p className="text-[#FFD700]">
                    Exhausted, the elderly man shuffled toward the door, his
                    weathered hand trembling as he turned the knob.
                  </p>
                </div>
              </div>
            </div>
            <button className="w-full py-2 bg-[#0D0F1F] text-[#FFD700] rounded-md hover:bg-[#0D0F1F]/80 transition-colors border border-[#DAA520]/30">
              Enhance Your Writing
            </button>
          </div>
          {/* Tool 3: Plagiarism Checker */}
          <div className="bg-[#1A1A1A] border border-[#DAA520] rounded-lg p-6 hover:shadow-lg hover:shadow-[#FFD700]/10 transition-all">
            <div className="h-12 w-12 rounded-full bg-[#0F52BA]/20 flex items-center justify-center mb-4">
              <CheckIcon className="h-6 w-6 text-[#FFD700]" />
            </div>
            <h3 className="text-xl font-bold text-[#F5F5DC] mb-2">
              Plagiarism Checker
            </h3>
            <p className="text-[#F5F5DC]/80 mb-4">
              Ensure your work is original with our advanced AI-powered
              plagiarism detection tool.
            </p>
            <div className="bg-[#0D0F1F] p-4 rounded-md mb-4 border border-[#DAA520]/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-[#F5F5DC]">
                  Originality Score
                </span>
                <span className="text-sm font-medium text-[#FFD700]">98%</span>
              </div>
              <div className="w-full bg-[#1A1A1A] rounded-full h-2.5">
                <div className="bg-[#FFD700] h-2.5 rounded-full" style={{
                width: '98%'
              }}></div>
              </div>
              <p className="mt-3 text-sm text-[#F5F5DC]/70">
                Your story is 98% original. 2% matches common phrases and
                idioms.
              </p>
            </div>
            <button className="w-full py-2 bg-[#0D0F1F] text-[#FFD700] rounded-md hover:bg-[#0D0F1F]/80 transition-colors border border-[#DAA520]/30">
              Check for Plagiarism
            </button>
          </div>
          {/* Tool 4: AI Illustrations */}
          <div className="bg-[#1A1A1A] border border-[#DAA520] rounded-lg p-6 hover:shadow-lg hover:shadow-[#FFD700]/10 transition-all">
            <div className="h-12 w-12 rounded-full bg-[#0F52BA]/20 flex items-center justify-center mb-4">
              <ImageIcon className="h-6 w-6 text-[#FFD700]" />
            </div>
            <h3 className="text-xl font-bold text-[#F5F5DC] mb-2">
              AI-Generated Illustrations
            </h3>
            <p className="text-[#F5F5DC]/80 mb-4">
              Bring your stories to life with custom AI-generated artwork that
              matches your narrative.
            </p>
            <div className="grid grid-cols-3 gap-2 mb-4">
              <img src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=2044" alt="AI Illustration" className="w-full h-24 object-cover rounded-md" />
              <img src="https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?q=80&w=2048" alt="AI Illustration" className="w-full h-24 object-cover rounded-md" />
              <img src="https://images.unsplash.com/photo-1578301978018-3199d97a8732?q=80&w=2044" alt="AI Illustration" className="w-full h-24 object-cover rounded-md" />
            </div>
            <button className="w-full py-2 bg-[#0D0F1F] text-[#FFD700] rounded-md hover:bg-[#0D0F1F]/80 transition-colors border border-[#DAA520]/30">
              Generate Illustrations
            </button>
          </div>
          {/* Tool 5: Voice-to-Text */}
          <div className="bg-[#1A1A1A] border border-[#DAA520] rounded-lg p-6 hover:shadow-lg hover:shadow-[#FFD700]/10 transition-all">
            <div className="h-12 w-12 rounded-full bg-[#0F52BA]/20 flex items-center justify-center mb-4">
              <MicIcon className="h-6 w-6 text-[#FFD700]" />
            </div>
            <h3 className="text-xl font-bold text-[#F5F5DC] mb-2">
              Voice-to-Text Writing
            </h3>
            <p className="text-[#F5F5DC]/80 mb-4">
              Tell your story aloud and watch as our AI transcribes your words
              into beautifully formatted text.
            </p>
            <div className="bg-[#0D0F1F] p-4 rounded-md mb-4 border border-[#DAA520]/30 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#8B0000] flex items-center justify-center mb-2 pulse-animation">
                <MicIcon className="h-8 w-8 text-[#F5F5DC]" />
              </div>
              <p className="text-sm text-[#F5F5DC]/70 text-center">
                Tap to start recording your story
              </p>
            </div>
            <button className="w-full py-2 bg-[#0D0F1F] text-[#FFD700] rounded-md hover:bg-[#0D0F1F]/80 transition-colors border border-[#DAA520]/30">
              Start Voice Recording
            </button>
          </div>
          {/* Tool 6: Title & Description Suggestions */}
          <div className="bg-[#1A1A1A] border border-[#DAA520] rounded-lg p-6 hover:shadow-lg hover:shadow-[#FFD700]/10 transition-all">
            <div className="h-12 w-12 rounded-full bg-[#0F52BA]/20 flex items-center justify-center mb-4">
              <SparklesIcon className="h-6 w-6 text-[#FFD700]" />
            </div>
            <h3 className="text-xl font-bold text-[#F5F5DC] mb-2">
              Title & Description Suggestions
            </h3>
            <p className="text-[#F5F5DC]/80 mb-4">
              Get AI-powered title and tagline suggestions that will captivate
              readers and increase engagement.
            </p>
            <div className="bg-[#0D0F1F] p-4 rounded-md mb-4 border border-[#DAA520]/30">
              <div className="mb-3">
                <p className="text-sm font-medium text-[#F5F5DC] mb-1">
                  Title Suggestion:
                </p>
                <p className="text-[#FFD700]">
                  The Cursed Manuscript – A Tale from Ancient India
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-[#F5F5DC] mb-1">
                  Tagline Suggestion:
                </p>
                <p className="text-[#FFD700]">
                  A hidden scroll. A deadly secret. A journey through time.
                </p>
              </div>
            </div>
            <button className="w-full py-2 bg-[#0D0F1F] text-[#FFD700] rounded-md hover:bg-[#0D0F1F]/80 transition-colors border border-[#DAA520]/30">
              Generate Title & Tagline
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default AITools;