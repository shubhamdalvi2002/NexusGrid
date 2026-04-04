/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { Campaign } from './pages/Campaign';
import { Documentation } from './pages/Documentation';
import { Security } from './pages/Security';
import { ThemeProvider } from './contexts/ThemeContext';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'products':
        return <Products />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      case 'campaign':
        return <Campaign />;
      case 'documentation':
        return <Documentation />;
      case 'security':
        return <Security />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground selection:bg-orange-500/30 transition-colors duration-300">
        <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
        
        <main>
          {renderPage()}
        </main>

        <Footer onNavigate={setCurrentPage} />
      </div>
    </ThemeProvider>
  );
}
