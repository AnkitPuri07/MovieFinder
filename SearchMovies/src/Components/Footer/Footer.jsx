import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 text-white py-8 px-6 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-2">🎥 MovieFinder</h2>
          <p className="text-sm text-gray-300">
            Discover movies, explore genres, and save your favorites. Your gateway to cinematic adventures.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-red-400 transition duration-200">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-red-400 transition duration-200">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-red-400 transition duration-200">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social / Newsletter */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Stay Connected</h2>
          <p className="text-sm text-gray-300 mb-2">
            Follow us for updates and movie magic.
          </p>
          <div className="flex gap-4">
            <span className="hover:text-red-400 cursor-pointer">Twitter</span>
            <span className="hover:text-red-400 cursor-pointer">Instagram</span>
            <span className="hover:text-red-400 cursor-pointer">YouTube</span>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} MovieFinder. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;