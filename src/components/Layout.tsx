import { Outlet } from "react-router-dom"; 
import SideBar from "./SideBar";
import Header from "./Header";

const Layout = () => {
  return (
    <div
      id="wrapper"
      className="flex h-screen w-full bg-gray-50 overflow-hidden overflow-x-hidden"
    >
      <SideBar />
      <div
        id="main-screen"
        className="flex-1 flex flex-col overflow-y-auto overflow-x-hidden bg-blue-50"
      >
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
