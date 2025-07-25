import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public Pages
import Index from "./pages/Index";
import IPOCalendar from "./pages/IPOCalendar";
import Watchlist from "./pages/Watchlist";
import News from "./pages/News";
import CompanyDetails from "./pages/CompanyDetails";
import NotFound from "./pages/NotFound";
import BlogPage from "./pages/admin/bolgs";
import ContactPage from "./pages/contact";
import BluestockLandingPage from "./pages/aboutus";
import Careers from "./pages/careers";
import SharkInvestors from "./pages/sharkinvestor";
import BluestockAuth from "./pages/basic";
import Terms from "./pages/terms";
import Disclaimer from "./pages/discalmer";
import Privacy from "./pages/privacy";
import Refund from "./pages/refund";
import LoginPage from "./pages/signup/loginpage";
import RegisterPage from "./pages/signup/Register";
import ForgotPassword from "./pages/signup/forgotpassword";
import IPO from "./pages/Ipo";
import Community from "./pages/Community";
import { UserProvider } from "./context/UserContext";

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
        <Route path="/Blogs" element={<BlogPage/>}/>
        <Route path="/news" element={<News />} />
        <Route path="/company/:id" element={<CompanyDetails />} />
         <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<BluestockLandingPage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/signin" element={<BluestockAuth />} />
         <Route path="/shark" element={<SharkInvestors />} />
         <Route path="/Terms" element={<Terms />} />
         <Route path="/privacy" element={<Privacy />} />
         <Route path="/Refund" element={<Refund />} />
         <Route path="/Disclaimer" element={<Disclaimer />} />
         <Route path="/signupnow" element={<LoginPage />} />
         <Route path="/Register" element={<RegisterPage/>} />
         <Route path="/ForgotPassword" element={<ForgotPassword/>} />
           <Route path="/Ipo" element={<IPO/>} />
          <Route path="/community" element={<Community />} />
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
