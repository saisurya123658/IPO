import { useState } from "react";

function Analytics() {
  const [selectedPeriod, setSelectedPeriod] = useState("30d");
  const [selectedMetric, setSelectedMetric] = useState("users");

  const analyticsData = {
    users: {
      current: 52431,
      previous: 48234,
      change: 8.7,
      changeType: "positive",
    },
    revenue: {
      current: 124500,
      previous: 115200,
      change: 8.1,
      changeType: "positive",
    },
    ipos: {
      current: 247,
      previous: 231,
      change: 6.9,
      changeType: "positive",
    },
    engagement: {
      current: 73.2,
      previous: 69.8,
      change: 4.9,
      changeType: "positive",
    },
  };

  const topIPOs = [
    {
      company: "TechFlow Inc.",
      symbol: "TFLW",
      views: 45230,
      watchlists: 1240,
      clicks: 8970,
      conversionRate: 19.8,
    },
    {
      company: "BioMed Solutions",
      symbol: "BMED",
      views: 38950,
      watchlists: 1105,
      clicks: 7320,
      conversionRate: 18.8,
    },
    {
      company: "Green Energy Corp",
      symbol: "GREN",
      views: 32100,
      watchlists: 890,
      clicks: 5890,
      conversionRate: 18.3,
    },
    {
      company: "DataSync Pro",
      symbol: "DSYN",
      views: 28750,
      watchlists: 720,
      clicks: 4980,
      conversionRate: 17.3,
    },
  ];

  const trafficSources = [
    { source: "Organic Search", visitors: 28543, percentage: 45.2 },
    { source: "Direct", visitors: 18932, percentage: 30.0 },
    { source: "Social Media", visitors: 8976, percentage: 14.2 },
    { source: "Referrals", visitors: 4532, percentage: 7.2 },
    { source: "Email", visitors: 2187, percentage: 3.4 },
  ];

  const userActivity = [
    { action: "IPO Views", count: 145320, change: 12.5 },
    { action: "Watchlist Adds", count: 8970, change: 8.3 },
    { action: "Profile Updates", count: 3450, change: -2.1 },
    { action: "News Reads", count: 23890, change: 15.7 },
    { action: "Comments Posted", count: 1250, change: 22.3 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white shadow border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <a href="/admin" className="text-2xl font-bold text-blue-600">
                IPO Hub Admin
              </a>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">Analytics</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                🔔
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">AD</span>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Admin User
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm min-h-screen">
          <nav className="mt-8">
            <div className="px-4">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Main Menu
              </h3>
              <div className="mt-4 space-y-1">
                <a
                  href="/admin"
                  className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  📊 Dashboard
                </a>
                <a
                  href="/admin/ipos"
                  className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  🏢 IPO Management
                </a>
                <a
                  href="/admin/users"
                  className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  👥 User Management
                </a>
                <a
                  href="/admin/analytics"
                  className="bg-blue-50 border-r-2 border-blue-600 text-blue-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  📈 Analytics
                </a>
                <a
                  href="/admin/content"
                  className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  📝 Content Management
                </a>
                <a
                  href="/admin/settings"
                  className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  ⚙️ Settings
                </a>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Analytics</h2>
                <p className="text-gray-600">
                  Monitor platform performance and user engagement
                </p>
              </div>
              <div className="flex space-x-3">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  📊 Generate Report
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  📤 Export Data
                </button>
              </div>
            </div>
          </div>

          {/* Time Period Selector */}
          <div className="mb-6">
            <div className="flex space-x-4">
              {["7d", "30d", "90d", "1y"].map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    selectedPeriod === period
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {period === "7d"
                    ? "Last 7 days"
                    : period === "30d"
                      ? "Last 30 days"
                      : period === "90d"
                        ? "Last 90 days"
                        : "Last year"}
                </button>
              ))}
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Total Users
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {analyticsData.users.current.toLocaleString()}
                  </p>
                </div>
                <div className="text-3xl">👥</div>
              </div>
              <div className="mt-4">
                <span className="text-sm font-medium text-green-600">
                  +{analyticsData.users.change}%
                </span>
                <span className="text-sm text-gray-500 ml-1">
                  from last period
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">
                    ${analyticsData.revenue.current.toLocaleString()}
                  </p>
                </div>
                <div className="text-3xl">💰</div>
              </div>
              <div className="mt-4">
                <span className="text-sm font-medium text-green-600">
                  +{analyticsData.revenue.change}%
                </span>
                <span className="text-sm text-gray-500 ml-1">
                  from last period
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Total IPOs
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {analyticsData.ipos.current}
                  </p>
                </div>
                <div className="text-3xl">🏢</div>
              </div>
              <div className="mt-4">
                <span className="text-sm font-medium text-green-600">
                  +{analyticsData.ipos.change}%
                </span>
                <span className="text-sm text-gray-500 ml-1">
                  from last period
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Engagement Rate
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {analyticsData.engagement.current}%
                  </p>
                </div>
                <div className="text-3xl">📈</div>
              </div>
              <div className="mt-4">
                <span className="text-sm font-medium text-green-600">
                  +{analyticsData.engagement.change}%
                </span>
                <span className="text-sm text-gray-500 ml-1">
                  from last period
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Top Performing IPOs */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">
                  Top Performing IPOs
                </h3>
                <p className="text-sm text-gray-600">
                  Most viewed and added to watchlists
                </p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {topIPOs.map((ipo, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {ipo.company}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {ipo.symbol} • {ipo.views.toLocaleString()} views
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">
                          {ipo.conversionRate}%
                        </p>
                        <p className="text-sm text-gray-600">conversion</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Traffic Sources */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">
                  Traffic Sources
                </h3>
                <p className="text-sm text-gray-600">
                  Where your visitors are coming from
                </p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {trafficSources.map((source, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-900">
                          {source.source}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-600">
                          {source.visitors.toLocaleString()}
                        </span>
                        <span className="text-sm font-medium text-gray-900">
                          {source.percentage}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* User Activity */}
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">
                User Activity
              </h3>
              <p className="text-sm text-gray-600">
                Most common user actions on the platform
              </p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {userActivity.map((activity, index) => (
                  <div key={index} className="text-center">
                    <p className="text-2xl font-bold text-gray-900">
                      {activity.count.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      {activity.action}
                    </p>
                    <span
                      className={`text-xs font-medium ${
                        activity.change > 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {activity.change > 0 ? "+" : ""}
                      {activity.change}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Analytics Chart
                  </h3>
                  <p className="text-sm text-gray-600">
                    Track metrics over time
                  </p>
                </div>
                <div className="flex space-x-2">
                  {["users", "revenue", "ipos", "engagement"].map((metric) => (
                    <button
                      key={metric}
                      onClick={() => setSelectedMetric(metric)}
                      className={`px-3 py-1 text-xs rounded ${
                        selectedMetric === metric
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {metric.charAt(0).toUpperCase() + metric.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <p className="text-gray-600">
                    Chart visualization would go here
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Showing {selectedMetric} for {selectedPeriod}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Analytics;
