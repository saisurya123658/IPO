// import { useState } from "react";

// function News() {
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [searchTerm, setSearchTerm] = useState("");

//   const newsArticles = [
//     {
//       id: 1,
//       title: "TechFlow Inc. Announces Record-Breaking IPO Oversubscription",
//       summary:
//         "The AI workflow automation company sees 15x oversubscription in its public offering, signaling strong investor confidence in the tech sector.",
//       author: "Sarah Johnson",
//       date: "Dec 12, 2024",
//       readTime: "3 min read",
//       category: "IPO News",
//       image: "tech-news.jpg",
//       trending: true,
//     },
//     {
//       id: 2,
//       title: "Green Energy Sector Sees Surge in IPO Applications",
//       summary:
//         "Multiple renewable energy companies are planning to go public in Q1 2025, driven by favorable government policies and investor demand.",
//       author: "Michael Chen",
//       date: "Dec 11, 2024",
//       readTime: "5 min read",
//       category: "Market Analysis",
//       image: "green-energy.jpg",
//       trending: false,
//     },
//     {
//       id: 3,
//       title: "BioMed Solutions IPO: What Investors Need to Know",
//       summary:
//         "A comprehensive analysis of the upcoming healthcare IPO, including financial projections, competitive landscape, and growth potential.",
//       author: "Dr. Lisa Park",
//       date: "Dec 10, 2024",
//       readTime: "7 min read",
//       category: "Company Analysis",
//       image: "biomed.jpg",
//       trending: true,
//     },
//     {
//       id: 4,
//       title: "IPO Market Outlook: Strong Performance Expected in 2025",
//       summary:
//         "Market experts predict a robust IPO market in 2025, with technology and healthcare sectors leading the way.",
//       author: "Robert Williams",
//       date: "Dec 9, 2024",
//       readTime: "4 min read",
//       category: "Market Analysis",
//       image: "market-outlook.jpg",
//       trending: false,
//     },
//     {
//       id: 5,
//       title: "Cryptocurrency Exchange IPOs Face Regulatory Scrutiny",
//       summary:
//         "Recent regulatory developments may impact the timeline and structure of planned cryptocurrency exchange public offerings.",
//       author: "Amanda Rodriguez",
//       date: "Dec 8, 2024",
//       readTime: "6 min read",
//       category: "Regulatory",
//       image: "crypto-regulation.jpg",
//       trending: false,
//     },
//     {
//       id: 6,
//       title: "Private Equity Exits Drive IPO Activity Surge",
//       summary:
//         "Private equity firms are accelerating their exit strategies through public offerings, contributing to increased IPO volume.",
//       author: "Thomas Lee",
//       date: "Dec 7, 2024",
//       readTime: "4 min read",
//       category: "Market Analysis",
//       image: "private-equity.jpg",
//       trending: false,
//     },
//   ];

//   const categories = [
//     "all",
//     "IPO News",
//     "Market Analysis",
//     "Company Analysis",
//     "Regulatory",
//   ];

//   const filteredNews = newsArticles.filter((article) => {
//     const matchesCategory =
//       selectedCategory === "all" || article.category === selectedCategory;
//     const matchesSearch = article.title
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   const trendingNews = newsArticles.filter((article) => article.trending);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow">
//         <div className="max-w-7xl mx-auto px-4 py-4">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center space-x-4">
//               <a href="/" className="text-2xl font-bold text-blue-600">
//                 IPO Hub
//               </a>
//               <nav className="hidden md:flex space-x-6">
//                 <a href="/" className="text-gray-600 hover:text-gray-900">
//                   Dashboard
//                 </a>
//                 <a
//                   href="/calendar"
//                   className="text-gray-600 hover:text-gray-900"
//                 >
//                   IPO Calendar
//                 </a>
//                 <a
//                   href="/watchlist"
//                   className="text-gray-600 hover:text-gray-900"
//                 >
//                   Watchlist
//                 </a>
//                 <a
//                   href="/news"
//                   className="text-blue-600 font-semibold border-b-2 border-blue-600"
//                 >
//                   News
//                 </a>
//               </nav>
//             </div>
//             <div className="flex items-center space-x-4">
//               <button className="px-4 py-2 text-gray-600 hover:text-gray-800">
//                 Sign In
//               </button>
//               <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
//                 Get Started
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           {/* Main Content Area */}
//           <div className="lg:col-span-3">
//             {/* Page Header */}
//             <div className="mb-8">
//               <h1 className="text-3xl font-bold text-gray-900 mb-2">
//                 IPO News & Analysis
//               </h1>
//               <p className="text-gray-600">
//                 Stay updated with the latest IPO market news, analysis, and
//                 insights
//               </p>
//             </div>

//             {/* Search and Filters */}
//             <div className="mb-8">
//               <div className="flex flex-col md:flex-row gap-4 mb-6">
//                 <div className="flex-1">
//                   <input
//                     type="text"
//                     placeholder="Search news articles..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>
//                 <div className="flex gap-2">
//                   <select
//                     value={selectedCategory}
//                     onChange={(e) => setSelectedCategory(e.target.value)}
//                     className="px-4 py-2 border rounded-lg bg-white"
//                   >
//                     {categories.map((category) => (
//                       <option key={category} value={category}>
//                         {category === "all" ? "All Categories" : category}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//             </div>

//             {/* Featured Article */}
//             {filteredNews.length > 0 && (
//               <div className="mb-8">
//                 <div className="bg-white rounded-lg shadow-md overflow-hidden">
//                   <div className="h-64 bg-gradient-to-r from-blue-500 to-purple-600"></div>
//                   <div className="p-6">
//                     <div className="flex items-center justify-between mb-2">
//                       <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
//                         {filteredNews[0].category}
//                       </span>
//                       {filteredNews[0].trending && (
//                         <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
//                           🔥 Trending
//                         </span>
//                       )}
//                     </div>
//                     <h2 className="text-2xl font-bold text-gray-900 mb-3">
//                       {filteredNews[0].title}
//                     </h2>
//                     <p className="text-gray-600 mb-4">
//                       {filteredNews[0].summary}
//                     </p>
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center space-x-4 text-sm text-gray-500">
//                         <span>By {filteredNews[0].author}</span>
//                         <span>{filteredNews[0].date}</span>
//                         <span>{filteredNews[0].readTime}</span>
//                       </div>
//                       <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
//                         Read More
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* News Articles Grid */}
//             <div className="space-y-6">
//               {filteredNews.slice(1).map((article) => (
//                 <div
//                   key={article.id}
//                   className="bg-white rounded-lg shadow hover:shadow-md transition-shadow"
//                 >
//                   <div className="flex">
//                     <div className="w-48 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-l-lg"></div>
//                     <div className="flex-1 p-6">
//                       <div className="flex items-center justify-between mb-2">
//                         <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
//                           {article.category}
//                         </span>
//                         {article.trending && (
//                           <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
//                             🔥 Trending
//                           </span>
//                         )}
//                       </div>
//                       <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                         {article.title}
//                       </h3>
//                       <p className="text-gray-600 mb-4">{article.summary}</p>
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center space-x-4 text-sm text-gray-500">
//                           <span>By {article.author}</span>
//                           <span>{article.date}</span>
//                           <span>{article.readTime}</span>
//                         </div>
//                         <button className="text-blue-600 hover:text-blue-700 font-medium">
//                           Read More →
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Load More */}
//             <div className="text-center mt-8">
//               <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">
//                 Load More Articles
//               </button>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="lg:col-span-1">
//             {/* Trending News */}
//             <div className="bg-white rounded-lg shadow p-6 mb-6">
//               <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                 🔥 Trending Now
//               </h3>
//               <div className="space-y-4">
//                 {trendingNews.map((article) => (
//                   <div
//                     key={article.id}
//                     className="border-b border-gray-100 pb-4 last:border-b-0"
//                   >
//                     <h4 className="text-sm font-medium text-gray-900 mb-1">
//                       {article.title}
//                     </h4>
//                     <div className="text-xs text-gray-500">
//                       {article.author} • {article.date}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Market Summary */}
//             <div className="bg-white rounded-lg shadow p-6 mb-6">
//               <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                 Market Summary
//               </h3>
//               <div className="space-y-3">
//                 <div className="flex justify-between">
//                   <span className="text-sm text-gray-600">IPOs This Week</span>
//                   <span className="text-sm font-medium">3</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-sm text-gray-600">Total Volume</span>
//                   <span className="text-sm font-medium text-green-600">
//                     $2.1B
//                   </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-sm text-gray-600">
//                     Avg. Performance
//                   </span>
//                   <span className="text-sm font-medium text-green-600">
//                     +12.3%
//                   </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-sm text-gray-600">Top Sector</span>
//                   <span className="text-sm font-medium">Technology</span>
//                 </div>
//               </div>
//             </div>

//             {/* Newsletter Signup */}
//             <div className="bg-blue-50 rounded-lg p-6">
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                 Stay Updated
//               </h3>
//               <p className="text-sm text-gray-600 mb-4">
//                 Get the latest IPO news delivered to your inbox
//               </p>
//               <div className="space-y-3">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-full px-3 py-2 border rounded text-sm"
//                 />
//                 <button className="w-full px-3 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default News;
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
      image: "https://www.labellerr.com/blog/content/images/2023/03/workflow-automation.webp", // Tech IPO
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
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", // Green Energy
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
      image: "https://imgs.search.brave.com/ePZ2T2ORUkNakAjCof-0AR9YYWimd9K0M9QqjEW-eW4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWdw/cm94eS5kaXZlY2Ru/LmNvbS9CR3VHS3px/YWh6bE5uYTJnWjlX/RUlLdUpsRUZWY29k/dFkxdzJDbFpOZE9Z/L2c6Y2UvcnM6Zmls/bDoxMjAwOjY3NTox/L1ozTTZMeTlrYVha/bGMybDBaUzF6ZEc5/eVlXZGxMMlJwZG1W/cGJXRm5aUzlDU1U5/VVJVTklYMmx3YjE5/MGNtRmphMlZ5WDBs/VVgweGxZV1JsY25O/b2FYQmZZMjl3ZVM1/d2JtYz0ud2VicA", // BioMed (doctor, lab, or healthcare theme)
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
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80", // Market Outlook
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
      image: "data:image/webp;base64,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", // Crypto Regulation
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
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80", // Private Equity
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
                <a href="/calendar" className="text-gray-600 hover:text-gray-900">
                  IPO Calendar
                </a>
                <a href="/watchlist" className="text-gray-600 hover:text-gray-900">
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
                <a href="/signupnow">Sign In</a>
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
                  <img
                    src={filteredNews[0].image}
                    alt={filteredNews[0].title}
                    className="w-full h-64 object-cover"
                  />
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
              {filteredNews.length > 1 ? (
                filteredNews.slice(1).map((article) => (
                  <div
                    key={article.id}
                    className="bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                  >
                    <div className="flex">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-48 h-32 object-cover rounded-l-lg"
                      />
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
                ))
              ) : filteredNews.length === 1 ? (
                <p className="text-center text-gray-600">
                  No more articles in this category.
                </p>
              ) : (
                <p className="text-center text-gray-600">
                  No articles found for your search.
                </p>
              )}
            </div>

            {/* Load More */}
            {filteredNews.length > 1 && (
              <div className="text-center mt-8">
                <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">
                  Load More Articles
                </button>
              </div>
            )}
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
