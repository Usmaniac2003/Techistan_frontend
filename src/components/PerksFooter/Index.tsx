import {
  TruckIcon,
  CurrencyDollarIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";
import Typography from "@/general/Typography/Typography";

export default function PerksFooter() {
  return (
    <div className="PerksFooter flex items-center justify-between mx-24">
      {/* Fast Delivery */}
      <div className="perk flex flex-col items-center justify-between gap-2">
        <div className="border-gray-300 border-8 rounded-full">
          <TruckIcon className="w-10 h-10 p-2 bg-black text-white  rounded-full" />
        </div>{" "}
        <Typography weight="bold">FREE AND FAST DELIVERY</Typography>
        <Typography weight="light">
          Free delivery for all orders over $140
        </Typography>
      </div>

      {/* Customer Service */}
      <div className="perk flex flex-col items-center justify-between gap-2">
        <div className="border-gray-300 border-8 rounded-full">
          <LifebuoyIcon className="w-10 h-10 p-2 bg-black text-white  rounded-full" />
        </div>
        <Typography weight="bold">24/7 CUSTOMER SERVICE</Typography>
        <Typography weight="light">Friendly 24/7 customer support</Typography>
      </div>

      {/* Money Back Guarantee */}
      <div className="perk flex flex-col items-center justify-between gap-2">
        <div className="border-gray-300 border-8 rounded-full">
          <CurrencyDollarIcon className="w-10 h-10 p-2 bg-black text-white  rounded-full" />
        </div>
        <Typography weight="bold">MONEY BACK GUARANTEE</Typography>
        <Typography weight="light">We return money within 30 days</Typography>
      </div>
    </div>
  );
}
