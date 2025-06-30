import React from "react";

const ipoData = {
  upcoming: [
    {
      name: "Nova Agritech Ltd.",
      priceBand: "₹39 - 41",
      open: "2024-01-23",
      close: "2024-01-26",
      issueSize: "143.81 Cr.",
      type: "Book Built",
      listingDate: "2024-01-30",
      rhp: true,
      drhp: true,
    },
    {
      name: "EPACK Durable Ltd.",
      priceBand: "₹218 - 230",
      open: "2024-01-19",
      close: "2024-01-23",
      issueSize: "640.05 Cr.",
      type: "Book Built",
      listingDate: "2024-01-29",
      rhp: true,
      drhp: true,
    },
    {
      name: "RK Swamy Ltd.",
      priceBand: "Not Issued",
      open: "Not Issued",
      close: "Not Issued",
      issueSize: "Not Issued",
      type: "Book Built",
      listingDate: "Not Issued",
      rhp: true,
      drhp: true,
    },
  ],
  ongoing: [
    {
      name: "Medi Assist Healthcare Services Ltd.",
      priceBand: "₹218 - 230",
      open: "2024-01-19",
      close: "2024-01-23",
      issueSize: "640.05 Cr.",
      type: "Book Built",
      listingDate: "2024-01-29",
      rhp: true,
      drhp: true,
    },
  ],
};

const IPOCard = ({ ipo }) => (
  <div className="bg-white border rounded-lg p-4 shadow hover:shadow-md transition w-full max-w-sm">
    <h3 className="text-blue-700 font-semibold mb-2">{ipo.name}</h3>
    <div className="text-sm text-gray-600 space-y-1">
      <p><strong>PRICE BAND:</strong> {ipo.priceBand}</p>
      <p><strong>OPEN:</strong> {ipo.open}</p>
      <p><strong>CLOSE:</strong> {ipo.close}</p>
      <p><strong>ISSUE SIZE:</strong> {ipo.issueSize}</p>
      <p><strong>ISSUE TYPE:</strong> {ipo.type}</p>
      <p><strong>LISTING DATE:</strong> {ipo.listingDate}</p>
    </div>
    <div className="mt-4 flex gap-2">
      {ipo.rhp && (
        <button className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded">RHP</button>
      )}
      {ipo.drhp && (
        <button className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded">DRHP</button>
      )}
    </div>
  </div>
);

export default function IPO() {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">IPO</h2>

      {/* Upcoming Section */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Upcoming</h3>
        <button className="text-blue-600 hover:underline text-sm">View All</button>
      </div>
      <div className="flex flex-wrap gap-6 mb-8">
        {ipoData.upcoming.map((ipo, index) => (
          <IPOCard ipo={ipo} key={index} />
        ))}
      </div>

      {/* Banner */}
      <div className="bg-white border rounded-lg p-6 text-center shadow mb-10">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">BLUESTOCK</h3>
        <h4 className="text-lg font-semibold mb-2">Applying for this IPO?</h4>
        <p className="text-gray-600 max-w-xl mx-auto mb-4">
          The way you compare & invest in only the best IPO, let us help you get started by comparing
          and selecting the best Demat account. Open your Demat account now to apply for your favourite IPO.
        </p>
        <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
          Open a Demat Account
        </button>
      </div>

      {/* Ongoing Section */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Ongoing</h3>
        <button className="text-blue-600 hover:underline text-sm">View All</button>
      </div>
      <div className="flex flex-wrap gap-6 mb-8">
        {ipoData.ongoing.map((ipo, index) => (
          <IPOCard ipo={ipo} key={index} />
        ))}
      </div>

      {/* New Listed Footer Text */}
      <p className="text-gray-500 text-sm">New Listed</p>
      <p className="text-xs text-gray-400 mt-1">
        Companies listed here have finalized IPO process & initiated credit and will be listed soon in the stock market for regular trading.
      </p>
    </div>
  );
}
