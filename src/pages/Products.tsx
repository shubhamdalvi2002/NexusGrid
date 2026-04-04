import React from 'react';
import { Server, Cpu, Activity, Check, Search } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const Products = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">High-performance infrastructure tailored for your most demanding workloads.</p>
        </div>

        {/* GPU Marketplace */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Cpu className="text-orange-500" /> GPU Marketplace
            </h2>
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search hardware..." 
                className="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { gpu: "NVIDIA H100", vram: "80GB", price: "2.10", desc: "The gold standard for LLM training." },
              { gpu: "NVIDIA A100", vram: "40GB", price: "0.85", desc: "Versatile performance for any AI task." },
              { gpu: "NVIDIA RTX 4090", vram: "24GB", price: "0.45", desc: "Best value for rendering and inference." },
              { gpu: "NVIDIA L40S", vram: "48GB", price: "0.65", desc: "Optimized for generative AI workloads." },
              { gpu: "NVIDIA A6000", vram: "48GB", price: "0.55", desc: "Professional graphics and rendering." },
              { gpu: "NVIDIA V100", vram: "32GB", price: "0.35", desc: "Reliable legacy performance." }
            ].map((m, i) => (
              <Card key={i} className="flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{m.gpu}</h3>
                  <div className="text-orange-500 font-bold">${m.price}/hr</div>
                </div>
                <p className="text-gray-400 text-sm mb-6 flex-1">{m.desc}</p>
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-sm"><span className="text-gray-500">VRAM</span><span className="text-white">{m.vram}</span></div>
                  <div className="flex justify-between text-sm"><span className="text-gray-500">Reliability</span><span className="text-white">99.9%</span></div>
                </div>
                <Button variant="outline" className="w-full">Rent Now</Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing Comparison */}
        <div>
          <h2 className="text-3xl font-bold text-white text-center mb-16">Pricing Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-6 px-4 text-gray-500 font-medium">GPU Type</th>
                  <th className="py-6 px-4 text-gray-500 font-medium">NexusGrid</th>
                  <th className="py-6 px-4 text-gray-500 font-medium">AWS (On-Demand)</th>
                  <th className="py-6 px-4 text-gray-500 font-medium">Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { type: "NVIDIA A100 (40GB)", cs: "$0.85", aws: "$3.06", savings: "72%" },
                  { type: "NVIDIA H100 (80GB)", cs: "$2.10", aws: "$5.12", savings: "59%" },
                  { type: "NVIDIA RTX 4090", cs: "$0.45", aws: "N/A", savings: "N/A" },
                  { type: "NVIDIA V100 (32GB)", cs: "$0.35", aws: "$2.48", savings: "85%" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="py-6 px-4 text-white font-medium">{row.type}</td>
                    <td className="py-6 px-4 text-orange-500 font-bold">{row.cs}</td>
                    <td className="py-6 px-4 text-gray-400">{row.aws}</td>
                    <td className="py-6 px-4 text-green-500 font-bold">{row.savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
