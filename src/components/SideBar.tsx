import {
  LayoutDashboard,
  ArrowLeftRight,
  ChartNoAxesCombined,
  HandCoins,
  CircleUserRound,
  Settings,
  Wallet,
  Menu,
  X,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import type { SideBarElement } from "../types/type";
import { useState, useEffect } from "react";

let elements: SideBarElement[] = [
  {
    label: "Dashboard",
    icon: <LayoutDashboard className="text-gray-500" strokeWidth={1.2} />,
    path: "/",
  },
  {
    label: "Transactions",
    icon: <ArrowLeftRight className="text-gray-500" strokeWidth={1.2} />,
    path: "/transactions",
  },
  {
    label: "Investments",
    icon: <ChartNoAxesCombined className="text-gray-500" strokeWidth={1.2} />,
    path: "/investments",
  },
  {
    label: "Savings Tips",
    icon: <HandCoins className="text-gray-500" strokeWidth={1.2} />,
    path: "/savings",
  },
  {
    label: "Profile",
    icon: <CircleUserRound className="text-gray-500" strokeWidth={1.2} />,
    path: "/profile",
  },
  {
    label: "Settings",
    icon: <Settings className="text-gray-500" strokeWidth={1.2} />,
    path: "/settings",
  },
];

const SideBar = () => {
  // usestate for the humburger menu
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close drawer when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md md:hidden"
      >
        {isOpen ? <X /> : <Menu />}
      </button>
      <div
        className={`
        fixed inset-y-0 left-0 z-40 w-full sm:w-60 md:w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:relative md:translate-x-0 md:flex md:flex-col 
      `}
      >
        <div className="h-screen w-full md:w-64 flex flex-col bg-white border-r border-gray-200 p-6">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-10">
            <Wallet
              className="w-10 h-10 text-blue-400 shrink-0"
              strokeWidth={1.2}
            />
            <span className="text-2xl font-bold text-center">
              Smart<span className="text-blue-400">Wallet</span>
            </span>
          </div>
          <nav className="flex flex-col gap-2">
            {elements.map((el) => (
              <NavLink
                key={el.label}
                to={el.path}
                end={el.path === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-center md:justify-start gap-3 p-3 md:p-2 rounded-lg transition-all ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "cursor-pointer group hover:bg-blue-50"
                  }`
                }
              >
                <span className="shrink-0">{el.icon}</span>{" "}
                <span className="text-gray-600 group-hover:text-blue-600 font-medium">
                  {el.label}
                </span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default SideBar;
