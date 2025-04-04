import React from 'react';
import { ChevronRightIcon } from 'lucide-react';
const HeroSection = () => {
  return <section className="relative w-full py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="book-page absolute top-[10%] left-[20%] animate-float-slow"></div>
        <div className="book-page absolute top-[30%] left-[70%] animate-float-medium"></div>
        <div className="book-page absolute top-[60%] left-[15%] animate-float-fast"></div>
        <div className="book-page absolute top-[75%] left-[60%] animate-float-slow"></div>
        <div className="ink-swirl absolute top-[25%] left-[30%] animate-swirl-slow"></div>
        <div className="ink-swirl absolute top-[50%] left-[80%] animate-swirl-medium"></div>
      </div>
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#F5F5DC] leading-tight">
            Meet the Minds Behind the Masterpieces
            <span className="block mt-2 text-[#FFD700]">
              Discover Your Next Favorite Author!
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-[#F5F5DC]/80">
            Explore the literary world of R.K. Narayan, Jhumpa Lahiri, Arundhati
            Roy, and many more brilliant authors.
          </p>
          <button className="bg-[#FFD700] hover:bg-[#FFD700]/80 text-[#0D0F1F] font-bold py-3 px-8 rounded-full text-lg flex items-center mx-auto transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#FFD700]/20">
            <span className="mr-2">Explore Top Authors</span>
            <ChevronRightIcon size={20} />
          </button>
        </div>
        {/* Featured Authors Carousel */}
        <div className="mt-16 relative">
          <h2 className="text-2xl font-semibold mb-6 text-center text-[#FFD700]">
            Featured Authors
          </h2>
          <div className="flex overflow-x-auto pb-8 space-x-6 scrollbar-hide">
            {featuredAuthors.map(author => <div key={author.id} className="min-w-[280px] bg-[#1A1A1A] rounded-lg overflow-hidden flex-shrink-0 border border-[#FFD700]/20 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FFD700]/10">
                <div className="h-48 overflow-hidden">
                  <img src={author.image} alt={author.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-[#F5F5DC]">
                    {author.name}
                  </h3>
                  <p className="text-[#F5F5DC]/70 mb-2">{author.genre}</p>
                  <p className="text-[#FFD700]">
                    Notable work: {author.notableWork}
                  </p>
                </div>
              </div>)}
          </div>
        </div>
      </div>
      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0D0F1F] to-transparent"></div>
    </section>;
};
// Sample data for featured authors
const featuredAuthors = [{
  id: 1,
  name: 'R.K. Narayan',
  genre: 'Fiction & Short Stories',
  notableWork: 'Malgudi Days',
  image: 'https://images.unsplash.com/photo-1564106273110-e2960a5a426a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  id: 2,
  name: 'Jhumpa Lahiri',
  genre: 'Contemporary Fiction',
  notableWork: 'Interpreter of Maladies',
  image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  id: 3,
  name: 'Arundhati Roy',
  genre: 'Literary Fiction',
  notableWork: 'The God of Small Things',
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  id: 4,
  name: 'Amitav Ghosh',
  genre: 'Historical Fiction',
  notableWork: 'Sea of Poppies',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  id: 5,
  name: 'Vikram Seth',
  genre: 'Fiction & Poetry',
  notableWork: 'A Suitable Boy',
  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}];
export default HeroSection;