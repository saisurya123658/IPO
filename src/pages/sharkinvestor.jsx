import { useState } from "react";
const investors = [
  { name: "Rakesh Jhunjhunwala", img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQPf4bJRIYBvz1jXIBpLKAiSTnDno3bvfU91_0pzg9c-pGkRXcSXQ1OipkA9F5x8564TjJqk1D8S1pdBLK7eqzIIA" },
  { name: "Anil Goel", img: "https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1636494812/1636494811.jpg" },
  { name: "Ashish Dhawan", img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ_MTWje6OB_FkOz2-4_jqT-9cAUiZOGuXH8BKxVUgS0-SC9j9j" },
  { name: "Ashish Kacholia", img: "https://www.eqimg.com/images/2022/1280x720/12232022-image2-equitymaster.jpg" },
  { name: "Dolly Rajeev Khanna", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCPqJfGiRoH83Xnb950TJv8TvJXzPMytrYA&s" },
  { name: "Hemendra Kothari", img: "https://imageio.forbes.com/specials-images/imageserve/5e768c51d8e1ae0007b72302/0x0.jpg?format=jpg&crop=1525,1527,x630,y277,safe&height=416&width=416&fit=bounds" },
  { name: "Nemish Shah", img: "https://www.enamamc.com/wp-content/uploads/2023/06/About-Us_Leadership_Nimesh-Shah.png" },
  { name: "Porinju Veliyath", img: "https://www.livemint.com/lm-img/img/2024/04/19/1600x900/Porinju_Veliyath_portfolio_Multibagger_stocks_2024_1713511522303_1713511522463.jpg" },
  { name: "Radhakishan Damani", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf0ihbv2vyXISY31crkbOtgx7CDwfCkDQOgA&s" },
  { name: "Sunil Singhania", img: "https://secure.gravatar.com/avatar/ab6e2ab6377209337ece84cdcd7f3aff?s=300&d=blank&r=pg" },
  { name: "Vijay Kedia", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5sW8zHmwLpKnipPu_8voYnp35CRFATe7XYA&s" },
  { name: "Anil Goel", img: "https://bsmedia.business-standard.com/_media/bs/img/article/2016-08/29/full/1472478444-3177.jpg" }, // Repeated for grid
];

export default function SharkInvestors() {
  const [search, setSearch] = useState("");

  const filteredInvestors = investors.filter((investor) =>
    investor.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Shark Investors</h1>
          <p className="text-gray-600">
            Look into the portfolios of these super investors to find out their favourite stocks.
          </p>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search by name"
          className="mt-4 md:mt-0 px-4 py-2 border rounded shadow-sm"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Investor Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredInvestors.map((investor, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center"
          >
            <img
              src={investor.img}
              alt={investor.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="font-semibold text-lg">{investor.name}</h3>
            <p className="text-sm text-gray-500 my-1">
              He started investing in the 90’s. His investment list is...
            </p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              View Holdings
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
