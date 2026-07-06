'use client';

import React from 'react';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote:
        'The training was practical and insightful. Our teams immediately applied what they learned to improve our projects.',
      author: 'Engineering Manager',
      title: 'Vosai',
      company: 'Vosai',
      rating: 5,
    },
    {
      quote:
        'The instructors really understand industry challenges. This wasn\'t a standard course - it was tailored to our needs.',
      author: 'Head of Engineering',
      title: 'ATG',
      company: 'ATG',
      rating: 5,
    },
    {
      quote:
        'A great learning partner that helped us build real capability our team can apply immediately.',
      author: 'Director of Technology',
      title: 'TAG',
      company: 'TAG',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-4">
            What our clients say.
          </h2>
          <p className="text-lg text-slate-gray">
            Trusted by teams who demand more than standard training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-gray mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div>
                <p className="font-semibold text-navy-dark">{testimonial.author}</p>
                <p className="text-sm text-slate-gray">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
