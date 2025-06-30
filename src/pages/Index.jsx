import { useState } from "react";
import {
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";
import Contactpage from "./contact";
import BlogPage from "./admin/bolgs";
import Careers from "./careers";
import BluestockAuth from "./basic";
import Terms from "./terms";
import Privacy from "./privacy";
import Refund from "./refund";
import Disclamer from "./discalmer";
import AdminDashboard from "./admin/AdminDashboard";
import IPO from "./Ipo";
import {Lock} from "lucide-react";
import { Link } from "react-router-dom";


function Index() {
  // Simple state for basic interactions
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [watchlist, setWatchlist] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [showSuccess, setShowSuccess] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsDropdownOpen(false); // close dropdown when a link is clicked
  };

  // IPO data
  const allIPOs = [
    {
      id: 1,
      company: "TechFlow Inc.",
      symbol: "TFLW",
      price: "$42.00",
      change: "+12.5%",
      sector: "Technology",
      date: "Dec 15, 2024",
      rating: 4.5,
    },
    {
      id: 2,
      company: "Green Energy Corp",
      symbol: "GREN",
      price: "$28.50",
      change: "+8.3%",
      sector: "Clean Energy",
      date: "Dec 18, 2024",
      rating: 4.2,
    },
    {
      id: 3,
      company: "BioMed Solutions",
      symbol: "BMED",
      price: "$65.00",
      change: "+15.2%",
      sector: "Healthcare",
      date: "Dec 20, 2024",
      rating: 4.8,
    },
    {
      id: 4,
      company: "Crypto Exchange Pro",
      symbol: "CRYP",
      price: "$35.00",
      change: "+22.1%",
      sector: "Technology",
      date: "Dec 22, 2024",
      rating: 3.9,
    },
  ];

  // Filter IPOs based on selected filter
  const filteredIPOs =
    selectedFilter === "all"
      ? allIPOs.slice(0, 3)
      : allIPOs
          .filter((ipo) =>
            ipo.sector.toLowerCase().includes(selectedFilter.toLowerCase()),
          )
          .slice(0, 3);

  // Handle adding to watchlist
  const handleAddToWatchlist = (ipoId) => {
    if (!watchlist.includes(ipoId)) {
      setWatchlist([...watchlist, ipoId]);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    }
  };

  // Handle sign in click
  const handleSignInClick = () => {
    setShowSignInModal(true);
  };

  // Handle explore IPOs click
  const handleExploreClick = () => {
    document.getElementById("ipo-section").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce">
          ✅ Added to watchlist!
        </div>
      )}

  {/* Header */}
   <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between w-full">

            {/* Left: Logo */}
            <div className="flex items-center">
              <img src="/assest/logo.png" alt="Logo" className="h-10 w-auto mr-4" />
              <span className="text-2xl font-extrabold text-gray-900"><span className="text-blue-600"></span></span>
            </div>

 <nav className="flex items-center space-x-6 relative">
      <a href="/Ipo" className="text-sm font-semibold text-gray-600 hover:text-blue-700">IPO</a>
      <a href="/community" className="text-sm font-semibold text-gray-600 hover:text-blue-700">Community</a>

      {/* Products Dropdown */}
      <div className="relative">
        <button
          onClick={handleDropdownToggle}
          className="text-sm font-semibold text-gray-600 hover:text-blue-700 flex items-center focus:outline-none"
        >
          Products ▾
        </button>

        {isDropdownOpen && (
          <div className="absolute bg-white shadow-lg rounded mt-2 z-10 w-40">
            <a
              href="/products"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={handleLinkClick}
            >
              All Products
            </a>
            <a
              href="/Blogs"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={handleLinkClick}
            >
              Blogs
            </a>
            <a
              href="/watchlist"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={handleLinkClick}
            >
              Watchlist
            </a>
          </div>
        )}
      </div>

      <a href="/brokers" className="text-sm font-semibold text-gray-600 hover:text-blue-700">Brokers ↗</a>
      <a href="/news" className="text-sm font-semibold text-gray-600 hover:text-blue-700 flex items-center">
        Live News <span className="ml-1 bg-blue-600 text-white text-xs font-bold px-1 rounded">NEW</span>
      </a>
    </nav>


            {/* Right: Buttons */}
            <div className="flex items-center space-x-3">
               <Link to="/signin" className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-all">Admin Login</Link>
              <Link to="/signupnow" className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-all">SignUpNow</Link>
              <div className="text-black cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M3 3h4v4H3V3zm7 0h4v4h-4V3zm7 0h4v4h-4V3zM3 10h4v4H3v-4zm7 0h4v4h-4v-4zm7 0h4v4h-4v-4zM3 17h4v4H3v-4zm7 0h4v4h-4v-4zm7 0h4v4h-4v-4z" />
                </svg>
              </div>
            </div>

          </div>
        </div>
      </header>



      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Discover the Next Big
            <span className="block text-blue-600">IPO Opportunities</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Stay ahead of the market with real-time IPO data, comprehensive
            analysis, and expert insights to make informed investment decisions.
          </p>
          <div className="space-x-4">
            <button
              onClick={handleExploreClick}
              className="px-8 py-4 bg-blue-600 text-white text-lg rounded hover:bg-blue-700 hover:scale-105 transition-all shadow-lg"
            >
              Explore IPOs ↓
            </button>
            <a
              href="/calendar"
              className="inline-block px-8 py-4 border border-gray-300 text-gray-700 text-lg rounded hover:bg-gray-50 hover:scale-105 transition-all"
            >
              View Calendar 📅
            </a>
          </div>
        </div>

        {/* Quick Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <a
            href="/calendar"
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-lg transition-shadow group"
          >
            <div className="text-blue-600 text-3xl mb-3">📅</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
              IPO Calendar
            </h3>
            <p className="text-gray-600">
              Track upcoming IPO launches with detailed information and timeline
            </p>
          </a>

          <a
            href="/watchlist"
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-lg transition-shadow group"
          >
            <div className="text-green-600 text-3xl mb-3">📋</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600">
              My Watchlist
            </h3>
            <p className="text-gray-600">
              Monitor your favorite IPOs and track their performance over time
            </p>
          </a>

          <a
            href="/news"
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-lg transition-shadow group"
          >
            <div className="text-purple-600 text-3xl mb-3">📰</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600">
              Market News
            </h3>
            <p className="text-gray-600">
              Stay updated with the latest IPO news, analysis, and market
              insights
            </p>
          </a>
        </div>

        {/* Interactive Stats Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group cursor-pointer hover:bg-blue-50 p-4 rounded-lg transition-all">
              <div className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform">
                250+
              </div>
              <div className="text-gray-600">IPOs Tracked</div>
            </div>
            <div className="text-center group cursor-pointer hover:bg-green-50 p-4 rounded-lg transition-all">
              <div className="text-3xl font-bold text-green-600 group-hover:scale-110 transition-transform">
                $12.5B
              </div>
              <div className="text-gray-600">Total Market Cap</div>
            </div>
            <div className="text-center group cursor-pointer hover:bg-purple-50 p-4 rounded-lg transition-all">
              <div className="text-3xl font-bold text-purple-600 group-hover:scale-110 transition-transform">
                95%
              </div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
            <div className="text-center group cursor-pointer hover:bg-orange-50 p-4 rounded-lg transition-all">
              <div className="text-3xl font-bold text-orange-600 group-hover:scale-110 transition-transform">
                50K+
              </div>
              <div className="text-gray-600">Active Users</div>
            </div>
          </div>
        </div>

        {/* Featured IPOs Section */}
        <div id="ipo-section" className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Featured IPOs This Week
            </h3>
            <p className="text-gray-600 mb-6">
              Don't miss these exciting public offerings
            </p>

            {/* Filter Buttons */}
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={() => setSelectedFilter("all")}
                className={`px-4 py-2 rounded transition-all ${
                  selectedFilter === "all"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                All Sectors
              </button>
              <button
                onClick={() => setSelectedFilter("technology")}
                className={`px-4 py-2 rounded transition-all ${
                  selectedFilter === "technology"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Technology
              </button>
              <button
                onClick={() => setSelectedFilter("healthcare")}
                className={`px-4 py-2 rounded transition-all ${
                  selectedFilter === "healthcare"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Healthcare
              </button>
              <button
                onClick={() => setSelectedFilter("energy")}
                className={`px-4 py-2 rounded transition-all ${
                  selectedFilter === "energy"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Clean Energy
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredIPOs.map((ipo) => (
              <div
                key={ipo.id}
                className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {ipo.company}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {ipo.symbol} • {ipo.sector}
                    </p>
                    {/* Star Rating */}
                    <div className="flex items-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-sm ${i < Math.floor(ipo.rating) ? "text-yellow-400" : "text-gray-300"}`}
                        >
                          ⭐
                        </span>
                      ))}
                      <span className="text-xs text-gray-500 ml-2">
                        ({ipo.rating})
                      </span>
                    </div>
                  </div>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded animate-pulse">
                    {ipo.change}
                  </span>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {ipo.price}
                    </div>
                    <div className="text-sm text-gray-500">Expected Price</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{ipo.date}</div>
                    <div className="text-xs text-gray-500">Launch Date</div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => handleAddToWatchlist(ipo.id)}
                    className={`flex-1 px-4 py-2 rounded transition-all ${
                      watchlist.includes(ipo.id)
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
                    }`}
                  >
                    {watchlist.includes(ipo.id)
                      ? "✓ In Watchlist"
                      : "Add to Watchlist"}
                  </button>
                  <a
                    href="/company/1"
                    className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-all text-center"
                  >
                    📊
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Watchlist Counter */}
          {watchlist.length > 0 && (
            <div className="text-center mt-8">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
                📋 You have {watchlist.length} IPO(s) in your watchlist
                <a
                  href="/watchlist"
                  className="ml-4 text-blue-600 font-semibold hover:underline"
                >
                  View All →
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Interactive Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center text-white hover:from-blue-700 hover:to-purple-700 transition-all">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Investing?</h3>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of investors who trust IPO Hub for their investment
            decisions
          </p>
          <button
            onClick={() => {
              setShowSuccess(true);
              setTimeout(() => setShowSuccess(false), 2000);
            }}
            className="px-8 py-4 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100 hover:scale-105 transition-all shadow-lg"
          >
            Create Free Account 🚀
          </button>
        </div>
      </main>
      <footer  className="bg-black text-white pt-16 pb-8 text-sm">
  < div className="max-w-6xl mx-auto px-4">
    
   {/* Top Links */}
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-12">
  
  {/* Resources */}
  <div>
    <h4 className="font-semibold mb-4">Resources</h4>
    <ul className="space-y-2 text-blue-600">
      <li>
        <a href="https://www.tradingview.com/chart/" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Trading View
        </a>
      </li>
      <li>
        <a href="https://www.nseindia.com/resources/exchange-communication-holidays" target="_blank" rel="noopener noreferrer" className="hover:underline">
          NSE Holidays
        </a>
      </li>
      <li>
        <a href="https://www.evoting.cdslindia.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
          e-Voting CDSL
        </a>
      </li>
      <li>
        <a href="https://www.evoting.nsdl.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
          e-Voting NSDL
        </a>
      </li>
      <li>
        <a href="https://www.nseindia.com/market-data/market-timings-holidays" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Market Timings
        </a>
      </li>
    </ul>
  </div>

  {/* Company */}
  <div>
    <h4 className="font-semibold mb-4">Company</h4>
    <ul className="space-y-2 text-blue-600">
      <li><Link to="/careers" className="hover:underline">Careers</Link></li>
      <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
      <li><Link to="/about" className="hover:underline">About Us</Link></li>
      <li className="hover:underline cursor-pointer">Community</li>
      <li><Link to="/Blogs" className="hover:underline">Blogs</Link></li>
    </ul>
  </div>

  {/* Offerings */}
  <div>
    <h4 className="font-semibold mb-4">Offerings</h4>
    <ul className="space-y-2 text-blue-600">
      <li className="hover:underline cursor-pointer">Compare Broker</li>
      <li className="hover:underline cursor-pointer">Fin Calculators</li>
      <li className="hover:underline cursor-pointer">IPO</li>
      <li className="hover:underline cursor-pointer">All Brokers</li>
      <li className="hover:underline cursor-pointer">Products</li>
    </ul>
  </div>

  {/* Links */}
  <div>
    <h4 className="font-semibold mb-4">Links</h4>
    <ul className="space-y-2 text-blue-600">
      <li><Link to="/shark" className="hover:underline">Shark Investor</Link></li>
      <li>
        <a href="https://www.amfiindia.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Mutual Funds
        </a>
      </li>
      <li>
        <a href="https://www.nseindia.com/sitemap" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Sitemap
        </a>
      </li>
      <li>
        <a href="https://www.nseindia.com/market-data/live-equity-market" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Indian Indices
        </a>
      </li>
      <li>
        <a href="https://hackerone.com/bug-bounty-programs" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Bug Bounty Program
        </a>
      </li>
    </ul>
  </div>

  {/* Policy */}
  <div>
    <h4 className="font-semibold mb-4">Policy</h4>
    <ul className="space-y-2 text-blue-600">
      <li><Link to="/Terms" className="hover:underline">Terms & Conditions</Link></li>
      <li><Link to="/Privacy" className="hover:underline">Privacy Policy</Link></li>
      <li><Link to="/Refund" className="hover:underline">Refund Policy</Link></li>
      <li><Link to="/Disclaimer" className="hover:underline">Disclaimer</Link></li>
      <li className="hover:underline cursor-pointer">Trust & Security</li>
    </ul>
  </div>
</div>


    {/* Middle Row: Logo, Info, Disclaimer */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-300 pt-8">
      
      {/* Social + Logo */}
      <div className="flex flex-col items-start space-y-4">
        <div className="flex space-x-4 text-blue-600 text-xl">
          <i className="fab fa-x-twitter"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-telegram"></i>
        </div>
       <div className="flex space-x-4 text-blue-400 text-xl">
  <FaTwitter className="hover:text-white transition duration-300" />
  <FaFacebook className="hover:text-white transition duration-300" />
  <FaYoutube className="hover:text-white transition duration-300" />
  <FaLinkedin className="hover:text-white transition duration-300" />
  <FaInstagram className="hover:text-white transition duration-300" />
  <FaTelegram className="hover:text-white transition duration-300" />
</div>


        <div className="flex items-center space-x-2">
          <img src="/assest/logo.png" alt="Logo" className="h-8" />
          <span className="font-bold text-lg">BLUESTOCK</span>
        </div>
        <div>
          Bluestock Fintech  
          <br />
          Pune, Maharashtra  
          <br />
          MSME Registration No: <br /> <strong>UDYAM-MH-01-0138001</strong>
        </div>
        <img src="/assest/footer.png" alt="Startup India" className="h-6" />
      </div>

      {/* Contact & Emails */}
      <div className="text-sm space-y-4 text-gray-600">
        <p>
          Investment in securities markets are subject to market risks, read all the related documents carefully before investing as prescribed by SEBI. Issued in the interest of the investors.
        </p>
        <p>
          The users can write to <a href="mailto:hello@bluestock.in" className="text-blue-600">hello@bluestock.in</a> for app/website queries.  
          For IT/Tech feedback: <a href="mailto:cto@bluestock.in" className="text-blue-600">cto@bluestock.in</a>
        </p>
      </div>

      {/* Disclaimer */}
      <div className="text-sm text-gray-600">
        <p>
          Disclaimer: We are not a SEBI registered research analyst company. We do not provide any kind of stock recommendations, buy/sell stock tips, or investment and trading advice. All stock scripts shown on Bluestock are for educational purposes only.
        </p>
        <p className="mt-2">
          Before making any investment, consult your financial advisor. Remember that stock markets are subject to market risks.
        </p>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="mt-8 pt-4 border-t border-gray-300 flex flex-col md:flex-row justify-between text-center text-sm text-gray-500">
      <p>&copy; Bluestock Fintech All Rights Reserved.</p>
      <p>Made with ❤️ in Pune, Maharashtra</p>
    </div>
  </div>
</footer>
</div>
);
}
export default Index;

