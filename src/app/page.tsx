"use client";
import CategoryList from "@/components/CategoryList/Index";
import FlashSales from "@/components/FlashSalesTimer/Index";
import PromotionalSlider from "@/components/PromotionalSlider/Index";
import Typography from "@/general/Typography/Typography";
import ProductList from "@/components/ProductSlider/Index";
import PageWrapper from "@/general/PageChangeAnimation/Index";
import Button from "@/components/Button/Index";
import { useRouter } from "next/navigation";
import BrowseByCategory from "@/components/BrowseByCategorySlider/Index";
import {
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  CpuChipIcon,
  CommandLineIcon,
  ServerStackIcon,
  HomeModernIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import CategorySalesSlider from "@/components/CategorySalesSlider/Index";
import ProductGridSlider from "@/components/ProductGridSlider/Index";

//Initial Data
//Image List
const ImageListData = [
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
];
//Categories List
const categories = [
  {
    id: "1",
    title: "Laptops & Computers",
    icon: ComputerDesktopIcon,
  },
  {
    id: "2",
    title: "SmartPhones & Tablets",
    icon: DevicePhoneMobileIcon,
  },
  {
    id: "3",
    title: "PC Components",
    icon: CpuChipIcon,
  },
  {
    id: "4",
    title: "Gaming & Accessories",
    icon: CommandLineIcon, // Alternative: Game controller icon from another library
  },
  {
    id: "5",
    title: "Audio & Wearables",
    icon: CommandLineIcon, // Could combine with WatchIcon for wearables
  },
  {
    id: "6",
    title: "Networking and Storage",
    icon: ServerStackIcon, // Use SignalIcon for pure networking
  },
  {
    id: "7",
    title: "Peripherals & Accessories",
    icon: CommandLineIcon, // Could alternate with MouseIcon
  },
  {
    id: "8",
    title: "Smart Homes & IOT Devices",
    icon: HomeModernIcon, // Combine with SignalIcon for connectivity
  },
  {
    id: "9",
    title: "DIY & Robotics",
    icon: WrenchScrewdriverIcon,
  },
  {
    id: "10",
    title: "Peripherals & Accessories",
    icon: CommandLineIcon, // Could alternate with MouseIcon
  },
  {
    id: "11",
    title: "Smart Homes & IOT Devices",
    icon: HomeModernIcon, // Combine with SignalIcon for connectivity
  },
  {
    id: "12",
    title: "DIY & Robotics",
    icon: WrenchScrewdriverIcon,
  },
  {
    id: "13",
    title: "DIY & Robotics",
    icon: WrenchScrewdriverIcon,
  },
  {
    id: "14",
    title: "Peripherals & Accessories",
    icon: CommandLineIcon, // Could alternate with MouseIcon
  },
  {
    id: "15",
    title: "Smart Homes & IOT Devices",
    icon: HomeModernIcon, // Combine with SignalIcon for connectivity
  },
  {
    id: "16",
    title: "DIY & Robotics",
    icon: WrenchScrewdriverIcon,
  },
];

//ProductList
const ProductListData = [
  {
    ProductImage:
      "https://images.unsplash.com/photo-1670535788272-ce692ddb7727",
    Title: "HAVIT HV-G92 GamePad",
    Discount: { availaible: true, Percentage: 0.4 },
    Price: 160,
    colors: [
      { value: "#ffffff", name: "White" },
      { value: "#000000", name: "Black" },
      { value: "#DB4444", name: "Red" },
    ],
  },
  {
    ProductImage:
      "https://images.unsplash.com/photo-1622675363311-3e1904dc1885",
    Title: "Mechanical Gaming Keyboard",
    Discount: { availaible: true, Percentage: 0.3 },
    Price: 200,
    colors: [
      { value: "#2D2D2D", name: "Space Gray" },
      { value: "#C0C0C0", name: "Silver" },
      { value: "#964B00", name: "Brown" },
    ],
  },
  {
    ProductImage:
      "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3",
    Title: "Wireless Gaming Headset",
    Discount: { availaible: false },
    Price: 299,
    colors: [
      { value: "#FF0000", name: "Racing Red" },
      { value: "#000080", name: "Navy Blue" },
      { value: "#FFFFFF", name: "Arctic White" },
    ],
  },
  {
    ProductImage:
      "https://images.unsplash.com/photo-1675151638960-fc1513f8021e",
    Title: "4K Gaming Monitor",
    Discount: { availaible: true, Percentage: 0.15 },
    Price: 899,
    colors: [
      { value: "#1A1A1A", name: "Matte Black" },
      { value: "#E5E5E5", name: "Platinum" },
    ],
  },
  {
    ProductImage:
      "https://images.unsplash.com/photo-1616296425622-4560a2ad83de",
    Title: "RGB Gaming Mouse",
    Discount: { availaible: true, Percentage: 0.25 },
    Price: 89,
    colors: [
      { value: "#00FF00", name: "Neon Green" },
      { value: "#FF69B4", name: "Hot Pink" },
      { value: "#000000", name: "Stealth Black" },
    ],
  },
  {
    ProductImage:
      "https://images.unsplash.com/photo-1707858057802-ab1227691ed5",
    Title: "Gaming Mouse Pad XL",
    Discount: { availaible: false, Percentage: 0 },
    Price: 45,
    colors: [
      { value: "#800080", name: "Royal Purple" },
      { value: "#FFA500", name: "Vibrant Orange" },
      { value: "#0000FF", name: "Electric Blue" },
    ],
  },
  {
    ProductImage:
      "https://images.unsplash.com/photo-1592840331052-16e15c2c6f95",
    Title: "Ergonomic Gaming Chair",
    Discount: { availaible: true, Percentage: 0.2 },
    Price: 399,
    colors: [
      { value: "#964B00", name: "Classic Brown" },
      { value: "#808080", name: "Graphite" },
      { value: "#FFD700", name: "Gold" },
    ],
  },
  {
    ProductImage:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620",
    Title: "Gaming Laptop RTX 4080",
    Discount: { availaible: true, Percentage: 0.1 },
    Price: 2499,
    colors: [
      { value: "#A52A2A", name: "Mahogany" },
      { value: "#C0C0C0", name: "Metallic Silver" },
      { value: "#000000", name: "Onyx Black" },
    ],
  },
];
//ProductList
const BestSellingProductListData = [
  {
    ProductImage:
      "https://images.unsplash.com/photo-1670535788272-ce692ddb7727",
    Title: "HAVIT HV-G92 GamePad",
    Discount: { availaible: true, Percentage: 0.4 },
    Price: 160,
    colors: [
      { value: "#ffffff", name: "White" },
      { value: "#000000", name: "Black" },
      { value: "#DB4444", name: "Red" },
    ],
  },
  {
    ProductImage:
      "https://images.unsplash.com/photo-1622675363311-3e1904dc1885",
    Title: "Mechanical Gaming Keyboard",
    Discount: { availaible: true, Percentage: 0.3 },
    Price: 200,
    colors: [
      { value: "#2D2D2D", name: "Space Gray" },
      { value: "#C0C0C0", name: "Silver" },
      { value: "#964B00", name: "Brown" },
    ],
  },
  {
    ProductImage:
      "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3",
    Title: "Wireless Gaming Headset",
    Discount: { availaible: false },
    Price: 299,
    colors: [
      { value: "#FF0000", name: "Racing Red" },
      { value: "#000080", name: "Navy Blue" },
      { value: "#FFFFFF", name: "Arctic White" },
    ],
  },
  {
    ProductImage:
      "https://images.unsplash.com/photo-1675151638960-fc1513f8021e",
    Title: "4K Gaming Monitor",
    Discount: { availaible: true, Percentage: 0.15 },
    Price: 899,
    colors: [
      { value: "#1A1A1A", name: "Matte Black" },
      { value: "#E5E5E5", name: "Platinum" },
    ],
  },
  {
    ProductImage:
      "https://images.unsplash.com/photo-1616296425622-4560a2ad83de",
    Title: "RGB Gaming Mouse",
    Discount: { availaible: true, Percentage: 0.25 },
    Price: 89,
    colors: [
      { value: "#00FF00", name: "Neon Green" },
      { value: "#FF69B4", name: "Hot Pink" },
      { value: "#000000", name: "Stealth Black" },
    ],
  },
  {
    ProductImage:
      "https://images.unsplash.com/photo-1707858057802-ab1227691ed5",
    Title: "Gaming Mouse Pad XL",
    Discount: { availaible: false, Percentage: 0 },
    Price: 45,
    colors: [
      { value: "#800080", name: "Royal Purple" },
      { value: "#FFA500", name: "Vibrant Orange" },
      { value: "#0000FF", name: "Electric Blue" },
    ],
  },
  {
    ProductImage:
      "https://images.unsplash.com/photo-1592840331052-16e15c2c6f95",
    Title: "Ergonomic Gaming Chair",
    Discount: { availaible: true, Percentage: 0.2 },
    Price: 399,
    colors: [
      { value: "#964B00", name: "Classic Brown" },
      { value: "#808080", name: "Graphite" },
      { value: "#FFD700", name: "Gold" },
    ],
  },
  {
    ProductImage:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620",
    Title: "Gaming Laptop RTX 4080",
    Discount: { availaible: true, Percentage: 0.1 },
    Price: 2499,
    colors: [
      { value: "#A52A2A", name: "Mahogany" },
      { value: "#C0C0C0", name: "Metallic Silver" },
      { value: "#000000", name: "Onyx Black" },
    ],
  },
];
//Sales End Time
const saleEnds = "2025-05-01T00:00:00Z";
//Category Sales Data
const CategorySalesData=[
  {
    category:"Laptops & Computers",
    title: "Music Experience",
    saleEndDate: new Date('2027-12-31'),
    redirectLink: "/music-products",
    imageLink: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
  },
  {
    
    category:"SmartPhones & Tablets",
    title: "Gaming Gear",
    saleEndDate: new Date('2026-11-30'),
    redirectLink: "/gaming-products",
    imageLink: "https://images.unsplash.com/photo-1589254065878-42c9da997008"
  },

]
//Explore Our Products
const ExploreOurProductsData = [
  {
    ProductImage:
      "https://images.unsplash.com/photo-1670535788272-ce692ddb7727",
    Title: "HAVIT HV-G92 GamePad",
    Discount: { availaible: true, Percentage: 0.4 },
    Price: 160,
    colors: [
      { value: "#ffffff", name: "White" },
      { value: "#000000", name: "Black" },
      { value: "#DB4444", name: "Red" },
    ],
  },
  {
    ProductImage:
      "https://images.unsplash.com/photo-1622675363311-3e1904dc1885",
    Title: "Mechanical Gaming Keyboard",
    Discount: { availaible: true, Percentage: 0.3 },
    Price: 200,
    colors: [
      { value: "#2D2D2D", name: "Space Gray" },
      { value: "#C0C0C0", name: "Silver" },
      { value: "#964B00", name: "Brown" },
    ],
  },
  {
    ProductImage:
      "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3",
    Title: "Wireless Gaming Headset",
    Discount: { availaible: false },
    Price: 299,
    colors: [
      { value: "#FF0000", name: "Racing Red" },
      { value: "#000080", name: "Navy Blue" },
      { value: "#FFFFFF", name: "Arctic White" },
    ],
  },
  {
    ProductImage:
      "https://images.unsplash.com/photo-1675151638960-fc1513f8021e",
    Title: "4K Gaming Monitor",
    Discount: { availaible: true, Percentage: 0.15 },
    Price: 899,
    colors: [
      { value: "#1A1A1A", name: "Matte Black" },
      { value: "#E5E5E5", name: "Platinum" },
    ],
  },
  {
    ProductImage:
      "https://images.unsplash.com/photo-1616296425622-4560a2ad83de",
    Title: "RGB Gaming Mouse",
    Discount: { availaible: true, Percentage: 0.25 },
    Price: 89,
    colors: [
      { value: "#00FF00", name: "Neon Green" },
      { value: "#FF69B4", name: "Hot Pink" },
      { value: "#000000", name: "Stealth Black" },
    ],
  },
  {
    ProductImage:
      "https://images.unsplash.com/photo-1707858057802-ab1227691ed5",
    Title: "Gaming Mouse Pad XL",
    Discount: { availaible: false, Percentage: 0 },
    Price: 45,
    colors: [
      { value: "#800080", name: "Royal Purple" },
      { value: "#FFA500", name: "Vibrant Orange" },
      { value: "#0000FF", name: "Electric Blue" },
    ],
  },
  {
    ProductImage:
      "https://images.unsplash.com/photo-1592840331052-16e15c2c6f95",
    Title: "Ergonomic Gaming Chair",
    Discount: { availaible: true, Percentage: 0.2 },
    Price: 399,
    colors: [
      { value: "#964B00", name: "Classic Brown" },
      { value: "#808080", name: "Graphite" },
      { value: "#FFD700", name: "Gold" },
    ],
  },
  {
    ProductImage:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620",
    Title: "Gaming Laptop RTX 4080",
    Discount: { availaible: true, Percentage: 0.1 },
    Price: 2499,
    colors: [
      { value: "#A52A2A", name: "Mahogany" },
      { value: "#C0C0C0", name: "Metallic Silver" },
      { value: "#000000", name: "Onyx Black" },
    ],
  },
  {
    ProductImage:
      "https://images.unsplash.com/photo-1670535788272-ce692ddb7727",
    Title: "HAVIT HV-G92 GamePad",
    Discount: { availaible: true, Percentage: 0.4 },
    Price: 160,
    colors: [
      { value: "#ffffff", name: "White" },
      { value: "#000000", name: "Black" },
      { value: "#DB4444", name: "Red" },
    ],
  },
  {
    ProductImage:
      "https://images.unsplash.com/photo-1622675363311-3e1904dc1885",
    Title: "Mechanical Gaming Keyboard",
    Discount: { availaible: true, Percentage: 0.3 },
    Price: 200,
    colors: [
      { value: "#2D2D2D", name: "Space Gray" },
      { value: "#C0C0C0", name: "Silver" },
      { value: "#964B00", name: "Brown" },
    ],
  },
  {
    ProductImage:
      "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3",
    Title: "Wireless Gaming Headset",
    Discount: { availaible: false },
    Price: 299,
    colors: [
      { value: "#FF0000", name: "Racing Red" },
      { value: "#000080", name: "Navy Blue" },
      { value: "#FFFFFF", name: "Arctic White" },
    ],
  },
  {
    ProductImage:
      "https://images.unsplash.com/photo-1675151638960-fc1513f8021e",
    Title: "4K Gaming Monitor",
    Discount: { availaible: true, Percentage: 0.15 },
    Price: 899,
    colors: [
      { value: "#1A1A1A", name: "Matte Black" },
      { value: "#E5E5E5", name: "Platinum" },
    ],
  },
  {
    ProductImage:
      "https://images.unsplash.com/photo-1616296425622-4560a2ad83de",
    Title: "RGB Gaming Mouse",
    Discount: { availaible: true, Percentage: 0.25 },
    Price: 89,
    colors: [
      { value: "#00FF00", name: "Neon Green" },
      { value: "#FF69B4", name: "Hot Pink" },
      { value: "#000000", name: "Stealth Black" },
    ],
  },
  {
    ProductImage:
      "https://images.unsplash.com/photo-1707858057802-ab1227691ed5",
    Title: "Gaming Mouse Pad XL",
    Discount: { availaible: false, Percentage: 0 },
    Price: 45,
    colors: [
      { value: "#800080", name: "Royal Purple" },
      { value: "#FFA500", name: "Vibrant Orange" },
      { value: "#0000FF", name: "Electric Blue" },
    ],
  },
  {
    ProductImage:
      "https://images.unsplash.com/photo-1592840331052-16e15c2c6f95",
    Title: "Ergonomic Gaming Chair",
    Discount: { availaible: true, Percentage: 0.2 },
    Price: 399,
    colors: [
      { value: "#964B00", name: "Classic Brown" },
      { value: "#808080", name: "Graphite" },
      { value: "#FFD700", name: "Gold" },
    ],
  },
  {
    ProductImage:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620",
    Title: "Gaming Laptop RTX 4080",
    Discount: { availaible: true, Percentage: 0.1 },
    Price: 2499,
    colors: [
      { value: "#A52A2A", name: "Mahogany" },
      { value: "#C0C0C0", name: "Metallic Silver" },
      { value: "#000000", name: "Onyx Black" },
    ],
  },
];
//View All Products Button Function
export default function Home() {
  const router = useRouter();
  const ViewAllProducts = () => {
    router.push("/products");
  };
  return (
    <PageWrapper>
      <div className="Home">
        <section className="Promotion_and_Categories flex">
          <CategoryList categories={categories}></CategoryList>
          <div className="w-px bg-gray-300 mx-4 self-stretch" />
          <PromotionalSlider ImageList={ImageListData} />
        </section>
        <section className="Flash_Sales my-24">
          <div className="Today's flex items-center gap-4">
            <div className="w-4 h-8 bg-[#DD4444] rounded-sm"></div>
            <Typography
              fontSize={"sm"}
              weight={"bold"}
              color=""
              className="text-[#DD4444]"
            >
              Today&apos;s
            </Typography>
          </div>

          <FlashSales targetDate={saleEnds}></FlashSales>
          <ProductList products={ProductListData}></ProductList>
          <div className="button flex justify-center mt-6">
            <Button
              title={"View All Products"}
              onClick={ViewAllProducts}
            ></Button>
          </div>
        </section>
        <div className="border-t border-gray-300 my-2"></div>
        <section className="Browse_By_Category my-16">
          <div className="Categories flex items-center gap-4">
            <div className="w-4 h-8 bg-[#DD4444] rounded-sm"></div>
            <Typography
              fontSize={"sm"}
              weight={"bold"}
              color=""
              className="text-[#DD4444]"
            >
              Categories
            </Typography>
          </div>
          <Typography fontSize="xxl" weight="bold" className="my-4">
            Browse By Categories
          </Typography>
          <BrowseByCategory categories={categories}></BrowseByCategory>
        </section>
        <div className="border-t border-gray-300 my-2"></div>
        <section className="Best_Selling_Products my-16">
          <div className="Categories flex items-center gap-4">
            <div className="w-4 h-8 bg-[#DD4444] rounded-sm"></div>
            <Typography
              fontSize={"sm"}
              weight={"bold"}
              color=""
              className="text-[#DD4444]"
            >
              This month
            </Typography>
          </div>
          <Typography fontSize="xxl" weight="bold" className="my-6">
            Best Selling Products
          </Typography>
          <ProductList products={BestSellingProductListData}></ProductList>
        </section>
        <section className="Categories_Sale my-16">
        <CategorySalesSlider
  autoSlideInterval={8000} // Optional, defaults to 5000ms
  slides={CategorySalesData}
/>
        </section>
        <section className="Explore_Our_Products">
        <div className="Our Products flex items-center gap-4">
            <div className="w-4 h-8 bg-[#DD4444] rounded-sm"></div>
            <Typography
              fontSize={"sm"}
              weight={"bold"}
              color=""
              className="text-[#DD4444]"
            >
              Our Products
            </Typography>
          </div>
          <Typography fontSize="xxl" weight="bold" className="my-6">
            Explore Our Products
          </Typography>
          <ProductGridSlider products={ExploreOurProductsData}></ProductGridSlider>
        </section>
      </div>
    </PageWrapper>
  );
}
