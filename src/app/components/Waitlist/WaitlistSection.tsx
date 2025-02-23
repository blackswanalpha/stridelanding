"use client"; // Ensure it's a Client Component

import { db } from '@/firebase';
import { collection, addDoc } from 'firebase/firestore';

import React, { useState, useEffect } from "react";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Gift, 
  Zap, 
  Users, 
  Star, 
  Sparkles,
  Rocket,
  Crown,
  Shield,
  MessageSquare,
  Laptop,
  Globe,
  HeartHandshake
} from "lucide-react";


export  function WaitlistSection() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      await addDoc(collection(db, 'waitlist'), {
        name,
        email,
        timestamp: new Date(),
      });
      setMessage('Successfully added to the waitlist!');
      setEmail('');
      setName('');
    } catch (error) {
      setMessage('Error: Could not add to waitlist.');
    }
    setLoading(false);
  };

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set the launch date
  const launchDate = new Date("2025-03-30T00:00:00").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = launchDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (email) {
  //     setIsSubmitted(true);
  //     // Here you would typically handle the email submission
  //     setEmail("");
  //     setTimeout(() => setIsSubmitted(false), 3000);
  //   }
  // };

  const benefits = [
    {
      icon: <Gift className="h-5 w-5 text-violet-400" />,
      text: "Early access to all premium features",
      gradient: "from-violet-500 to-violet-600",
    },
    {
      icon: <Crown className="h-5 w-5 text-yellow-400" />,
      text: "Exclusive founding member benefits",
      gradient: "from-yellow-500 to-yellow-600",
    },
    {
      icon: <Rocket className="h-5 w-5 text-blue-400" />,
      text: "Priority onboarding and support",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: <Shield className="h-5 w-5 text-green-400" />,
      text: "Lifetime access to premium features",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: <Users className="h-5 w-5 text-pink-400" />,
      text: "Join an exclusive community",
      gradient: "from-pink-500 to-pink-600",
    },
    {
      icon: <MessageSquare className="h-5 w-5 text-orange-400" />,
      text: "Direct access to founders",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      icon: <Laptop className="h-5 w-5 text-cyan-400" />,
      text: "Cross-platform synchronization",
      gradient: "from-cyan-500 to-cyan-600",
    },
    {
      icon: <Globe className="h-5 w-5 text-emerald-400" />,
      text: "Global collaboration tools",
      gradient: "from-emerald-500 to-emerald-600",
    },
    {
      icon: <HeartHandshake className="h-5 w-5 text-rose-400" />,
      text: "Dedicated success manager",
      gradient: "from-rose-500 to-rose-600",
    },
  ];

  const stats = [
    { label: "Early Users", value: "2,000+" },
    { label: "Countries", value: "50+" },
    { label: "Satisfaction", value: "99%" },
    { label: "Enterprise Users", value: "100+" },
  ];

  return (
    <section className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.2),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.2),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8),transparent_20%,transparent_80%,rgba(0,0,0,0.8))]" />
      <div className="container max-w-6xl mx-auto px-6 py-16 relative">
        <div className="space-y-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-2 text-sm font-medium text-violet-400 bg-violet-950/50 w-fit mx-auto px-4 py-1 rounded-full border border-violet-800/50 shadow-lg shadow-violet-500/10"
            >
              <Sparkles className="h-4 w-4" />
              <span>Coming Soon</span>
            </motion.div>
            
            <h1 className="text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-blue-400 to-violet-400 animate-text">
              Productivity Reimagined
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Join thousands of early adopters shaping the future of productivity
            </p>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {[
              { value: timeLeft.days, label: "DAYS" },
              { value: timeLeft.hours, label: "HOURS" },
              { value: timeLeft.minutes, label: "MINUTES" },
              { value: timeLeft.seconds, label: "SECONDS" },
            ].map((item, index) => (
              <Card key={index} className="bg-zinc-900/50 border-zinc-800/50 p-6 backdrop-blur-sm hover:border-violet-500/50 transition-colors duration-300">
                <motion.div
                  key={item.value}
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  className="space-y-2"
                >
                  <div className="text-5xl font-bold bg-gradient-to-r from-violet-400 via-blue-400 to-violet-400 bg-clip-text text-transparent animate-text">
                    {item.value.toString().padStart(2, "0")}
                  </div>
                  <div className="text-sm text-zinc-500 font-medium">{item.label}</div>
                </motion.div>
              </Card>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 text-center"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="space-y-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Email Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                Join Our Waitlist
              </h2>
              <p className="text-zinc-400">
                Be the first to experience the future of productivity
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center  sm:flex-row gap-3 max-w-md mx-auto">
            <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-zinc-900/50 border-zinc-800/50 text-white placeholder:text-zinc-600 focus:border-violet-500/50"
          required
        />
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-zinc-900/50 border-zinc-800/50 text-white placeholder:text-zinc-600 focus:border-violet-500/50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button className="bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-500/20">
                Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
            </form>
            
  
      {message && <p className="mt-4 text-green-600">{message}</p>}
  
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-green-400 text-sm"
                >
                  Thanks for joining! We'll be in touch soon.
                </motion.div>
              )}
            </AnimatePresence>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Card className={`p-4 bg-gradient-to-br ${benefit.gradient} bg-opacity-10 border-0 hover:scale-105 transition-transform duration-300 shadow-lg`}>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-black/20 rounded-lg backdrop-blur-sm">
                        {benefit.icon}
                      </div>
                      <span className="text-sm font-medium text-white">
                        {benefit.text}
                      </span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}