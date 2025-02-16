"use client"; // Ensure it's a Client Component

import React from "react";
import { Card } from "@/app/components/ui/card";
import { motion } from "framer-motion";
import { 
  Brain, 
  Clock, 
  Target, 
  Users, 
  Shield, 
  Zap,
  Sparkles,
  Rocket,
  Crown,
  LineChart,
  Laptop,
  Globe
} from "lucide-react";

const features = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Smart Break Management",
    description: "AI-powered break scheduling that adapts to your work patterns.",
    gradient: "from-blue-500 to-blue-600",
    iconColor: "text-blue-400",
    hoverGradient: "hover:from-blue-400 hover:to-blue-500",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Time Tracking",
    description: "Detailed insights into your productivity patterns.",
    gradient: "from-purple-500 to-purple-600",
    iconColor: "text-purple-400",
    hoverGradient: "hover:from-purple-400 hover:to-purple-500",
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Goal Setting",
    description: "Set and track personal and professional goals effectively.",
    gradient: "from-green-500 to-green-600",
    iconColor: "text-green-400",
    hoverGradient: "hover:from-green-400 hover:to-green-500",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Team Collaboration",
    description: "Work seamlessly with your team on shared tasks and projects.",
    gradient: "from-yellow-500 to-yellow-600",
    iconColor: "text-yellow-400",
    hoverGradient: "hover:from-yellow-400 hover:to-yellow-500",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Privacy First",
    description: "Your data is encrypted and remains secure at all times.",
    gradient: "from-red-500 to-red-600",
    iconColor: "text-red-400",
    hoverGradient: "hover:from-red-400 hover:to-red-500",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Real-time Analytics",
    description: "Get instant insights into your productivity trends.",
    gradient: "from-orange-500 to-orange-600",
    iconColor: "text-orange-400",
    hoverGradient: "hover:from-orange-400 hover:to-orange-500",
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Smart Automation",
    description: "Automate repetitive tasks and focus on what matters most.",
    gradient: "from-pink-500 to-pink-600",
    iconColor: "text-pink-400",
    hoverGradient: "hover:from-pink-400 hover:to-pink-500",
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Performance Boost",
    description: "Optimize your workflow with AI-powered suggestions.",
    gradient: "from-cyan-500 to-cyan-600",
    iconColor: "text-cyan-400",
    hoverGradient: "hover:from-cyan-400 hover:to-cyan-500",
  },
  {
    icon: <Crown className="h-8 w-8" />,
    title: "Premium Experience",
    description: "Enjoy a seamless and premium productivity experience.",
    gradient: "from-amber-500 to-amber-600",
    iconColor: "text-amber-400",
    hoverGradient: "hover:from-amber-400 hover:to-amber-500",
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    title: "Advanced Analytics",
    description: "Deep insights into your productivity and performance.",
    gradient: "from-violet-500 to-violet-600",
    iconColor: "text-violet-400",
    hoverGradient: "hover:from-violet-400 hover:to-violet-500",
  },
  {
    icon: <Laptop className="h-8 w-8" />,
    title: "Cross-Platform",
    description: "Access your workspace from any device, anywhere.",
    gradient: "from-teal-500 to-teal-600",
    iconColor: "text-teal-400",
    hoverGradient: "hover:from-teal-400 hover:to-teal-500",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Global Access",
    description: "Connect with teams and resources worldwide.",
    gradient: "from-indigo-500 to-indigo-600",
    iconColor: "text-indigo-400",
    hoverGradient: "hover:from-indigo-400 hover:to-indigo-500",
  },
];

export  function FeaturesSection() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.2),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.2),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8),transparent_20%,transparent_80%,rgba(0,0,0,0.8))]" />
      
      <div className="container mx-auto px-6 relative">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-sm font-medium text-violet-400 bg-violet-950/50 w-fit mx-auto px-4 py-1 rounded-full border border-violet-800/50 shadow-lg shadow-violet-500/10 mb-6"
          >
            <Sparkles className="h-4 w-4" />
            <span>Powerful Features</span>
          </motion.div>

          <h2 className="text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-blue-400 to-violet-400 animate-text">
            Everything You Need
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Boost your productivity and maintain work-life balance with our comprehensive suite of features.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className={`group relative p-6 h-full bg-gradient-to-br ${feature.gradient} bg-opacity-10 hover:bg-opacity-20 border-0 transition-all duration-300 backdrop-blur-sm hover:scale-105 hover:-translate-y-1`}>
                <div className="absolute inset-0 bg-black/50 rounded-lg" />
                <div className="relative space-y-4">
                  <div className={`p-3 ${feature.iconColor} bg-black/40 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-white/90 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-300 group-hover:text-white/80 transition-colors">
                    {feature.description}
                  </p>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-lg`} />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>
    </section>
  );
}