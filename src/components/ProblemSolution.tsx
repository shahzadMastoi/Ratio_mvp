'use client';

import React from 'react';
import { X, CheckCircle } from 'lucide-react';

interface ProblemItem {
  icon: 'x';
  title: string;
  description: string;
}

interface SolutionItem {
  icon: 'check';
  title: string;
  description: string;
}

const ProblemSolution: React.FC = () => {
  const problems: ProblemItem[] = [
    {
      icon: 'x',
      title: 'Generic content that doesn\'t fit your real-world challenges',
      description: 'Most programmes lack genuine industry relevance',
    },
    {
      icon: 'x',
      title: 'Skills gaps that slow down projects and innovation',
      description: 'Individuals may learn concepts, but lack the practical ability to apply them',
    },
    {
      icon: 'x',
      title: 'Teaming learning in silos, not as a capability ecosystem',
      description: 'Teams learn to excel, not as capability ecosystems',
    },
    {
      icon: 'x',
      title: 'Limited application to your tools, systems and domain',
      description: 'Training often leaves participants without clear pathways to put learning into practice',
    },
  ];

  const solutions: SolutionItem[] = [
    {
      icon: 'check',
      title: 'Expert-led hands-on learning paths',
      description: 'Aligned to your projects, tools and technologies',
    },
    {
      icon: 'check',
      title: 'Real-world based content',
      description: 'Grounded in practitioner experience and measurable outcomes',
    },
    {
      icon: 'check',
      title: 'Build capability. Drive performance. Deliver results.',
      description: 'Enabling lasting organizational impact',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-4">
            We help organisations bridge
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-teal-500">
            the capability gap.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Problem Section */}
          <div className="bg-white border-l-4 border-red-400 p-8">
            <h3 className="text-2xl font-bold text-navy-dark mb-2">THE PROBLEM</h3>
            <p className="text-slate-gray mb-8">
              Off-the-shelf training isn't always enough.
            </p>

            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-red-100">
                      <X size={18} className="text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-navy-dark">
                      {problem.title}
                    </h4>
                    <p className="text-sm text-slate-gray mt-1">
                      {problem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Section */}
          <div className="bg-gradient-to-br from-navy-dark to-navy-light text-white p-8 rounded-lg">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold">✨</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">OUR SOLUTION</h3>
                <p className="text-gray-300">
                  Learning that's practical, relevant and measurable.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-teal-500">
                      <CheckCircle size={18} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {solution.title}
                    </h4>
                    <p className="text-sm text-gray-300 mt-1">
                      {solution.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
