import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Logo and About Section */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">HostelHub</h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your trusted platform for hassle-free hostel management and student accommodation solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-3">
            <li>
              <a href="/about" className="flex items-center text-gray-400 hover:text-white transition">
                 About Us
              </a>
            </li>
            <li>
              <a href="/services" className="flex items-center text-gray-400 hover:text-white transition">
                 Services
              </a>
            </li>
            <li>
              <a href="/contact" className="flex items-center text-gray-400 hover:text-white transition">
                 Contact
              </a>
            </li>
            <li>
              <a href="/faq" className="flex items-center text-gray-400 hover:text-white transition">
                 FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media and Newsletter */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Stay Connected</h2>
          <div className="flex items-center space-x-4 mb-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <i className="fab fa-facebook-f"></i> {/* Font Awesome Icon */}
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-700 transition"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p className="text-sm text-gray-400">
            Subscribe to our newsletter for updates and offers.
          </p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md bg-gray-700 text-white focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-r-md hover:bg-blue-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        <p>&copy; 2024 HostelHub. All rights reserved. Designed and Developed by HostelHub Team.</p>
      </div>
    </footer>
  );
};

export default Footer;
