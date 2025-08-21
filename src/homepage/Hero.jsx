import React, { useState } from "react";
import {
  FaGem,
  FaArrowRight,
  FaPlus,
  FaPlayCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const App = () => {
  // State to manage the mobile menu's visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Main container with a background image, centered content, and responsive padding.
    <div
      className="relative w-full max-lg:h-screen bg-cover max-lg:bg-center font-sans lg:flex lg:items-center lg:justify-center pb-20"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dzf1orh6a/image/upload/v1754889124/beautiful-young-woman-wearing-sari_mbn3em.jpg",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Main Glassmorphism Card */}
      <div
        className="relative w-full  max-w-6xl max-lg:w-[100%] bg-[#6a5b51]/30 max-lg:bg-[#6a5b5100]  rounded-2xl md:rounded-[40px] 
          border border-white/20 max-lg:border-hidden p-4 sm:p-6 shadow-2xl text-white"
      >
        {/* Header Section */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <FaGem className="text-2xl sm:text-3xl text-white" />
            <span className="text-xl sm:text-2xl font-semibold">
              Parakh Jewellers
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8 bg-white/90 text-black font-semibold pl-6 pr-2 py-2 rounded-full">
            <a href="/" className="hover:text-[#D4AF37] transition-colors">
              Home
            </a>
            <a href="/about" className="hover:text-[#D4AF37] transition-colors">
              About Us
            </a>
            <a
              href="/collections"
              className="hover:text-[#D4AF37] transition-colors"
            >
              Collections
            </a>
            <a
              href="/contact"
              className="bg-[#D4AF37] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#b99521] transition-colors"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none z-50"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </header>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <>
            {/* The overlay and menu content */}
            <div
              // Use a fixed position to cover the entire viewport reliably.
              className={`
          md:hidden fixed inset-0 w-full h-screen
          bg-[#6a5b51]/80 backdrop-blur-xl z-40
          transform transition-opacity duration-300 ease-in-out
          ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
              // This onClick handles closing the menu when the user clicks the overlay background.
              onClick={() => setIsMenuOpen(false)}
            >
              <div
                // Prevent clicks inside the menu from closing it.
                onClick={(e) => e.stopPropagation()}
                className={`
            absolute top-0 left-0 w-full max-w-sm h-full bg-[#594d44] shadow-2xl
            flex flex-col justify-center
            transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
          `}
              >
                <nav className="flex flex-col items-center gap-y-6 text-2xl text-white">
                  <a
                    href="/"
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    Home
                  </a>
                  <a
                    href="/about"
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    About Us
                  </a>
                  <a
                    href="/collections"
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    Collections
                  </a>
                  <a
                    href="/contact"
                    className="bg-[#D4AF37] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#b99521] transition-colors"
                  >
                    Contact Us
                  </a>
                </nav>

                {/* Enhanced Close Button */}
                <button
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                  className="
              absolute top-5 right-5 text-gray-300 hover:text-white 
              transition-colors rounded-full p-2
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white
            "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </>
        )}

        {/* Main Content Area */}
        <main className="mt-12 md:mt-16 flex flex-col md:flex-row items-center md:items-end justify-between gap-12">
          {/* Left Column: Main text and call to action */}
          <div className="w-full max-lg:flex max-lg:flex-col max-lg:justify-end max-lg:h-[50vh] text-center md:text-left">
            <h1
              className="text-5xl sm:text-6xl lg:text-8xl font-medium tracking-tight"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Where Timeless Elegance Meets Eternity
            </h1>
            <p className="mt-4 text-base text-white/80 max-w-md mx-auto md:mx-0">
              Discover handcrafted jewelry designed to celebrate life's most
              precious moments. Timeless beauty, ethically made with love.
            </p>
            <button className="mt-8 mx-auto md:mx-0 flex items-center gap-3 bg-white text-black pl-5 pr-1 py-1 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors group">
              See Our Collections
              <div className="bg-[#D4AF37] text-white duration-300 rounded-full p-3 group-hover:scale-110 transition-transform">
                <FaArrowRight size={20} />
              </div>
            </button>
          </div>

          {/* Right Column: Social proof and detail cards */}
          <div className="w-full md:w-auto flex flex-col items-center md:items-end gap-6">
            {/* Happy Clients Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4 border border-white/10 w-full max-w-xs sm:max-w-sm md:max-w-xs">
              <div className="flex w-full -space-x-4">
                <img
                  src="1"
                  alt="client 1"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/40x40/EFEFEF/333333?text=C1";
                  }}
                />
                <img
                  src="2"
                  alt="client 2"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/40x40/EFEFEF/333333?text=C2";
                  }}
                />
                <img
                  src="3"
                  alt="client 3"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/40x40/EFEFEF/333333?text=C3";
                  }}
                />
                <div className="w-20 max-lg:w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-gray-200/80">
                  <FaPlus className="text-black/70" />
                </div>
              </div>
              <div className="w-full">
                <p className="font-bold text-xl">230+</p>
                <p className="text-xs text-white/80">Best Collection</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
