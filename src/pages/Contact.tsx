import React from 'react';
import { Mail, Phone, MapPin, Twitter, Github, Linkedin, Instagram, Send } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export const Contact = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Have questions? We're here to help you scale your compute infrastructure.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center shrink-0">
                <Mail className="text-orange-500 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-foreground font-bold mb-1">Email Us</h3>
                <p className="text-muted-foreground">aryannawale03@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center shrink-0">
                <Phone className="text-blue-500 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-foreground font-bold mb-1">Call Us</h3>
                <p className="text-muted-foreground">+91 7775884747</p>
                <p className="text-muted-foreground">Mon-Fri, 10am-6pm IST</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="text-purple-500 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-foreground font-bold mb-1">Our Office</h3>
                <p className="text-muted-foreground">UNIVERSE Campus, Niramay, New Mumbai Hwy</p>
                <p className="text-muted-foreground">Tathawade, Pune, Maharashtra 411033</p>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <h4 className="text-foreground font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[
                  { icon: Twitter, link: "#" },
                  { icon: Github, link: "#" },
                  { icon: Linkedin, link: "#" },
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
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">First Name</label>
                  <input type="text" className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-orange-500 transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Last Name</label>
                  <input type="text" className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-orange-500 transition-all" placeholder="Doe" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Email Address</label>
                  <input type="email" className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-orange-500 transition-all" placeholder="john@nexusgrid.ai" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
                  <textarea rows={6} className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-orange-500 transition-all" placeholder="How can we help you?" />
                </div>
                <div className="md:col-span-2">
                  <Button className="w-full py-4 text-lg">
                    Send Message <Send className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-24 w-full h-[450px] bg-muted border border-border rounded-3xl overflow-hidden relative shadow-2xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.332306713606!2d73.7485293751936!3d18.60412498251249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb0000000001%3A0x6b8f8f8f8f8f8f8f!2sTathawade%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1711818260000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="NexusGrid Office Location"
            className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
};
