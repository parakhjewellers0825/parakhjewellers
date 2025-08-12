// src/components/ContactPage.jsx

import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaGlobe, FaEnvelope } from 'react-icons/fa';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import Navbar from '../components/Navbar';

// Helper component for the contact info cards at the bottom
const InfoCard = ({ icon, title, lines }) => (
  <div className="flex items-start space-x-4">
    <div className="bg-[#C6BBAF] p-4 rounded-full">
      {React.cloneElement(icon, { size: 24, className: "text-white" })}
    </div>
    <div>
      <h3 className="font-bold text-lg text-stone-800">{title}</h3>
      {lines.map((line, index) => (
        <p key={index} className="text-stone-600">{line}</p>
      ))}
    </div>
  </div>
);

// Main Contact Page Component
const Contact = () => {
  const contactDetails = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Ideal Location',
      lines: ['No. 58 A, East Madison Street,', 'Baltimore, MD, USA 4508'],
    },
    {
      icon: <FaPhoneAlt />,
      title: 'Instant Connect',
      lines: ['OOO - 123 - 456789', 'OOOO 1234 56789'],
    },
    {
      icon: <FaGlobe />,
      title: 'Our Websites',
      lines: ['www.swarnam.com', 'www.swarna.com'],
    },
    {
      icon: <FaEnvelope />,
      title: 'Mail Us',
      lines: ['info@example.com', 'support@example.com'],
    },
  ];

  return (
    <div className="pt-[4rem]">
     
    <div className="bg-[#f8f6f3] font-sans p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Feedback & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Information */}
          <div className="text-stone-700">
            <h3 className="text-sm font-semibold tracking-widest text-stone-500 uppercase">THOUGHTS</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 my-4">We Value Feedback</h2>
            <p className="leading-relaxed">
              Donec elementum, sapien quis viverra laoreet, mauris lorem gravida ipsum, eu vehicula magna ligula ut amet lectus. Pellentesque faucibus dignissim urna eu dignissim. Nunc quis lorem posuere urna faucibus fringilla.
            </p>

            <div className="mt-10">
              <h3 className="text-xl font-bold font-serif text-stone-800">Working Hours</h3>
              <ul className="mt-4 space-y-2 text-stone-600">
                <li className="flex items-center">
                  <span className="text-amber-600 mr-2">✦</span> Monday To Friday - 08:00am To 08:00pm
                </li>
                <li className="flex items-center">
                  <span className="text-amber-600 mr-2">✦</span> Saturday - 08:00am To 02:00pm
                </li>
                <li className="flex items-center">
                  <span className="text-amber-600 mr-2">✦</span> Sunday - Holiday
                </li>
              </ul>
            </div>

            <div className="mt-10 flex space-x-4">
              {/* Replace with your actual image URLs */}
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop" alt="Model 1" className="w-24 h-24 object-cover rounded-md" />
              <img src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=120&h=120&fit=crop" alt="Jewelry 1" className="w-24 h-24 object-cover rounded-md" />
              <img src="https://images.unsplash.com/photo-1581338834612-613a0b897963?w=120&h=120&fit=crop" alt="Model 2" className="w-24 h-24 object-cover rounded-md" />
              <img src="https://images.unsplash.com/photo-1611652033959-8a42456345d3?w=120&h=120&fit=crop" alt="Jewelry 2" className="w-24 h-24 object-cover rounded-md" />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-[#EAE0D5] p-8 md:p-12 rounded-lg shadow-md">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Name*</label>
                <input type="text" name="name" id="name" placeholder="Name*" required className="w-full bg-[#F5F1EC] p-3 rounded-md placeholder-stone-500 text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-600" />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone Number*</label>
                <input type="tel" name="phone" id="phone" placeholder="Phone Number*" required className="w-full bg-[#F5F1EC] p-3 rounded-md placeholder-stone-500 text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-600" />
              </div>
              <div>
                <label htmlFor="date" className="sr-only">Enter Date*</label>
                <input type="date" name="date" id="date" placeholder="Enter Date*" required className="w-full bg-[#F5F1EC] p-3 rounded-md placeholder-stone-500 text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-600" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message*</label>
                <textarea name="message" id="message" rows="5" placeholder="Message*" required className="w-full bg-[#F5F1EC] p-3 rounded-md placeholder-stone-500 text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-600"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full sm:w-auto flex items-center justify-center bg-[#3a3a3a] text-white font-bold py-3 px-8 rounded-full hover:bg-black transition duration-300">
                  Send Message
                  <BsArrowRightCircleFill className="ml-3" size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Section: Get In Touch */}
        <div className="mt-24 md:mt-32 text-center">
            <h3 className="text-sm font-semibold tracking-widest text-stone-500 uppercase">GET IN TOUCH</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 my-4">Branching Out For You</h2>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {contactDetails.map((detail, index) => (
                <InfoCard key={index} icon={detail.icon} title={detail.title} lines={detail.lines} />
              ))}
            </div>
        </div>

      </div>
    </div>
    </div>
  );
};

export default Contact;