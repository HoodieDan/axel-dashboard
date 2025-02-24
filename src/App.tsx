import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from './components/DashboardLayout';
import HomePage from './pages/HomePage';
import UserAnalytics from './pages/Dashboard/User/Analytics';
import UserDashboard from './pages/Dashboard/User/Index';
import UserSettings from './pages/Dashboard/User/Settings';
import './styles/index.scss';
import './App.css'
import UserAuth from "./pages/userAuth";

function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* Main Layout Routes */}
          <Route path='/' element={<HomePage />} />
          <Route path='/userAuth' element={<UserAuth />} />

          {/* Dashboard Layout Routes */}
          <Route path="/dashboard/user" element={<DashboardLayout />}>
            <Route index element={<UserDashboard />} />
            <Route path="analytics" element={<UserAnalytics />} />
            <Route path="settings" element={<UserSettings />} />
          </Route>

          {/* 404 Page */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
