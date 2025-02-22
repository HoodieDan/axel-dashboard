import { Outlet, Link } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <nav style={{ width: "250px", padding: "20px", background: "#f4f4f4" }}>
        <h2>Dashboard</h2>
        <ul>
          <li><Link to="/dashboard">Home</Link></li>
          <li><Link to="/dashboard/user/analytics">Profile</Link></li>
          <li><Link to="/dashboard/user/settings">Settings</Link></li>
        </ul>
      </nav>

      {/* Main content */}
      <main style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
