import { Outlet } from "react-router-dom";
import SideNav from "../dashboard/SideNav";
import TopNav from "../dashboard/TopNav";

const DashboardLayout = () => {
  return (
    <div className="dash__layout">
      {/* Sidebar */}
      <div className="sidebar">
        <SideNav />
      </div>

      <div className="nav__and__main overflow-hidden">
        {/* Navbar */}
        <div className="nav">
          <TopNav />
        </div>
        {/* Main content */}
        <main className="w-full h-screen overflow-auto p-3">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
