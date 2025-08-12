import React from "react";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-white text-gray-800 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left - Contact Info */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Get In Touch</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We'd love to hear from you. Whether you have a question about a piece, custom order, or anything else — our team is ready to help.
          </p>

          <div className="space-y-6 text-base text-gray-700">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-[#D4AF37] mt-1" />
              <div>
                <h4 className="font-semibold">Address</h4>
                <p>parakh jewellers sadar bazar, raipur (C.G.)</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhone className="text-[#D4AF37] mt-1" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p>9039353000, 9691624055</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-[#D4AF37] mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p>parakhjewellers@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <form className="bg-gray-50 p-8 rounded-xl shadow-lg space-y-6">
          <div className="relative">
            <input
              type="text"
              id="name"
              placeholder=" "
              className="peer w-full border border-gray-300 bg-white px-4 pt-5 pb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-pink-500"
            >
              Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              placeholder=" "
              className="peer w-full border border-gray-300 bg-white px-4 pt-5 pb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-pink-500"
            >
              Email
            </label>
          </div>

          <div className="relative">
            <textarea
              id="message"
              rows="4"
              placeholder=" "
              className="peer w-full border border-gray-300 bg-white px-4 pt-5 pb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <label
              htmlFor="message"
              className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-pink-500"
            >
              Message
            </label>
          </div>

          <button
            type="submit"
            className="bg-[#D4AF37] text-black px-6 py-3 rounded-md font-semibold hover:bg-[#c29d2f] transition-all shadow-md hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
