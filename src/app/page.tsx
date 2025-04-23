import CategoryList from "@/components/CategoryList/Index";
import FlashSales from "@/components/FlashSalesTimer/Index";
import Product from "@/components/Product/Index";
import PromotionalSlider from "@/components/PromotionalSlider/Index";
import Typography from "@/general/Typography/Typography";
import ProductList from "@/components/ProductSlider/Index";
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
///Product Data
const ProductData={
  ProductImage:"https://images.unsplash.com/photo-1670535788272-ce692ddb7727?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  Title:"HAVIT HV-G92 GamePad",
  Discount:{availaible:true,Percentage:"0.4"},
  Price:160,
  colors:[{value:"#ffffff"},{value:"#000000"},{value:"#DD4444"}]
}
//ProductList
const ProductListData = [
  {
    ProductImage: "https://images.unsplash.com/photo-1670535788272-ce692ddb7727",
    Title: "HAVIT HV-G92 GamePad",
    Discount: { availaible: true, Percentage: 0.4 },
    Price: 160,
    colors: [
      { value: "#ffffff", name: "White" },
      { value: "#000000", name: "Black" },
      { value: "#DB4444", name: "Red" }
    ]
  },
  {
    ProductImage: "https://images.unsplash.com/photo-1622675363311-3e1904dc1885",
    Title: "Mechanical Gaming Keyboard",
    Discount: { availaible: true, Percentage: 0.3 },
    Price: 200,
    colors: [
      { value: "#2D2D2D", name: "Space Gray" },
      { value: "#C0C0C0", name: "Silver" },
      { value: "#964B00", name: "Brown" }
    ]
  },
  {
    ProductImage: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3",
    Title: "Wireless Gaming Headset",
    Discount: { availaible: false },
    Price: 299,
    colors: [
      { value: "#FF0000", name: "Racing Red" },
      { value: "#000080", name: "Navy Blue" },
      { value: "#FFFFFF", name: "Arctic White" }
    ]
  },
  {
    ProductImage: "https://images.unsplash.com/photo-1675151638960-fc1513f8021e",
    Title: "4K Gaming Monitor",
    Discount: { availaible: true, Percentage: 0.15 },
    Price: 899,
    colors: [
      { value: "#1A1A1A", name: "Matte Black" },
      { value: "#E5E5E5", name: "Platinum" }
    ]
  },
  {
    ProductImage: "https://images.unsplash.com/photo-1616296425622-4560a2ad83de",
    Title: "RGB Gaming Mouse",
    Discount: { availaible: true, Percentage: 0.25 },
    Price: 89,
    colors: [
      { value: "#00FF00", name: "Neon Green" },
      { value: "#FF69B4", name: "Hot Pink" },
      { value: "#000000", name: "Stealth Black" }
    ]
  },
  {
    ProductImage: "https://images.unsplash.com/photo-1707858057802-ab1227691ed5",
    Title: "Gaming Mouse Pad XL",
    Discount: { availaible: false,Percentage:0 },
    Price: 45,
    colors: [
      { value: "#800080", name: "Royal Purple" },
      { value: "#FFA500", name: "Vibrant Orange" },
      { value: "#0000FF", name: "Electric Blue" }
    ]
  },
  {
    ProductImage: "https://images.unsplash.com/photo-1592840331052-16e15c2c6f95",
    Title: "Ergonomic Gaming Chair",
    Discount: { availaible: true, Percentage: 0.2 },
    Price: 399,
    colors: [
      { value: "#964B00", name: "Classic Brown" },
      { value: "#808080", name: "Graphite" },
      { value: "#FFD700", name: "Gold" }
    ]
  },
  {
    ProductImage: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620",
    Title: "Gaming Laptop RTX 4080",
    Discount: { availaible: true, Percentage: 0.1 },
    Price: 2499,
    colors: [
      { value: "#A52A2A", name: "Mahogany" },
      { value: "#C0C0C0", name: "Metallic Silver" },
      { value: "#000000", name: "Onyx Black" }
    ]
  }
];
//Sales End Time
const saleEnds = "2025-05-01T00:00:00Z";

export default function Home() {
  return (
    <div className="Home">
     <section className="Promotion_and_Categories flex">
      <CategoryList categories={categories}></CategoryList>
      <div className="w-px bg-gray-300 mx-4 self-stretch" />
      <PromotionalSlider
        ImageList={ImageListData}
      />
      </section>
      <section className="Flash_Sales my-26">
        <div className="Today's flex items-center gap-4">
          <div className="w-4 h-8 bg-[#DD4444] rounded-sm"></div>
          <Typography fontSize={"sm"} weight={"bold"} color="" className="text-[#DD4444]">Today's</Typography>
        </div>
        <FlashSales targetDate={saleEnds} ></FlashSales>
        <ProductList products={ProductListData}></ProductList>
      </section>
    </div>
  );
}
