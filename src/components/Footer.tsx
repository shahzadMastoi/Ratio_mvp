'use client';

import React from 'react';
import { Mail, Link as LinkIcon, Share2 } from 'lucide-react';
import Link from 'next/link';

interface FooterLink {
  category: string;
  links: { label: string; href: string }[];
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const Footer: React.FC = () => {
  const footerLinks: FooterLink[] = [
    {
      category: 'Quick Links',
      links: [
        { label: 'Approach', href: '/#approach' },
        { label: 'Solutions', href: '/#solutions' },
        { label: 'Areas We Cover', href: '/' },
        { label: 'Case Studies', href: '/' },
      ],
    },
    {
      category: 'Company',
      links: [
        { label: 'About Ratio', href: '/' },
        { label: 'Instructors', href: '/instructors' },
        { label: 'Resources', href: '/' },
      ],
    },
  ];

  const socialLinks: SocialLink[] = [
    { icon: <LinkIcon size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Share2 size={20} />, href: '#', label: 'Twitter' },
    { icon: <LinkIcon size={20} />, href: '#', label: 'YouTube' },
    { icon: <Mail size={20} />, href: '#', label: 'Email' },
  ];

  return (
    <footer className="bg-gradient-to-r from-navy-dark to-navy-light text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">ratio</span>
              </div>
              <span className="font-bold text-lg">ratio</span>
            </Link>
            <p className="text-gray-300 text-sm mb-6">
              When a standard training course is not enough. We help organisations build practical capability that lasts.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.category}>
              <h3 className="font-semibold text-lg mb-4 text-white">{section.category}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-teal-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Contact</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Phone: +44 (0)1223 750 851</p>
              <p>Email: hello@youratio.co.uk</p>
              <p>Address: One Henry Lane, Cambridge, CB1 1XA, United Kingdom</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 sm:mb-0">
              © 2025 Ratio. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
