import React, { useState } from 'react';
import Link from 'next/link';
import { Compass, Calendar, MapPin, Users, Star, Phone, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    setEmail('');
  };

  const navLinks = [
    { name: 'Home', href: '/', page: 'home', icon: Compass },
    { name: 'Events', href: '/events', page: 'events', icon: Calendar },
    { name: 'Destinations', href: '/destinations', page: 'destinations', icon: MapPin },
    { name: 'About', href: '/about', page: 'about', icon: Users },
    { name: 'Reviews', href: '/reviews', page: 'reviews', icon: Star },
    { name: 'Contact', href: '/contact', page: 'contact', icon: Phone }
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com', icon: Facebook },
    { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
    { name: 'Instagram', href: 'https://instagram.com', icon: Instagram },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand and Description */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
              EventScape
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Crafting unforgettable experiences with premium adventures, luxury escapes, and cultural journeys worldwide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-800/50 hover:bg-orange-500/20 text-gray-300 hover:text-orange-400 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="sr-only">{link.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xl font-semibold text-orange-500 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors duration-300"
                    >
                      <Icon className="w-4 h-4" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-xl font-semibold text-orange-500 mb-6">Stay Connected</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-all duration-300"
              />
              <button
                onClick={handleNewsletterSubmit}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
              >
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} EventScape. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-400/10 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>
    </footer>
  );
};

export default Footer;