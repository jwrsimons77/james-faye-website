'use client';

import { motion } from 'framer-motion';
import { Calendar, Briefcase, Code, Users, BookOpen, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Now() {
  const currentItems = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Leading Product at Gamma",
      description: "Currently focused on launching new AI features for SmartAgent and expanding SmartPCI's payment capabilities. Working on reducing customer onboarding time and improving agent productivity through ML-powered insights.",
      status: "Full-time",
      color: "bg-blue-100 text-blue-800"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Building Wrkfriends",
      description: "Shipping new features for professional networking platform. Recently added AI-powered connection matching and working on event discovery functionality.",
      status: "Side Project",
      color: "bg-purple-100 text-purple-800"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Manchester Foxes Leadership",
      description: "Organizing training sessions and tournaments for our touch rugby club. Preparing for the upcoming regional championships and planning international friendly matches.",
      status: "Community",
      color: "bg-orange-100 text-orange-800"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Learning & Reading",
      description: "Currently reading 'Inspired' by Marty Cagan and diving deeper into AWS Bedrock capabilities. Exploring how to better integrate AI into product discovery processes.",
      status: "Learning",
      color: "bg-green-100 text-green-800"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">What I'm Doing Now</h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              A snapshot of what I'm currently focused on. Last updated: January 2024
            </p>
          </motion.div>
        </div>
      </header>

      {/* Current Focus */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Current Focus Areas</h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              I believe in being intentional about where I spend my time and energy. Here's what's 
              currently on my radar, both professionally and personally.
            </p>
          </motion.div>

          <div className="space-y-8">
            {currentItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.color}`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Note */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-blue-50 rounded-2xl p-8 lg:p-12"
          >
            <div className="flex items-start space-x-4">
              <Calendar className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why This Page Exists</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Inspired by Derek Sivers' "now page" movement, I maintain this page to stay 
                  accountable to myself and transparent with others about my current priorities. 
                  It helps me say no to things that don't align with what I'm focused on right now.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Life moves fast in product management and building side projects. This page is 
                  my anchor point—a reminder of what really matters in this season of life.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            Want to know when this page gets updated?{" "}
            <Link href="/#contact" className="text-white hover:underline">
              Get in touch
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
} 