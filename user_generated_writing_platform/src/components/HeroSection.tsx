import React from 'react';
import { PencilIcon } from 'lucide-react';
const HeroSection = () => {
  return <section className="relative w-full h-[500px] overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=2070')"
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0F1F] via-[#0D0F1F]/70 to-[#0D0F1F]"></div>
      </div>
      {/* Floating manuscripts animation (simplified representation) */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => <div key={i} className="absolute opacity-30" style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        transform: `rotate(${Math.random() * 360}deg)`,
        animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`
      }}>
            <img src="https://images.unsplash.com/photo-1519682577862-22b62b24e493?q=80&w=2070" alt="Ancient manuscript" className="w-32 h-24 object-cover rounded opacity-60" />
          </div>)}
      </div>
      {/* Hero content */}
      <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F5DC] mb-4 leading-tight">
          Where Stories <span className="text-[#FFD700]">Come to Life</span>
          <br />
          <span className="text-3xl md:text-4xl">Write, Share, Inspire!</span>
        </h1>
        <p className="text-lg md:text-xl text-[#F5F5DC]/90 mb-8 max-w-2xl">
          Join our vibrant community of storytellers and unleash your
          creativity. Let your imagination soar as you craft tales that
          captivate readers from around the world.
        </p>
        <button className="flex items-center px-6 py-3 bg-[#1A1A1A] text-[#FFD700] text-lg font-medium rounded-md hover:bg-[#252525] border border-[#DAA520] transition-all shadow-lg shadow-[#FFD700]/20 w-fit">
          <PencilIcon className="w-5 h-5 mr-2" />
          <span>Start Writing Now!</span>
        </button>
      </div>
      {/* Featured carousel preview (simplified) */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0D0F1F] to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4">
        <div className="flex space-x-2">
          {[...Array(3)].map((_, i) => <div key={i} className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-[#FFD700]' : 'bg-[#F5F5DC]/30'}`}></div>)}
        </div>
      </div>
    </section>;
};
export default HeroSection;