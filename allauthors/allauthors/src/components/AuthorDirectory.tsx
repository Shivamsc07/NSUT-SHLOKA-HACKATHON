import React, { useState, Children } from 'react';
import { FilterIcon, TrendingUpIcon, CalendarIcon, StarIcon, BookmarkIcon, PlusIcon } from 'lucide-react';
import AuthorCard from './AuthorCard';
const AuthorDirectory = ({
  activeFilter,
  setActiveFilter,
  activeSort,
  setActiveSort
}) => {
  const [showAllFilters, setShowAllFilters] = useState(false);
  return <section className="py-16 px-4 bg-[#0D0F1F]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <h2 className="text-3xl font-bold text-[#F5F5DC] mb-4 md:mb-0">
            Author Directory
          </h2>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center bg-[#1A1A1A] hover:bg-[#1A1A1A]/80 text-[#F5F5DC] px-4 py-2 rounded-full border border-[#FFD700]/30">
              <FilterIcon size={18} className="mr-2" />
              <span>Filters</span>
            </button>
            <div className="relative">
              <button className="flex items-center bg-[#1A1A1A] hover:bg-[#1A1A1A]/80 text-[#F5F5DC] px-4 py-2 rounded-full border border-[#FFD700]/30" onClick={() => setShowAllFilters(!showAllFilters)}>
                <span>Sort By: {getSortLabel(activeSort)}</span>
              </button>
              {showAllFilters && <div className="absolute right-0 mt-2 w-48 bg-[#1A1A1A] rounded-lg shadow-lg border border-[#FFD700]/30 z-10">
                  <SortOption icon={<TrendingUpIcon size={16} />} label="Trending Now" value="trending" activeSort={activeSort} setActiveSort={setActiveSort} />
                  <SortOption icon={<CalendarIcon size={16} />} label="Recent Releases" value="recent" activeSort={activeSort} setActiveSort={setActiveSort} />
                  <SortOption icon={<StarIcon size={16} />} label="Highest Rated" value="rated" activeSort={activeSort} setActiveSort={setActiveSort} />
                  <SortOption icon={<div size={16} />} label="Most Followed" value="followed" activeSort={activeSort} setActiveSort={setActiveSort} />
                </div>}
            </div>
          </div>
        </div>
        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          <FilterPill label="All" value="all" activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          <FilterPill label="Fiction" value="fiction" activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          <FilterPill label="Poetry" value="poetry" activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          <FilterPill label="Mystery" value="mystery" activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          <FilterPill label="Historical" value="historical" activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          <FilterPill label="Science Fiction" value="scifi" activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          <FilterPill label="Romance" value="romance" activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          <FilterPill label="Biography" value="biography" activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        </div>
        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {authors.map(author => <AuthorCard key={author.id} author={author} />)}
        </div>
        {/* Load More Button */}
        <div className="mt-12 text-center">
          <button className="bg-[#1A1A1A] hover:bg-[#FFD700] hover:text-[#0D0F1F] text-[#F5F5DC] font-bold py-3 px-8 rounded-full transition-all duration-300 border border-[#FFD700]/30 glow-on-hover">
            Load More Authors
          </button>
        </div>
        {/* AI Suggestion */}
        <div className="mt-16 p-6 bg-gradient-to-r from-[#1A1A1A] to-[#0D0F1F] rounded-xl border border-[#FFD700]/20">
          <div className="flex items-start">
            <div className="bg-[#FFD700]/10 p-3 rounded-full mr-4">
              <FilterIcon size={24} className="text-[#FFD700]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#FFD700] mb-2">
                AI-Powered Suggestion
              </h3>
              <p className="text-[#F5F5DC]/80 mb-4">
                Since you love poetry, explore authors like Gulzar, Rupi Kaur,
                and Pablo Neruda!
              </p>
              <div className="flex space-x-4">
                <button className="bg-[#FFD700]/10 hover:bg-[#FFD700]/20 text-[#FFD700] px-4 py-2 rounded-full text-sm transition-all duration-300 flex items-center">
                  <BookmarkIcon size={16} className="mr-2" />
                  <span>Save Suggestion</span>
                </button>
                <button className="bg-[#0F52BA]/20 hover:bg-[#0F52BA]/30 text-[#F5F5DC] px-4 py-2 rounded-full text-sm transition-all duration-300 flex items-center">
                  <PlusIcon size={16} className="mr-2" />
                  <span>Show More Like This</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
const FilterPill = ({
  label,
  value,
  activeFilter,
  setActiveFilter
}) => {
  const isActive = activeFilter === value;
  return <button className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${isActive ? 'bg-[#FFD700] text-[#0D0F1F] font-medium' : 'bg-[#1A1A1A] text-[#F5F5DC] hover:bg-[#1A1A1A]/80 border border-[#FFD700]/20'}`} onClick={() => setActiveFilter(value)}>
      {label}
    </button>;
};
const SortOption = ({
  icon,
  label,
  value,
  activeSort,
  setActiveSort
}) => {
  const isActive = activeSort === value;
  return <button className={`w-full flex items-center px-4 py-2 text-left hover:bg-[#FFD700]/10 transition-colors duration-200 ${isActive ? 'text-[#FFD700]' : 'text-[#F5F5DC]'}`} onClick={() => setActiveSort(value)}>
      <span className="mr-2">{icon}</span>
      <span>{label}</span>
    </button>;
};
const getSortLabel = sortValue => {
  switch (sortValue) {
    case 'trending':
      return 'Trending Now';
    case 'recent':
      return 'Recent Releases';
    case 'rated':
      return 'Highest Rated';
    case 'followed':
      return 'Most Followed';
    default:
      return 'Trending Now';
  }
};
// Sample data for authors
const authors = [{
  id: 1,
  name: 'Arundhati Roy',
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  genres: ['Fiction', 'Political'],
  notableBooks: ['The God of Small Things', 'The Ministry of Utmost Happiness'],
  awards: ['Man Booker Prize'],
  rating: 4.8
}, {
  id: 2,
  name: 'Amish Tripathi',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  genres: ['Mythology', 'Fiction'],
  notableBooks: ['The Immortals of Meluha', 'Scion of Ikshvaku'],
  awards: ['Raymond Crossword Book Award'],
  rating: 4.6
}, {
  id: 3,
  name: 'Jhumpa Lahiri',
  image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  genres: ['Fiction', 'Short Story'],
  notableBooks: ['Interpreter of Maladies', 'The Namesake'],
  awards: ['Pulitzer Prize', 'PEN/Hemingway Award'],
  rating: 4.9
}, {
  id: 4,
  name: 'Rabindranath Tagore',
  image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  genres: ['Poetry', 'Drama', 'Novel'],
  notableBooks: ['Gitanjali', 'The Home and the World'],
  awards: ['Nobel Prize in Literature'],
  rating: 4.9
}, {
  id: 5,
  name: 'Vikram Seth',
  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  genres: ['Fiction', 'Poetry'],
  notableBooks: ['A Suitable Boy', 'The Golden Gate'],
  awards: ['Sahitya Akademi Award', 'Padma Shri'],
  rating: 4.7
}, {
  id: 6,
  name: 'Chetan Bhagat',
  image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  genres: ['Fiction', 'Romance'],
  notableBooks: ['Five Point Someone', '2 States'],
  awards: ['Filmfare Award'],
  rating: 4.2
}, {
  id: 7,
  name: 'Sudha Murty',
  image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  genres: ['Fiction', "Children's Literature"],
  notableBooks: ['Wise and Otherwise', 'The Magic of the Lost Temple'],
  awards: ['Padma Shri', 'R.K. Narayan Award'],
  rating: 4.5
}, {
  id: 8,
  name: 'Ruskin Bond',
  image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  genres: ["Children's Literature", 'Fiction'],
  notableBooks: ['The Blue Umbrella', 'The Room on the Roof'],
  awards: ['Padma Shri', 'Padma Bhushan'],
  rating: 4.8
}];
export default AuthorDirectory;