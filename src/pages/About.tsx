import React from 'react';
import { motion } from 'motion/react';
import { Target, Lightbulb, Users, Rocket, ChevronRight } from 'lucide-react';
import { Card } from '../components/ui/Card';

export const About = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision & Mission */}
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-bold text-white mb-8"
          >
            Our Mission
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We are democratizing access to high-performance computing. We believe that the next breakthrough in AI, medicine, or engineering shouldn't be limited by who has the biggest budget for cloud services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="space-y-6">
            <div className="w-12 h-12 bg-orange-500/20 rounded-2xl flex items-center justify-center">
              <Target className="text-orange-500 w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-white">The Vision</h2>
            <p className="text-gray-400 leading-relaxed">
              To build a global, decentralized supercomputer that is accessible to anyone, anywhere. By leveraging idle resources, we create a more efficient and sustainable future for digital infrastructure.
            </p>
          </div>
          <div className="space-y-6">
            <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center">
              <Lightbulb className="text-purple-500 w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-white">The Problem</h2>
            <p className="text-gray-400 leading-relaxed">
              Traditional cloud providers are expensive and centralized. Meanwhile, millions of high-end GPUs sit idle in data centers and homes. NexusGrid bridges this gap.
            </p>
          </div>
        </div>

        {/* Roadmap */}
        <div className="mb-32">
          <h2 className="text-4xl font-bold text-white text-center mb-16">The Roadmap</h2>
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/10 hidden md:block" />
            <div className="space-y-12">
              {[
                { date: "Q1 2026", title: "Beta Launch", desc: "Opening the marketplace to initial providers and consumers.", icon: <Rocket /> },
                { date: "Q2 2026", title: "Multi-Cloud Integration", desc: "Seamlessly bridge jobs between NexusGrid and AWS/GCP.", icon: <Users /> },
                { date: "Q3 2026", title: "AI Training SDK", desc: "Native support for PyTorch and TensorFlow distributed training.", icon: <Target /> },
                { date: "Q4 2026", title: "Global Expansion", desc: "Expanding node network to 100+ countries.", icon: <Lightbulb /> }
              ].map((item, i) => (
                <div key={i} className={cn("flex flex-col md:flex-row items-center gap-8", i % 2 === 0 ? "md:flex-row-reverse" : "")}>
                  <div className="flex-1 text-center md:text-left">
                    <div className={cn("bg-white/5 border border-white/10 p-8 rounded-3xl", i % 2 === 0 ? "md:text-right" : "md:text-left")}>
                      <span className="text-orange-500 font-bold mb-2 block">{item.date}</span>
                      <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center z-10 border-4 border-black">
                    <div className="text-white w-5 h-5">{item.icon}</div>
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-4xl font-bold text-white text-center mb-16">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Aryan Nawale", role: "CEO & Co-Founder", bio: "Visionary leader with a background in AI Infrastructure." },
              { name: "Aniket Ombale", role: "CTO &  Co-Founder", bio: "Distributed systems expert and technical architect." },
              { name: "Avantika Dubey", role: "Product Head & Co-Founder", bio: "Product strategy veteran with a focus on user experience." },
              { name: "Bhumika Giripunje", role: "Marketing Head", bio: "Growth specialist focused on scaling decentralized networks." },
              { name: "Bhavesh Dumbre", role: "Operations Lead", bio: "Expert in streamlining complex infrastructure and logistics." }
            ].map((member, i) => (
              <Card key={i} className="text-center">
                <div className="w-24 h-24 bg-white/10 rounded-full mx-auto mb-6" />
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-orange-500 text-sm font-medium mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');
