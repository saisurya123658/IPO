import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public Pages
import Index from "./pages/Index";
import IPOCalendar from "./pages/IPOCalendar";
import Watchlist from "./pages/Watchlist";
import News from "./pages/News";
import CompanyDetails from "./pages/CompanyDetails";
import NotFound from "./pages/NotFound";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import IPOManagement from "./pages/admin/IPOManagement";
import UserManagement from "./pages/admin/UserManagement";
import Analytics from "./pages/admin/Analytics";
import ContentManagement from "./pages/admin/ContentManagement";
import Settings from "./pages/admin/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Index />} />
        <Route path="/calendar" element={<IPOCalendar />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/news" element={<News />} />
        <Route path="/company/:id" element={<CompanyDetails />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/ipos" element={<IPOManagement />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/analytics" element={<Analytics />} />
        <Route path="/admin/content" element={<ContentManagement />} />
        <Route path="/admin/settings" element={<Settings />} />

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
