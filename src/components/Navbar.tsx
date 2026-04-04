import React, { useState, useEffect } from 'react';
import { Grid3X3, Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/Button';
import { cn } from '@/src/lib/utils';
import { useTheme } from '../contexts/ThemeContext';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export const Navbar = ({ onNavigate, currentPage }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'About Us', id: 'about' },
    { name: 'Products', id: 'products' },
    { name: 'Docs', id: 'documentation' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled 
        ? 'bg-background/80 backdrop-blur-xl border-b border-border py-3' 
        : 'bg-transparent py-6'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => onNavigate('home')}
          >
            <div className="w-9 h-9 bg-orange-500 rounded-xl flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform">
              <Grid3X3 className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">NexusGrid</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={cn(
                  'px-4 py-2 text-sm font-medium transition-colors rounded-full',
                  currentPage === item.id 
                    ? 'text-orange-500 bg-orange-500/10' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" className="text-sm text-muted-foreground hover:text-foreground">Login</Button>
            <Button variant="primary" size="sm">Get Started</Button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-8 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { onNavigate(item.id); setIsOpen(false); }}
                  className={cn(
                    'block w-full text-left px-4 py-3 text-base font-medium rounded-xl',
                    currentPage === item.id 
                      ? 'text-orange-500 bg-orange-500/10' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 flex flex-col space-y-3 px-4">
                <Button variant="outline" className="w-full border-border text-foreground">Login</Button>
                <Button variant="primary" className="w-full">Get Started</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
