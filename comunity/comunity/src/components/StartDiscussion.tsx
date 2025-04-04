import React, { useState } from 'react';
import { PlusCircleIcon, TagIcon, LockIcon, GlobeIcon } from 'lucide-react';
const StartDiscussion = () => {
  const [isPublic, setIsPublic] = useState(true);
  const [showFullForm, setShowFullForm] = useState(false);
  return <div className="bg-[#1A1A1A] rounded-lg border border-[#0F52BA]/20 overflow-hidden mb-8">
      <div className="bg-gradient-to-r from-[#0F52BA]/20 to-[#8B0000]/20 px-5 py-4 border-b border-[#0F52BA]/20 flex justify-between items-center">
        <h2 className="text-xl font-bold text-[#F5F5DC] flex items-center">
          <PlusCircleIcon className="mr-2 text-[#FFD700]" size={20} />
          Start a Discussion
        </h2>
        {!showFullForm && <button onClick={() => setShowFullForm(true)} className="bg-[#FFD700] hover:bg-[#FFD700]/80 text-[#0D0F1F] text-sm font-medium py-1 px-4 rounded-full transition-colors">
            New Topic
          </button>}
      </div>
      {showFullForm ? <div className="p-5">
          <div className="mb-4">
            <label htmlFor="topic" className="block text-sm font-medium text-[#F5F5DC]/70 mb-1">
              Topic Title
            </label>
            <input type="text" id="topic" placeholder="What would you like to discuss?" className="w-full bg-[#0D0F1F] border border-[#0F52BA]/30 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#0F52BA] transition-all" />
            <div className="mt-1 flex items-center">
              <span className="text-xs text-[#0F52BA]">AI Suggestion:</span>
              <button className="text-xs text-[#F5F5DC]/70 underline ml-2 hover:text-[#F5F5DC]">
                "Exploring the duality in Amitav Ghosh's 'Shadow Lines'"
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-medium text-[#F5F5DC]/70 mb-1">
              Discussion Content
            </label>
            <textarea id="content" rows={5} placeholder="Share your thoughts, questions or insights..." className="w-full bg-[#0D0F1F] border border-[#0F52BA]/30 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#0F52BA] transition-all resize-none"></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#F5F5DC]/70 mb-1 flex items-center">
              <TagIcon size={14} className="mr-1" />
              Tags
            </label>
            <div className="flex flex-wrap gap-2">
              <TagPill text="Fiction" selected />
              <TagPill text="Poetry" />
              <TagPill text="Mythology" />
              <TagPill text="Contemporary" />
              <TagPill text="Analysis" selected />
              <TagPill text="Translation" />
              <TagPill text="+ Custom" isCustom />
            </div>
            <p className="text-xs text-[#0F52BA] mt-1">
              AI suggests: "Literary Technique", "Character Study"
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button onClick={() => setIsPublic(true)} className={`flex items-center space-x-1 px-3 py-1 rounded-md text-sm ${isPublic ? 'bg-[#0D0F1F] text-[#F5F5DC]' : 'text-[#F5F5DC]/50 hover:text-[#F5F5DC]/70'}`}>
                <GlobeIcon size={14} />
                <span>Public</span>
              </button>
              <button onClick={() => setIsPublic(false)} className={`flex items-center space-x-1 px-3 py-1 rounded-md text-sm ${!isPublic ? 'bg-[#0D0F1F] text-[#F5F5DC]' : 'text-[#F5F5DC]/50 hover:text-[#F5F5DC]/70'}`}>
                <LockIcon size={14} />
                <span>Members Only</span>
              </button>
            </div>
            <div className="flex space-x-3">
              <button onClick={() => setShowFullForm(false)} className="border border-[#F5F5DC]/30 hover:border-[#F5F5DC]/50 text-[#F5F5DC]/70 hover:text-[#F5F5DC] text-sm py-2 px-4 rounded-lg transition-colors">
                Cancel
              </button>
              <button className="bg-[#0F52BA] hover:bg-[#0F52BA]/80 text-white text-sm py-2 px-4 rounded-lg transition-colors shadow-[0_0_10px_rgba(15,82,186,0.3)]">
                Post Discussion
              </button>
            </div>
          </div>
        </div> : <div className="p-5">
          <p className="text-[#F5F5DC]/80 text-sm">
            Start a new discussion thread to engage with the community. Our AI
            will help suggest relevant tags and refine your topic for better
            engagement.
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#0D0F1F] p-3 rounded-lg border border-[#F5F5DC]/10">
              <h3 className="text-sm font-medium text-[#0F52BA] mb-1">
                AI-Powered Features:
              </h3>
              <ul className="text-xs text-[#F5F5DC]/70 space-y-1">
                <li>• Smart topic suggestions based on current trends</li>
                <li>• Automatic tagging of your discussion</li>
                <li>• Real-time feedback to improve engagement</li>
              </ul>
            </div>
            <div className="bg-[#0D0F1F] p-3 rounded-lg border border-[#F5F5DC]/10">
              <h3 className="text-sm font-medium text-[#8B0000] mb-1">
                Community Guidelines:
              </h3>
              <ul className="text-xs text-[#F5F5DC]/70 space-y-1">
                <li>• Be respectful of diverse viewpoints</li>
                <li>• Cite sources when referencing works</li>
                <li>• Keep discussions focused on literature</li>
              </ul>
            </div>
          </div>
        </div>}
    </div>;
};
const TagPill = ({
  text,
  selected = false,
  isCustom = false
}) => <button className={`text-xs px-3 py-1 rounded-full transition-all ${selected ? 'bg-[#0F52BA] text-white' : isCustom ? 'bg-[#0D0F1F]/50 text-[#FFD700] border border-dashed border-[#FFD700]/50' : 'bg-[#0D0F1F] text-[#F5F5DC]/70 border border-[#F5F5DC]/10 hover:border-[#F5F5DC]/30'}`}>
    {text}
  </button>;
export default StartDiscussion;