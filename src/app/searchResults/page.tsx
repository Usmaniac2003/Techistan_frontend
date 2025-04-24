"use client"
import PageWrapper from '@/general/PageChangeAnimation/Index';
import { useSearchParams } from 'next/navigation';

export default function SearchResults() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('q') || '';

  return (
    <PageWrapper>
    <div>
      <h1>Search Results for: {decodeURIComponent(searchQuery)}</h1>
      {/* Display search results here */}
    </div>
    </PageWrapper>
  );
}
