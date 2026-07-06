'use client';

import React from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';

interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks: NavLink[] = [
    { label: 'Approach', href: '/#approach' },
    { label: 'Solutions', href: '/#solutions' },
    { label: 'Areas We Cover', href: '/#' },
    { label: 'Case Studies', href: '/#' },
    { label: 'Instructors', href: '/instructors' },
    { label: 'About', href: '/#' },
    { label: 'Resources', href: '/#' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">ratio</span>
            </div>
            <span className="font-bold text-xl text-navy-dark">ratio</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-gray-700 hover:text-teal-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex px-6 py-2 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition-colors"
            >
              Talk to an Expert
            </Link>
            <button
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-500"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-teal-500 hover:text-teal-600"
                onClick={() => setIsOpen(false)}
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
