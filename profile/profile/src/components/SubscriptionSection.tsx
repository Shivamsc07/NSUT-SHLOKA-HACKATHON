import React from 'react';
import { CreditCardIcon, BookIcon, DownloadIcon, CheckIcon } from 'lucide-react';
export const SubscriptionSection = () => {
  return <section className="bg-[#0D0F1F]/70 rounded-2xl p-6 border border-[#DAA520]/20 shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold flex items-center">
          <CreditCardIcon size={20} className="mr-2 text-[#DAA520]" />
          <span>Subscription</span>
        </h2>
      </div>
      <div className="bg-gradient-to-r from-[#0F52BA]/30 to-[#DAA520]/20 rounded-lg p-5 border border-[#DAA520]/30 mb-6 relative overflow-hidden">
        <div className="absolute top-0 right-0">
          <div className="bg-[#DAA520] text-[#0D0F1F] text-xs py-1 px-4 font-medium transform rotate-45 translate-x-6 -translate-y-1">
            Active
          </div>
        </div>
        <h3 className="text-lg font-bold text-[#F5F5DC] mb-1">
          Premium Subscription
        </h3>
        <p className="text-sm text-[#F5F5DC]/70 mb-4">
          Access to exclusive content and features
        </p>
        <div className="space-y-2 mb-4">
          <SubscriptionFeature text="Access to 500+ Exclusive Books" />
          <SubscriptionFeature text="Ad-free reading experience" />
          <SubscriptionFeature text="Advanced AI book recommendations" />
          <SubscriptionFeature text="Offline reading & downloads" />
        </div>
        <div className="flex justify-between items-center mt-4">
          <div>
            <div className="text-xs text-[#F5F5DC]/60">Next billing date</div>
            <div className="text-sm font-medium text-[#F5F5DC]">
              October 15, 2023
            </div>
          </div>
          <button className="px-4 py-2 bg-[#1A1A1A] text-[#F5F5DC] rounded-md border border-[#DAA520]/30 hover:bg-[#1A1A1A]/70 hover:border-[#DAA520] transition-all text-sm">
            Manage Plan
          </button>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-sm uppercase tracking-wider text-[#DAA520] mb-3">
          Recent Purchases
        </h3>
        <div className="space-y-3">
          <PurchaseItem title="Meghdoot (Audiobook)" author="Kalidasa" date="September 12, 2023" price="₹299" type="audiobook" />
          <PurchaseItem title="Complete Works of Premchand" author="Munshi Premchand" date="August 24, 2023" price="₹499" type="ebook" />
          <PurchaseItem title="Gitanjali (Limited Edition)" author="Rabindranath Tagore" date="July 15, 2023" price="₹399" type="ebook" />
        </div>
      </div>
    </section>;
};
const SubscriptionFeature = ({
  text
}) => <div className="flex items-center">
    <CheckIcon size={14} className="text-[#DAA520] mr-2 flex-shrink-0" />
    <span className="text-sm text-[#F5F5DC]">{text}</span>
  </div>;
const PurchaseItem = ({
  title,
  author,
  date,
  price,
  type
}) => <div className="flex items-center bg-[#1A1A1A]/40 rounded-lg p-3 border border-[#DAA520]/10">
    <div className="w-10 h-10 bg-[#1A1A1A] rounded flex items-center justify-center mr-3">
      {type === 'audiobook' ? <BookIcon size={16} className="text-[#0F52BA]" /> : <BookIcon size={16} className="text-[#DAA520]" />}
    </div>
    <div className="flex-1">
      <div className="text-sm font-medium text-[#F5F5DC]">{title}</div>
      <div className="text-xs text-[#F5F5DC]/60">
        {author} • {date}
      </div>
    </div>
    <div className="flex flex-col items-end">
      <div className="text-sm font-medium text-[#F5F5DC]">{price}</div>
      <button className="mt-1 text-xs text-[#DAA520] hover:underline flex items-center">
        <DownloadIcon size={10} className="mr-1" />
        Download
      </button>
    </div>
  </div>;