import React from "react";

const Community = () => {
  return (
    <div className="bg-white min-h-screen px-6 py-10 text-black">
      <header className="flex justify-between items-center mb-12">
        <div className="text-2xl font-bold text-blue-800">BLUESTOCK</div>
        <nav className="space-x-6 hidden md:block">
          <a href="#" className="hover:underline">IPO</a>
          <a href="#" className="hover:underline">Community</a>
          <a href="#" className="hover:underline">Products</a>
          <a href="#" className="hover:underline">Brokers</a>
          <a href="#" className="hover:underline">Live News</a>
        </nav>
        <div className="space-x-4">
          <button className="text-sm text-gray-700">Sign In</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">Sign Up Now</button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">The Most Active Community of Traders & Investors</h1>
        <p className="text-gray-700 mb-6 max-w-xl">
          Join now to interact with thousands of active traders and investors to learn and share your knowledge on our buzzing forums.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded mb-12">Join Our Community</button>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Be a part of trading & investments club</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Rich environment for knowledge exchange</li>
              <li>Stay connected about the latest stock market</li>
              <li>Access exclusive community events, webinars, and meet-ups</li>
            </ul>

            <div className="grid grid-cols-2 gap-4 mt-8 text-center">
              <div className="p-4 border rounded shadow-sm">Dynamic Discussions</div>
              <div className="p-4 border rounded shadow-sm">Expert Insights</div>
              <div className="p-4 border rounded shadow-sm col-span-2">Real-Time Interaction</div>
            </div>
          </div>

          {/* Right Section - Chat Preview */}
          <div className="space-y-4">
            <div className="border p-4 rounded shadow-md">
              <div className="font-semibold">Om Jadhav</div>
              <p className="text-gray-600 text-sm">Is it good to long-term invest in TCS?</p>
            </div>
            <div className="border p-4 rounded shadow-md">
              <div className="font-semibold">Anish Wable</div>
              <p className="text-gray-600 text-sm">What's an options strategy?</p>
            </div>
            <div className="border p-4 rounded shadow-md">
              <div className="font-semibold">Gurvesh Rasate</div>
              <p className="text-gray-600 text-sm">
                Options trading is when investors try to earn profits based on stock price movements using contracts...
              </p>
              <button className="mt-2 bg-blue-600 text-white text-sm px-3 py-1 rounded">Read More</button>
            </div>
          </div>
        </div>
        <footer className="mt-16 text-center text-gray-600">
          <p className="text-lg font-semibold">Team Bluestock Cares</p>
        </footer>
      </main>
    </div>
  );
};
export default Community;