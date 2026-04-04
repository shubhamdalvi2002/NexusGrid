import React from 'react';
import { motion } from 'motion/react';
import { Zap, Shield, Globe, ChevronRight, Play, Star } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export const Home = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-orange-500/20 blur-[120px] rounded-full opacity-50" />
          <div className="absolute top-[200px] left-[20%] w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white/5 text-orange-400 border border-white/10 mb-8">
              <Zap className="w-4 h-4 mr-2" /> The Future of Computing
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-[1.1]">
              Decentralized Compute <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">Power for Everyone</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Access high-performance GPUs and CPUs globally. Scale your AI training, 3D rendering, and data processing at a fraction of the cost of traditional cloud.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" onClick={() => onNavigate('campaign')}>
                Start Computing <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => onNavigate('products')}>
                Explore Marketplace
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-20 relative max-w-5xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
            <div className="bg-white/5 border border-white/10 rounded-3xl p-2 backdrop-blur-sm overflow-hidden shadow-2xl shadow-orange-500/10">
              <div className="bg-zinc-900 rounded-2xl p-8 text-left font-mono text-sm">
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-gray-500 text-xs ml-2">computeshare-cli --v1.0.4</div>
                </div>
                <div className="space-y-2">
                  <div className="flex gap-4"><span className="text-green-500">$</span> <span className="text-white">computeshare login</span></div>
                  <div className="text-gray-500 ml-8">✓ Authenticated as user_7218</div>
                  <div className="flex gap-4"><span className="text-green-500">$</span> <span className="text-white">computeshare deploy --image pytorch/latest --gpu A100</span></div>
                  <div className="text-gray-500 ml-8">Searching for available nodes...</div>
                  <div className="text-orange-400 ml-8">Found 12 suitable nodes. Selecting cheapest (0.85/hr)...</div>
                  <div className="text-green-500 ml-8">✓ Job deployed to node_id: CS-8821</div>
                  <div className="flex gap-4"><span className="text-green-500">$</span> <span className="text-white">computeshare logs --follow</span></div>
                  <div className="text-gray-400 ml-8">Epoch 1/10: [==============================] - loss: 0.421</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">Built for Performance</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Our platform bridges the gap between idle compute resources and high-demand workloads.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="text-orange-500" />, title: "Instant Scaling", desc: "Scale from a single GPU to a massive cluster in seconds with our elastic infrastructure." },
              { icon: <Shield className="text-purple-500" />, title: "Enterprise Security", desc: "End-to-end encryption and isolated execution environments keep your data safe." },
              { icon: <Globe className="text-blue-500" />, title: "Global Availability", desc: "Access compute nodes from every corner of the globe for minimal latency." }
            ].map((f, i) => (
              <Card key={i} className="group">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-gray-400 leading-relaxed">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-400">Three simple steps to start your compute journey.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Select Hardware", desc: "Browse our marketplace for the specific GPU or CPU configuration you need." },
              { step: "02", title: "Deploy Job", desc: "Upload your Docker image or use our pre-configured templates for AI and rendering." },
              { step: "03", title: "Get Results", desc: "Monitor your job in real-time and download results once processing is complete." }
            ].map((s, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-black text-white/5 absolute -top-8 -left-4">{s.step}</div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{s.title}</h3>
                <p className="text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">Loved by Developers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sarah Chen", role: "AI Researcher", text: "NexusGrid saved us over $10k in training costs last month. The A100 availability is incredible." },
              { name: "Marcus Thorne", role: "3D Artist", text: "Rendering 4K animations used to take days. Now I just spin up a cluster and it's done in hours." },
              { name: "Alex Rivera", role: "CTO @ DataFlow", text: "The API integration was seamless. We've automated our entire data pipeline using their CLI." }
            ].map((t, i) => (
              <Card key={i}>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 text-orange-500 fill-orange-500" />)}
                </div>
                <p className="text-gray-300 italic mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-full" />
                  <div>
                    <div className="text-white font-bold">{t.name}</div>
                    <div className="text-gray-500 text-sm">{t.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
