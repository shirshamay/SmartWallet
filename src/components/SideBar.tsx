import {
  LayoutDashboard,
  ArrowLeftRight,
  ChartNoAxesCombined,
  HandCoins,
  CircleUserRound,
  Settings,
  Wallet,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import type { SideBarElement } from "../types/type";

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
  return (
    <div className="h-screen w-64 flex flex-col bg-white border-r border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-10">
        <Wallet className="w-10 h-10 text-blue-400" strokeWidth={1.2} />
        <span className="text-2xl font-bold text-center">
          Smart<span className="text-blue-400">Wallet</span>
        </span>
      </div>
      {elements.map((el) => (
        <NavLink
          key={el.label}
          to={el.path}
          end={el.path === "/"}
          className={({ isActive }) =>
            `flex items-center gap-3 p-2 rounded-lg transition-all ${
              isActive
                ? "bg-blue-50 text-blue-600"
                : "cursor-pointer group hover:bg-blue-50"
            }`
          }
        >
          {el.icon}
          <span className="text-gray-600 group-hover:text-blue-600 font-medium">
            {el.label}
          </span>
        </NavLink>
      ))}
    </div>
  );
};

export default SideBar;
