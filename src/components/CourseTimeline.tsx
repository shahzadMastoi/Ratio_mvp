'use client';

import React from 'react';
import { CheckCircle } from 'lucide-react';

interface TimelineStep {
  number: number;
  title: string;
  description: string;
  icon?: string;
}

const CourseTimeline: React.FC = () => {
  const steps: TimelineStep[] = [
    {
      number: 1,
      title: 'Capability Conversation',
      description: 'Understanding your context and desired outcomes',
    },
    {
      number: 2,
      title: 'Discovery & Diagnosis',
      description: 'Mapping current state and identifying gaps',
    },
    {
      number: 3,
      title: 'Capability Recommendation',
      description: 'Tailored solution aligned to your needs',
    },
    {
      number: 4,
      title: 'Tailored Design',
      description: 'Custom programme built for your organisation',
    },
    {
      number: 5,
      title: 'Expert-led Delivery',
      description: 'Interactive learning with real-world application',
    },
    {
      number: 6,
      title: 'Application & Reinforcement',
      description: 'Ongoing support to embed learning',
    },
    {
      number: 7,
      title: 'Outcome Review',
      description: 'Measure impact and long-term success',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-dark">
            Our Approach
          </h2>
        </div>

        {/* Journey Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="flex flex-col items-center">
                {/* Step Circle */}
                <div className="w-16 h-16 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-xl mb-4 shadow-lg">
                  {step.number}
                </div>

                {/* Step Content */}
                <div className="text-center">
                  <h3 className="font-semibold text-navy-dark mb-2 text-sm">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-gray">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center col-span-1">
                  <div className="h-1 w-full bg-gradient-to-r from-teal-500 to-transparent"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseTimeline;
