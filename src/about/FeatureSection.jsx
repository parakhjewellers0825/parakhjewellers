import React from 'react';

// Main App component for the About Us page, now self-contained
export default function FeatureSection() {
  // Data for the sections to make the code cleaner and easier to manage
  const sections = [
    {
      title: "Our Values",
      description: "Trust, transparency, craftsmanship, customer care, tradition with innovation, Warm, personalized service ensuring satisfaction and loyalty.",
      imageSrc: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1756101392/female-sales-person-jewelry-shop_fsyqa0.jpg",
      imageLeft: true,
      bgColor: 'bg-gray-50'
    },
    {
      title: "Our Vision",
      description: "To be Raipur’s most trusted jewellery destination, blending tradition with modern craftsmanship and creating timeless treasures that celebrate elegance and heritage.",
      imageSrc: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1756101127/young-couple-choosing-necklace-jewelry-store_sjbbuw.jpg",
      imageLeft: false,
      bgColor: 'bg-white'
    },
    {
      title: "Our Mission",
      description: "To deliver pure and high-quality gold and silver jewellery, offer personalized designs, polishing, and repairing services, and build lasting customer relationships with honesty and care.",
      imageSrc: "https://res.cloudinary.com/dzf1orh6a/image/upload/v1756101067/7614_cjzqeg.jpg",
      imageLeft: true,
      bgColor: 'bg-gray-50'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header Section */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            About Our Company
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Discover our story, our values, and our commitment to excellence in every piece of jewelry we create.
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div>
        {sections.map((section, index) => {
          // Determine the order of image and text based on the imageLeft prop
          const imageOrder = section.imageLeft ? 'md:order-first' : 'md:order-last';
          const textOrder = section.imageLeft ? 'md:order-last' : 'md:order-first';

          return (
            <div key={index} className={section.bgColor}>
              <div className="container mx-auto px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  {/* Image Column */}
                  <div className={`flex justify-center ${imageOrder}`}>
                    <img
                      src={section.imageSrc}
                      alt={section.title}
                      className="rounded-lg shadow-2xl w-full max-w-md object-cover h-80"
                      onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/e2e8f0/4a5568?text=Image+Not+Found'; }}
                    />
                  </div>
                  {/* Text Content Column */}
                  <div className={`flex flex-col justify-center order-first ${textOrder}`}>
                    <h3 className="text-3xl font-serif md:text-4xl font-bold text-gray-800 mb-4">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {section.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    
    </div>
  );
}
