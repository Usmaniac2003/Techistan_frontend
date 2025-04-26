"use client";
import Typography from "@/general/Typography/Typography";
import { useRouter } from "next/navigation";

export default function CategoryList({ categories }) {
  const router = useRouter();
  
  const RedirectToProductsByCategory = (category) => {
    router.push(`/productsByCategory?category=${encodeURIComponent(category)}`);
  };

  return (
    <div className="max-h-96 overflow-y-auto scrollbar-thin px-4 py-2 space-y-2">
      {categories.map((category) => (
        <div key={category.id} className="hover:bg-gray-50 rounded-md p-2 transition-colors">
          <Typography lineHeight="loose">
            <div onClick={() => RedirectToProductsByCategory(category.title)}>
              <Typography
                fontSize="md"
                lineHeight="loose"
                className="text-gray-600 hover:underline hover:text-black transition-all duration-300 cursor-pointer"
              >
                {category.title}
              </Typography>
            </div>
          </Typography>
        </div>
      ))}
    </div>
  );
}