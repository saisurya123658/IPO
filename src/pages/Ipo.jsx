import React from "react";

const ipoData = {
  upcoming: [
    {
      name: "Nova Agritech Ltd.",
      logo: "/assest/Nova.png",
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
      logo: "/assest/Epack.png",
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
      logo: "/assest/Rk-Swamy.png",
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
      logo: "/assest/Medi-assist.png",
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
  <div className="bg-white border rounded-lg p-4 shadow hover:shadow-md  transition w-full max-w-sm">
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
        <img src={ipo.logo} alt={ipo.name} className="h-16 w-16" />
          <div style={{fontSize: "1.20rem", fontWeight: "500", color: "#467CFF"}}>{ipo.name}</div>
      </div>
    <div className="text-sm text-gray-600 space-y-1">
          <div style={{fontWeight: "600", marginBottom: "2px"}}>PRICE BAND</div>
        <div style={{fontWeight: "700",
              marginBottom: "8px",
              fontSize: "0.85rem", 
              color: "#222",}}
        >
          {ipo.priceBand}
         </div>
      </div>
      <strong>OPEN:</strong> {ipo.open}<strong>CLOSE:</strong> {ipo.close}
        <div className="text-sm text-gray-600 space-y-1">
          <div style={{fontWeight: "600", marginBottom: "2px"}}>ISSUE SIZE</div>
            <div style={{fontWeight: "700",
              marginBottom: "8px",
              fontSize: "0.85rem", 
              color: "#222",}}
            >
              {ipo.issueSize}
            </div>
      <strong>ISSUE TYPE:</strong> {ipo.type}
      <strong>LISTING DATE:</strong> {ipo.listingDate}
      
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
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-16">
                <div className="flex items-center">
                 <div className="flex items-center">
  <div className="flex justify-center items-center h-24">
  <img src="/assest/logo1.png" alt="Copy of logo" className="h-10 w-auto mr-4" />
  <h1 className="text-4xl font-bold text-gray-700"></h1>
</div>
</div>
                  <span className="text-2xl font-extrabold text-gray-900"><span className="text-blue-600"></span></span>
                </div>
                <nav className="hidden md:flex space-x-9">
                  <a href="/IPO"
                    className="text-blue-600 font-semibold border-b-2 border-blue-700 hover:text-blue-700">
                    IPO
                  </a>
                  <a href="/community" className="text-sm font-semibold text-gray-600 hover:text-blue-700">
                    COMMUNITY
                  </a>
                  <a className="text-sm font-semibold text-gray-600 hover:text-blue-700">
                    PRODUCTS▾
                  </a>
                  <a href="/brokers" className="text-sm font-semibold text-gray-600 hover:text-blue-700">
                    BROKERS ↗
                  </a>
                  <a href="/news" className="text-sm font-semibold text-gray-600 hover:text-blue-700 flex items-center">
                    Live News <span className="ml-1 bg-blue-600 text-white text-xs font-bold px-1 rounded">NEW</span>
                  </a>
                </nav>
              </div>
                <div className="flex items-center space-x-4">
                  <button className="px-4 py-2 text-gray-600 hover:text-gray-800">
                    <a href="/signupnow">Sign In</a>
                  </button>
                  <a href="/register" >
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                      SIGN UP NOW
                    </button>
                  </a>
                    <div aria-label="More options menu" role="button" style={{ fontSize: "1.25rem", cursor: "pointer", color: "#222" }}>⋮⋮</div>
                </div>
            </div>
          </div>
        </header>
        <main style={{ maxWidth: "1920px", maxHeight:"8370px", margin: "2rem auto 0 auto", padding: "0 1rem" }}>
          {/* IPO Section header */}
          <h2 style={{ fontSize: "1.4rem", color: "#222", fontWeight: "700", marginBottom: "0.1rem" }}>
            IPO
          </h2>
          <p style={{ fontSize: "0.85rem", color: "#444", marginTop: 0, marginBottom: "0.9rem" }}>
            Following is this list of companies IPOs of today.
          </p>
          {/* Upcoming Section */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">upcoming</h3>
                <button
              style={{
                backgroundColor: "#4169e1",
                border: "none",
                borderRadius: "7px",
                padding: "8px 20px",
                color: "white",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "0.8rem",
                whiteSpace: "nowrap",
              }}
            >
              View All
            </button>
            </div>
              <p style={{ fontSize: "0.85rem", color: "#444", marginTop: 0, marginBottom: "0.9rem" }}>
                Companies that have filed for an IPO with SEBI Few details might be disclosed by the companies later on.
              </p>
            <div className="flex flex-wrap gap-16 mb-8">
              {ipoData.upcoming.map((ipo, index) => (
                <IPOCard ipo={ipo} key={index} />
               ))}
            </div>

           {/* Applying for IPO section */}
        <section aria-label="Apply for IPO" style={{ marginBottom: "3rem" }}>
        <div className="bg-white rounded-3g p-8 text-center text-black transition-all"
        style={{backgroundColor:"white", borderRadius: "8px",boxShadow:"0 2px 16px rgb(153 153 153 / 0.15), 0 1px 8px rgb(153 153 153 / 0.1)", maxWidth:"750px", textAlign:"center", margin:"0 auto"}}>
             <div className="flex justify-center items-center h-24">
              <img src="/assest/logo1.png" alt="Copy of logo" className="h-10 w-auto mr-4" />
                <h1 className="text-4xl font-bold text-black-700"></h1>
              <span className="text-2xl font-extrabold text-gray-900"><span className="text-blue-600"></span></span>
            </div>            
            <h3 style={{ marginTop: 0, marginBottom: "1rem",fontSize:"2rem", lineHeight:"2"}}>
              Applying for this IPO?
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.4", marginBottom: "1rem", color: "#000000" }}>
              The way you compare & invest in only the best IPO, let us help you get started by comparing and selecting the best Demat account. Open your Demat account now to apply for your favourite IPO.
            </p>
            <button
              style={{
                backgroundColor: "#4169e1",
                border: "none",
                borderRadius: "12px",
                padding: "10px 40px",
                color: "white",
                cursor: "pointer",
                fontWeight: "600",
                height:"45.74px",
                top:"1327.26px",
                left:"829px",
                radius:"15px",
                width:"290px",
                fontSize: "0.9rem",
                whiteSpace: "nowrap",
              }}
            >
              Open a Demat Account
            </button>
          </div>
        </section>

          {/* Ongoing Section */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Ongoing</h3>
            <button
              style={{
                backgroundColor: "#4169e1",
                border: "none",
                borderRadius: "7px",
                padding: "8px 20px",
                color: "white",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "0.8rem",
                whiteSpace: "nowrap",
              }}
            >
              View All
            </button>            </div>
            <p style={{ fontSize: "0.85rem", color: "#444", marginTop: 0, marginBottom: "0.9rem"}}>
              Companies where the IPO investment process is started and will be listed soon in the stock market for regular trading.
            </p>
            <div className="flex flex-wrap gap-6 mb-8">
              {ipoData.ongoing.map((ipo, index) => (
                <IPOCard ipo={ipo} key={index} />
              ))}
            </div>

          {/* New Listed Footer Text */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">NewListed</h3>
              <button
                style={{
                  backgroundColor: "#4169e1",
                  border: "none",
                  borderRadius: "7px",
                  padding: "8px 20px",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "0.8rem",
                  whiteSpace: "nowrap",
                }}
                >
                View All
              </button></div>
              <p style={{fontSize: "0.85rem", color: "#444", marginTop: 0, marginBottom: "0.9rem"}}>
                Companies listed here have finalized IPO process & initiated credit and will be listed soon in the stock market for regular trading.
              </p>
              
        </main>
    </div>
  );
};
