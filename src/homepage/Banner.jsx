import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div
      // --- CHANGE IS ON THIS LINE ---
      className="relative flex items-center justify-center md:justify-start py-10 md:py-32 lg:py-40"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dzf1orh6a/image/upload/v1754641087/7042_uy4khn.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="w-full flex justify-center items-center">
        <div className="w-full max-w-[1200px]">
          {/* Content (remains the same as the previous responsive version) */}
          <div
            className="relative z-10 flex flex-col justify-center items-start md:items-start w-full md:w-1/2
       text-white text-left px-4 md:px-0"
          >
            <h1
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
              className="text-2xl max-lg:w-11/18 md:text-5xl lg:text-6xl font-bold mb-8 max-lg:mb-4"
            >
              Exquisite Jewelry for Every Occasion
            </h1>
            <p className="text-sm max-lg:w-11/18 md:text-lg mb-8 hidden lg:block">
              Discover our stunning collection of handcrafted jewelry, designed
              to make you shine.
            </p>
            <div className="flex justify-center lg:justify-start">
              <a href="/about">
                <button
                  className="flex text-white items-center bg-[#D4AF37] gap-3 px-1 py-1 pl-5 rounded-full 
            font-bold text-lg max-xl:text-xs hover:bg-[#c99207] transition-colors duration-300 group"
                >
                  Know More
                  <div className="bg-black rounded-full p-4 max-lg:p-2 transition-transform group-hover:scale-110 duration-300">
                    <FaArrowRight />
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
