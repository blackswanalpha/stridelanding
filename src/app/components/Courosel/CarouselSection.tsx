"use client";


import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play, Code, Layout, Palette, Layers, Brain, Focus, ChartBar, BarChart4, Shield, Timer, HeartPulse, Workflow } from "lucide-react";
import { useHover } from "@/app/hooks/useHover";

const allFeatures = {
  1: [
    { 
      id: 1, 
      icon: <Brain className="w-6 h-6" />, 
      title: "AI Support", 
      description: "Intelligent task organization and stress management assistance",
      color: "from-rose-400 to-orange-300"
    },
    { 
      id: 2, 
      icon: <Shield className="w-6 h-6" />, 
      title: "Structured Planning", 
      description: "Clear framework for organizing daily tasks and responsibilities",
      color: "from-violet-400 to-fuchsia-300"
    },
    { 
      id: 3, 
      icon: <Timer className="w-6 h-6" />, 
      title: "Time Management", 
      description: "Smart scheduling to prevent overwhelming task loads",
      color: "from-cyan-400 to-teal-300"
    },
    { 
      id: 4, 
      icon: <Workflow className="w-6 h-6" />, 
      title: "Workflow Control", 
      description: "Streamlined processes for better task management",
      color: "from-amber-400 to-yellow-300"
    }
  ],
  2: [
    { 
      id: 1, 
      icon: <Focus className="w-6 h-6" />, 
      title: "Focus Mode", 
      description: "Eliminate distractions and enhance concentration",
      color: "from-rose-400 to-orange-300"
    },
    { 
      id: 2, 
      icon: <Layout className="w-6 h-6" />, 
      title: "Smart Prioritization", 
      description: "AI-powered task prioritization for maximum efficiency",
      color: "from-violet-400 to-fuchsia-300"
    },
    { 
      id: 3, 
      icon: <Timer className="w-6 h-6" />, 
      title: "Time Tracking", 
      description: "Monitor and optimize your productivity patterns",
      color: "from-cyan-400 to-teal-300"
    },
    { 
      id: 4, 
      icon: <Workflow className="w-6 h-6" />, 
      title: "Workflow Automation", 
      description: "Automate routine tasks for better efficiency",
      color: "from-amber-400 to-yellow-300"
    }
  ],
  3: [
    { 
      id: 1, 
      icon: <ChartBar className="w-6 h-6" />, 
      title: "Progress Tracking", 
      description: "Real-time monitoring of task completion and goals",
      color: "from-rose-400 to-orange-300"
    },
    { 
      id: 2, 
      icon: <BarChart4 className="w-6 h-6" />, 
      title: "Data Analytics", 
      description: "Comprehensive insights into productivity patterns",
      color: "from-violet-400 to-fuchsia-300"
    },
    { 
      id: 3, 
      icon: <Brain className="w-6 h-6" />, 
      title: "AI Recommendations", 
      description: "Smart suggestions for workflow optimization",
      color: "from-cyan-400 to-teal-300"
    },
    { 
      id: 4, 
      icon: <Palette className="w-6 h-6" />, 
      title: "Custom Reports", 
      description: "Personalized analytics dashboard and reporting",
      color: "from-amber-400 to-yellow-300"
    }
  ],
  4: [
    { 
      id: 1, 
      icon: <HeartPulse className="w-6 h-6" />, 
      title: "Health Monitoring", 
      description: "Track work-life balance and stress levels",
      color: "from-rose-400 to-orange-300"
    },
    { 
      id: 2, 
      icon: <Timer className="w-6 h-6" />, 
      title: "Break Reminders", 
      description: "Smart notifications for maintaining healthy work patterns",
      color: "from-violet-400 to-fuchsia-300"
    },
    { 
      id: 3, 
      icon: <Shield className="w-6 h-6" />, 
      title: "Burnout Prevention", 
      description: "Early warning system for potential burnout signs",
      color: "from-cyan-400 to-teal-300"
    },
    { 
      id: 4, 
      icon: <Layout className="w-6 h-6" />, 
      title: "Balance Dashboard", 
      description: "Overview of health metrics and well-being indicators",
      color: "from-amber-400 to-yellow-300"
    }
  ]
};

const slides = [
  { 
    id: 1, 
    title: "Stress Reduction", 
    subtitle: "DailyFlow System",
    description: "The DailyFlow System is designed to reduce stress by simplifying task management, providing structured planning, and offering AI-driven support to help users feel in control of their daily routines.", 
    gradient: "from-purple-400 via-pink-500 to-red-500"
  },
  { 
    id: 2, 
    title: "Productivity Boost", 
    subtitle: "Smart Features",
    description: "The Productivity Boost feature in the DailyFlow System helps users maximize efficiency, stay focused, and complete tasks effectively.", 
    gradient: "from-cyan-400 via-teal-500 to-emerald-500"
  },
  { 
    id: 3, 
    title: "Personalized Insights", 
    subtitle: "Analytics Dashboard",
    description: "The Personalized Insights & Analytics feature empowers users with real-time progress tracking, data-driven insights, and AI-powered recommendations.", 
    gradient: "from-amber-400 via-orange-500 to-red-500"
  },
  {
    id: 4,
    title: "Health & Well-being",
    subtitle: "Balanced Living",
    description: "The DailyFlow System ensures users can prioritize self-care, avoid burnout, and maintain an overall sense of well-being while managing their tasks and goals.",
    gradient: "from-indigo-400 via-purple-500 to-pink-500"
  }
];

export function CarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [ref, isHovered] = useHover<HTMLDivElement>();

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused || isHovered) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isPaused, isHovered, nextSlide]);

  const currentFeatures = allFeatures[(currentIndex + 1) as keyof typeof allFeatures];

  return (
    <section 
      ref={ref} 
      className="relative w-full min-h-screen overflow-hidden bg-zinc-50 dark:bg-zinc-900"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-white/20 to-transparent" />
      </div>

      <div className="container relative mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[currentIndex].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <motion.span 
                  className={`inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r ${slides[currentIndex].gradient} text-white`}
                >
                  {slides[currentIndex].subtitle}
                </motion.span>
                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-500">
                  {slides[currentIndex].title}
                </h1>
                <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {slides[currentIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              <AnimatePresence mode="wait">
                {currentFeatures.map((feature) => (
                  <motion.div
                    key={`${currentIndex}-${feature.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: feature.id * 0.1 }}
                    className="group relative p-6 rounded-2xl bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-zinc-200/50 dark:border-white/10 hover:shadow-xl hover:shadow-zinc-900/5 transition-all duration-300"
                  >
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    <div className={`p-3 w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-4`}>
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-lg text-zinc-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Content - Interactive Preview */}
          <div className="relative lg:h-[600px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slides[currentIndex].id}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className={`w-full h-full bg-gradient-to-br ${slides[currentIndex].gradient}`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0),rgba(0,0,0,0.5))]" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-8 z-20">
              <div className="flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </motion.button>
                
                <button 
                  onClick={() => setIsPaused(!isPaused)} 
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
                >
                  {isPaused ? 
                    <Play className="w-5 h-5 text-white" /> : 
                    <Pause className="w-5 h-5 text-white" />
                  }
                </button>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </motion.button>
              </div>

              <div className="flex space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? "bg-white w-6" 
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}