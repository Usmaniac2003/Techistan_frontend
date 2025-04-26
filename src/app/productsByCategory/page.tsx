"use client"
import PageWrapper from '@/general/PageChangeAnimation/Index';
import { useSearchParams } from 'next/navigation';

export default function ProductsByCategory() {
   const searchParams = useSearchParams();
    const searchQuery = searchParams.get('category') || '';
  return (
    <>
    <PageWrapper>
    <div className="font-extrabold">ProductsByCategory</div>
    <h1>Product Results for Category: {decodeURIComponent(searchQuery)}</h1>
    </PageWrapper>
    </>
    
  );
}
