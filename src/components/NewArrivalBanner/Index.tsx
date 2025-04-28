"use client";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Typography from "@/general/Typography/Typography";

interface NewArrivalItem {
  title: string;
  description: string;
  redirectLink: string;
  imageUrl: string;
}

interface NewArrivalsProps {
  items: NewArrivalItem[];
}

const NewArrivals = ({ items }: NewArrivalsProps) => {
  if (items.length !== 4) {
    throw new Error("Exactly 4 items are required for this layout");
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-6 h-[800px]">
        {/* Main Item (1) */}
        <div className="md:w-1/2 h-full relative rounded-xl overflow-hidden group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url(${items[0].imageUrl})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
            <div className="relative h-full flex flex-col justify-end p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">{items[0].title}</h3>
              <Typography color={"white"} weight={"light"} className="text-lg mb-6 max-w-md">{items[0].description}</Typography>
              <Link
                href={items[0].redirectLink}
                className="flex items-center gap-2 w-fit hover:gap-3 transition-all"
              >
                <span className="font-semibold">Shop Now</span>
                <ChevronRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Secondary Items Container (2, 3, 4) */}
        <div className="md:w-1/2 flex flex-col gap-6 h-full">
          {/* Item 2 */}
          <div className="h-1/2 relative rounded-xl overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url(${items[1].imageUrl})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
              <div className="relative h-full flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{items[1].title}</h3>
                <Typography color={"white"} weight={"light"}  className="text-base mb-4 max-w-md">{items[1].description}</Typography>
                <Link
                  href={items[1].redirectLink}
                  className="flex items-center gap-2 w-fit hover:gap-3 transition-all"
                >
                  <span className="font-semibold">Shop Now</span>
                  <ChevronRightIcon className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Items 3 & 4 Container */}
          <div className="h-1/2 flex flex-col md:flex-row gap-6">
            {/* Item 3 */}
            <div className="md:w-1/2 h-full relative rounded-xl overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${items[2].imageUrl})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
                <div className="relative h-full flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{items[2].title}</h3>
                  <Typography color={"white"} weight={"light"}  className="text-sm mb-4">{items[2].description}</Typography>
                  <Link
                    href={items[2].redirectLink}
                    className="flex items-center gap-2 w-fit hover:gap-3 transition-all"
                  >
                    <span className="font-semibold text-sm">Shop Now</span>
                    <ChevronRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="md:w-1/2 h-full relative rounded-xl overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${items[3].imageUrl})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
                <div className="relative h-full flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{items[3].title}</h3>
                  <Typography color={"white"} weight={"light"}  className="text-sm mb-4">{items[3].description}</Typography>
                  <Link
                    href={items[3].redirectLink}
                    className="flex items-center gap-2 w-fit hover:gap-3 transition-all"
                  >
                    <span className="font-semibold text-sm">Shop Now</span>
                    <ChevronRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;