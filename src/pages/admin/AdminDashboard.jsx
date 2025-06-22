import { useState } from "react";

function AdminDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("30d");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Mock data for dashboard
  const dashboardStats = [
    {
      title: "Total Users",
      value: "12,847",
      change: "+8.2%",
      changeType: "positive",
      icon: "👥",
      color: "blue",
    },
    {
      title: "Active IPOs",
      value: "247",
      change: "+12.5%",
      changeType: "positive",
      icon: "🏢",
      color: "green",
    },
    {
      title: "Revenue",
      value: "$1.2M",
      change: "+15.3%",
      changeType: "positive",
      icon: "💰",
      color: "purple",
    },
    {
      title: "Pending Reviews",
      value: "23",
      change: "-4.1%",
      changeType: "negative",
      icon: "📋",
      color: "orange",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: "ipo_submitted",
      title: "New IPO Application",
      description: "TechFlow Inc. submitted IPO application",
      time: "2 minutes ago",
      user: "TechFlow Inc.",
      status: "pending",
    },
    {
      id: 2,
      type: "user_registered",
      title: "New User Registration",
      description: "john.doe@example.com registered",
      time: "15 minutes ago",
      user: "John Doe",
      status: "completed",
    },
    {
      id: 3,
      type: "ipo_approved",
      title: "IPO Approved",
      description: "BioMed Solutions IPO approved for listing",
      time: "1 hour ago",
      user: "Admin",
      status: "completed",
    },
    {
      id: 4,
      type: "content_published",
      title: "Article Published",
      description: "Market Analysis: Q4 IPO Trends published",
      time: "2 hours ago",
      user: "Content Team",
      status: "completed",
    },
  ];

  const topIPOs = [
    {
      id: 1,
      company: "TechFlow Inc.",
      symbol: "TFLW",
      price: "$42.00",
      change: "+12.5%",
      volume: "2.1M",
      status: "Active",
    },
    {
      id: 2,
      company: "BioMed Solutions",
      symbol: "BMED",
      price: "$65.00",
      change: "+8.7%",
      volume: "1.8M",
      status: "Active",
    },
    {
      id: 3,
      company: "Green Energy Corp",
      symbol: "GREN",
      price: "$28.50",
      change: "+15.2%",
      volume: "3.2M",
      status: "Active",
    },
  ];

  const getStatusIcon = (type) => {
    switch (type) {
      case "ipo_submitted":
        return "📄";
      case "user_registered":
        return "👤";
      case "ipo_approved":
        return "✅";
      case "content_published":
        return "📝";
      default:
        return "📌";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Enhanced Sidebar */}
      <aside
        className={`${
          sidebarCollapsed ? "w-16" : "w-64"
        } bg-white shadow-lg border-r border-gray-200 transition-all duration-300 fixed left-0 top-0 h-full z-30`}
      >
        {/* Sidebar Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
          {!sidebarCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IH</span>
              </div>
              <span className="font-bold text-gray-900">IPO Hub Admin</span>
            </div>
          )}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-8 px-4">
          <div className="space-y-2">
            <a
              href="/admin"
              className="flex items-center px-3 py-2.5 text-sm font-medium bg-blue-50 text-blue-700 rounded-lg border-l-4 border-blue-700"
            >
              <span className="text-lg mr-3">📊</span>
              {!sidebarCollapsed && "Dashboard"}
            </a>
            <a
              href="/admin/ipos"
              className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="text-lg mr-3">🏢</span>
              {!sidebarCollapsed && "IPO Management"}
            </a>
            <a
              href="/admin/users"
              className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="text-lg mr-3">👥</span>
              {!sidebarCollapsed && "Users"}
            </a>
            <a
              href="/admin/analytics"
              className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="text-lg mr-3">📈</span>
              {!sidebarCollapsed && "Analytics"}
            </a>
            <a
              href="/admin/content"
              className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="text-lg mr-3">📝</span>
              {!sidebarCollapsed && "Content"}
            </a>
            <a
              href="/admin/settings"
              className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="text-lg mr-3">⚙️</span>
              {!sidebarCollapsed && "Settings"}
            </a>
          </div>

          {!sidebarCollapsed && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="space-y-2">
                <a
                  href="/"
                  className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="text-lg mr-3">🌐</span>
                  View Website
                </a>
                <button className="w-full flex items-center px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-lg mr-3">📊</span>
                  Generate Report
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* User Profile */}
        {!sidebarCollapsed && (
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">AD</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  Admin User
                </p>
                <p className="text-xs text-gray-500 truncate">
                  admin@ipohub.com
                </p>
              </div>
              <button className="p-1 rounded-lg hover:bg-gray-100">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <div
        className={`flex-1 ${sidebarCollapsed ? "ml-16" : "ml-64"} transition-all duration-300`}
      >
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-sm text-gray-600 mt-1">
                Welcome back! Here's what's happening today.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              {/* Time Period Selector */}
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="1y">Last year</option>
              </select>

              {/* Notifications */}
              <button className="relative p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-5-5V9a5 5 0 00-10 0v3l-5 5h5m5 0v1a3 3 0 01-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Export Button */}
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Export Report
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {dashboardStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </p>
                    <div className="flex items-center">
                      <span
                        className={`text-sm font-medium ${
                          stat.changeType === "positive"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {stat.change}
                      </span>
                      <span className="text-sm text-gray-500 ml-1">
                        vs last period
                      </span>
                    </div>
                  </div>
                  <div className="text-3xl">{stat.icon}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Activities */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Recent Activities
                    </h3>
                    <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                      View All
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div
                        key={activity.id}
                        className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <span className="text-lg">
                              {getStatusIcon(activity.type)}
                            </span>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">
                              {activity.title}
                            </p>
                            <span
                              className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                                activity.status,
                              )}`}
                            >
                              {activity.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            {activity.description}
                          </p>
                          <div className="flex items-center justify-between mt-2">
                            <p className="text-xs text-gray-500">
                              by {activity.user}
                            </p>
                            <p className="text-xs text-gray-500">
                              {activity.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Top IPOs */}
            <div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Top Performing IPOs
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {topIPOs.map((ipo) => (
                      <div
                        key={ipo.id}
                        className="flex items-center justify-between"
                      >
                        <div>
                          <p className="font-medium text-gray-900">
                            {ipo.company}
                          </p>
                          <p className="text-sm text-gray-600">{ipo.symbol}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">
                            {ipo.price}
                          </p>
                          <p className="text-sm text-green-600">{ipo.change}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 mt-6">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Quick Actions
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">➕</span>
                        <span className="font-medium text-gray-900">
                          Add New IPO
                        </span>
                      </div>
                    </button>
                    <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">👤</span>
                        <span className="font-medium text-gray-900">
                          Add User
                        </span>
                      </div>
                    </button>
                    <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">📊</span>
                        <span className="font-medium text-gray-900">
                          View Analytics
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="mt-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Platform Analytics
                  </h3>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                      Users
                    </button>
                    <button className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                      Revenue
                    </button>
                    <button className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                      IPOs
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-4">📊</div>
                    <p className="text-gray-600 font-medium">
                      Interactive Chart Visualization
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Showing data for {selectedPeriod}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
