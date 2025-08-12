import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqData = [
  {
    question: 'What materials are used in your jewelry?',
    answer: 'We use high-quality materials like 925 sterling silver, 14k/18k gold plating, freshwater pearls, and ethically sourced gemstones.',
  },
  {
    question: 'How do I care for my jewelry?',
    answer: 'Keep your jewelry dry, avoid contact with perfumes or lotions, and store it in a soft pouch to prevent scratches and tarnish.',
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship worldwide. Delivery times and shipping rates may vary depending on your location.',
  },
  {
    question: 'Can I return or exchange a product?',
    answer: 'Absolutely! We offer a 14-day return or exchange policy as long as the item is unworn and in its original condition.',
  },
  {
    question: 'Is your packaging gift-ready?',
    answer: 'Yes, all our jewelry comes in beautiful eco-friendly packaging, perfect for gifting.',
  },
];

const FaqItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-xl shadow-sm transition-all duration-300 ${
        isOpen ? 'ring-1 ring-stone-300' : ''
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-start gap-4 p-5 text-left hover:bg-gray-50 focus:outline-none rounded-xl transition-colors"
      >
        <div>
          <h3 className="text-base sm:text-lg font-medium text-gray-800">{faq.question}</h3>
        </div>
        <span className="mt-1 text-stone-600 transition-transform duration-300">
          {isOpen ? <FiMinus className="text-xl text-stone-600" /> : <FiPlus className="text-xl" />}
        </span>
      </button>

      <div
        className={`px-5 pt-0 text-sm text-gray-600 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[300px] opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        {faq.answer}
      </div>
    </div>
  );
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-[#f9f6f1] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-serif font-semibold text-gray-800">FAQs</h2>
          <p className="mt-3 text-base text-gray-500">Find answers to your questions about our jewelry, care, shipping, and more.</p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => toggleIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
