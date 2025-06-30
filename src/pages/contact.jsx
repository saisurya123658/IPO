
// ContactPage.jsx
import { FaArrowRight } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="font-sans">
      {/* Top Nav Placeholder */}
      <div className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">BLUESTOCK</h1>
        <div className="space-x-4">
          <button className="text-sm">Sign In</button>
          <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm">Sign Up Now</button>
        </div>
      </div>

      {/* Contact Options */}
      <div className="px-6 py-8">
        <h2 className="text-2xl font-semibold mb-6">How Can We Help You ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email Box */}
          <div className="border rounded-lg p-5">
            <h3 className="text-lg font-medium mb-1">Email us</h3>
            <p className="text-sm text-gray-600 mb-4">One of our agents will respond at the earliest</p>
            <div className="flex justify-between items-center border px-4 py-2 rounded text-blue-600 font-semibold hover:bg-blue-50 transition">
              hello@bluestock.in
              <FaArrowRight />
            </div>
          </div>

          {/* Chat Box */}
          <div className="border rounded-lg p-5">
            <h3 className="text-lg font-medium mb-1">Chat us</h3>
            <p className="text-sm text-gray-600 mb-4">Available from 8:00AM to 5:00PM</p>
            <div className="flex justify-between items-center border px-4 py-2 rounded text-blue-600 font-semibold hover:bg-blue-50 transition">
              Open Chat
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>

      {/* Community Section */}
      <div className="bg-indigo-600 text-white text-center py-10 px-6">
        <h2 className="text-2xl font-bold mb-2">Interact With Us in Our Active Community</h2>
        <p className="mb-6 max-w-xl mx-auto text-sm">
          Ask questions or discuss anything related to investing or trading in the most active trading & investing community
        </p>
        <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition">JOIN NOW</button>
      </div>

      {/* QR Download Box */}
      <div className="absolute bottom-6 left-6 bg-white shadow-md p-4 rounded-md">
        <p className="text-sm font-medium mb-2">Download Bluestock Mobile App</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/QR_Code_LinkedIn.svg" alt="QR" className="w-32 h-32" />
        <div className="flex justify-center gap-2 mt-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1024px-Apple_logo_black.svg.png" alt="iOS" className="w-4 h-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg" alt="Android" className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
  
};

export default ContactPage;
