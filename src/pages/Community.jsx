import React from "react";

const Community = () => {
  return (
    <div className="bg-white min-h-screen px-6 py-10 text-black">
      <header className="flex justify-between items-center mb-12">
        <div className="flex items-center">
          <img src="/assest/Copy of logo.png" alt="Copy of logo" className="h-10 w-auto mr-4" />
            <h1 className="text-4xl  font-bold text-black-700">BLUESTOCK</h1>
          <span className="text-2xl font-extrabold text-gray-900"><span className="text-blue-600"></span></span>
        </div>
        <nav className="space-x-6 hidden md:block">
          <a href="/IPO" className="hover:underline">IPO</a>
          <a href="/community" className="hover:underline">Community</a>
          <a href="#" className="hover:underline">Products</a>
          <a href="/brokers" className="hover:underline">Brokers</a>
          <a href="/news">Live News <span className="ml-1 bg-blue-600 text-white text-xs font-bold px-1 rounded">NEW</span>
          </a>
        </nav>
        <div className="space-x-4">
          <button className="text-sm text-gray-700">Sign In</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">Sign Up Now</button>
        </div>
        <div aria-label="More options menu" role="button" style={{ fontSize: "1.25rem", cursor: "pointer", color: "#222" }}>⋮⋮</div>

      </header>

      <main className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div><h1 className="text-3xl font-bold mb-4">The Most Active <br/> Community of <br />Traders & Investors</h1>
        <p className="text-gray-700 mb-6 max-w-xl">
          Join now to interact with thousands of active traders and <br />investors to learn and share your knowledge on out <br /> buzzing forums.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded mb-12">Join Our Community</button></div>
        {/* Right Section - Chat Preview */}
          <div className="space-y-4">
            <div className="border p-2 rounded shadow-md">
              <div className="font-semibold">Om Jadhav</div>
              <p className="text-gray-600 text-sm">Is it good to long-term invest in TCS?</p>
            </div>
            <div className="border p-2 rounded shadow-md">
              <div className="font-semibold">Anish Wable</div>
              <p className="text-gray-600 text-sm">What's an options strategy?</p>
            </div>
            <div className="border p-2 rounded shadow-md">
              <div className="font-semibold">Gurvesh Rasate</div>
              <p className="text-gray-600 text-sm">
                Options trading is when investors try to earn profits based on stock price movements using contracts...
              </p>
              <button className="mt-1 bg-blue-600 text-white text-sm px-3 py-1 rounded">Read More</button>
            </div>
          </div>
          </div>

        <div className="grid md:grid-cols-2 gap-14">
          {/* Left Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Be a part of trading & investments club</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Rich environment for knowledge exchange</li>
              <li>Stay connected about the latest stock market</li>
              <li>Access exclusive community events, webinars, and meet-ups</li>
            </ul>
          </div>

          {/* Right Section - Chat Preview */}
          <div className="space-y-4 grid grid-cols-2 gap-4 mt-8 text-center">
            <div className="p-4 border rounded shadow-sm">Dynamic Discussions</div>
            <div className="p-4 border rounded shadow-sm">Expert Insights</div>
            <div className="p-4 border rounded shadow-sm col-span-2">Real-Time Interaction</div>
          </div>
        </div>
        <footer className="mt-16 text-center text-black-600">
          <div>
          <p className="text-lg font-semibold" style={{fontSize:'2rem'}}>Team Bluestock Cares</p>
            <h4 className="text-center mt-2 text-gray-600">interact with our members to engage<br />clarify and contribute</h4>
          </div>
          <div className="grid md:grid-cols-2 mt-10 gap-12">
          <div>
            <h1 className="text-3xl font-bold mb-7">Interact with our<br/>Experts</h1>
            <ul className="list-disc pl-14 space-y-2 text-gray-700">
              <li>Get Valid Suggestions</li>
              <li>Raise Issues or Corcerns</li>
              <li>Ask your Questions</li>
            </ul>


        </div>
        {/* Right Section - Chat Preview */}
          <div className="space-y-4">
            <div className="border p-2 rounded shadow-md">
              <div className="font-semibold">pravin deshmukh </div>
              <p className="text-gray-600 text-sm">What is options trading? </p>
            </div>
            <div className="border p-2 rounded shadow-md">
              <div className="font-semibold">Ganesh karale
              </div>
              <p className="text-gray-600 text-sm">Options trading is the trading of instruments�that give you the right to buy or sell a specific�security at a specific price on a specific date.�Hope this helps!</p>
            </div>
          </div>
          </div>
        </footer>
      </main>
    </div>
  );
};
export default Community;
