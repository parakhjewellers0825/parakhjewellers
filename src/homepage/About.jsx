import React from 'react';
import { BiArrowFromRight } from 'react-icons/bi';
import { FaArrowRight } from 'react-icons/fa';

// You can replace these with your actual image URLs
const WOMAN_IMAGE_URL = 'https://res.cloudinary.com/dzf1orh6a/image/upload/v1754638280/flamenco-dancer-model-blue-outfit-dance-updo-romantic-posing_i6daou.jpg';
const EARRING_IMAGE_URL = 'https://res.cloudinary.com/dzf1orh6a/image/upload/v1754638404/charming-model-with-dark-hair-shows-rich-golden-earrings-necklace-ring_z1v2ju.jpg';

// --- SVG Icons (Helper Components) ---

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);



const DecorativeStar = () => (
  <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0L14.3431 9.65685L24 12L14.3431 14.3431L12 24L9.65685 14.3431L0 12L9.65685 9.65685L12 0Z"/>
  </svg>
);


// --- Main Component ---

const About = () => {
  const features = [
    "Brilliant Cut Quality",
    "High Clarity Rating",
    "Elegant Setting Style",
    "Natural Color Grade",
    "Precise Carat Weight",
    "Durable Metal Choice",
  ];

  return (
    <section className=" font-sans w-full justify-center flex items-center">
      <div className="flex w-full max-w-[1100px] gap-12 items-center ">
        
        {/* Left Column: Text Content */}
        <div className="text-left mx-auto lg:mx-0">
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">
            Jewels as unique as you
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl  mb-6" style={{ fontFamily: 'serif' }}>
            Commitment, Forever, In Every Sparkling Jewel
          </h1>
          <p className="text-gray-600 leading-relaxed mb-10">
            Vestibulum augue nibh, elementum eget ante nec, consectetur viverra leo. Curabitur sit amet dignissim erat. Aenean fringilla pretium elit, et eleifend orci cursus a. Aenean bibendum faucibus semper. Vestibulum pretium dictum lacus eget sodales. Aliquam fermentum.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-gray-700">
                <PlusIcon />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <a href="/about">
            <button className="mt-8 flex text-white items-center bg-[#D4AF37] gap-3 px-1 py-1 pl-5
           rounded-full font-bold text-lg hover:bg-[#d49537] transition-colors group">
                        Know More
                        <div className="bg-black  rounded-full p-3">
                          <FaArrowRight size={20} />
                        </div>
                      </button>
          </a>
        </div>

        {/* Right Column: Image Display */}
        <div className="relative flex justify-center items-center h-[550px] lg:h-[700px] ">
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 md:right-8 lg:right-16 flex space-x-2 opacity-80">
            <div className="w-5 h-5 rounded-full border-2 border-[#D4AF37]"></div>
            <div className="w-5 h-5 rounded-full border-2 border-[#D4AF37]"></div>
            <div className="w-5 h-5 rounded-full border-2 border-[#D4AF37]"></div>
          </div>
          
          {/* Main Image with Golden Arch Frame */}
          <div className="relative w-[320px] h-[500px] md:w-[380px] md:h-[600px] border-[12px] border-[#D4AF37] rounded-t-full overflow-hidden shadow-xl">
            <img 
              src={WOMAN_IMAGE_URL} 
              alt="Woman wearing fine jewelry" 
              className="w-full h-full object-cover object-top" 
            />
          </div>
          
          {/* Inset Earring Image */}
          <div className="absolute bottom-16 -left-4 md:bottom-24 md:-left-8 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <img 
              src={EARRING_IMAGE_URL} 
              alt="Close-up of diamond earrings"
              className="w-full h-full object-cover"
            />
          </div>

        
        </div>

      </div>
    </section>
  );
};

export default About;