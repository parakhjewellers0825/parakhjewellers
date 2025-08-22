import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="80"
    height="80"
    viewBox="0 0 24 24"
    fill="none"
  >
    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1" />
    <path d="M9.5 16V8L16 12L9.5 16Z" fill="white" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);


export default function JewelryHero() {
  return (
    <div className="bg-[#F8F3ED] font-serif text-[#4A2F28] py-16 px-4 sm:px-8">
      <main className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl">
        {/* Left Column: Video/Image */}
        <div className="relative w-full aspect-video rounded-lg overflow-hidden group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1599335623233-1427058335f2?q=80&w=1974&auto=format&fit=crop"
            alt="Woman wearing a delicate necklace"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/1920x1080/d1c4b7/4A2F28?text=Jewelry+Video";
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            <PlayIcon />
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="relative">
          {/* Decorative Palm Leaf */}
          <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-20 -z-0 hidden lg:block">
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200C155.228 200 200 155.228 200 100C200 81.5633 194.837 63.7773 185.539 48.3162L184.413 46.4612"
                stroke="#BCA997"
                strokeWidth="1"
              />
            </svg>
          </div>

          <p className="text-sm uppercase tracking-[0.2em] text-amber-800 mb-4">
            Adorn Yourself In Luxury
          </p>
          <h1 className="text-3xl md:text-4xl font-medium leading-snug mb-6">
            Elegance In Every Piece, Timeless Beauty That Shines Brighter With
            Every Moment You Wear
          </h1>
          <p className="text-base text-gray-600 leading-relaxed mb-8">
            Felis efficitur metus dui finibus quam ridiculus ut massa. Posuere
            gravida netus iaculis dolor accumsan morbi pellentesque nibh.
            Senectus suspendisse class facilisi sed ante vitae. Integer nascetur
            lacinia pulvinar maximus mauris netus.
          </p>
          <div className="flex justify-center lg:justify-start">
                       <a href="/contact">
                          <button className="flex text-white items-center bg-[#D4AF37] gap-3 px-1 py-1 pl-5 rounded-full font-bold text-lg hover:bg-[#c99207] transition-colors group">
                              Own the Moment
                              <div className="bg-black rounded-full p-3 group-hover:scale-110 duration-300 transition-transform">
                                <FaArrowRight size={20} />
                              </div>
                          </button>
                      </a>
                    </div>
        </div>
      </main>
    </div>
  );
}