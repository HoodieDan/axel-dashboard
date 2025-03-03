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

      <div className="nav__and__main overflow-hidden flex flex-col">
        {/* Navbar */}
        <div className="nav">
          <TopNav />
        </div>
        {/* Main content */}
        <main className="w-full overflow-auto py-3 px-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
