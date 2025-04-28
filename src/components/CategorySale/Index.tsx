import Typography from '@/general/Typography/Typography';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {CategorySalesProps  } from '@/types';


const CategorySalesBanner = ({
  title,
  saleEndDate,
  category,
  imageLink
}: CategorySalesProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const endDate = new Date(saleEndDate).getTime();
      const difference = endDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [saleEndDate]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageLink})` }}
      />
      
      <div className="relative flex h-full flex-col  justify-center bg-black/50 text-white">
      <Typography color={""} className='text-[#00FF66] mx-24' fontSize={"md"} weight={"bold"}>Categories</Typography>
        <div className="mx-24 my-16">
          <h2 className="mb-4 text-4xl font-light uppercase">Enhance Your</h2>
          <h1 className="mb-8 text-6xl font-bold uppercase">{title}</h1>
          
          <div className="my-12 flex gap-8 text-4xl font-bold">
          <div className="flex flex-col items-center justify-center h-[60px] w-[60px] text-black bg-white rounded-full">
              <span className='text-black text-sm font-extrabold'>{formatNumber(timeLeft.days)}</span>
              <span className="text-xs font-light">Days</span>
            </div>
            <div className="flex flex-col items-center justify-center h-[60px] w-[60px] text-black bg-white rounded-full">
              <span className='text-black text-sm font-extrabold'>{formatNumber(timeLeft.hours)}</span>
              <span className="text-xs font-light">Hours</span>
            </div>
            <div className="flex flex-col items-center justify-center h-[60px] w-[60px] text-black bg-white rounded-full">
              <span className='text-black text-sm font-extrabold'>{formatNumber(timeLeft.minutes)}</span>
              <span className="text-xs font-light">Minutes</span>
            </div>
            <div className="flex flex-col items-center justify-center h-[60px] w-[60px] text-black bg-white rounded-full">
              <span className='text-black text-sm font-extrabold'>{formatNumber(timeLeft.seconds)}</span>
              <span className="text-xs font-light">Seconds</span>
            </div>
          </div>

          <Link
            href={`/productsByCategory?category=${encodeURIComponent(category)}`}
            className="inline-block rounded-sm bg-[#00FF66] px-8 py-4 text-md font-bold uppercase transition-all hover:scale-105"
          >
            Buy Now!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategorySalesBanner;