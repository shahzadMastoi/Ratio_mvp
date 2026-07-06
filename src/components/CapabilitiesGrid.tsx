'use client';

import React from 'react';
import { Users, Brain, Zap, Layers, TrendingUp, Shield } from 'lucide-react';

interface Capability {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CapabilitiesGrid: React.FC = () => {
  const capabilities: Capability[] = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Leadership & Delivery',
      description: 'Building confident leaders who drive organisational success',
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI & Data Engineering',
      description: 'Master AI capabilities and data-driven decision making',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Software Engineering',
      description: 'Advanced development and quality engineering practices',
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Business Analysis & Systems',
      description: 'Complex systems thinking and business requirements',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Cloud & DevOps Systems',
      description: 'Modern cloud platforms and continuous delivery',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Quality & Testing',
      description: 'Quality assurance and testing excellence',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-4">
            We help you build capability in the
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-teal-500">
            areas that matter most.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="p-8 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="text-teal-500 mb-4">{capability.icon}</div>
              <h3 className="text-lg font-semibold text-navy-dark mb-3">
                {capability.title}
              </h3>
              <p className="text-slate-gray text-sm leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesGrid;
