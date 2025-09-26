import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import Support from "./pages/Support";
import Invoices from "./pages/Invoices";
import Integrations from "./pages/Integrations";
import Team from "./pages/Team";
import Activity from "./pages/Activity";
import Calendar from "./pages/Calendar";
import Login from "./pages/Login";

function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Página inicial será o Login */}
        <Route path="/" element={<Login />} />

        {/* Rotas com Sidebar */}
        <Route path="/app" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="support" element={<Support />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="integrations" element={<Integrations />} />
          <Route path="team" element={<Team />} />
          <Route path="activity" element={<Activity />} />
          <Route path="calendar" element={<Calendar />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
