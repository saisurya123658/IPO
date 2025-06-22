import { useState } from "react";

function ContentManagement() {
  const [activeTab, setActiveTab] = useState("news");
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedContent, setSelectedContent] = useState([]);

  const newsArticles = [
    {
      id: 1,
      title: "TechFlow Inc. Announces Record-Breaking IPO Oversubscription",
      author: "Sarah Johnson",
      status: "Published",
      date: "2024-12-12",
      category: "IPO News",
      views: 45230,
    },
    {
      id: 2,
      title: "Green Energy Sector Sees Surge in IPO Applications",
      author: "Michael Chen",
      status: "Draft",
      date: "2024-12-11",
      category: "Market Analysis",
      views: 0,
    },
    {
      id: 3,
      title: "BioMed Solutions IPO: What Investors Need to Know",
      author: "Dr. Lisa Park",
      status: "Published",
      date: "2024-12-10",
      category: "Company Analysis",
      views: 38950,
    },
    {
      id: 4,
      title: "IPO Market Outlook: Strong Performance Expected in 2025",
      author: "Robert Williams",
      status: "Under Review",
      date: "2024-12-09",
      category: "Market Analysis",
      views: 0,
    },
  ];

  const pages = [
    {
      id: 1,
      title: "About Us",
      slug: "/about",
      status: "Published",
      lastModified: "2024-12-10",
      author: "Admin User",
    },
    {
      id: 2,
      title: "Privacy Policy",
      slug: "/privacy",
      status: "Published",
      lastModified: "2024-12-08",
      author: "Legal Team",
    },
    {
      id: 3,
      title: "Investment Guide",
      slug: "/guide",
      status: "Draft",
      lastModified: "2024-12-12",
      author: "Content Team",
    },
    {
      id: 4,
      title: "Terms of Service",
      slug: "/terms",
      status: "Published",
      lastModified: "2024-12-05",
      author: "Legal Team",
    },
  ];

  const mediaFiles = [
    {
      id: 1,
      name: "techflow-logo.png",
      type: "Image",
      size: "245 KB",
      uploaded: "2024-12-12",
      usedIn: "TechFlow IPO Article",
    },
    {
      id: 2,
      name: "market-chart.svg",
      type: "Image",
      size: "89 KB",
      uploaded: "2024-12-11",
      usedIn: "Market Analysis",
    },
    {
      id: 3,
      name: "company-presentation.pdf",
      type: "Document",
      size: "2.1 MB",
      uploaded: "2024-12-10",
      usedIn: "BioMed Solutions Page",
    },
    {
      id: 4,
      name: "investor-video.mp4",
      type: "Video",
      size: "15.7 MB",
      uploaded: "2024-12-09",
      usedIn: "Investment Guide",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Published":
        return "bg-green-100 text-green-800";
      case "Draft":
        return "bg-gray-100 text-gray-800";
      case "Under Review":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleSelectContent = (contentId) => {
    setSelectedContent((prev) =>
      prev.includes(contentId)
        ? prev.filter((id) => id !== contentId)
        : [...prev, contentId],
    );
  };

  const getCurrentData = () => {
    switch (activeTab) {
      case "news":
        return newsArticles;
      case "pages":
        return pages;
      case "media":
        return mediaFiles;
      default:
        return [];
    }
  };

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
              <span className="text-gray-600">Content Management</span>
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
                  className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  📈 Analytics
                </a>
                <a
                  href="/admin/content"
                  className="bg-blue-50 border-r-2 border-blue-600 text-blue-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
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
                <h2 className="text-3xl font-bold text-gray-900">
                  Content Management
                </h2>
                <p className="text-gray-600">
                  Manage articles, pages, and media files
                </p>
              </div>
              <button
                onClick={() => setShowAddModal(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                ➕ Create New Content
              </button>
            </div>
          </div>

          {/* Content Tabs */}
          <div className="bg-white rounded-lg shadow mb-6">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                {[
                  { id: "news", label: "News Articles", icon: "📰" },
                  { id: "pages", label: "Pages", icon: "📄" },
                  { id: "media", label: "Media Library", icon: "🖼️" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                      activeTab === tab.id
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <span>{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6">
              {/* Bulk Actions */}
              {selectedContent.length > 0 && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-800 font-medium">
                      {selectedContent.length} item(s) selected
                    </span>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700">
                        ✅ Publish
                      </button>
                      <button className="px-3 py-1 bg-yellow-600 text-white rounded text-sm hover:bg-yellow-700">
                        📝 Edit
                      </button>
                      <button className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700">
                        🗑️ Delete
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Content Table */}
              {activeTab === "news" && (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Article
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Author
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Views
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {newsArticles.map((article) => (
                        <tr key={article.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <input
                              type="checkbox"
                              checked={selectedContent.includes(article.id)}
                              onChange={() => handleSelectContent(article.id)}
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                          </td>
                          <td className="px-6 py-4">
                            <div>
                              <div className="text-sm font-medium text-gray-900 max-w-xs truncate">
                                {article.title}
                              </div>
                              <div className="text-sm text-gray-500">
                                {article.category}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {article.author}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                                article.status,
                              )}`}
                            >
                              {article.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {article.views.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {new Date(article.date).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-700">
                                👁️
                              </button>
                              <button className="text-green-600 hover:text-green-700">
                                ✏️
                              </button>
                              <button className="text-red-600 hover:text-red-700">
                                🗑️
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === "pages" && (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Page
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Author
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Last Modified
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {pages.map((page) => (
                        <tr key={page.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <input
                              type="checkbox"
                              checked={selectedContent.includes(page.id)}
                              onChange={() => handleSelectContent(page.id)}
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                          </td>
                          <td className="px-6 py-4">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {page.title}
                              </div>
                              <div className="text-sm text-gray-500">
                                {page.slug}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {page.author}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                                page.status,
                              )}`}
                            >
                              {page.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {new Date(page.lastModified).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-700">
                                👁️
                              </button>
                              <button className="text-green-600 hover:text-green-700">
                                ✏️
                              </button>
                              <button className="text-red-600 hover:text-red-700">
                                🗑️
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === "media" && (
                <div>
                  <div className="mb-6">
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                      📤 Upload Files
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mediaFiles.map((file) => (
                      <div
                        key={file.id}
                        className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-3xl">
                            {file.type === "Image"
                              ? "🖼️"
                              : file.type === "Video"
                                ? "🎥"
                                : "📄"}
                          </div>
                          <input
                            type="checkbox"
                            checked={selectedContent.includes(file.id)}
                            onChange={() => handleSelectContent(file.id)}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                        </div>
                        <h4 className="font-medium text-gray-900 truncate mb-1">
                          {file.name}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {file.size} • {file.type}
                        </p>
                        <p className="text-xs text-gray-500 mb-3">
                          Used in: {file.usedIn}
                        </p>
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-700 text-sm">
                            View
                          </button>
                          <button className="text-green-600 hover:text-green-700 text-sm">
                            Edit
                          </button>
                          <button className="text-red-600 hover:text-red-700 text-sm">
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Add Content Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Create New Content
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content Type
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>News Article</option>
                  <option>Static Page</option>
                  <option>Company Profile</option>
                  <option>Market Analysis</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter content title"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Author
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Author name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>IPO News</option>
                    <option>Market Analysis</option>
                    <option>Company Analysis</option>
                    <option>Regulatory</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content
                </label>
                <textarea
                  rows={8}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write your content here..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Draft</option>
                  <option>Under Review</option>
                  <option>Published</option>
                </select>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Create Content
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContentManagement;
