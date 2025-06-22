import { useState } from "react";

function Index() {
  // Simple state for basic interactions
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [watchlist, setWatchlist] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [showSuccess, setShowSuccess] = useState(false);

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

      {/* Sign In Modal */}
      {showSignInModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <h3 className="text-2xl font-bold mb-4">Sign In</h3>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded mb-4"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded mb-4"
            />
            <div className="flex space-x-4">
              <button
                onClick={() => setShowSignInModal(false)}
                className="flex-1 px-4 py-2 border rounded hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowSignInModal(false);
                  setShowSuccess(true);
                  setTimeout(() => setShowSuccess(false), 2000);
                }}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <a href="/" className="text-2xl font-bold text-blue-600">
                IPO Hub
              </a>
              <nav className="hidden md:flex space-x-6">
                <a
                  href="/"
                  className="text-blue-600 font-semibold border-b-2 border-blue-600"
                >
                  Dashboard
                </a>
                <a
                  href="/calendar"
                  className="text-gray-600 hover:text-gray-900"
                >
                  IPO Calendar
                </a>
                <a
                  href="/watchlist"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Watchlist
                </a>
                <a href="/news" className="text-gray-600 hover:text-gray-900">
                  News
                </a>
              </nav>
            </div>
            <div className="space-x-4">
              <button
                onClick={handleSignInClick}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded transition-all"
              >
                Sign In
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 hover:scale-105 transition-all">
                Get Started
              </button>
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">IPO Hub</h4>
              <p className="text-gray-400">
                Your trusted partner for IPO investments and market insights.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="/calendar"
                    className="hover:text-white transition-colors"
                  >
                    IPO Calendar
                  </a>
                </li>
                <li>
                  <a
                    href="/news"
                    className="hover:text-white transition-colors"
                  >
                    Market Analysis
                  </a>
                </li>
                <li>
                  <a
                    href="/watchlist"
                    className="hover:text-white transition-colors"
                  >
                    Portfolio Tracker
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="/news"
                    className="hover:text-white transition-colors"
                  >
                    Investment Guide
                  </a>
                </li>
                <li>
                  <a
                    href="/news"
                    className="hover:text-white transition-colors"
                  >
                    Market News
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 IPO Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;
