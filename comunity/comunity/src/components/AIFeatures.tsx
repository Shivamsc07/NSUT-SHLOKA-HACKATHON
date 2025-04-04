import React from 'react';
import { BrainIcon, BookOpenIcon, HelpCircleIcon } from 'lucide-react';
const AIFeatures = () => {
  return <div className="bg-[#1A1A1A] rounded-lg border border-[#0F52BA]/20 overflow-hidden mb-8">
      <div className="bg-gradient-to-r from-[#0F52BA]/20 to-[#8B0000]/20 px-5 py-4 border-b border-[#0F52BA]/20">
        <h2 className="text-xl font-bold text-[#F5F5DC] flex items-center">
          <BrainIcon className="mr-2 text-[#0F52BA]" size={20} />
          Ask the AI Literature Assistant
        </h2>
      </div>
      <div className="p-5">
        <p className="text-[#F5F5DC]/80 text-sm mb-4">
          Our AI can provide insights, summaries, and literary context to
          enhance your discussions.
        </p>
        <div className="bg-[#0D0F1F] rounded-lg p-4 mb-4">
          <div className="flex items-start space-x-3 mb-3">
            <div className="bg-[#0D0F1F] p-2 rounded-full border border-[#F5F5DC]/10">
              <HelpCircleIcon size={16} className="text-[#F5F5DC]/70" />
            </div>
            <div>
              <p className="text-[#F5F5DC]/70 text-sm font-medium mb-1">
                Recent Question:
              </p>
              <p className="text-[#F5F5DC]">
                What was the significance of the river in 'Gitanjali'?
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-[#0F52BA]/20 p-2 rounded-full">
              <BrainIcon size={16} className="text-[#0F52BA]" />
            </div>
            <div>
              <p className="text-[#0F52BA] text-sm font-medium mb-1">
                AI Response:
              </p>
              <p className="text-[#F5F5DC]/90 text-sm">
                Tagore used the river as a symbol of the eternal flow of life
                and devotion. In 'Gitanjali', the river represents both the
                journey of the soul and the divine connection between humanity
                and nature.
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <input type="text" placeholder="Ask about any Indian literary work..." className="w-full bg-[#0D0F1F] border border-[#0F52BA]/30 rounded-full py-2 px-4 pl-10 text-sm focus:outline-none focus:ring-1 focus:ring-[#0F52BA] transition-all" />
          <BookOpenIcon size={16} className="absolute left-3 top-3 text-[#0F52BA]" />
          <button className="absolute right-2 top-1.5 bg-[#0F52BA] hover:bg-[#0F52BA]/80 text-white text-sm py-1 px-3 rounded-full transition-colors">
            Ask AI
          </button>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <SuggestionChip text="Symbolism in Premchand's works" />
          <SuggestionChip text="Compare Roy and Desai" />
          <SuggestionChip text="Explain Mahabharata themes" />
        </div>
      </div>
    </div>;
};
const SuggestionChip = ({
  text
}) => <button className="text-xs bg-[#0D0F1F] hover:bg-[#0D0F1F]/70 text-[#F5F5DC]/70 px-3 py-1 rounded-full border border-[#F5F5DC]/10 transition-colors">
    {text}
  </button>;
export default AIFeatures;