import { BadgeCheck, Mail, Info, Ban } from "lucide-react";

export default function Refund() {
  return (
    <div className="bg-white min-h-screen py-10 px-4 md:px-8 lg:px-16 text-gray-900">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">
          Refund Policy
        </h1>
        <p className="mb-8 text-lg text-center text-gray-700">
          At <strong>BluStock</strong>, transparency is our priority. If you’ve subscribed to a premium feature or paid service, you may be eligible for a refund under certain conditions.
        </p>

        {/* Section: Eligibility */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <BadgeCheck className="text-green-600" />
            <h2 className="text-2xl font-semibold">Eligibility for Refund</h2>
          </div>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Refund requests must be made within <strong>7 days</strong> of the transaction.</li>
            <li>Applicable only for <strong>subscription-based services</strong>; not for one-time IPO reports or recommendations.</li>
            <li>Usage beyond <strong>3 days</strong> may reduce the refund amount proportionally.</li>
          </ul>
        </div>

        {/* Section: How to Request */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Mail className="text-indigo-600" />
            <h2 className="text-2xl font-semibold">How to Request</h2>
          </div>
          <p className="text-gray-700">
            Send an email to{" "}
            <a href="mailto:support@blustock.in" className="text-blue-600 hover:underline font-medium">
              support@blustock.in
            </a>{" "}
            with your <strong>Transaction ID</strong> and the reason for your refund.
          </p>
        </div>

        {/* Section: Important Note */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Info className="text-yellow-600" />
            <h2 className="text-2xl font-semibold">Important Notes</h2>
          </div>
          <p className="text-gray-700">
            Refunds are processed within 5-7 business days after verification. Repeated refund requests or abuse of refund policy may result in service termination.
          </p>
        </div>

        {/* Section: Non-Refundable Items */}
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-2">
            <Ban className="text-red-600" />
            <h2 className="text-2xl font-semibold">Non-Refundable Items</h2>
          </div>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>One-time financial reports or PDFs.</li>
            <li>Premium IPO recommendations after delivery.</li>
            <li>Usage past the eligible refund period.</li>
          </ul>
        </div>

        {/* Footer */}
        <div className="text-sm text-center text-gray-500 border-t pt-4 mt-10">
          Last updated: June 27, 2025 | Need help? Reach us at{" "}
          <a href="mailto:support@blustock.in" className="text-blue-600 hover:underline">
            support@blustock.in
          </a>
        </div>
      </div>
    </div>
  );
}
