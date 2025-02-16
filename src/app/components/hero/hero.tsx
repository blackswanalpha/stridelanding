"use client";

import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeroSectionProps {
  headline?: string;
  subtext?: string;
  primaryCta?: string;
  secondaryCta?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  onWaitlistSubmit?: (email: string) => Promise<void>;
}

const HeroSection = ({
  headline = "🚀 Supercharge Your Productivity – Transform Your Workflow!",
  subtext = "Say goodbye to chaos and hello to seamless organization! Thousands have already unlocked their full potential with our smart productivity system—now it’s your turn.",
  primaryCta = "Get Started",
  secondaryCta = "Learn More",
  onPrimaryClick = () => console.log("Primary button clicked"),
  onSecondaryClick = () => console.log("Secondary button clicked"),
  onWaitlistSubmit = async () => {},
}: HeroSectionProps) => {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-r from-[#C850C0] to-[#FFAA6C] overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 text-white z-10"
        >
          <h1 className="text-lg md:text-4xl font-bold mb-6 px-12 ">{headline}</h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 px-12 ">{subtext}</p>

          

          <div className="flex flex-wrap gap-4 px-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onPrimaryClick}
              className="px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:shadow-lg transition-shadow px-12"
            >
              {primaryCta}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onSecondaryClick}
              className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors px-12"
            >
              {secondaryCta}
            </motion.button>
          </div>
        </motion.div>

        {/* Right Content - Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2 mt-12 md:mt-0"
        >
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
              alt="Hero Illustration"
              width={700}
              height={500}
              className="rounded-lg shadow-2xl object-cover w-full h-full"
            />
          </div>
        </motion.div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
