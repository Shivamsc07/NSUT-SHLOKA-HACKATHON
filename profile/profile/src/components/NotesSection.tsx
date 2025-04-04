import React from 'react';
import { BookmarkIcon, MicIcon, PlusIcon } from 'lucide-react';
export const NotesSection = () => {
  const notes = [{
    id: 1,
    book: 'Kabir Ke Dohe',
    excerpt: 'जल में कुंभ, कुंभ में जल है, बाहर भीतर पानी।',
    insight: 'Kabir expresses the non-duality between the self & the universe.',
    date: '3 days ago'
  }, {
    id: 2,
    book: 'Gitanjali',
    excerpt: 'Where the mind is without fear and the head is held high...',
    insight: "Tagore's vision of a free mind and spirit transcending boundaries.",
    date: '1 week ago'
  }, {
    id: 3,
    book: 'Madhushala',
    excerpt: 'मदिरालय जाने को घर से चलता है पीनेवाला...',
    insight: 'The journey of life symbolized through the metaphor of a tavern.',
    date: '2 weeks ago'
  }];
  return <section className="bg-[#0D0F1F]/70 rounded-2xl p-6 border border-[#DAA520]/20 shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold flex items-center">
          <BookmarkIcon size={20} className="mr-2 text-[#DAA520]" />
          <span>My Notes & Highlights</span>
        </h2>
        <button className="p-2 bg-[#1A1A1A] rounded-full border border-[#DAA520]/30 hover:border-[#DAA520] transition-colors">
          <PlusIcon size={16} className="text-[#DAA520]" />
        </button>
      </div>
      <div className="space-y-4 mb-6">
        {notes.map(note => <div key={note.id} className="bg-[#1A1A1A]/40 rounded-lg p-4 border border-[#DAA520]/10">
            <div className="text-xs text-[#DAA520] mb-1">{note.book}</div>
            <blockquote className="text-sm italic text-[#F5F5DC] border-l-2 border-[#DAA520]/30 pl-3 mb-2">
              "{note.excerpt}"
            </blockquote>
            <div className="flex items-start mt-3">
              <div className="bg-[#0F52BA]/20 p-1 rounded mr-2">
                <span className="text-xs">💡</span>
              </div>
              <div>
                <div className="text-xs text-[#F5F5DC]/90">{note.insight}</div>
                <div className="text-xs text-[#F5F5DC]/50 mt-1">
                  {note.date}
                </div>
              </div>
            </div>
          </div>)}
      </div>
      <div className="mt-6">
        <h3 className="text-sm uppercase tracking-wider text-[#DAA520] mb-3">
          Voice Notes
        </h3>
        <div className="bg-[#1A1A1A]/40 rounded-lg p-4 border border-[#DAA520]/10 flex items-center justify-between">
          <div className="flex items-center">
            <MicIcon size={18} className="text-[#DAA520] mr-3" />
            <div>
              <div className="text-sm text-[#F5F5DC]">Record a new note</div>
              <div className="text-xs text-[#F5F5DC]/60">
                Tap to start recording
              </div>
            </div>
          </div>
          <button className="h-10 w-10 rounded-full bg-[#DAA520] flex items-center justify-center hover:bg-[#DAA520]/80 transition-colors">
            <MicIcon size={16} className="text-[#0D0F1F]" />
          </button>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-sm uppercase tracking-wider text-[#DAA520] mb-3">
          AI Summary
        </h3>
        <div className="bg-[#1A1A1A]/40 rounded-lg p-4 border border-[#DAA520]/10">
          <div className="flex items-start">
            <div className="text-2xl mr-3">🤖</div>
            <div>
              <p className="text-sm text-[#F5F5DC]">
                Your notes reflect an interest in philosophical poetry that
                explores the relationship between the self and the universe.
                You're drawn to works that discuss freedom of thought and
                spiritual journeys.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};