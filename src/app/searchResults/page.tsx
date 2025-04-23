"use client"
import { useSearchParams } from 'next/navigation';

export default function SearchResults() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('q') || '';

  return (
    <div>
      <h1>Search Results for: {decodeURIComponent(searchQuery)}</h1>
      {/* Display search results here */}
    </div>
  );
}
