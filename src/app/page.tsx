import CategoryList from "@/components/CategoryList/Index";
import PromotionalSlider from "@/components/PromotionalSlider/Index";
//Initial Data
//Image List
const ImageListData=[
  // Modern laptop setup
  "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",

  // Circuit board closeup
  "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",

  // Coding workspace
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",

  // VR headset user
  "https://images.unsplash.com/photo-1589254065878-42c9da997008",

  // Server room
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",

  // Robotics arm
  "https://images.unsplash.com/photo-1593508512255-86ab42a8e620",
]
//Categories List
const categories = [
  { id: "1", title: "Laptops & Computers" },
  { id: "2", title: "SmartPhones & Tablets" },
  { id: "3", title: "PC Components" },
  { id: "4", title: "Gaming & Accessories" },
  { id: "5", title: "Audio & Wearables" },
  { id: "6", title: "Networking and Storage" },
  { id: "7", title: "Peripherals & Accessories" },
  { id: "8", title: "Smart Homes & IOT Devices" },
  { id: "9", title: "DIY & Robotics" }
];
export default function Home() {
  return (
    <div className="flex">
      <CategoryList categories={categories}></CategoryList>
      <div className="w-px bg-gray-300 mx-4 self-stretch" />
      <PromotionalSlider
        ImageList={ImageListData}
      />
    </div>
  );
}
