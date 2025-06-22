import { useState } from "react";

function News() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const newsArticles = [
    {
      id: 1,
      title: "TechFlow Inc. Announces Record-Breaking IPO Oversubscription",
      summary:
        "The AI workflow automation company sees 15x oversubscription in its public offering, signaling strong investor confidence in the tech sector.",
      author: "Sarah Johnson",
      date: "Dec 12, 2024",
      readTime: "3 min read",
      category: "IPO News",
      image: "tech-news.jpg",
      trending: true,
    },
    {
      id: 2,
      title: "Green Energy Sector Sees Surge in IPO Applications",
      summary:
        "Multiple renewable energy companies are planning to go public in Q1 2025, driven by favorable government policies and investor demand.",
      author: "Michael Chen",
      date: "Dec 11, 2024",
      readTime: "5 min read",
      category: "Market Analysis",
      image: "green-energy.jpg",
      trending: false,
    },
    {
      id: 3,
      title: "BioMed Solutions IPO: What Investors Need to Know",
      summary:
        "A comprehensive analysis of the upcoming healthcare IPO, including financial projections, competitive landscape, and growth potential.",
      author: "Dr. Lisa Park",
      date: "Dec 10, 2024",
      readTime: "7 min read",
      category: "Company Analysis",
      image: "biomed.jpg",
      trending: true,
    },
    {
      id: 4,
      title: "IPO Market Outlook: Strong Performance Expected in 2025",
      summary:
        "Market experts predict a robust IPO market in 2025, with technology and healthcare sectors leading the way.",
      author: "Robert Williams",
      date: "Dec 9, 2024",
      readTime: "4 min read",
      category: "Market Analysis",
      image: "market-outlook.jpg",
      trending: false,
    },
    {
      id: 5,
      title: "Cryptocurrency Exchange IPOs Face Regulatory Scrutiny",
      summary:
        "Recent regulatory developments may impact the timeline and structure of planned cryptocurrency exchange public offerings.",
      author: "Amanda Rodriguez",
      date: "Dec 8, 2024",
      readTime: "6 min read",
      category: "Regulatory",
      image: "crypto-regulation.jpg",
      trending: false,
    },
    {
      id: 6,
      title: "Private Equity Exits Drive IPO Activity Surge",
      summary:
        "Private equity firms are accelerating their exit strategies through public offerings, contributing to increased IPO volume.",
      author: "Thomas Lee",
      date: "Dec 7, 2024",
      readTime: "4 min read",
      category: "Market Analysis",
      image: "private-equity.jpg",
      trending: false,
    },
  ];

  const categories = [
    "all",
    "IPO News",
    "Market Analysis",
    "Company Analysis",
    "Regulatory",
  ];

  const filteredNews = newsArticles.filter((article) => {
    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch = article.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const trendingNews = newsArticles.filter((article) => article.trending);

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
                <a
                  href="/news"
                  className="text-blue-600 font-semibold border-b-2 border-blue-600"
                >
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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                IPO News & Analysis
              </h1>
              <p className="text-gray-600">
                Stay updated with the latest IPO market news, analysis, and
                insights
              </p>
            </div>

            {/* Search and Filters */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search news articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex gap-2">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-2 border rounded-lg bg-white"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Featured Article */}
            {filteredNews.length > 0 && (
              <div className="mb-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-64 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {filteredNews[0].category}
                      </span>
                      {filteredNews[0].trending && (
                        <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                          🔥 Trending
                        </span>
                      )}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      {filteredNews[0].title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {filteredNews[0].summary}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>By {filteredNews[0].author}</span>
                        <span>{filteredNews[0].date}</span>
                        <span>{filteredNews[0].readTime}</span>
                      </div>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* News Articles Grid */}
            <div className="space-y-6">
              {filteredNews.slice(1).map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <div className="flex">
                    <div className="w-48 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-l-lg"></div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                          {article.category}
                        </span>
                        {article.trending && (
                          <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                            🔥 Trending
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{article.summary}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>By {article.author}</span>
                          <span>{article.date}</span>
                          <span>{article.readTime}</span>
                        </div>
                        <button className="text-blue-600 hover:text-blue-700 font-medium">
                          Read More →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Trending News */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                🔥 Trending Now
              </h3>
              <div className="space-y-4">
                {trendingNews.map((article) => (
                  <div
                    key={article.id}
                    className="border-b border-gray-100 pb-4 last:border-b-0"
                  >
                    <h4 className="text-sm font-medium text-gray-900 mb-1">
                      {article.title}
                    </h4>
                    <div className="text-xs text-gray-500">
                      {article.author} • {article.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Summary */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Market Summary
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">IPOs This Week</span>
                  <span className="text-sm font-medium">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Volume</span>
                  <span className="text-sm font-medium text-green-600">
                    $2.1B
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">
                    Avg. Performance
                  </span>
                  <span className="text-sm font-medium text-green-600">
                    +12.3%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Top Sector</span>
                  <span className="text-sm font-medium">Technology</span>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Stay Updated
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Get the latest IPO news delivered to your inbox
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border rounded text-sm"
                />
                <button className="w-full px-3 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default News;
