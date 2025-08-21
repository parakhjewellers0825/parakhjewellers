import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

// You can replace these with your actual image URLs
const WOMAN_IMAGE_URL = 'https://res.cloudinary.com/dzf1orh6a/image/upload/v1754638280/flamenco-dancer-model-blue-outfit-dance-updo-romantic-posing_i6daou.jpg';
const EARRING_IMAGE_URL = 'https://res.cloudinary.com/dzf1orh6a/image/upload/v1754638404/charming-model-with-dark-hair-shows-rich-golden-earrings-necklace-ring_z1v2ju.jpg';

// --- SVG Icons (Helper Components) ---

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
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
    <section className="font-sans w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto gap-12 lg:gap-16 items-center">
        
        {/* Right Column (becomes Top on Mobile): Image Display */}
        <div className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2">
          <div className="relative w-full max-w-sm h-[550px] lg:h-[650px] flex items-center justify-center">
            {/* Decorative Circles */}
            <div className="absolute top-0 right-0 flex space-x-2 opacity-80">
              <div className="w-5 h-5 rounded-full border-2 border-[#D4AF37]"></div>
              <div className="w-5 h-5 rounded-full border-2 border-[#D4AF37]"></div>
              <div className="w-5 h-5 rounded-full border-2 border-[#D4AF37]"></div>
            </div>
            
            {/* Main Image with Golden Arch Frame */}
            <div className="relative w-[280px] h-[450px] sm:w-[320px] sm:h-[500px] lg:w-[380px] lg:h-[600px] border-[12px] border-[#D4AF37] rounded-t-full overflow-hidden shadow-xl mx-auto">
              <img 
                src={WOMAN_IMAGE_URL} 
                alt="Woman wearing fine jewelry" 
                className="w-full h-full object-cover object-top" 
              />
            </div>
            
            {/* Inset Earring Image */}
            <div className="absolute bottom-12 -left-2 sm:bottom-16 sm:-left-4 lg:bottom-24 lg:-left-8 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img 
                src={EARRING_IMAGE_URL} 
                alt="Close-up of diamond earrings"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Left Column (becomes Bottom on Mobile): Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">
            Jewels as unique as you
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-6 font-serif">
            Commitment, Forever, In Every Sparkling Jewel
          </h1>
          <p className="text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
            Vestibulum augue nibh, elementum eget ante nec, consectetur viverra leo. Curabitur sit amet dignissim erat. Aenean fringilla pretium elit, et eleifend orci cursus a. Aenean bibendum faucibus semper.
          </p>
          
          <div className="grid text-left grid-cols-2 gap-x-8 gap-y-4 mb-12 max-w-lg mx-auto lg:mx-0">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start text-gray-700 justify-center sm:justify-start">
                <PlusIcon />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:justify-start">
             <a href="/about">
                <button className="flex text-white items-center bg-[#D4AF37] gap-3 px-1 py-1 pl-5 rounded-full font-bold text-lg hover:bg-[#c99207] transition-colors group">
                    Know More
                    <div className="bg-black rounded-full p-3 group-hover:scale-110 duration-300 transition-transform">
                      <FaArrowRight size={20} />
                    </div>
                </button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;