import React from 'react';
import { motion } from 'motion/react';
import { Book, Code, Terminal, Cpu, Globe, Zap, Shield, Layers } from 'lucide-react';
import { Card } from '../components/ui/Card';

export const Documentation = () => {
  const sections = [
    {
      title: "Getting Started",
      icon: <Zap className="text-orange-500" />,
      items: ["Quick Start Guide", "Installation", "Authentication", "First Compute Job"]
    },
    {
      title: "Core Concepts",
      icon: <Layers className="text-blue-500" />,
      items: ["Decentralized Nodes", "Resource Allocation", "Pricing Model", "Network Topology"]
    },
    {
      title: "API Reference",
      icon: <Code className="text-purple-500" />,
      items: ["REST API", "GraphQL API", "Webhooks", "Rate Limits"]
    },
    {
      title: "CLI Tool",
      icon: <Terminal className="text-green-500" />,
      items: ["CLI Installation", "Command Reference", "Configuration", "Deployment"]
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-bold mb-6"
          >
            <Book className="w-4 h-4" /> Documentation
          </motion.div>
          <h1 className="text-5xl font-bold text-foreground mb-6">NexusGrid Docs</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build, deploy, and scale on the world's most efficient decentralized compute network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {sections.map((section, i) => (
            <Card key={i} className="p-8 hover:border-orange-500/30 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mb-6">
                {section.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, j) => (
                  <li key={j}>
                    <button className="text-muted-foreground hover:text-orange-500 transition-colors text-sm flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-orange-500" />
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Cpu className="text-orange-500" /> Resource Management
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                NexusGrid provides granular control over your compute resources. Our scheduler automatically handles job distribution across the global grid, ensuring optimal performance and cost-efficiency.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Dynamic GPU/CPU scaling based on workload</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Automated failover and job migration</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Real-time resource monitoring and analytics</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Shield className="text-blue-500" /> Security Best Practices
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Security is at the core of NexusGrid. We implement multiple layers of protection to ensure your data and compute jobs are always secure.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> End-to-end encryption for all data in transit</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Isolated execution environments for every job</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Zero-trust network architecture</li>
              </ul>
            </div>
          </div>
          <div className="bg-muted/30 rounded-3xl p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Globe className="text-purple-500" /> Network Architecture
            </h3>
            <div className="space-y-6">
              <div className="p-4 bg-background rounded-2xl border border-border">
                <h4 className="font-bold text-foreground mb-2">Global Edge Nodes</h4>
                <p className="text-sm text-muted-foreground">Our network consists of thousands of edge nodes globally, providing low-latency compute power wherever you need it.</p>
              </div>
              <div className="p-4 bg-background rounded-2xl border border-border">
                <h4 className="font-bold text-foreground mb-2">P2P Scheduling</h4>
                <p className="text-sm text-muted-foreground">Jobs are scheduled using a decentralized P2P protocol, eliminating single points of failure and ensuring high availability.</p>
              </div>
              <div className="p-4 bg-background rounded-2xl border border-border">
                <h4 className="font-bold text-foreground mb-2">Smart Contracts</h4>
                <p className="text-sm text-muted-foreground">All resource rentals and payments are handled via secure smart contracts on the NexusGrid blockchain.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-muted/30 rounded-3xl p-12 border border-border mb-24">
          <h2 className="text-3xl font-bold text-foreground mb-8">Detailed Getting Started Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">1</div>
              <h4 className="font-bold text-foreground">Create an Account</h4>
              <p className="text-sm text-muted-foreground">Sign up for a NexusGrid account and set up your provider or consumer profile. You'll receive a unique API key for authentication.</p>
            </div>
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">2</div>
              <h4 className="font-bold text-foreground">Configure Your Environment</h4>
              <p className="text-sm text-muted-foreground">Install the NexusGrid CLI or SDK and configure your credentials. Use the `nexusgrid init` command to set up your project.</p>
            </div>
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">3</div>
              <h4 className="font-bold text-foreground">Deploy Your First Job</h4>
              <p className="text-sm text-muted-foreground">Define your compute requirements in a `nexusgrid.yaml` file and run `nexusgrid deploy`. Our network will handle the rest.</p>
            </div>
          </div>
        </div>

        <div className="bg-muted/50 rounded-3xl p-12 border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Developer SDKs</h2>
              <p className="text-muted-foreground mb-8">
                Integrate NexusGrid directly into your workflow with our native SDKs for Python, Node.js, and Go.
              </p>
              <div className="flex flex-wrap gap-4">
                {['Python', 'Node.js', 'Go', 'Rust'].map((lang) => (
                  <div key={lang} className="px-4 py-2 bg-background border border-border rounded-xl text-sm font-medium text-foreground">
                    {lang}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-black rounded-2xl p-6 font-mono text-sm text-green-400 border border-white/10 shadow-2xl">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <p className="mb-2"># Install NexusGrid CLI</p>
              <p className="mb-4 text-white">$ npm install -g @nexusgrid/cli</p>
              <p className="mb-2"># Login to your account</p>
              <p className="mb-4 text-white">$ nexusgrid login</p>
              <p className="mb-2"># Deploy a compute job</p>
              <p className="text-white">$ nexusgrid deploy --gpu a100 --image pytorch/latest</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
