import { BellDot, ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";

const Header = () => {
  let location = useLocation()
  
  const titles: Record<string, string> = {
    "/": "Dashboard",
    "/investments": "Investments",
    "/transactions": "Transactions",
    "/profile": "My Profile",
    "/settings": "Settings",
  };
  let locationTitle = titles[location.pathname] || 'Dashboard';

  return (
    <header
      id="dashboard-frontBar"
      className="bg-white border-b border-gray-200 h-20 flex justify-between items-center px-4 sm:px-6 md:px-8 py-4"
    >
      <h1 className="text-xl md:text-2xl font-bold px-0 sm:px-2 ml-12">
        {locationTitle}
      </h1>
      <div className="flex items-center gap-3">
        <BellDot className="cursor-pointer" />
        <button
          className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold cursor-pointer"
          aria-label="User profile"
        >
          S
        </button>
        <div className="text-right hidden sm:block">
          <p className="text-sm font-semibold text-blue-950 leading-tight">
            Shir
          </p>
          <p className="text-xs text-gray-500">Admin</p>
        </div>
        <button aria-label="Click down">
          <ChevronDown size={16} className="text-gray-600 cursor-pointer" />
        </button>
      </div>
    </header>
  );
};

export default Header;
