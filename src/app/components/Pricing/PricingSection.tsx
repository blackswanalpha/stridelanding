"use client"; // Ensure it's a Client Component


import React from "react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "KSH. 0",
    description: "Perfect for getting started",
    features: [
      "5 Days Trial Access to all features",
      "Basic task tracking",
      "Simple break reminders",
      "Limited analytics",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "KSH 800",
    description: "Best for professionals",
    features: [
      "Advanced task management",
      "Smart break scheduling",
      "Full analytics suite",
      "Priority support",
      "Custom routines",
      "custom analytics",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large teams",
    features: [
      "All Pro features",
      "Custom integrations",
      "Dedicated support",
      "Advanced security",
      "Team analytics",
      "Custom training",
    ],
  },
];

export function PricingSection() {
  return (
    <section className="py-20 min-h-screen relative overflow-hidden bg-gradient-to-r from-[#C850C0] to-[#FFAA6C]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-block">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-white/10 text-white mb-4 backdrop-blur-sm">
              Pricing Plans
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Choose the plan that's right for you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Card
                className={`relative p-8 h-full flex flex-col bg-white/5 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-white/20 ${
                  plan.popular
                    ? "shadow-xl hover:shadow-2xl transform hover:-translate-y-1 border-white/40"
                    : "hover:-translate-y-1"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium bg-[#8B5CF6] text-white shadow-lg">
                      <Sparkles className="h-4 w-4" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight text-white">
                      {plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className="text-white/70 font-medium">/month</span>
                    )}
                  </div>
                  <p className="mt-4 text-white/80">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <motion.li
                      key={feature}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-white/80">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <Button
                  className={`w-full h-12 text-base font-medium transition-all duration-300 hover:opacity-90 ${
                    plan.popular
                      ? "bg-[#8B5CF6] hover:bg-[#7C3AED] text-white shadow-sm"
                      : "bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
                  }`}
                >
                  Get Started
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}