import { Outlet } from "react-router-dom"; 
import SideBar from "./SideBar";
import Header from "./Header";

const Layout = () => {
  return (
    <div id="wrapper" className="flex bg-gray-50 h-screen overflow-hidden">
      <SideBar />
      <div id="main-screen" className="flex-1 bg-blue-50">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
