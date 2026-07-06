'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ClientLogo {
  name: string;
  initials: string;
}

interface MetricCard {
  value: string;
  label: string;
}

const Hero: React.FC = () => {
  const clientLogos: ClientLogo[] = [
    { name: 'Vasat', initials: 'VS' },
    { name: 'CESA', initials: 'CE' },
    { name: 'AstraZeneca', initials: 'AZ' },
    { name: 'FUJITSU', initials: 'FJ' },
    { name: 'Sage', initials: 'SG' },
  ];

  const metrics: MetricCard[] = [
    { value: '1000+', label: 'Professionals Trained' },
    { value: '200+', label: 'Organisations Supported' },
    { value: '85%', label: 'Align Capability Gap' },
    { value: '4.9/5', label: 'Average Client Rating' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-white overflow-hidden">
        {/* Background accent */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-30 pointer-events-none">
          <div className="relative w-full h-full">
            <Image
              src="/refrence images of website/WhatsApp Image 2026-07-02 at 7.08.32 PM (1).jpeg"
              alt="accent"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy-dark mb-6 leading-tight tracking-[-0.02em]">
                When a standard training course is
                <span className="text-teal-500"> not enough.</span>
              </h1>
              <p className="text-lg text-slate-gray mb-8 max-w-lg">
                Real capability. Lasting impact.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="inline-flex items-center justify-center px-8 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-colors">
                  Explore Learning Paths
                  <ArrowRight size={20} className="ml-2" />
                </button>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-teal-500 text-teal-500 font-semibold rounded-lg hover:bg-teal-50 transition-colors"
                >
                  Talk to an Expert
                </Link>
              </div>

              {/* Trust Badge */}
              <div className="pt-8 border-t border-gray-200">
                <p className="text-sm text-slate-gray font-semibold mb-4">
                  TRUSTED BY INNOVATIVE ORGANISATIONS
                </p>
                <div className="flex flex-wrap gap-6">
                  {clientLogos.map((logo) => (
                    <div
                      key={logo.name}
                      className="flex items-center justify-center px-4 py-2"
                    >
                      <span className="text-sm font-semibold text-gray-700">{logo.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden lg:block">
              <div className="relative h-[420px] bg-gradient-to-br from-navy-dark to-navy-light rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/refrence images of website/WhatsApp Image 2026-07-02 at 6.53.40 PM (1).jpeg"
                  alt="Hero visual"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="bg-gradient-to-r from-navy-dark to-navy-light text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-bright mb-2">
                  {metric.value}
                </div>
                <p className="text-gray-300 text-sm">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
