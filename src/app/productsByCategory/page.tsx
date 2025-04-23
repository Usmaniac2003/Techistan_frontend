"use client"
import { useSearchParams } from 'next/navigation';

export default function ProductsByCategory() {
   const searchParams = useSearchParams();
    const searchQuery = searchParams.get('q') || '';
  return (
    <>
    <div className="font-extrabold">ProductsByCategory</div>
    <h1>Product Results for Category: {decodeURIComponent(searchQuery)}</h1>
    </>
    
  );
}
