import React from 'react'
import { BsGem, BsCurrencyRupee } from 'react-icons/bs';
import { TbCertificate } from 'react-icons/tb';
import { RiExchangeLine } from 'react-icons/ri';

// Icons for the Features section
const GiftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#A98158]"
  >
    <path d="M20 12v10H4V12" />
    <path d="M2 7h20v5H2z" />
    <path d="M12 22V7" />
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
  </svg>
);

const DiscountIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#A98158]"
  >
    <line x1="19" y1="5" x2="5" y2="19" />
    <circle cx="6.5" cy="6.5" r="2.5" />
    <circle cx="17.5" cy="17.5" r="2.5" />
    <path d="M21 12a9 9 0 1 1-9-9" />
  </svg>
);

const DeliveryIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#A98158]"
  >
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
    <line x1="1" y1="8" x2="16" y2="8" />
  </svg>
);

const BudgetIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#A98158]"
  >
    <path d="M12 1v22" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    <path d="M21 12c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8" />
  </svg>
);


export default function JewelryFeatures() {
 const features = [
    {
      icon: <BsGem size={30}  />,
      title: "Best Design",
      description:
        "Our collection features exquisite and unique designs, crafted with precision and artistry to suit every style.",
    },
    {
      icon: <TbCertificate size={30}  />,
      title: "Certified Jewellery",
      description:
        "Every piece is hallmarked and certified for purity and authenticity, ensuring you get only the best quality.",
    },
    {
      icon: <RiExchangeLine size={30} />,
      title: "Easy Exchange",
      description:
        "We offer a hassle-free exchange policy. If you're not satisfied, easily exchange your purchase within 30 days.",
    },
    {
      icon: <BsCurrencyRupee size={30} />,
      title: "Budget-Friendly",
      description:
        "Discover stunning jewellery that fits your budget. We believe in providing beautiful, high-quality pieces at affordable prices.",
    },
  ];

  return (
    <div className="bg-white font-serif text-[#4A2F28] py-16 px-4 sm:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 text-center flex flex-col items-center relative overflow-hidden"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#4A2F28]">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
              {index === 3 && (
                <div className="absolute -bottom-16 -right-16 -z-0 opacity-5 text-gray-400">
                  <svg
                    width="250"
                    height="250"
                    viewBox="0 0 200 200"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M199.5 100C199.5 154.951 154.951 199.5 100 199.5C45.0492 199.5 0.5 154.951 0.5 100C0.5 45.0492 45.0492 0.5 100 0.5C129.816 0.5 156.71 12.049 175.768 30.6053" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}