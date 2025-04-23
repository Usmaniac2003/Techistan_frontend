"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, FC } from 'react';

const SearchBar: FC = () => {
  const router=useRouter();
  const [query, setQuery] = useState<string>('');
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search query:', query);
    const encodedQuery = encodeURIComponent(query);
    router.push(`/searchResults?q=${encodedQuery}`);
  };

  return (
    <form onSubmit={handleSearch} className="w-sm max-w-md mx-auto">
      <div className="relative flex items-center bg-[#F5F5F5] rounded-lg">
        <input
          type="text"
          placeholder="What are you looking for?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-3 py-2 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none rounded-lg text-base"
        />
        <button
          type="submit"
          className="absolute right-2 p-2 hover:bg-gray-200 rounded-full transition-colors"
          aria-label="Search"
        >
          <Image
            src="/svgs/searchIcon.svg"
            alt="Search icon"
            width={24}
            height={24}
            className="h-6 w-6 text-gray-600"
          />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;