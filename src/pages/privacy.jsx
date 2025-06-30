import { ShieldCheck, User, Lock, Share2, BarChart } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="bg-white min-h-screen py-10 px-4 md:px-8 lg:px-16 text-gray-900">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">
          Privacy Policy
        </h1>
        <p className="mb-8 text-lg text-center text-gray-700">
          At <strong>BluStock</strong>, we value your trust and are committed to protecting your privacy through transparent practices and robust security.
        </p>

        {/* Section 1: Data We Collect */}
        <div className="border-l-4 border-blue-600 pl-4 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <User className="text-blue-600" />
            <h2 className="text-2xl font-semibold">1. Data We Collect</h2>
          </div>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Email address, phone number, and name (if provided).</li>
            <li>Technical data like IP address, browser type, and device details.</li>
            <li>Usage patterns including time spent, clicks, and pages visited.</li>
          </ul>
        </div>

        {/* Section 2: How We Use Your Data */}
        <div className="border-l-4 border-green-600 pl-4 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <BarChart className="text-green-600" />
            <h2 className="text-2xl font-semibold">2. How We Use Your Data</h2>
          </div>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>To deliver personalized IPO insights and alerts.</li>
            <li>To enhance user experience and platform performance.</li>
            <li>To send important updates, newsletters, and offers (only if opted-in).</li>
          </ul>
        </div>

        {/* Section 3: Third-Party Sharing */}
        <div className="border-l-4 border-yellow-600 pl-4 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Share2 className="text-yellow-600" />
            <h2 className="text-2xl font-semibold">3. Third-Party Sharing</h2>
          </div>
          <p className="text-gray-700">
            We do <strong>not sell</strong> or rent your data to anyone. Data may be shared with trusted services (like payment gateways or analytics providers) under strict confidentiality agreements to serve you better.
          </p>
        </div>

        {/* Section 4: Data Security */}
        <div className="border-l-4 border-red-600 pl-4 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Lock className="text-red-600" />
            <h2 className="text-2xl font-semibold">4. Data Security</h2>
          </div>
          <p className="text-gray-700">
            We employ industry-standard safeguards including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
            <li>SSL/TLS encryption for secure data transmission.</li>
            <li>Secure data centers with access control.</li>
            <li>Token-based and role-based access within our systems.</li>
          </ul>
        </div>

        {/* Footer Note */}
        <div className="mt-10 text-center text-sm text-gray-500 border-t pt-4">
          Last updated: June 27, 2025 | For any privacy-related concerns, email us at <a href="mailto:privacy@blustock.in" className="text-blue-600 underline">privacy@blustock.in</a>.
        </div>
      </div>
    </div>
  );
}
