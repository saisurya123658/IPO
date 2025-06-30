import { useState } from "react";

export default function BluestockLandingPage() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const toggleFAQ = (index) => setActiveFAQ(activeFAQ === index ? null : index);

  const faqs = [
    {
      question: "What is Bluestock?",
      answer: "Bluestock is a mobile app for stock market learning, analytics & investor networking."
    },
    {
      question: "What platforms does Bluestock support?",
      answer: "Currently available for Android. iOS support is coming soon."
    },
    {
      question: "Is there educational content in the app?",
      answer: "Yes, Bluestock offers interactive lessons, webinars, and market insights."
    },
    {
      question: "Is Bluestock free to use?",
      answer: "Basic features are free. Premium analytics require a subscription."
    },
    {
      question: "How can I get technical support for the app?",
      answer: "You can reach us at support@bluestock.in or use the help section in the app."
    }
  ];

  return (
    <div className="text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="text-center py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Bluestock is mobile app for stock market <br />
          <span className="text-blue-600">learning, analytics & club</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Join personalized learning, track your investments, and become a part of India's fastest-growing investment community.
        </p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto px-4">
        <div className="bg-blue-100 p-6 rounded text-center">
          <h2 className="text-2xl font-bold text-blue-700">5 Thousand</h2>
          <p className="text-sm">Customers</p>
        </div>
        <div className="bg-blue-100 p-6 rounded text-center">
          <h2 className="text-2xl font-bold text-blue-700">20+</h2>
          <p className="text-sm">Team Members</p>
        </div>
        <div className="bg-blue-100 p-6 rounded text-center">
          <h2 className="text-2xl font-bold text-blue-700">4.9 ★</h2>
          <p className="text-sm">Rating</p>
        </div>
      </section>

      {/* News Section */}
      <section className="text-center py-12 px-4">
        <h2 className="text-xl font-semibold mb-6">Featured In</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="border p-4 rounded shadow">
            <h3 className="text-red-600 font-semibold">Business Standard</h3>
            <p className="text-sm mt-2">Helping retail traders connect and analyze deeply.</p>
          </div>
          <div className="border p-4 rounded shadow">
            <h3 className="text-gray-700 font-semibold">Medium</h3>
            <p className="text-sm mt-2">Innovating financial learning with smart mobile experiences.</p>
          </div>
          <div className="border p-4 rounded shadow">
            <h3 className="text-blue-500 font-semibold">BW Businessworld</h3>
            <p className="text-sm mt-2">Award-winning startup for community growth and education.</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-blue-600 underline cursor-pointer">Media & Press Mentions →</p>
      </section>

      {/* Join Us Banner */}
      <section className="bg-blue-600 text-white py-10 px-6 rounded-lg max-w-5xl mx-auto text-center my-8">
        <h2 className="text-2xl font-bold mb-2">Want to join us ?</h2>
        <p className="mb-4 max-w-xl mx-auto">
          We're hiring for operations and tech roles. If you're a customer-first team player, email us at hello@bluestock.in
        </p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-gray-200 transition">
          APPLY NOW
        </button>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">FREQUENTLY ASKED QUESTIONS</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded mb-3">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-4 py-3 flex justify-between items-center font-medium"
            >
              {faq.question}
              <span>{activeFAQ === index ? "−" : "+"}</span>
            </button>
            {activeFAQ === index && (
              <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
