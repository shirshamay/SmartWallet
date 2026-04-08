import { LayoutDashboard, ArrowLeftRight, ChartNoAxesCombined, HandCoins, CircleUserRound, Settings, Wallet } from 'lucide-react';
import type { SideBarElement } from '../types/type';


let elements: SideBarElement[] = [
  {
    label: "Dashboard",
    icon: <LayoutDashboard className="text-gray-500" strokeWidth={1.2} />,
  },
  {
    label: "Transactions",
    icon: <ArrowLeftRight className="text-gray-500" strokeWidth={1.2} />,
  },
  {
    label: "Investments",
    icon: <ChartNoAxesCombined className="text-gray-500" strokeWidth={1.2} />,
  },
  {
    label: "Savings Tips",
    icon: <HandCoins className="text-gray-500" strokeWidth={1.2} />,
  },
  {
    label: "Profile",
    icon: <CircleUserRound className="text-gray-500" strokeWidth={1.2} />,
  },
  {
    label: "Settings",
    icon: <Settings className="text-gray-500" strokeWidth={1.2} />,
  },
];

const SideBar = () => {
    return (
      <div className="h-screen w-64 flex flex-col bg-white border-r border-gray-100 p-6">
        <div className="flex items-center gap-2 mb-10">
          <Wallet className="w-10 h-10 text-blue-400" strokeWidth={1.2} />
          <span className="text-2xl font-bold text-center">
            Smart<span className="text-blue-400">Wallet</span>
          </span>
        </div>
        {elements.map((el) => (
          <div
            key={el.label}
            className="flex items-center gap-3 cursor-pointer group hover:bg-blue-50 p-2 rounded-lg transition-all"
          >
            {el.icon}
            <span className="text-gray-600 group-hover:text-blue-600 font-medium">
              {el.label}
            </span>
          </div>
        ))}
      </div>
    );
}
 
export default SideBar;