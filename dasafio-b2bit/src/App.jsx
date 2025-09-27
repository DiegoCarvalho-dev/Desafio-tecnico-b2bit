import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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

function AppContent() {
  const location = useLocation();
  const hideSidebar = location.pathname === "/";

  return (
    <div style={{ display: "flex" }}>
      {!hideSidebar && <Sidebar />}
      <div style={{ marginLeft: hideSidebar ? "0" : "220px", flex: 1 }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/support" element={<Support />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/team" element={<Team />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
