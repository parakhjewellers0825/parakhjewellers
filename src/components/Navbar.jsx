import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setShowNavbar(true); // show navbar immediately on non-home pages
      return;
    }
    // On homepage, show navbar only after scroll 200px
    const handleScroll = () => {
      setShowNavbar(window.scrollY >= 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  if (!showNavbar) return null;

  return (
    <nav
      className={`bg-white w-full flex justify-center items-center shadow-md fixed top-0 z-50 transition-all duration-300 ${
        showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      <div className="w-full max-w-[1200px] px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-serif font-bold text-black cursor-pointer">
          Parakh Jewellers
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-[#D4AF37] transition">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-[#D4AF37] transition">
            <a href="/about">About Us</a>
          </li>
          <li className="hover:text-[#D4AF37] transition">
            <a href="/collections">Collections</a>
          </li>
          <li className="hover:text-[#D4AF37] transition">
            <a href="/contact">Contact</a>
          </li>
        </ul>

        {/* Call to action button */}
        <button className="hidden md:block bg-[#D4AF37] text-white px-5 py-2 rounded-md hover:bg-black transition">
          Shop Now
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
