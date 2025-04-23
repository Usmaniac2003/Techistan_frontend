"use client"
import { HeartIcon, EyeIcon } from "@heroicons/react/24/outline";
import Typography from "@/general/Typography/Typography";
import Image from "next/image";
import { useState } from "react";

export default function Product({ ProductImage, Title, Discount, Price, colors }) {
  const [selectedColor, setSelectedColor] = useState(colors[0]?.value);

  return (
    <div className="group relative w-72 overflow-hidden rounded-lg ">
      {/* Image Container */}
      <div className="relative h-64 w-72 overflow-hidden">
        {/* Image Wrapper */}
        <div className="relative h-full w-full transition-transform duration-300 group-hover:scale-105">
          <Image
            src={`${ProductImage}`}
            alt={`${Title}`}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover"
            priority
          />
        </div>

        {/* Top Right Icons */}
        <div className="absolute right-2 top-2 flex flex-col gap-2">
          <button className="rounded-full bg-white p-2 shadow-md transition-all hover:bg-gray-100">
            <HeartIcon className="h-5 w-5 text-gray-700" />
          </button>
          <button className="rounded-full bg-white p-2 shadow-md transition-all hover:bg-gray-100">
            <EyeIcon className="h-5 w-5 text-gray-700" />
          </button>
        </div>

        {/* Discount Badge */}
        {Discount.availaible && (
          <div className="absolute left-2 top-2 rounded bg-[#DB4444] px-2 py-1">
            <Typography fontSize="xsm" className="text-white">
              -{Discount.Percentage * 100}%
            </Typography>
          </div>
        )}

        {/* Add to Cart Button */}
        <button className="absolute bottom-0 left-0 w-full translate-y-full bg-black/90 py-3 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Typography fontSize="sm" weight="medium" color={"#fff"}>
            Add to Cart
          </Typography>
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <Typography fontSize="sm" weight="semibold" className="mb-2">
          {Title}
        </Typography>

        {/* Price Section */}
        <div className="mb-3 flex items-center gap-2">
          <Typography
            fontSize="sm"
            weight="bold"
            color={""}
            className="text-[#DB4444]"
          >
            ${(Price - Price * (Discount?.Percentage || 0)).toFixed(2)}
          </Typography>
          {Discount && (
            <Typography
              fontSize="sm"
              weight="semibold"
              color={""}
              className="text-gray-500 line-through"
            >
              ${Price.toFixed(2)}
            </Typography>
          )}
        </div>

        {/* Color Selection */}
        {colors?.length > 0 && (
          <div className="flex gap-2">
            {colors.map((color) => (
              <button
                key={color.value}
                onClick={() => setSelectedColor(color.value)}
                className={`h-4 w-4 rounded-full border-2 transition-all ${
                  selectedColor === color.value
                    ? "border-black ring-2 ring-black"
                    : "border-gray-200 hover:scale-110"
                }`}
                style={{ backgroundColor: color.value }}
                aria-label={`Select ${color.name} color`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}