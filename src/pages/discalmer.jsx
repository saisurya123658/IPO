import { AlertCircle, TrendingDown, Info } from "lucide-react";

export default function Disclaimer() {
  return (
    <div className="bg-white min-h-screen py-10 px-4 md:px-8 lg:px-16 text-gray-900">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">
          Disclaimer
        </h1>
        <p className="mb-8 text-lg text-center text-gray-700">
          <strong>BluStock</strong> is an informational platform that provides tools and data related to stock market IPOs. We do not offer personalized financial advice nor act as a SEBI-registered investment advisor.
        </p>

        {/* Risk Disclosure Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <TrendingDown className="text-red-600" />
            <h2 className="text-2xl font-semibold">Risk Disclosure</h2>
          </div>
          <p className="text-gray-700">
            Investing in IPOs involves market risk. Past performance is not a guarantee of future results. Users are encouraged to do their own research and consult certified financial advisors before making investment decisions.
          </p>
        </div>

        {/* Data Accuracy Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Info className="text-yellow-600" />
            <h2 className="text-2xl font-semibold">Data Accuracy</h2>
          </div>
          <p className="text-gray-700">
            While BluStock strives for accuracy and timely updates, we do not guarantee the completeness or reliability of the information. Errors, delays, or outdated data may occasionally appear.
          </p>
        </div>

        {/* Legal Note Section */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="text-indigo-600" />
            <h2 className="text-2xl font-semibold">Legal Disclaimer</h2>
          </div>
          <p className="text-gray-700">
            Use of this platform implies acceptance of this disclaimer. BluStock is not liable for any losses, damages, or claims arising from the use of the content or features available on the platform.
          </p>
        </div>

        {/* Footer */}
        <div className="text-sm text-center text-gray-500 border-t pt-4 mt-10">
          Last updated: June 27, 2025 | For legal queries, contact us at{" "}
          <a href="mailto:legal@blustock.in" className="text-blue-600 hover:underline">
            legal@blustock.in
          </a>
        </div>
      </div>
    </div>
  );
}
