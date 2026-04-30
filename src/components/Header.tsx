import { BellDot, ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <div
      id="dashboard-frontBar"
      className="bg-white border-b border-gray-200 h-20 flex justify-between items-center px-4 sm:px-6 md:px-8 py-4"
    >
      <h1 className="text-xl sm:text-2xl font-bold px-0 sm:px-2">Dashboard</h1>
      <div className="flex items-center gap-3">
        <BellDot className="cursor-pointer" />
        <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold cursor-pointer">
          S
        </div>
        <div className="text-right hidden sm:block">
          <p className="text-sm font-semibold text-blue-950 leading-tight">
            Shir
          </p>
          <p className="text-xs text-gray-500">Admin</p>
        </div>
        <ChevronDown size={16} className="text-gray-400 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
