import { useState } from "react";

function IPOCalendar() {
  const [selectedMonth, setSelectedMonth] = useState("December 2024");
  const [viewMode, setViewMode] = useState("calendar"); // calendar or list

  const ipoEvents = [
    {
      id: 1,
      company: "TechFlow Inc.",
      symbol: "TFLW",
      date: "Dec 15, 2024",
      price: "$42.00",
      sector: "Technology",
      status: "upcoming",
    },
    {
      id: 2,
      company: "Green Energy Corp",
      symbol: "GREN",
      date: "Dec 18, 2024",
      price: "$28.50",
      sector: "Clean Energy",
      status: "upcoming",
    },
    {
      id: 3,
      company: "BioMed Solutions",
      symbol: "BMED",
      date: "Dec 20, 2024",
      price: "$65.00",
      sector: "Healthcare",
      status: "upcoming",
    },
    {
      id: 4,
      company: "DataSync Pro",
      symbol: "DSYN",
      date: "Dec 10, 2024",
      price: "$35.00",
      sector: "Technology",
      status: "completed",
    },
  ];

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
                  className="text-blue-600 font-semibold border-b-2 border-blue-600"
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
            IPO Calendar
          </h1>
          <p className="text-gray-600">
            Track upcoming and recent IPO launches with detailed information
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-4 py-2 border rounded-lg bg-white"
            >
              <option>December 2024</option>
              <option>January 2025</option>
              <option>February 2025</option>
            </select>
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("calendar")}
                className={`px-4 py-2 rounded text-sm ${
                  viewMode === "calendar"
                    ? "bg-white text-blue-600 shadow"
                    : "text-gray-600"
                }`}
              >
                Calendar View
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`px-4 py-2 rounded text-sm ${
                  viewMode === "list"
                    ? "bg-white text-blue-600 shadow"
                    : "text-gray-600"
                }`}
              >
                List View
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Filter by:</span>
            <select className="px-3 py-2 border rounded bg-white text-sm">
              <option>All Sectors</option>
              <option>Technology</option>
              <option>Healthcare</option>
              <option>Energy</option>
            </select>
          </div>
        </div>

        {/* Calendar/List Content */}
        {viewMode === "calendar" ? (
          <div className="bg-white rounded-lg shadow">
            {/* Calendar Header */}
            <div className="grid grid-cols-7 gap-px bg-gray-200">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="bg-gray-50 px-3 py-2 text-center text-sm font-medium text-gray-900"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-px bg-gray-200">
              {Array.from({ length: 35 }, (_, i) => {
                const dayNumber = i - 6; // Start from Dec 1
                const isCurrentMonth = dayNumber > 0 && dayNumber <= 31;
                const hasIPO = [10, 15, 18, 20].includes(dayNumber);

                return (
                  <div
                    key={i}
                    className={`bg-white px-2 py-4 text-sm min-h-[80px] ${
                      !isCurrentMonth ? "text-gray-400" : ""
                    }`}
                  >
                    {isCurrentMonth && (
                      <>
                        <div className="font-medium">{dayNumber}</div>
                        {hasIPO && (
                          <div className="mt-1">
                            <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                              IPO
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {ipoEvents.map((ipo) => (
              <div
                key={ipo.id}
                className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {ipo.company}
                      </h3>
                      <p className="text-gray-600">
                        {ipo.symbol} • {ipo.sector}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">
                        {ipo.price}
                      </div>
                      <div className="text-sm text-gray-500">
                        Expected Price
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{ipo.date}</div>
                      <div
                        className={`text-xs px-2 py-1 rounded ${
                          ipo.status === "upcoming"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {ipo.status === "upcoming" ? "Upcoming" : "Completed"}
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Upcoming IPOs Summary */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            This Week's Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">3</div>
              <div className="text-sm text-gray-600">IPOs This Week</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">$135.5M</div>
              <div className="text-sm text-gray-600">Total Expected Value</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                Technology
              </div>
              <div className="text-sm text-gray-600">Top Sector</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default IPOCalendar;
