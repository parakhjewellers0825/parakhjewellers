import React from "react";

// --- Main App Component ---
export default function App() {
  // --- Helper Data ---
  // In a real app, this would come from an API
  const featuredProduct = {
    supertitle: "JEWELS AS UNIQUE AS YOU",
    title: "Every Gem Tells A Story",
    category: "Ear Stud, Nose Stud",
    name: "Pearl Bird Necklace",
    price: "80000₹ - 89000₹",
    image:
      "https://res.cloudinary.com/dzf1orh6a/image/upload/v1754889756/3796706_9644_fbtef0.jpg",
    onSale: true,
  };

  const promoCardsData = [
    {
      supertitle: "CLASSIC CHARM",
      title: "Grace Your Wrist",
      description:
        "Litora egestas leo senectus sem mus luctus lorem magna accumsan pretium volutpat.",
      imageUrl:
        "https://res.cloudinary.com/dzf1orh6a/image/upload/v1754889918/12860_xcc3qx.jpg",
    },
    {
      supertitle: "CIRCLE OF ELEGANCE",
      title: "Timeless Designs",
      description:
        "Litora egestas leo senectus sem mus luctus lorem magna accumsan pretium volutpat.",
      imageUrl:
        "https://res.cloudinary.com/dzf1orh6a/image/upload/v1754889803/2149509254_snxfe1.jpg",
    },
    {
      supertitle: "ELEGANCE IN EVERY PAIR",
      title: "Dazzling Designs",
      description:
        "Embrace the Unseen Magic of Uniqueness. Where Elegance Finds.",
      imageUrl:
        "https://res.cloudinary.com/dzf1orh6a/image/upload/v1754890153/14325_xkzzf1.jpg",
    },
    {
      supertitle: "ILLUMINATE IN YOUR LOOK",
      title: "Vintage Brooch",
      description:
        "Litora egestas leo senectus sem mus luctus lorem magna accumsan pretium volutpat.",
      imageUrl:
        "https://res.cloudinary.com/dzf1orh6a/image/upload/v1754889826/1884_xqybum.jpg",
    },
  ];

  // --- SVG Icon Components ---
  const ArrowRightIcon = ({ className = "w-6 h-6" }) => (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );

  const ArrowLeftIcon = ({ className = "w-6 h-6" }) => (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
      />
    </svg>
  );

  return (
    <div className="bg-[#F5F3F0] min-h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-8 font-sans">
      {/* Main Grid Layout */}
      <main className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6">
        {/* Card 1: Top-Left */}
        <div className="md:col-span-1">
          <div className="relative w-full h-full min-h-[300px] md:min-h-0 bg-cover bg-center rounded-lg overflow-hidden shadow-lg group">
            <img
              src={promoCardsData[0].imageUrl}
              alt={promoCardsData[0].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center p-6 md:p-8 text-white">
              <div className="max-w-xs">
                <p className="text-sm font-light tracking-widest uppercase">
                  {promoCardsData[0].supertitle}
                </p>
                <h3 className="text-3xl md:text-4xl font-serif mt-2 mb-4">
                  {promoCardsData[0].title}
                </h3>
                <p className="text-sm font-light leading-relaxed mb-6">
                  {promoCardsData[0].description}
                </p>
                <a href={"/collections"}>
                  <button className="bg-stone-900 bg-opacity-80 backdrop-blur-sm text-white font-semibold py-3 px-6 rounded-md flex items-center gap-2 hover:bg-opacity-100 transition-colors duration-300">
                    See More <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Product: Center */}
        <div className="md:col-span-2 md:row-span-2 order-first md:order-none">
          <div className="col-span-2 row-span-2 h-full bg-stone-50 rounded-lg shadow-lg flex flex-col items-center justify-center text-center p-8">
            <p className="text-sm text-stone-500 tracking-widest uppercase">
              {featuredProduct.supertitle}
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 my-4">
              {featuredProduct.title}
            </h2>
            <div className="flex items-center justify-center w-full max-w-sm my-6">
              <button className="p-3 rounded-full hover:bg-stone-200 transition-colors duration-300">
                <ArrowLeftIcon className="w-6 h-6 text-stone-700" />
              </button>
              <div className="relative mx-4">
                <img
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                  className="w-full h-auto max-w-[250px] rounded-md"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/400x400/f0ebe5/333333?text=Image+Error";
                  }}
                />
                {featuredProduct.onSale && (
                  <span className="absolute top-2 right-2 bg-stone-800 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Sale
                  </span>
                )}
              </div>
              <button className="p-3 rounded-full hover:bg-stone-200 transition-colors duration-300">
                <ArrowRightIcon className="w-6 h-6 text-stone-700" />
              </button>
            </div>
            <p className="text-stone-600">{featuredProduct.category}</p>
            <h4 className="text-2xl font-serif text-stone-800 mt-2">
              {featuredProduct.name}
            </h4>
            <p className="text-lg text-stone-500 mt-1">
              {featuredProduct.price}
            </p>
          </div>
        </div>

        {/* Card 2: Top-Right */}
        <div className="md:col-span-1">
          <div className="relative w-full h-full min-h-[300px] md:min-h-0 bg-cover bg-center rounded-lg overflow-hidden shadow-lg group">
            <img
              src={promoCardsData[1].imageUrl}
              alt={promoCardsData[1].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center p-6 md:p-8 text-white">
              <div className="max-w-xs">
                <p className="text-sm font-light tracking-widest uppercase">
                  {promoCardsData[1].supertitle}
                </p>
                <h3 className="text-3xl md:text-4xl font-serif mt-2 mb-4">
                  {promoCardsData[1].title}
                </h3>
                <p className="text-sm font-light leading-relaxed mb-6">
                  {promoCardsData[1].description}
                </p>
                <a href={"/collections"}>
                  <button className="bg-stone-900 bg-opacity-80 backdrop-blur-sm text-white font-semibold py-3 px-6 rounded-md flex items-center gap-2 hover:bg-opacity-100 transition-colors duration-300">
                    See More <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Bottom-Left */}
        <div className="md:col-span-1">
          <div className="relative w-full h-full min-h-[300px] md:min-h-0 bg-cover bg-center rounded-lg overflow-hidden shadow-lg group">
            <img
              src={promoCardsData[2].imageUrl}
              alt={promoCardsData[2].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center p-6 md:p-8 text-white">
              <div className="max-w-xs">
                <p className="text-sm font-light tracking-widest uppercase">
                  {promoCardsData[2].supertitle}
                </p>
                <h3 className="text-3xl md:text-4xl font-serif mt-2 mb-4">
                  {promoCardsData[2].title}
                </h3>
                <p className="text-sm font-light leading-relaxed mb-6">
                  {promoCardsData[2].description}
                </p>
                <a href={"/collections"}>
                  <button className="bg-stone-900 bg-opacity-80 backdrop-blur-sm text-white font-semibold py-3 px-6 rounded-md flex items-center gap-2 hover:bg-opacity-100 transition-colors duration-300">
                    See More <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Bottom-Right */}
        <div className="md:col-span-1">
          <div className="relative w-full h-full min-h-[300px] md:min-h-0 bg-cover bg-center rounded-lg overflow-hidden shadow-lg group">
            <img
              src={promoCardsData[3].imageUrl}
              alt={promoCardsData[3].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center p-6 md:p-8 text-white">
              <div className="max-w-xs">
                <p className="text-sm font-light tracking-widest uppercase">
                  {promoCardsData[3].supertitle}
                </p>
                <h3 className="text-3xl md:text-4xl font-serif mt-2 mb-4">
                  {promoCardsData[3].title}
                </h3>
                <p className="text-sm font-light leading-relaxed mb-6">
                  {promoCardsData[3].description}
                </p>
                <a href={"/collections"}>
                  <button className="bg-stone-900 bg-opacity-80 backdrop-blur-sm text-white font-semibold py-3 px-6 rounded-md flex items-center gap-2 hover:bg-opacity-100 transition-colors duration-300">
                    See More <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
