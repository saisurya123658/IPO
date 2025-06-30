import React from "react";

export default function Careers() {
  return (
    <div className="font-sans text-gray-800">
      {/* Breadcrumb */}
      <div className="text-sm text-blue-600 px-4 pt-4">
        <span className="text-gray-500">Home</span> / <span className="font-medium">Careers</span>
      </div>

      {/* Heading + CTA */}
      <section className="px-4 py-6 text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Together, Let’s Build The <br />
          Future Of Fintech !
        </h1>
        <p className="text-sm text-gray-600 max-w-md mx-auto mb-4">
          Join Bluestock Fintech to create disruptive fin-tech products,
          while working from anywhere!
        </p>
        <button className="bg-blue-600 text-white px-5 py-2 rounded font-medium hover:bg-blue-700 transition">
          See Job Openings
        </button>
        <div className="flex justify-center mt-6">
          <img
            src="/growth.png"
            alt="Team Growth"
            className="max-w-xs w-full"
          />
        </div>
      </section>

      {/* Download Banner */}
      <section className="bg-blue-600 text-white text-center rounded-lg px-6 py-8 max-w-md mx-auto my-8">
        <img
          src="/assets/app-preview.png"
          alt="App Preview"
          className="mx-auto mb-4"
        />
        <p className="text-sm font-semibold">4.4 K+ DOWNLOADS</p>

        <p className="mt-4 text-lg font-bold">Enjoy Free Learning, Analytics and Club</p>
        <p className="text-sm mb-4">Get the link to download the App</p>

        <div className="flex justify-center items-center bg-white p-2 rounded mb-4">
          <input
            type="text"
            placeholder="Enter your mobile no"
            className="flex-grow px-3 py-1 text-black outline-none"
          />
          <button className="text-blue-600 px-3">
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        <div className="flex justify-around items-center">
          <img src="/assets/qrcode.png" alt="QR Code" className="h-20" />
          <div className="flex flex-col space-y-2">
            <img src="/assets/google-play-badge.png" alt="Google Play" className="h-8" />
            <img src="/assets/app-store-badge.png" alt="App Store" className="h-8" />
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <p className="text-xs text-center text-gray-600 px-4 pb-6">
        All official communication with the HR team <br />
        at Bluestock Fintech will be through <a href="mailto:hr@bluestock.in" className="text-blue-600">hr@bluestock.in</a>
      </p>
    </div>
  );
}
