import React from "react";
import Navbar from "../components/Navbar";

const jewelryItems = [
  {
    id: 1,
    name: "Diamond Solitaire Ring",
    image: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1754641087/7042_uy4khn.jpg",
    price: "$1,200",
    tag: "New",
  },
  {
    id: 2,
    name: "Gold Twist Bracelet",
    image: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1754641087/7042_uy4khn.jpg",
    price: "$850",
    tag: "Best Seller",
  },
  {
    id: 3,
    name: "Pearl Drop Earrings",
    image: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1754641087/7042_uy4khn.jpg",
    price: "$430",
  },
  {
    id: 4,
    name: "Rose Gold Pendant",
    image: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1754641087/7042_uy4khn.jpg",
    price: "$675",
  },
  {
    id: 5,
    name: "Emerald Halo Ring",
    image: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1754641087/7042_uy4khn.jpg",
    price: "$1,480",
  },
  {
    id: 6,
    name: "Sapphire Studs",
    image: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1754641087/7042_uy4khn.jpg",
    price: "$510",
    tag: "New",
  },
];

const Collection = () => {
  return (
    <div className="pt-[2rem]">

    <div className="bg-white text-gray-800 px-4 py-16 md:px-12">
      {/* Header */}
      <section className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Collection</h1>
        <p className="text-lg text-gray-600">
          Discover timeless elegance in every piece.
        </p>
      </section>

      {/* Product Grid */}
      <section className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {jewelryItems.map((item) => (
          <div
            key={item.id}
            className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="rounded-md w-full h-72 object-cover mb-4"
              />
              {item.tag && (
                <span className="absolute top-2 left-2 bg-yellow-600 text-white text-xs px-2 py-1 rounded">
                  {item.tag}
                </span>
              )}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
            <p className="text-yellow-600 font-medium text-md">{item.price}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">
          Want Something Custom?
        </h2>
        <p className="text-gray-600 mb-6">
          We design custom pieces tailored to your vision and budget.
        </p>
        <a
          href="/contact"
          className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
    </div>
  );
};

export default Collection;
