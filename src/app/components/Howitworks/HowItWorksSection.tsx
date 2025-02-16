"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, BarChart, Zap, Coffee, ListTodo, Sparkles , Star } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Track Your Time",
    description:
      "Start by logging your work sessions and activities. Our intelligent system monitors your patterns and productivity peaks.",
    icon: <Clock className="h-6 w-6" />,
    color: "bg-blue-500",
  },
  {
    number: "2",
    title: "Analyze Patterns",
    description:
      "Our AI analyzes your work habits, identifying optimal break times and potential burnout risks based on your personal data.",
    icon: <BarChart className="h-6 w-6" />,
    color: "bg-violet-500",
  },
  {
    number: "3",
    title: "Smart Breaks",
    description:
      "Receive personalized break recommendations at the right moments, with activities tailored to your energy levels and preferences.",
    icon: <Coffee className="h-6 w-6" />,
    color: "bg-orange-500",
  },
  {
    number: "4",
    title: "Task Management",
    description:
      "Organize your work into focused sessions, with AI-powered task prioritization to maintain peak productivity.",
    icon: <ListTodo className="h-6 w-6" />,
    color: "bg-green-500",
  },
  {
    number: "5",
    title: "Boost Performance",
    description:
      "Track improvements in your focus, energy levels, and task completion rates as you maintain a healthy work-break balance.",
    icon: <Zap className="h-6 w-6" />,
    color: "bg-yellow-500",
  },
  {
    number: "6",
    title: "Optimize & Adapt",
    description:
      "Your routine continuously evolves as our system learns from your feedback and adjusts recommendations for optimal results.",
    icon: <Sparkles className="h-6 w-6" />,
    color: "bg-purple-500",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
      <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-sm font-medium text-violet-400 bg-violet-950/50 w-fit mx-auto px-4 py-1 rounded-full border border-violet-800/50 shadow-lg shadow-violet-500/10 mb-6"
          >
            <Star className="h-4 w-4" />
            <span>Simple Process</span>
          </motion.div>
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16"
        >
          How It Works
        </motion.h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              <div className="flex gap-6 items-start">
                {/* Step Icon */}
                <div
                  className={`flex-shrink-0 w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white`}
                >
                  {step.icon}
                </div>

                {/* Step Content */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      {step.number}.
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
