import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Framer Motion Variants for Animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};


export default function JewelryHeroEnhanced() {
  return (
    <div className="bg-[#F8F3ED] font-serif text-[#4A2F28] py-20 md:py-24 px-4 sm:px-8 overflow-hidden">
      <motion.div
        className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Column: Video */}
        <motion.div
          className="relative w-full md:aspect-video  rounded-lg overflow-hidden shadow-xl"
          variants={itemVariants}
        >
          <video
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            src="https://res.cloudinary.com/dzf1orh6a/video/upload/v1755931106/DSC_5076_m2ct7g.mov"
            poster="https://images.unsplash.com/photo-1599335623233-1427058335f2?q=80&w=1974&auto=format&fit=crop"
            autoPlay
            loop
            muted
            playsInline
          >
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </motion.div>

        {/* Right Column: Content */}
        <motion.div className="relative text-center lg:text-left" variants={containerVariants}>
          {/* Decorative Circle - Kept as a subtle background element */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 opacity-20 -z-0 hidden lg:block">
            <svg width="250" height="250" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200C155.228 200 200 155.228 200 100C200 81.5633 194.837 63.7773 185.539 48.3162L184.413 46.4612" stroke="#BCA997" strokeWidth="1"/>
            </svg>
          </div>

          <motion.p
            className="text-sm uppercase tracking-[0.25em] text-[#856a4f] mb-4"
            variants={itemVariants}
          >
            Adorn Yourself In Luxury
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A2F28] leading-tight mb-6"
            variants={itemVariants}
          >
            Elegance in Every Piece.
          </motion.h1>
          <motion.p
            className="text-lg text-[#6e5851] leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0"
            variants={itemVariants}
          >
            Discover timeless beauty that shines brighter with every moment. Our collections are crafted to celebrate your unique story with unparalleled brilliance.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            variants={itemVariants}
          >
            <a
              href="/collections"
              className="group flex items-center justify-center gap-3 bg-[#D4AF37] text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-[#c99207] hover:shadow-lg hover:scale-105"
            >
              Shop The Collection
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}