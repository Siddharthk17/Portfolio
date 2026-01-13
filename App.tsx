
import React, { useState, useEffect } from 'react';import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { GeminiTerminal } from './components/GeminiTerminal';
import { About } from './components/About';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    document.body.style.zoom = "0.8";
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'hero':
        return <Hero onNavigate={setActiveSection} />;
      case 'about':
        return <About onNavigate={setActiveSection} />;
      case 'projects':
        return <Projects />;
      case 'experience':
        return <Experience />;
      case 'terminal':
        return <GeminiTerminal />;
      case 'contact':
        return (
          <div className="max-w-2xl mx-auto py-20 px-4 text-center">
             <h2 className="text-4xl font-bold text-gruv-red mb-8">TRANSMISSION_OPEN</h2>
             <p className="mb-8 text-xl text-gruv-fg">
                Ready To Initiate Collaboration? Send Signals Via The Frequencies Below.
             </p>
             <div className="space-y-4 font-mono text-lg">
                <div className="border border-gruv-bgSoft p-4 hover:border-gruv-orange transition-colors">
                  EMAIL: <a href="mailto:dev@example.com" className="text-gruv-blue hover:underline">siddharthkakade7777@gmail.com</a>
                </div>
                <div className="border border-gruv-bgSoft p-4 hover:border-gruv-orange transition-colors">
                  LINKEDIN: <a href="#" className="text-gruv-blue hover:underline">www.linkedin.com/in/siddharth-kakade-489601302</a>
                </div>
                <div className="border border-gruv-bgSoft p-4 hover:border-gruv-orange transition-colors">
                  GITHUB: <a href="#" className="text-gruv-blue hover:underline">https://github.com/Siddharthk17</a>
                </div>
             </div>
             <div className="mt-12 text-gruv-gray text-sm">
                END_OF_LINE
             </div>
          </div>
        );
      default:
        return <Hero onNavigate={setActiveSection} />;
    }
  };

  return (
    <Layout activeSection={activeSection} onNavigate={setActiveSection}>
      {renderSection()}
    </Layout>
  );
}