import React from 'react';
import { BookOpenIcon, StarIcon, BrainIcon } from 'lucide-react';
export const DigestSection = () => {
  return <section className="bg-[#0D0F1F]/70 rounded-2xl p-6 border border-[#DAA520]/20 shadow-lg mt-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold flex items-center">
          <StarIcon size={20} className="mr-2 text-[#DAA520]" />
          <span>Daily Literary Digest</span>
        </h2>
        <div className="text-sm text-[#F5F5DC]/60">September 25, 2023</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DigestCard icon={<span className="text-2xl">📜</span>} title="Quote of the Day" content="जो कुछ भी तू कर सकता है, वह अभी कर।" source="- Swami Vivekananda" />
        <DigestCard icon={<BookOpenIcon size={24} className="text-[#DAA520]" />} title="Book Suggestion" content="Panchatantra Stories" source="Ancient Indian collection of animal fables" />
        <DigestCard icon={<BrainIcon size={24} className="text-[#DAA520]" />} title="Word of the Day" content="नवनीत (Navneet)" source="Meaning: Fresh Butter, Symbolizing Purity" />
      </div>
      <div className="mt-6 bg-gradient-to-r from-[#0D0F1F] via-[#0F52BA]/20 to-[#0D0F1F] p-4 rounded-lg border border-[#DAA520]/10 text-center">
        <p className="text-sm text-[#F5F5DC]/90 italic">
          "पुस्तकें ज्ञान के द्वार हैं, जो हमें अतीत से जोड़ती हैं और भविष्य की
          राह दिखाती हैं।"
        </p>
        <p className="text-xs text-[#F5F5DC]/60 mt-1">
          (Books are the gates of knowledge, connecting us to the past and
          showing the path to the future.)
        </p>
      </div>
    </section>;
};
const DigestCard = ({
  icon,
  title,
  content,
  source
}) => <div className="bg-[#1A1A1A]/40 rounded-lg p-5 border border-[#DAA520]/10 hover:border-[#DAA520]/30 transition-all hover:shadow-[0_0_15px_rgba(218,165,32,0.1)] group">
    <div className="flex items-center mb-3">
      <div className="p-2 bg-[#1A1A1A] rounded-md mr-3 group-hover:bg-[#DAA520]/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-sm uppercase tracking-wider text-[#DAA520]">
        {title}
      </h3>
    </div>
    <div className="text-lg font-medium text-[#F5F5DC] mb-2">{content}</div>
    <div className="text-xs text-[#F5F5DC]/60">{source}</div>
  </div>;