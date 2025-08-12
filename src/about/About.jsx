import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
        <div className="bg-white text-gray-800 px-4 py-16 md:px-12  pt-[6rem]">
      {/* Header */}
      <section className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About GlamJewels
        </h1>
        <p className="text-lg text-gray-600">
          Timeless beauty, handcrafted for modern elegance.
        </p>
      </section>

      {/* Our Story */}
      <section className="max-w-5xl mx-auto mb-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            Founded in 2010, GlamJewels was born out of a passion for beauty, sophistication, and artistry.
            We specialize in creating timeless pieces that blend classic elegance with modern design.
            From engagement rings to statement necklaces, each piece is handcrafted with love and precision.
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/dzf1orh6a/image/upload/v1754641087/7042_uy4khn.jpg"
          alt="Our Story"
          className="rounded-lg shadow-md w-full h-auto object-cover"
        />
      </section>

      {/* Craftsmanship */}
      <section className="max-w-5xl mx-auto mb-20 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://res.cloudinary.com/dzf1orh6a/image/upload/v1754641087/7042_uy4khn.jpg"
          alt="Craftsmanship"
          className="rounded-lg shadow-md w-full h-auto object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Exquisite Craftsmanship</h2>
          <p className="text-gray-700 leading-relaxed">
            Every GlamJewels creation is a testament to exceptional craftsmanship.
            Our artisans use ethically sourced gemstones and premium metals to design jewelry that speaks to both heart and heritage.
            Quality is not just our promise—it's our obsession.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg text-yellow-600 mb-2">Integrity</h3>
            <p className="text-gray-600">
              We believe in honesty, transparency, and building trust with every customer.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg text-yellow-600 mb-2">Elegance</h3>
            <p className="text-gray-600">
              Our designs embrace timeless beauty and refined sophistication.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg text-yellow-600 mb-2">Sustainability</h3>
            <p className="text-gray-600">
              We source responsibly and design ethically for a better future.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-20">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Ready to Sparkle?</h2>
        <p className="text-gray-600 mb-6">Discover our collection and find the perfect piece for every moment.</p>
        <a
          href="/collections"
          className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition"
        >
          Browse Collection
        </a>
      </section>
    </div>
    </div>

  );
};

export default About;
