import React from "react";
import {
  FaGem,
  FaChevronDown,
  FaArrowRight,
  FaPlus,
  FaPlayCircle,
} from "react-icons/fa";

/**
 * A React component that recreates the "Shimmer" luxury jewelry website landing page.
 * This component uses Tailwind CSS for styling and react-icons for icons.
 */
const Hero = () => {
  return (
    // Main container with a background image, centered content, and fallback background color.
    <div
      className="relative w-full bg-cover  font-sans flex items-center justify-center px-20 pb-20"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dzf1orh6a/image/upload/v1754889124/beautiful-young-woman-wearing-sari_mbn3em.jpg')",
      }}
    >
      {/* Dark overlay for better text readability on top of the background image */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Main Glassmorphism Card */}
      <div
        className="relative w-full max-w-7xl bg-[#6a5b51]/30  rounded-[40px] 
      border border-white/20 p-6 shadow-2xl text-white"
      >
        {/* Header Section */}
        <header className="flex items-center justify-between ">
          <div className="flex items-center gap-3">
            <FaGem className="text-3xl text-white" />
            <span className="text-2xl font-semibold">Parakh Jewellers</span>
          </div>
          <div className="bg-white flex gap-20 pl-10 p-2 rounded-full">
            <nav className=" md:flex items-center gap-8 font-semibold">
              <a href="/" className="text-black transition-colors">
                Home
              </a>
              <a href="/about" className="text-black transition-colors">
                About Us
              </a>
              <a href="/collection" className="text-black transition-colors">
                Collections
              </a>
              {/* <a href="/contact" className="text-black transition-colors">
                Contact
              </a> */}
            </nav>
            <button className="bg-[#D4AF37] px-6 py-2 rounded-full font-semibold hover:bg-[#3b322b] transition-colors">
              Contact Us
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="mt-12 md:mt-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
          {/* Left Column: Main text and call to action */}
          <div className="w-full ">
            <h1
              className="text-5xl sm:text-6xl lg:text-8xl font-medium tracking-tight"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Where Elegance <br /> Meets Eternity
            </h1>
            <button className="mt-8 flex items-center gap-3 bg-white text-black px-1 py-1 pl-5 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors group">
              See Our Collections
              <div className="bg-[#D4AF37] text-white rounded-full p-3">
                <FaArrowRight size={20} />
              </div>
            </button>
            <div className="pt-3">
              <p className="font-semibold text-white/90">
                 Parakh Jewellers Store
              </p>
              <p className="mt-2 text-base text-white/70 max-w-md">
                Discover handcrafted jewelry designed to celebrate life's most
                precious moments. Timeless beauty, ethically made with love.
              </p>
            </div>
          </div>

          {/* Right Column: Social proof and detail cards */}
          <div className="w-full md:w-auto flex flex-col items-start md:items-end gap-6">
            {/* Happy Clients Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4 border border-white/10">
              <div className="flex -space-x-4">
                <img
                  src="https://i.pravatar.cc/40?img=1"
                  alt="client 1"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://i.pravatar.cc/40?img=2"
                  alt="client 2"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://i.pravatar.cc/40?img=3"
                  alt="client 3"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-gray-200/80">
                  <FaPlus className="text-black/70" />
                </div>
              </div>
              <div>
                <p className="font-bold text-xl">230K+</p>
                <p className="text-xs text-white/80">Happy Clients</p>
              </div>
            </div>

            {/* Product Snippet Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4 border border-white/10 self-end max-w-xs">
              <img
                src="https://i.pinimg.com/564x/a0/62/83/a0628373b137356613eb53a94eb887b4.jpg"
                alt="bracelet"
                className="w-20 h-20 object-cover rounded-xl"
              />
              <div>
                <p className="font-semibold">Beautiful In Every Detail</p>
                <a
                  href="#"
                  className="text-xs text-white/80 flex items-center gap-2 mt-1 hover:text-white transition-colors"
                >
                  Read More <FaPlayCircle />
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hero;
