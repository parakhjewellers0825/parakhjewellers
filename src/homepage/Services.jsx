import React from 'react';

// SVG Icon Components for a clean and scalable look
const GoldSilverIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15.646 15.646a4 4 0 01-5.292 0M12 19.646a4 4 0 010-5.292m-3.646 3.646a4 4 0 015.292 0" />
  </svg>
);

const CustomDesignIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const PolishIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 01-1.414 1.414L12 6.414l-2.293 2.293a1 1 0 01-1.414-1.414L10 4.293m5 14l2.293-2.293a1 1 0 00-1.414-1.414L12 17.586l-2.293-2.293a1 1 0 00-1.414 1.414L10 19.707M12 21a9 9 0 110-18 9 9 0 010 18z" />
  </svg>
);

const RepairIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);


// Main Services Component
export default function ServicesSection() {
  const services = [
    {
      icon: <GoldSilverIcon />,
      title: "Gold and Silver Jewellery",
      description: "Explore our exquisite collection of timeless gold and silver pieces, crafted to perfection.",
    },
    {
      icon: <CustomDesignIcon />,
      title: "Custom Jewelry Design",
      description: "Bring your vision to life. We work with you to create unique, personalized jewelry.",
    },
    {
      icon: <PolishIcon />,
      title: "Gold Polish",
      description: "Restore the brilliant shine of your treasured jewelry with our professional polishing service.",
    },
    {
      icon: <RepairIcon />,
      title: "Repairing",
      description: "From simple fixes to complex restorations, our expert jewelers handle your repairs with care.",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
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
              <div className="flex items-center justify-center rounded-md bg-yellow-100 p-3 w-16 h-16 mx-auto">
                {service.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-gray-900 text-center">{service.title}</h3>
              <p className="mt-2 text-base text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
