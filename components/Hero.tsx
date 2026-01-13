import React from 'react';
import { motion } from 'framer-motion';
import { TuiBox, TuiButton } from './TuiComponents';
import { Terminal, Code, Cpu } from 'lucide-react';

export const Hero: React.FC<{ onNavigate: (section: string) => void }> = ({ onNavigate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-5xl mx-auto py-12 px-4"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div variants={itemVariants}>
            <pre className="text-[10px] md:text-xs leading-[10px] md:leading-[12px] text-gruv-orange font-bold overflow-x-hidden select-none mb-6 opacity-80">
{`
  _   _ __   __ __   __   ___  
 | \\ | |\\ \\ / / \\ \\ / /  / _ \\ 
 |  \\| | \\ V /   \\ V /  | | | |
 | . \` |  \\ /     > <   | | | |
 | |\\  |  | |    / . \\  | |_| |
 |_| \\_|  |_|   /_/ \\_\\  \\___/ 
`}
            </pre>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter text-gruv-fg">
              DEVELOPER &<br />
              <span className="text-gruv-yellow">QUANT</span>
            </h1>
            <div className="text-gruv-fgAlt mb-8 text-lg max-w-md border-l-4 border-gruv-gray pl-4">
              <p>Building Robust Digital Architectures With Precision And Purpose.</p> 
              <p>Driven By Curiosity To Learn Everything I Can.</p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <TuiButton onClick={() => onNavigate('projects')}>
                View Protocol
              </TuiButton>
              <TuiButton variant="secondary" onClick={() => onNavigate('contact')}>
                Init_Contact
              </TuiButton>
            </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <TuiBox title="SYSTEM_STATS" borderColor="border-gruv-aqua">
             <div className="space-y-4 font-mono text-sm">
                <div className="flex justify-between border-b border-gruv-bgSoft pb-2">
                  <span className="text-gruv-gray">STATUS</span>
                  <span className="text-gruv-green font-bold flex items-center gap-2">
                    <span className="w-2 h-2 bg-gruv-green rounded-full animate-pulse"/> ONLINE
                  </span>
                </div>
                <div className="flex justify-between border-b border-gruv-bgSoft pb-2">
                  <span className="text-gruv-gray">LOCATION</span>
                  <span>EARTH [remote_capable]</span>
                </div>
                <div className="flex justify-between border-b border-gruv-bgSoft pb-2">
                  <span className="text-gruv-gray">UPTIME</span>
                  <span>99.98%</span>
                </div>
                <div className="flex justify-between border-b border-gruv-bgSoft pb-2">
                  <span className="text-gruv-gray">MAIN_STACK</span>
                  <span className="text-right">Full Stack, Python, APIs, Linux</span>
                </div>
                
                <div className="pt-2">
                  <p className="text-gruv-yellow mb-2 uppercase text-xs">Skills_Matrix:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {['Quant', 'Data Scientist', 'AI/ML', 'Cloud'].map((skill) => (
                      <div key={skill} className="bg-gruv-bgSoft px-2 py-1 text-xs flex items-center gap-2">
                         <div className="w-1 h-3 bg-gruv-orange"/> {skill}
                      </div>
                    ))}
                  </div>
                </div>
             </div>
          </TuiBox>
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
         {[
           { icon: <Terminal size={24}/>, title: "Clean Code", desc: "Maintainable & Scalable" },
           { icon: <Cpu size={24}/>, title: "High Perf", desc: "Optimized Runtimes" },
           { icon: <Code size={24}/>, title: "Always Exploring", desc: "Expanding Skills, Sharpening Depth" }
         ].map((item, i) => (
           <div key={i} className="border border-gruv-bgSoft p-4 hover:border-gruv-orange transition-colors group cursor-default">
             <div className="text-gruv-gray group-hover:text-gruv-orange mb-2">{item.icon}</div>
             <h3 className="font-bold text-gruv-fg mb-1">{item.title}</h3>
             <p className="text-xs text-gruv-fgAlt">{item.desc}</p>
           </div>
         ))}
      </motion.div>
    </motion.section>
  );
};