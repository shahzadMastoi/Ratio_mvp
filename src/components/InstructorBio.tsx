'use client';

import React from 'react';
import { Award, Users, Briefcase, GraduationCap } from 'lucide-react';
import Link from 'next/link';

interface Instructor {
  id: string;
  name: string;
  specialization: string;
  yearsExperience: number;
  credentials: string[];
  expertise: string[];
  coreSpecialisms: string[];
  about: string;
  image?: string;
}

interface ExpertiseHighlight {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InstructorBio: React.FC<{ instructor?: Instructor }> = ({
  instructor = {
    id: 'anthony',
    name: 'Anthony',
    specialization: 'Leadership, Change & Project Delivery',
    yearsExperience: 20,
    credentials: [
      '20+ years leading change and leadership',
      'Ex-Head of Change, PwC',
      'Trusted adviser to similar leaders',
      'Trainer, Facilitator & Coach',
    ],
    expertise: [
      'Leadership & Management Development',
      'Leading & Managing Change',
      'Stakeholder Engagement & Influence',
      'Emotional Intelligence & People Leadership',
      'Communication & Facilitation Skills',
      'Managing Teams & Performance',
      'Coaching, Mentoring & Feedback',
      'Project & Programme Leadership',
    ],
    coreSpecialisms: [
      'Leadership Development',
      'Change Leadership',
      'Stakeholder Influence',
      'Emotional Intelligence',
      'Communication Skills',
      'Team Leadership',
      'Coaching & Mentoring',
      'Project Leadership',
    ],
    about: `With over 20 years leading large-scale change and transformation across global organisations, Anthony helps leaders build the capability to lead people, navigate change and deliver results that last.

Anthony partners with organisations to strengthen leadership capability, improve communication, and equip people to lead change with confidence.

His sessions are interactive, insightful and grounded in real-world experience, helping teams turn learning into action.`,
  },
}) => {
  const expertiseHighlights: ExpertiseHighlight[] = [
    {
      icon: <Award className="w-8 h-8" />,
      title: '20+ years experience',
      description: 'Leading change and leadership initiatives across global organisations',
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Ex-Head of Change, PwC',
      description: 'Significant experience leading large-scale change and transformation',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Trusted adviser',
      description: 'Supporting strategy, communication and people-focused change',
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Engaging educator',
      description: 'Known for creating practical, relevant learning experiences',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-teal-500 font-semibold text-sm mb-2">MEET THE INSTRUCTOR</p>
          <h1 className="text-5xl md:text-6xl font-bold text-navy-dark mb-4">
            {instructor.name}
          </h1>
          <p className="text-2xl text-slate-gray font-medium mb-8">
            {instructor.specialization}
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {expertiseHighlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="text-teal-500 mb-3 flex justify-center">
                  {highlight.icon}
                </div>
                <h3 className="font-semibold text-navy-dark mb-2 text-sm">
                  {highlight.title}
                </h3>
                <p className="text-xs text-slate-gray">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left - About */}
          <div>
            <h2 className="text-3xl font-bold text-navy-dark mb-2">
              Empowering leaders.
            </h2>
            <h2 className="text-3xl font-bold text-teal-500 mb-6">
              Driving lasting change.
            </h2>
            <p className="text-slate-gray mb-6 leading-relaxed">
              {instructor.about}
            </p>

            {/* Credentials List */}
            <div>
              <h3 className="font-semibold text-navy-dark mb-4 text-sm">CREDENTIALS</h3>
              <ul className="space-y-3">
                {instructor.credentials.map((credential, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-teal-500 font-bold mt-1">•</span>
                    <span className="text-slate-gray">{credential}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right - Expertise & Specialisms */}
          <div>
            {/* Expertise Highlights */}
            <div className="bg-gradient-to-br from-navy-dark to-navy-light text-white p-8 rounded-lg mb-8">
              <h3 className="font-semibold text-lg mb-6 text-teal-400">EXPERTISE HIGHLIGHTS</h3>
              <ul className="space-y-3">
                {instructor.expertise.slice(0, 5).map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-teal-400">✓</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Specialisms Grid */}
            <div>
              <h3 className="font-semibold text-navy-dark mb-6">Core specialisms</h3>
              <div className="grid grid-cols-2 gap-4">
                {instructor.coreSpecialisms.map((specialism, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span className="text-sm font-medium text-navy-dark">
                      {specialism}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Courses Section */}
        <div className="border-t pt-16">
          <h2 className="text-3xl font-bold text-navy-dark mb-12">
            Courses {instructor.name} leads
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              'Advanced Leadership Skills',
              'Emotional Intelligence for Leaders',
              'Communication & Influence',
              'Leading & Managing Change',
              'Stakeholder Engagement',
            ].map((course, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-navy-dark mb-3">{course}</h4>
                <button className="text-teal-500 font-medium text-sm hover:text-teal-600">
                  View course →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-navy-dark to-navy-light text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">
            Talk to {instructor.name} about your leadership and team challenges.
          </h3>
          <Link
            href="/contact"
            className="inline-flex px-8 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InstructorBio;
