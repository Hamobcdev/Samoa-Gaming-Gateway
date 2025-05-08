import React from 'react';
import { Gamepad2, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Gamepad2 size={24} className="text-indigo-500" />
              <span className="text-white font-bold text-xl">GameWallet</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              GameWallet connects gamers without traditional banking access to the world of competitive gaming through local telecom e-wallet integration.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Games</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Tournaments</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Leaderboard</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">About Us</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Payment Methods</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; 2025 GameWallet. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Terms</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Privacy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;