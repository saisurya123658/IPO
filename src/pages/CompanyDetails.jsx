import { useState } from "react";

function CompanyDetails() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isWatchlisted, setIsWatchlisted] = useState(false);
  const companyData = {
    name: "TechFlow Inc.",
    symbol: "TFLW",
    sector: "Technology",
    industry: "AI & Automation",
    price: "$42.00",
    priceRange: "$38.00 - $46.00",
    shares: "10.5M",
    marketCap: "$441M",
    ipoDate: "December 15, 2024",
    exchange: "NASDAQ",
    underwriter: "Goldman Sachs, Morgan Stanley",
    rating: 4.5,
    change: "+12.5%",
    changeValue: "+$4.67",
    description:
      "TechFlow Inc. is a leading AI-powered workflow automation platform that helps businesses streamline their operations and increase productivity. Founded in 2019, the company has grown rapidly and serves over 5,000 enterprise clients worldwide.",
  };

  const financialData = {
    revenue: "$125.2M",
    revenueGrowth: "+89%",
    netIncome: "$15.8M",
    grossMargin: "75%",
    employees: "1,250",
    founded: "2019",
  };

  const keyMetrics = [
    { label: "P/E Ratio", value: "28.5", trend: "neutral" },
    { label: "Revenue Growth", value: "+89%", trend: "positive" },
    { label: "Gross Margin", value: "75%", trend: "positive" },
    { label: "Market Share", value: "12%", trend: "positive" },
  ];

  const riskFactors = [
    "Intense competition in the AI automation space",
    "Dependence on key enterprise clients",
    "Regulatory changes in data privacy laws",
    "Economic downturn affecting enterprise spending",
  ];

  const recentNews = [
    {
      title: "TechFlow Announces Partnership with Microsoft",
      date: "Dec 10, 2024",
      source: "TechCrunch",
    },
    {
      title: "Q3 Revenue Beats Expectations by 15%",
      date: "Dec 8, 2024",
      source: "Financial Times",
    },
    {
      title: "IPO Roadshow Begins with Strong Investor Interest",
      date: "Dec 5, 2024",
      source: "Bloomberg",
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
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-gray-700">
            Home
          </a>{" "}
          / <span className="text-gray-900">TechFlow Inc.</span>
        </nav>

        {/* Company Header */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl font-bold">TF</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {companyData.name}
                  </h1>
                  <p className="text-gray-600">
                    {companyData.symbol} • {companyData.sector} •{" "}
                    {companyData.industry}
                  </p>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-sm ${i < Math.floor(companyData.rating) ? "text-yellow-400" : "text-gray-300"}`}
                      >
                        ⭐
                      </span>
                    ))}
                    <span className="text-sm text-gray-500 ml-2">
                      ({companyData.rating})
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-3xl font-bold text-gray-900">
                  {companyData.price}
                </div>
                <div className="text-green-600 font-semibold">
                  {companyData.change} ({companyData.changeValue})
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  Range: {companyData.priceRange}
                </div>
                <div className="flex space-x-2 mt-4">
                  <button
                    onClick={() => setIsWatchlisted(!isWatchlisted)}
                    className={`px-4 py-2 rounded transition-colors ${
                      isWatchlisted
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    {isWatchlisted ? "✓ Watchlisted" : "Add to Watchlist"}
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50">
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Tabs */}
            <div className="bg-white rounded-lg shadow mb-6">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  {[
                    { id: "overview", label: "Overview" },
                    { id: "financials", label: "Financials" },
                    { id: "risks", label: "Risk Factors" },
                    { id: "news", label: "News" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm ${
                        activeTab === tab.id
                          ? "border-blue-500 text-blue-600"
                          : "border-transparent text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {activeTab === "overview" && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Company Overview
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {companyData.description}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                      <div>
                        <label className="text-sm text-gray-500">
                          IPO Date
                        </label>
                        <div className="font-semibold">
                          {companyData.ipoDate}
                        </div>
                      </div>
                      <div>
                        <label className="text-sm text-gray-500">
                          Exchange
                        </label>
                        <div className="font-semibold">
                          {companyData.exchange}
                        </div>
                      </div>
                      <div>
                        <label className="text-sm text-gray-500">
                          Shares Offered
                        </label>
                        <div className="font-semibold">
                          {companyData.shares}
                        </div>
                      </div>
                      <div>
                        <label className="text-sm text-gray-500">
                          Market Cap
                        </label>
                        <div className="font-semibold">
                          {companyData.marketCap}
                        </div>
                      </div>
                      <div>
                        <label className="text-sm text-gray-500">
                          Employees
                        </label>
                        <div className="font-semibold">
                          {financialData.employees}
                        </div>
                      </div>
                      <div>
                        <label className="text-sm text-gray-500">Founded</label>
                        <div className="font-semibold">
                          {financialData.founded}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-gray-500">
                        Lead Underwriters
                      </label>
                      <div className="font-semibold">
                        {companyData.underwriter}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "financials" && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Financial Performance
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <label className="text-sm text-gray-500">
                          Revenue (TTM)
                        </label>
                        <div className="text-xl font-bold text-gray-900">
                          {financialData.revenue}
                        </div>
                        <div className="text-green-600 text-sm">
                          {financialData.revenueGrowth} YoY
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <label className="text-sm text-gray-500">
                          Net Income
                        </label>
                        <div className="text-xl font-bold text-gray-900">
                          {financialData.netIncome}
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <label className="text-sm text-gray-500">
                          Gross Margin
                        </label>
                        <div className="text-xl font-bold text-gray-900">
                          {financialData.grossMargin}
                        </div>
                      </div>
                    </div>

                    <h4 className="text-md font-semibold text-gray-900 mb-4">
                      Key Metrics
                    </h4>
                    <div className="space-y-3">
                      {keyMetrics.map((metric, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded"
                        >
                          <span className="text-gray-700">{metric.label}</span>
                          <span
                            className={`font-semibold ${
                              metric.trend === "positive"
                                ? "text-green-600"
                                : metric.trend === "negative"
                                  ? "text-red-600"
                                  : "text-gray-900"
                            }`}
                          >
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "risks" && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Risk Factors
                    </h3>
                    <div className="space-y-4">
                      {riskFactors.map((risk, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700">{risk}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "news" && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Recent News
                    </h3>
                    <div className="space-y-4">
                      {recentNews.map((news, index) => (
                        <div
                          key={index}
                          className="border-b border-gray-200 pb-4 last:border-b-0"
                        >
                          <h4 className="font-medium text-gray-900 mb-1">
                            {news.title}
                          </h4>
                          <div className="text-sm text-gray-500">
                            {news.source} • {news.date}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Stats
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Market Cap</span>
                  <span className="text-sm font-medium">
                    {companyData.marketCap}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Revenue</span>
                  <span className="text-sm font-medium">
                    {financialData.revenue}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Employees</span>
                  <span className="text-sm font-medium">
                    {financialData.employees}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Exchange</span>
                  <span className="text-sm font-medium">
                    {companyData.exchange}
                  </span>
                </div>
              </div>
            </div>

            {/* Similar IPOs */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Similar IPOs
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div>
                    <div className="font-medium text-sm">AutoFlow AI</div>
                    <div className="text-xs text-gray-500">
                      AFLW • Technology
                    </div>
                  </div>
                  <div className="text-sm font-medium">$38.00</div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div>
                    <div className="font-medium text-sm">DataStream Pro</div>
                    <div className="text-xs text-gray-500">
                      DSTR • Technology
                    </div>
                  </div>
                  <div className="text-sm font-medium">$45.00</div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div>
                    <div className="font-medium text-sm">CloudWork Inc</div>
                    <div className="text-xs text-gray-500">
                      CWRK • Technology
                    </div>
                  </div>
                  <div className="text-sm font-medium">$52.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CompanyDetails;
