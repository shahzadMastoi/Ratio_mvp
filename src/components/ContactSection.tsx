'use client';

import React from 'react';
import { Mail, Phone, Link as LinkIcon } from 'lucide-react';

interface ContactFormData {
  fullName: string;
  workEmail: string;
  company: string;
  jobTitle: string;
  topic: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = React.useState<ContactFormData>({
    fullName: '',
    workEmail: '',
    company: '',
    jobTitle: '',
    topic: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Options */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-4">
              Let's talk about
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-teal-500 mb-8">
              what needs to improve.
            </h2>
            <p className="text-slate-gray mb-8 leading-relaxed">
              Whether your challenge is AI adoption, leadership capability, business analysis, project delivery, engineering practices or technical transformation, we'll help you identify the capability gap and shape the right solution.
            </p>

            <div className="space-y-6">
              {/* Contact Options */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-teal-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-dark mb-1">Call Us</h4>
                  <p className="text-slate-gray text-sm">
                    Speak directly with our team during business hours.
                  </p>
                  <p className="text-teal-500 font-medium mt-2">+44 (0)1223 750 851</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-teal-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-dark mb-1">Email Us</h4>
                  <p className="text-slate-gray text-sm">
                    Send us your challenge and we'll get back to you.
                  </p>
                  <p className="text-teal-500 font-medium mt-2">hello@youratio.co.uk</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <LinkIcon size={24} className="text-teal-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-dark mb-1">
                    Connect on LinkedIn
                  </h4>
                  <p className="text-slate-gray text-sm">
                    Follow Ratio for insights, practical advice and updates.
                  </p>
                  <p className="text-teal-500 font-medium mt-2">Visit our LinkedIn →</p>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-slate-gray text-sm font-semibold mb-4">
                TRUSTED BY LEADING ORGANISATIONS
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 text-lg">★★★★★</span>
                  <span className="text-sm text-slate-gray">5.0</span>
                </div>
                <p className="text-sm text-slate-gray">
                  Based on 40+ verified reviews
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-navy-dark mb-6">
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-navy-dark mb-2">
                    Full name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-dark mb-2">
                    Work email *
                  </label>
                  <input
                    type="email"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                    required
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-navy-dark mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-dark mb-2">
                    Job title
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="Your job title"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                  />
                </div>
              </div>

              {/* Topic */}
              <div>
                <label className="block text-sm font-medium text-navy-dark mb-2">
                  What would you like to talk about? *
                </label>
                <select
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition bg-white"
                  required
                >
                  <option value="">Please select</option>
                  <option value="capability-gap">Capability Gap</option>
                  <option value="ai-adoption">AI Adoption</option>
                  <option value="leadership">Leadership</option>
                  <option value="engineering">Engineering</option>
                  <option value="project-delivery">Project Delivery</option>
                  <option value="transformation">Transformation</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-navy-dark mb-2">
                  How can we help?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us a little about your challenge or goals..."
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-colors flex items-center justify-center gap-2"
              >
                Send Message →
              </button>

              {/* Privacy */}
              <p className="text-xs text-slate-gray text-center flex items-center justify-center gap-1">
                <span>🔒</span> Your information is secure and will never be shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
