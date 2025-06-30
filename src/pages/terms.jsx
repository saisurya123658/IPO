import { CheckCircle, Shield, Scale, AlertTriangle, RefreshCw } from "lucide-react";

export default function Terms() {
  return (
    <div className="bg-white min-h-screen py-10 px-4 md:px-8 lg:px-16 text-gray-900">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">
          Terms & Conditions
        </h1>
        <p className="mb-8 text-lg text-center text-gray-700">
          Welcome to <strong>BluStock</strong>. These Terms & Conditions govern your access to and use of our platform, tools, data, and services related to Initial Public Offerings (IPOs) and stock market insights.
        </p>

        {/* 1. Acceptance of Terms */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="text-green-600" />
            <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
          </div>
          <p className="text-gray-700">
            By using BluStock, you agree to abide by these terms. If you do not agree, you should discontinue use immediately.
          </p>
        </div>

        {/* 2. Services Offered */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Scale className="text-purple-600" />
            <h2 className="text-2xl font-semibold">2. Services Offered</h2>
          </div>
          <p className="text-gray-700">
            We provide IPO data, financial calculators, market analytics, broker comparisons, and related educational content. This does not constitute financial advice.
          </p>
        </div>

        {/* 3. User Obligations */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="text-indigo-600" />
            <h2 className="text-2xl font-semibold">3. User Obligations</h2>
          </div>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Use the platform lawfully and ethically.</li>
            <li>Do not use automated tools (bots/scrapers) to access our data.</li>
            <li>Respect our intellectual property and trademarks.</li>
          </ul>
        </div>

        {/* 4. Limitation of Liability */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="text-red-600" />
            <h2 className="text-2xl font-semibold">4. Limitation of Liability</h2>
          </div>
          <p className="text-gray-700">
            BluStock shall not be held responsible for any financial losses, data inaccuracies, or platform outages.
          </p>
        </div>

        {/* 5. Changes to Terms */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <RefreshCw className="text-yellow-600" />
            <h2 className="text-2xl font-semibold">5. Changes to Terms</h2>
          </div>
          <p className="text-gray-700">
            We reserve the right to modify these terms at any time. Continued use of the platform implies acceptance of any changes.
          </p>
        </div>

        {/* Footer note */}
        <div className="text-sm text-center text-gray-500 border-t pt-4">
          Last updated: June 27, 2025 | Contact us at{" "}
          <a
            href="mailto:legal@blustock.in"
            className="text-blue-600 hover:underline"
          >
            legal@blustock.in
          </a>
        </div>
      </div>
    </div>
  );
}
