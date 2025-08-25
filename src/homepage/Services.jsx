import React from 'react';
// Importing more relevant icons from the react-icons library
import { BsGem, BsStars } from 'react-icons/bs';
import { TfiRulerPencil } from 'react-icons/tfi';
import { FiTool } from 'react-icons/fi';

// Main Services Component
export default function ServicesSection() {
  const services = [
    {
      // Using a gem icon for jewellery - more direct and elegant
      icon: <BsGem className="h-8 w-8 " />,
      title: "Gold and Silver Jewellery",
      description: "Explore our exquisite collection of timeless gold and silver pieces, crafted to perfection.",
    },
    {
      // A ruler and pencil icon perfectly represents custom design work
      icon: <TfiRulerPencil className="h-8 w-8 " />,
      title: "Custom Jewelry Design",
      description: "Bring your vision to life. We work with you to create unique, personalized jewelry.",
    },
    {
      // Sparkle icons are great for representing shine and polish
      icon: <BsStars className="h-8 w-8 " />,
      title: "Gold Polish",
      description: "Restore the brilliant shine of your treasured jewelry with our professional polishing service.",
    },
    {
      // A tool icon is a clear and universal symbol for repairs
      icon: <FiTool className="h-8 w-8 " />,
      title: "Repairing",
      description: "From simple fixes to complex restorations, our expert jewelers handle your repairs with care.",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#4A2F28] sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Expert craftsmanship for all your jewelry needs.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 sm:gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="transform rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* I've updated the background colors to match the new icon colors for a more cohesive look */}
              <div className={`flex items-center justify-center rounded-md bg-gray-100 p-3 w-16 h-16 mx-auto`}>
                {service.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[#4A2F28] font-serif text-center">{service.title}</h3>
              <p className="mt-2 text-base text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
