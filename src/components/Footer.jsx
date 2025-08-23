import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Parakh Jewellers</h3>
          <p className="text-sm">
            We offer timeless jewelry crafted with love. Every piece tells a
            story and reflects the beauty of life.
          </p>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Collections
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
               Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Adderess</h3>
          <p className="text-sm mb-2">
            parakh jewellers sadar bazar, raipur c.g
          </p>
          <p>9039353000, 9691624055</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-gray-900">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-900">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-900">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-900">
              <FaPinterest />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 text-center py-4 text-sm text-gray-500">
        Copyright © {new Date().getFullYear()} All rights reserved, Designed and
        developed by <a className="font-semibold" href="https://spadvertising.in/">SP Advertising</a>
      </div>
    </footer>
  );
}
