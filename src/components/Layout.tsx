import SideBar from "./SideBar";
import { BellDot, ChevronDown } from "lucide-react";

const Layout = () => {
  return (
    <div id="wrapper" className="flex bg-gray-50">
      <SideBar />
      <div id="main-screen" className="flex-1 overflow-y-auto">
        <div id="menu">
          <div
            id="dashboard-frontBar"
            className="bg-white border-b border-gray-100 h-20 flex justify-between items-center px-8"
          >
            <h1 className="text-2xl font-bold px-8">Dashboard</h1>
            <div className="flex items-center gap-3">
              <BellDot className="cursor-pointer" />
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold cursor-pointer">
                S
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-blue-950 leading-tight">
                  Shir
                </p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
              <ChevronDown size={16} className="text-gray-400 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
