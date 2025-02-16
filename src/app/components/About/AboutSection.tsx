"use client";


import React from 'react';
import { Clock, Target, Shield, ChevronDown, Quote } from 'lucide-react';

function AboutSection() {
  const scrollToContent = () => {
    const contentSection = document.getElementById('values');
    contentSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
            alt="Office space"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Stride</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Empowering professionals through AI-driven solutions that transform how we work,
              rest, and achieve our goals.
            </p>
          </div>
        </div>
        <button
          onClick={scrollToContent}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-600 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-16 h-16 mx-auto mb-8 text-blue-500 opacity-50" />
            <blockquote className="text-3xl font-light text-gray-700 mb-8 leading-relaxed">
              "Innovation is not about saying yes to everything. It's about saying no to all but the most crucial features."
            </blockquote>
            <cite className="text-gray-600 font-medium block">
              Steve Jobs
            </cite>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Mission Card */}
            <div className="group">
              <div className="relative bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 group-hover:-translate-y-2">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-xl shadow-lg">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="pt-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    To revolutionize time management through AI-powered smart breaks and intelligent
                    task prioritization, helping professionals achieve peak performance while maintaining balance.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group">
              <div className="relative bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 group-hover:-translate-y-2">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-xl shadow-lg">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="pt-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    A world where productivity and well-being coexist harmoniously, enabling
                    individuals to reach their full potential in both their professional and personal lives.
                  </p>
                </div>
              </div>
            </div>

            {/* Values Card */}
            <div className="group">
              <div className="relative bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 group-hover:-translate-y-2">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-xl shadow-lg">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="pt-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Values
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Built on the foundations of innovation, efficiency, and user well-being. Every
                    feature we develop is designed to enhance both productivity and job satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AboutSection;