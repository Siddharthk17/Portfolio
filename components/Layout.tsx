
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
  activeSection: string;
  onNavigate: (section: string) => void;
}

const SECTIONS = [
  { id: 'hero', label: '/HOME' },
  { id: 'about', label: '/IDENTITY' },
  { id: 'projects', label: '/PROTOCOLS' },
  { id: 'experience', label: '/LOGS' },
  { id: 'terminal', label: '/TERMINAL' },
];

export const Layout: React.FC<LayoutProps> = ({ children, activeSection, onNavigate }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gruv-bg text-gruv-fg relative z-10 selection:bg-gruv-orange selection:text-gruv-bg">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-10 pointer-events-none z-0"></div>
      
      {/* Top Bar */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-gruv-bg/95 backdrop-blur-sm border-b-2 border-gruv-bgSoft z-50 px-4 flex items-center justify-between">
         <div className="font-bold text-xl tracking-tighter text-gruv-orange flex items-center gap-2">
            <span className="w-3 h-6 bg-gruv-orange block animate-pulse"></span>
            NYX-0.SYS
         </div>

         <nav className="hidden md:flex gap-1">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => onNavigate(section.id)}
                className={`px-4 py-2 font-mono text-sm font-bold border-b-2 transition-all duration-200 ${
                  activeSection === section.id 
                    ? 'border-gruv-orange text-gruv-orange bg-gruv-bgSoft/20' 
                    : 'border-transparent text-gruv-gray hover:text-gruv-fg hover:bg-gruv-bgSoft/10'
                }`}
              >
                {section.label}
              </button>
            ))}
         </nav>
         
         <div className="text-xs text-gruv-gray font-mono hidden md:block">
            MEM: {mounted ? '64GB' : 'INIT...'} OK
         </div>

         {/* Mobile Menu Icon (Simplified) */}
         <div className="md:hidden text-gruv-orange font-bold text-xl cursor-pointer">
            [=]
         </div>
      </header>

      {/* Main Content Area */}
      <main className="pt-20 pb-12 relative z-10">
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      
      {/* Mobile Nav Bottom (Simpler for mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gruv-bg border-t border-gruv-bgSoft p-2 flex justify-around z-50">
          {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => onNavigate(section.id)}
                className={`p-2 text-xs font-bold ${activeSection === section.id ? 'text-gruv-orange' : 'text-gruv-gray'}`}
              >
                {section.label.replace('/', '')}
              </button>
            ))}
      </div>
    </div>
  );
};
