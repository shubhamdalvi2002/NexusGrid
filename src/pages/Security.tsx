import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, Key, CheckCircle, AlertTriangle, FileText, Activity } from 'lucide-react';
import { Card } from '../components/ui/Card';

export const Security = () => {
  const securityFeatures = [
    {
      title: "End-to-End Encryption",
      icon: <Lock className="text-orange-500" />,
      desc: "All data in transit and at rest is encrypted using industry-standard AES-256 encryption."
    },
    {
      title: "Zero-Trust Architecture",
      icon: <Shield className="text-blue-500" />,
      desc: "Our network is built on a zero-trust model, ensuring every compute node is verified and isolated."
    },
    {
      title: "Real-time Monitoring",
      icon: <Activity className="text-purple-500" />,
      desc: "Continuous monitoring for anomalies and potential threats across the entire decentralized network."
    },
    {
      title: "Identity Management",
      icon: <Key className="text-green-500" />,
      desc: "Secure authentication with multi-factor support and granular role-based access control."
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 text-sm font-bold mb-6"
          >
            <Shield className="w-4 h-4" /> Security
          </motion.div>
          <h1 className="text-5xl font-bold text-foreground mb-6">Security & Compliance</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your data and compute workloads are protected by enterprise-grade security protocols and decentralized verification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {securityFeatures.map((feature, i) => (
            <Card key={i} className="p-8 hover:border-blue-500/30 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-foreground mb-8">Compliance Certifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { name: "SOC 2 Type II", status: "Certified", icon: <CheckCircle className="text-green-500" /> },
                { name: "ISO 27001", status: "Certified", icon: <CheckCircle className="text-green-500" /> },
                { name: "HIPAA Compliant", status: "Ready", icon: <CheckCircle className="text-green-500" /> },
                { name: "GDPR Compliant", status: "Ready", icon: <CheckCircle className="text-green-500" /> }
              ].map((cert, i) => (
                <div key={i} className="flex items-center gap-4 p-6 bg-muted rounded-2xl border border-border">
                  {cert.icon}
                  <div>
                    <h4 className="text-foreground font-bold">{cert.name}</h4>
                    <p className="text-muted-foreground text-sm">{cert.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground mb-8">Resources</h2>
            {[
              { name: "Security Whitepaper", icon: <FileText /> },
              { name: "Transparency Report", icon: <Eye /> },
              { name: "Bug Bounty Program", icon: <AlertTriangle /> }
            ].map((resource, i) => (
              <button key={i} className="w-full flex items-center justify-between p-6 bg-background border border-border rounded-2xl hover:border-orange-500 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="text-muted-foreground group-hover:text-orange-500 transition-colors">
                    {resource.icon}
                  </div>
                  <span className="text-foreground font-bold">{resource.name}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all">
                  →
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
