import React from 'react';
import { motion } from 'motion/react';
import { Zap, Shield, Globe, Check, ArrowRight, Star } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export const Campaign = () => {
  return (
    <div className="pt-20">
      {/* High-Conversion Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-orange-500/10 text-orange-500 mb-6">
                Limited Time Offer: 50% Off First Month
              </span>
              <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">
                Stop Overpaying for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Cloud Compute</span>
              </h1>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                Join 10,000+ developers who have switched to NexusGrid. Get enterprise-grade GPUs at decentralized prices.
              </p>
              
              <div className="space-y-4 mb-10">
                {['No long-term contracts', 'Pay-as-you-go billing', '24/7 Priority support', '99.9% Uptime guarantee'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white font-medium">
                    <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-500" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 border-orange-500/30 bg-white/[0.03]">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Claim Your Credits</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Work Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-all" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Company Size</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-all appearance-none">
                      <option className="bg-zinc-900">1-10 employees</option>
                      <option className="bg-zinc-900">11-50 employees</option>
                      <option className="bg-zinc-900">51-200 employees</option>
                      <option className="bg-zinc-900">200+ employees</option>
                    </select>
                  </div>
                  <Button className="w-full py-4 text-lg mt-4">
                    Get My 50% Discount <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <p className="text-center text-xs text-gray-500 mt-4">
                    By signing up, you agree to our Terms and Privacy Policy.
                  </p>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-10">Trusted by innovative teams at</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
            {['OpenAI', 'Anthropic', 'Stability AI', 'Midjourney', 'Hugging Face'].map(logo => (
              <span key={logo} className="text-2xl font-bold text-white">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Switch to NexusGrid?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "70% Lower Costs", desc: "Our decentralized model eliminates the massive overhead of traditional data centers." },
              { title: "Zero Latency", desc: "Deploy your workloads on nodes physically closer to your users for better performance." },
              { title: "Infinite Scale", desc: "Access a global pool of millions of GPUs that never runs out of capacity." }
            ].map((b, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="text-orange-500 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{b.title}</h3>
                <p className="text-gray-400 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
