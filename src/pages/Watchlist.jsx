import { useState } from "react";

function Watchlist() {
  const [watchlistItems, setWatchlistItems] = useState([
    {
      id: 1,
      company: "TechFlow Inc.",
      symbol: "TFLW",
      price: "$42.00",
      change: "+12.5%",
      changeValue: "+$4.67",
      sector: "Technology",
      date: "Dec 15, 2024",
      addedDate: "Dec 1, 2024",
      rating: 4.5,
      isPositive: true,
    },
    {
      id: 2,
      company: "BioMed Solutions",
      symbol: "BMED",
      price: "$65.00",
      change: "+15.2%",
      changeValue: "+$8.59",
      sector: "Healthcare",
      date: "Dec 20, 2024",
      addedDate: "Nov 28, 2024",
      rating: 4.8,
      isPositive: true,
    },
    {
      id: 3,
      company: "Green Energy Corp",
      symbol: "GREN",
      price: "$28.50",
      change: "-2.1%",
      changeValue: "-$0.61",
      sector: "Clean Energy",
      date: "Dec 18, 2024",
      addedDate: "Dec 2, 2024",
      rating: 4.2,
      isPositive: false,
    },
  ]);

  const [sortBy, setSortBy] = useState("dateAdded");
  const [filterBy, setFilterBy] = useState("all");

  const removeFromWatchlist = (id) => {
    setWatchlistItems(watchlistItems.filter((item) => item.id !== id));
  };

  const totalValue = watchlistItems.reduce(
    (sum, item) => sum + parseFloat(item.price.replace("$", "")),
    0,
  );

  const positiveChanges = watchlistItems.filter(
    (item) => item.isPositive,
  ).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <a href="/" className="text-2xl font-bold text-blue-600">
                IPO Hub
              </a>
              <nav className="hidden md:flex space-x-6">
                <a href="/" className="text-gray-600 hover:text-gray-900">
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
                  className="text-blue-600 font-semibold border-b-2 border-blue-600"
                >
                  Watchlist
                </a>
                <a href="/news" className="text-gray-600 hover:text-gray-900">
                  News
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-gray-600 hover:text-gray-800">
                Sign In
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            My Watchlist
          </h1>
          <p className="text-gray-600">
            Track your favorite IPOs and monitor their performance
          </p>
        </div>

        {/* Watchlist Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-2xl font-bold text-blue-600">
              {watchlistItems.length}
            </div>
            <div className="text-sm text-gray-600">Total IPOs</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-2xl font-bold text-green-600">
              ${totalValue.toFixed(2)}
            </div>
            <div className="text-sm text-gray-600">Total Value</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-2xl font-bold text-purple-600">
              {positiveChanges}
            </div>
            <div className="text-sm text-gray-600">Gaining Value</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-2xl font-bold text-orange-600">
              {watchlistItems.length - positiveChanges}
            </div>
            <div className="text-sm text-gray-600">Losing Value</div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border rounded bg-white"
            >
              <option value="dateAdded">Date Added</option>
              <option value="company">Company Name</option>
              <option value="price">Price</option>
              <option value="change">Performance</option>
            </select>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Filter:</span>
            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
              className="px-3 py-2 border rounded bg-white"
            >
              <option value="all">All IPOs</option>
              <option value="gaining">Gaining</option>
              <option value="losing">Losing</option>
            </select>
          </div>
        </div>

        {/* Watchlist Items */}
        {watchlistItems.length > 0 ? (
          <div className="space-y-4">
            {watchlistItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">
                          {item.symbol.slice(0, 2)}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {item.company}
                        </h3>
                        <p className="text-gray-600">
                          {item.symbol} • {item.sector}
                        </p>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-sm ${i < Math.floor(item.rating) ? "text-yellow-400" : "text-gray-300"}`}
                            >
                              ⭐
                            </span>
                          ))}
                          <span className="text-xs text-gray-500 ml-2">
                            ({item.rating})
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-8">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">
                          {item.price}
                        </div>
                        <div className="text-sm text-gray-500">
                          Current Price
                        </div>
                      </div>

                      <div className="text-center">
                        <div
                          className={`text-lg font-bold ${item.isPositive ? "text-green-600" : "text-red-600"}`}
                        >
                          {item.change}
                        </div>
                        <div
                          className={`text-sm ${item.isPositive ? "text-green-600" : "text-red-600"}`}
                        >
                          {item.changeValue}
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="text-sm font-medium text-gray-900">
                          {item.date}
                        </div>
                        <div className="text-sm text-gray-500">IPO Date</div>
                      </div>

                      <div className="text-center">
                        <div className="text-sm text-gray-500">
                          Added {item.addedDate}
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                          View Details
                        </button>
                        <button
                          onClick={() => removeFromWatchlist(item.id)}
                          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <div className="text-gray-400 text-6xl mb-4">📋</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Your watchlist is empty
            </h3>
            <p className="text-gray-600 mb-6">
              Start adding IPOs to track their performance and stay updated
            </p>
            <a
              href="/"
              className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Browse IPOs
            </a>
          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Actions
          </h3>
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 bg-white border border-blue-200 text-blue-600 rounded hover:bg-blue-50 transition-colors">
              Export Watchlist
            </button>
            <button className="px-4 py-2 bg-white border border-blue-200 text-blue-600 rounded hover:bg-blue-50 transition-colors">
              Set Price Alerts
            </button>
            <button className="px-4 py-2 bg-white border border-blue-200 text-blue-600 rounded hover:bg-blue-50 transition-colors">
              Share Watchlist
            </button>
            <button className="px-4 py-2 bg-white border border-blue-200 text-blue-600 rounded hover:bg-blue-50 transition-colors">
              Create Custom Alert
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Watchlist;
