import React, { memo } from 'react';
import { BookOpenIcon, AwardIcon, QuoteIcon, CalendarIcon } from 'lucide-react';
const AuthorSpotlight = () => {
  return <section className="py-16 px-4 bg-[#0D0F1F]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#FFD700]/10 text-[#FFD700] px-4 py-1 rounded-full text-sm font-medium mb-3">
            Monthly Feature
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5DC]">
            Author Spotlight
          </h2>
        </div>
        <div className="bg-gradient-to-r from-[#1A1A1A] to-[#0D0F1F] rounded-xl overflow-hidden border border-[#FFD700]/20 shadow-lg">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5 relative">
              <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Munshi Premchand" className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-[#FFD700] text-[#0D0F1F] px-3 py-1 rounded-full text-sm font-bold">
                Author of the Month
              </div>
            </div>
            <div className="lg:w-3/5 p-6 md:p-10">
              <h3 className="text-3xl font-bold text-[#F5F5DC] mb-2">
                Munshi Premchand
              </h3>
              <p className="text-[#FFD700] text-lg mb-4">
                The Father of Hindi Literature
              </p>
              <div className="mb-6">
                <p className="text-[#F5F5DC]/80 leading-relaxed">
                  Munshi Premchand, born Dhanpat Rai Shrivastava, was a pioneer
                  of modern Hindi and Urdu social fiction. His works paint a
                  vivid picture of the complex realities of Indian society,
                  focusing on the struggles of the rural poor and middle class.
                  Through his powerful storytelling, he addressed issues of
                  social inequality, corruption, and the effects of colonialism
                  with remarkable insight and compassion.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-start">
                  <BookOpenIcon size={18} className="text-[#FFD700] mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#F5F5DC] mb-2">
                      Notable Works
                    </h4>
                    <ul className="text-[#F5F5DC]/70 space-y-1">
                      <li>• Godaan (The Gift of a Cow)</li>
                      <li>• Kafan (Shroud)</li>
                      <li>• Shatranj Ke Khilari (The Chess Players)</li>
                      <li>• Nirmala</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start">
                  <AwardIcon size={18} className="text-[#FFD700] mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#F5F5DC] mb-2">
                      Legacy & Recognition
                    </h4>
                    <ul className="text-[#F5F5DC]/70 space-y-1">
                      <li>• Pioneer of the Hindustani literature</li>
                      <li>• Influenced generations of Indian writers</li>
                      <li>• Works translated into numerous languages</li>
                      <li>• Commemorated on Indian postage stamps</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mb-8 bg-[#0D0F1F]/50 p-5 rounded-lg border-l-4 border-[#FFD700]">
                <div className="flex items-start">
                  <QuoteIcon size={24} className="text-[#FFD700] mr-3 mt-1" />
                  <p className="text-[#F5F5DC]/90 italic">
                    "The purpose of a writer is not merely to inform and
                    entertain but to make people see the world afresh."
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <button className="bg-[#FFD700] hover:bg-[#FFD700]/80 text-[#0D0F1F] font-bold py-2 px-6 rounded-full transition-all duration-300">
                  Explore Complete Works
                </button>
                <div className="flex items-center text-[#F5F5DC]/60 text-sm">
                  <CalendarIcon size={16} className="mr-2" />
                  <span>Upcoming Virtual Event: July 31, 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AuthorSpotlight;