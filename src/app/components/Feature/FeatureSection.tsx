"use client";

import React from "react";
import { Card } from "@/app/components/ui/card";
import { motion } from "framer-motion";
import { Brain, Clock, Target, Users, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: <Brain className="h-8 w-8 text-blue-500" />,
    title: "Smart Break Management",
    description: "AI-powered break scheduling that adapts to your work patterns.",
  },
  {
    icon: <Clock className="h-8 w-8 text-purple-500" />,
    title: "Time Tracking",
    description: "Detailed insights into your productivity patterns.",
  },
  {
    icon: <Target className="h-8 w-8 text-green-500" />,
    title: "Goal Setting",
    description: "Set and track personal and professional goals effectively.",
  },
  {
    icon: <Users className="h-8 w-8 text-yellow-500" />,
    title: "Team Collaboration",
    description: "Work seamlessly with your team on shared tasks and projects.",
  },
  {
    icon: <Shield className="h-8 w-8 text-red-500" />,
    title: "Privacy First",
    description: "Your data is encrypted and remains secure at all times.",
  },
  {
    icon: <Zap className="h-8 w-8 text-orange-500" />,
    title: "Real-time Analytics",
    description: "Get instant insights into your productivity trends.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
            Everything you need to boost productivity and maintain work-life balance.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-shadow dark:bg-gray-800">
                <div className="space-y-4">
                  <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg w-fit">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
