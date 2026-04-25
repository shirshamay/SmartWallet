import SideBar from "./SideBar";
import Header from "./Header";
import Dashboard from "../pages/Dashboard";

const Layout = () => {
  return (
    <div id="wrapper" className="flex bg-gray-50 h-screen overflow-hidden">
      <SideBar />
      <div id="main-screen" className="flex-1 bg-blue-50">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
};

export default Layout;
