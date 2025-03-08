import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import DashboardLayout from "./components/layouts/DashboardLayout";
import AdminSessionHistory from "./pages/Dashboard/Admin/AdminSessionHistory";
import AdminDashboardHome from "./pages/Dashboard/Admin/Index";
import UserAnalytics from "./pages/Dashboard/User/Analytics";
import UserDashboardHome from "./pages/Dashboard/User/Index";
import UserSettings from "./pages/Dashboard/User/Settings";
import UserSessionHistory from "./pages/Dashboard/User/UserSessionHistory";
import HomePage from "./pages/HomePage";
import "./styles/index.scss";
import Help from "./pages/Dashboard/User/help";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    {/* Main Layout Routes */}
                    <Route path="/" element={<HomePage />} />

                    {/* Dashboard Layout Routes */}
                    <Route path="/dashboard/user" element={<DashboardLayout />}>
                        <Route index element={<UserDashboardHome />} />
                        <Route path="session-history" element={<UserSessionHistory />} />
                        <Route path="analytics" element={<UserAnalytics />} />
                        <Route path="settings" element={<UserSettings />} />
                        <Route path="help" element={<Help />} />

                    </Route>

                    <Route path="/dashboard/admin" element={<DashboardLayout />}>
                        <Route index element={<AdminDashboardHome />} />
                        <Route path="session-history" element={<AdminSessionHistory />} />
                        <Route path="analytics" element={<UserAnalytics />} />
                        <Route path="settings" element={<UserSettings />} />
                    </Route>

                    {/* 404 Page */}
                    {/* <Route path="*" element={<NotFound />} /> */}
                </Routes>
            </Router>
        </>
    );
}

export default App;
