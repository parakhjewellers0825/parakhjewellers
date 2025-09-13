import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/components/blacklogo.png"

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [showNavbar, setShowNavbar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setShowNavbar(true);
      return;
    }
    const handleScroll = () => {
      setShowNavbar(window.scrollY >= 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Close menu when clicking on a link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  if (!showNavbar) return null;

  return (
    <nav
      className={`bg-white w-full flex justify-center items-center shadow-md fixed top-0 z-50 transition-all duration-300 ${
        showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      <div className="relative w-full max-w-[1200px] max-xl:max-w-[900px] px-6 py-2 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-serif flex flex-col justify-center items-center font-bold text-black cursor-pointer">
          <img src={logo} alt="" className="w-10"/>
          <p className="text-xs">Parakh Jewellers</p>
        </a>

        {/* Desktop Menu */}
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

        {/* Desktop Call to action button */}
        <button className="hidden md:block bg-[#D4AF37] text-white px-5 py-2 rounded-md hover:bg-black transition">
          Shop Now
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="focus:outline-none p-2"
            aria-label="Toggle menu"
          >
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
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Slide Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4 ">
          <button
            onClick={closeMenu}
            className="p-2 text-gray-600 hover:text-gray-800"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <nav className="px-6 py-4 bg-white h-screen">
          <ul className="space-y-6">
            <li>
              <a 
                href="/" 
                onClick={closeMenu}
                className="block text-lg text-gray-700 hover:text-[#D4AF37] transition py-2"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="/about" 
                onClick={closeMenu}
                className="block text-lg text-gray-700 hover:text-[#D4AF37] transition py-2"
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                href="/collections" 
                onClick={closeMenu}
                className="block text-lg text-gray-700 hover:text-[#D4AF37] transition py-2"
              >
                Collections
              </a>
            </li>
            <li>
              <a 
                href="/contact" 
                onClick={closeMenu}
                className="block text-lg text-gray-700 hover:text-[#D4AF37] transition py-2"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Shop Now Button */}
          <div className="mt-8">
            <button 
              onClick={closeMenu}
              className="w-full bg-[#D4AF37] text-white py-3 rounded-md hover:bg-black transition font-medium"
            >
              Shop Now
            </button>
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;