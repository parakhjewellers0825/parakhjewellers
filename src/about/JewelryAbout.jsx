import React from "react";
import { LuSparkles } from "react-icons/lu";

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-amber-800"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const WOMAN_IMAGE_URL =
  "https://res.cloudinary.com/dzf1orh6a/image/upload/v1756548940/ChatGPT_Image_Aug_30_2025_03_35_59_PM_hrt3be.png";

export default function JewelryAbout() {
    const features = [
    { title: "Brilliant Cut", desc: "Perfectly crafted for unmatched shine." },
    { title: "High Clarity", desc: "Stones that glow with purity." },
    { title: "Elegant Setting", desc: "Designed to highlight beauty." },
    { title: "Natural Color", desc: "Authentic hues that speak luxury." },
    { title: "Precise Carat", desc: "Honest weight, lasting value." },
    { title: "Durable Metal", desc: "Strength and style in every design." },
  ];
  return (
    <div className="bg-[#FDF8F2] font-serif text-[#4A2F28] py-16 flex items-center justify-center p-4 sm:p-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl">
        {/* Left Column: Main Image with Arched Text */}
        <div className="relative w-full max-w-md mx-auto lg:max-w-none lg:mx-0">
          <div className="relative w-full aspect-[4/5] rounded-full overflow-hidden shadow-lg">
            <img
              src={WOMAN_IMAGE_URL}
              alt="Woman wearing exquisite jewelry"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/600x750/d1c4b7/4A2F28?text=Jewelry";
              }}
            />
          </div>
          {/* Arched Text */}
          {/* <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <svg viewBox="0 0 500 500" className="w-full h-full">
              <path
                id="curve"
                d="M100,250 A150,150 0 0,1 400,250"
                fill="transparent"
              />
              <text width="500" className="text-2xl fill-white tracking-widest">
                <textPath
                  xlinkHref="#curve"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  A Touch Of Glamour, A Lifetime Of Memories
                </textPath>
              </text>
            </svg>
          </div> */}
        </div>

        {/* Right Column: About Us Content */}
        <div className="relative text-center lg:text-left">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 -z-0 opacity-30">
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0C118.437 0 136.223 5.16334 151.684 14.4608L153.539 15.5868"
                stroke="#D1C4B7"
                strokeWidth="2"
              />
              <path
                d="M199.5 100C199.5 154.951 154.951 199.5 100 199.5C45.0492 199.5 0.5 154.951 0.5 100C0.5 45.0492 45.0492 0.5 100 0.5C129.816 0.5 156.71 12.049 175.768 30.6053"
                stroke="#D1C4B7"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="absolute top-0 right-0 -mt-8 -mr-8 hidden lg:block">
            <div className="w-40 h-48 rounded-full overflow-hidden shadow-md border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1974&auto=format&fit=crop"
                alt="Gold necklaces"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/160x192/d1c4b7/4A2F28?text=Jewelry";
                }}
              />
            </div>
          </div>

          <div className="z-10 relative">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-800 mb-4">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#4A2F28] leading-tight mb-6">
              Commitment, Forever, In Every Sparkling Jewel
            </h1>
            <p className="text-base text-gray-600 leading-relaxed mb-12">
              At Parakh Jewellers, every piece is crafted with love, care, and a
            promise that lasts forever. We believe your jewellery should reflect
            your story—timeless, elegant, and truly yours.
            </p>
          </div>

          {/* Statistics Section */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="border-t-2 border-amber-200 pt-4">
              <p className="text-4xl font-bold text-amber-900">20+</p>
              <p className="text-sm text-gray-500 mt-2">Worldwide Branch</p>
            </div>
            <div className="border-t-2 border-amber-200 pt-4">
              <p className="text-4xl font-bold text-amber-900">300+</p>
              <p className="text-sm text-gray-500 mt-2">Unique Designs</p>
            </div>
            <div className="relative border-t-2 border-amber-200 pt-4">
              <div className="absolute -top-3 right-0">
                <StarIcon />
              </div>
              <p className="text-4xl font-bold text-amber-900">2K</p>
              <p className="text-sm text-gray-500 mt-2">User Reviews</p>
            </div>
          </div> */}
           <div className="grid text-left grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-12 max-w-lg mx-auto lg:mx-0">
                      {features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2 text-gray-700 "
                        >
                          <LuSparkles className="mt-1" size={20} />
                          <div>
                            <p className="font-semibold">{feature.title}</p>
                            <p className="text-sm text-gray-600">{feature.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
        </div>
      </div>
    </div>
  );
}
