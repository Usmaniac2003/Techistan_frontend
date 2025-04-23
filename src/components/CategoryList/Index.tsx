"use client"
import Typography from "@/general/Typography/Typography";
import { useRouter } from "next/navigation";

export default function CategoryList({categories}) {
  const router=useRouter();
  const RedirectToProductsByCategory=(category)=>{
    router.push(`/productsByCategory?q=${encodeURIComponent(category)}`)
  }
  return (
    <div className="Categories">
      {categories.map((category) => (
        <div key={category.id}>
          <Typography lineHeight={"loose"}>
            <div onClick={()=>RedirectToProductsByCategory(category.title)}>
              <Typography
                fontSize={"md"}
                lineHeight={"loose"}
                className="text-gray-600 hover:underline hover:text-black transition-all duration-300"
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
