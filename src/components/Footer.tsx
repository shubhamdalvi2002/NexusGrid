import React from 'react';
import { Grid3X3, Github, Twitter, Linkedin, Mail, Instagram } from 'lucide-react';

export const Footer = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6 cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-2">
                <Grid3X3 className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">NexusGrid</span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
              The decentralized marketplace for high-performance computing. Powering the next generation of AI and data science with idle resources.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Twitter, link: "#" },
                { icon: Github, link: "#" },
                { icon: Linkedin, link: "#" },
                { icon: Mail, link: "mailto:aryannawale03@gmail.com" },
                { icon: Instagram, link: "https://www.instagram.com/nexus__grid?igsh=OW5rYzRobHh3cjdo&utm_source=qr" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-all text-muted-foreground hover:text-foreground"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-foreground font-bold mb-6">Platform</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><button onClick={() => onNavigate('products')} className="hover:text-foreground transition-colors">Marketplace</button></li>
              <li><button onClick={() => onNavigate('documentation')} className="hover:text-foreground transition-colors">Documentation</button></li>
              <li><button className="hover:text-foreground transition-colors">Pricing</button></li>
              <li><button onClick={() => onNavigate('security')} className="hover:text-foreground transition-colors">Security</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-foreground font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><button onClick={() => onNavigate('home')} className="hover:text-foreground transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-foreground transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('blog')} className="hover:text-foreground transition-colors">Blog</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-foreground transition-colors">Contact</button></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© 2026 NexusGrid Inc. All rights reserved.</p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <button className="hover:text-foreground transition-colors">Privacy Policy</button>
            <button className="hover:text-foreground transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
