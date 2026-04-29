import {
  Utensils,
  BriefcaseBusiness,
  House,
  MonitorPlay,
  ShoppingBag,
  Fuel
} from "lucide-react";

export let categoryIcons: Record<string, React.ReactNode> = {
  Restaurant: (
    <div className="flex items-center justify-center w-7 h-7 bg-red-200 rounded-full mr-3 border border-gray-300">
      <Utensils className=" w-5 h-5 rounded-b-md" />
    </div>
  ),
  Work: (
    <div className="flex items-center justify-center w-7 h-7 bg-blue-200 rounded-full mr-3 border border-gray-300">
      <BriefcaseBusiness className=" w-5 h-5 rounded-md" />
    </div>
  ),
  Rent: (
    <div className="flex items-center justify-center w-7 h-7 bg-green-200 rounded-full mr-3 border border-gray-300">
      <House className=" w-5 h-5 rounded-md" />
    </div>
  ),
  TV: (
    <div className="flex items-center justify-center w-7 h-7 bg-amber-200 rounded-full mr-3 border border-gray-300">
      <MonitorPlay className=" w-5 h-5 rounded-md" />
    </div>
  ),
  Shopping: (
    <div className="flex items-center justify-center w-7 h-7 bg-pink-200 rounded-full mr-3 border border-gray-300">
      <ShoppingBag className=" w-5 h-5 rounded-md" />
    </div>
  ),
  Fuel: (
    <div className="flex items-center justify-center w-7 h-7 bg-gray-200 rounded-full mr-3 border border-gray-300">
      <Fuel className=" w-5 h-5 rounded-md" />
    </div>
  ),
};
