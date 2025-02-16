"use client";

import { Brain, Clock, Heart, Users } from 'lucide-react';


function FeatureItem({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-start">
      <div className="mb-3">
        <Icon className="w-6 h-6 text-[#C850C0]" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
    </div>
  );
}

function StatsSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C850C0] to-[#FFAA6C]">
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Illustration */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop"
                alt="Wellness Illustration"
                className="rounded-2xl object-cover w-full h-full shadow-xl"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Why Choose Stride?
            </h2>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 relative">
              {/* Vertical Lines */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200"></div>
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200"></div>

              <FeatureItem
                icon={Brain}
                title="Personalized for You"
                description="From algorithms learning about your habits to goals that provide truly customized plans."
              />
              
              <FeatureItem
                icon={Heart}
                title="All-in-One Solution"
                description="From tracking to mental wellness, everything you need for a healthy life in one app."
              />
              
              <FeatureItem
                icon={Users}
                title="Accessible for Everyone"
                description="No matter your fitness level, VitalWell adapts to meet you where you are."
              />
              
              <FeatureItem
                icon={Clock}
                title="24/7 Support"
                description="With 24/7 access to tools and resources, you're never alone on your journey."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StatsSection;