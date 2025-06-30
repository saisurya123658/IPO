import React, { useState } from "react";

const blogs = [
  { title: "Top Reasons for Life Insurance Claim Rejection", date: "20 June 2025", time: "5 mins read" },
  { title: "Best PSU Stocks in India", date: "20 June 2025", time: "4 mins read" },
  { title: "Banking & Financial Services", date: "20 June 2025", time: "4 mins read" },
  { title: "IRCTC India IPO – Everything You Must Know", date: "20 June 2025", time: "3 mins read" },
  { title: "Types of Drinking Trends – How to Prevent Them", date: "20 June 2025", time: "5 mins read" },
  { title: "Popular Finance Podcasts", date: "20 June 2025", time: "2 mins read" },
  { title: "Overhaul Oil Refinery IPO – Everything You Must Know", date: "20 June 2025", time: "5 mins read" },
  { title: "BRLDS IPO – Everything You Must Know", date: "20 June 2025", time: "6 mins read" },
  { title: "Tata Technologies IPO – Everything You Must Know", date: "20 June 2025", time: "4 mins read" },
  { title: "Best Pet Insurance Policies in India", date: "20 June 2025", time: "3 mins read" },
  { title: "Best FinTech Stocks in India", date: "20 June 2025", time: "3 mins read" },
  { title: "Best Stocks under ₹50 in India", date: "20 June 2025", time: "4 mins read" },
  { title: "Top Reasons for Life Insurance Claim Rejection", date: "20 June 2025", time: "5 mins read" },
  { title: "Best PSU Stocks in India", date: "20 June 2025", time: "4 mins read" },
  { title: "Banking & Financial Services", date: "20 June 2025", time: "4 mins read" },
  { title: "IRCTC India IPO – Everything You Must Know", date: "20 June 2025", time: "3 mins read" },
  { title: "Types of Drinking Trends – How to Prevent Them", date: "20 June 2025", time: "5 mins read" },
  { title: "Popular Finance Podcasts", date: "20 June 2025", time: "2 mins read" },
  { title: "Overhaul Oil Refinery IPO – Everything You Must Know", date: "20 June 2025", time: "5 mins read" },
  { title: "BRLDS IPO – Everything You Must Know", date: "20 June 2025", time: "6 mins read" },
  { title: "Tata Technologies IPO – Everything You Must Know", date: "20 June 2025", time: "4 mins read" },
  { title: "Best Pet Insurance Policies in India", date: "20 June 2025", time: "3 mins read" },
  { title: "Best FinTech Stocks in India", date: "20 June 2025", time: "3 mins read" },
  { title: "Best Stocks under ₹50 in India", date: "20 June 2025", time: "4 mins read" },
];

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = blogs.slice(startIndex, startIndex + blogsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-center text-2xl font-semibold mb-10">BLUESTOCK BLOG</h2>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentBlogs.map((blog, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-4 shadow-sm">
            <div className="bg-purple-500 h-32 rounded mb-4"></div>
            <h3 className="font-medium mb-2 text-lg">{blog.title}</h3>
            <p className="text-sm text-gray-600">{blog.date} • {blog.time}</p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-10 space-x-2">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 text-gray-500 hover:text-black disabled:opacity-50"
        >
          {"<"}
        </button>

        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            className={`px-3 py-1 rounded text-sm ${
              currentPage === i + 1
                ? "bg-gray-800 text-white"
                : "hover:bg-gray-200 text-gray-700"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 text-gray-500 hover:text-black disabled:opacity-50"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
