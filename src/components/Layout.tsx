import SideBar from "./SideBar";
import Header from "./Header";
import Dashboard from "./Dashboard";

const Layout = () => {
  return (
    <div id="wrapper" className="flex bg-gray-50">
      <SideBar />
      <div id="main-screen" className="flex-1 overflow-y-auto bg-blue-50">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
};

export default Layout;
