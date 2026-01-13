
import React from 'react';
import { TuiBox, TuiBadge, TuiButton, GlitchText } from './TuiComponents';
import { MapPin, Coffee, Zap, Code } from 'lucide-react';
import { motion } from 'framer-motion';

interface AboutProps {
  onNavigate: (section: string) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <section className="max-w-5xl mx-auto py-12 px-4">
      <div className="flex items-end justify-between mb-8 border-b-2 border-gruv-bgSoft pb-2">
        <h2 className="text-3xl font-bold text-gruv-aqua">
           <span className="text-gruv-gray mr-2">01.</span>IDENTITY_MATRIX
        </h2>
        <span className="text-xs text-gruv-gray hidden md:block">Loading User Profile... COMPLETE</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left Column: Stats & Visuals (4 cols) */}
        <div className="md:col-span-4 space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
                <TuiBox title="ENTITY_VISUAL" className="text-center group" borderColor="border-gruv-aqua">
                    <div className="relative w-full aspect-square overflow-hidden border-2 border-gruv-bgSoft mb-4 group-hover:border-gruv-aqua transition-colors bg-gruv-bgSoft">
                        {/* ASCII Art Fallback/Overlay */}
                        <pre className="absolute inset-0 flex items-center justify-center text-[8px] leading-[8px] text-gruv-bg opacity-20 select-none overflow-hidden font-bold">
{`
    .---.
  .'     '.
 /   O O   \\
|    (_)    |
 \\  \\___/  /
  '._____.'
`}
                        </pre>
                        <img 
                            src="https://api.dicebear.com/9.x/thumbs/svg?seed=Mason" 
                            alt="Avatar" 
                            className="w-full h-full object-cover grayscale mix-blend-multiply opacity-90 hover:grayscale-0 hover:mix-blend-normal transition-all duration-500"
                        />
                        {/* Scanline overlay */}
                         <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
                    </div>

                    <div className="text-left space-y-2 text-xs font-mono">
                        <div className="flex justify-between border-b border-gruv-bgSoft pb-1">
                            <span className="text-gruv-gray">HANDLE</span>
                            <span className="text-gruv-fg font-bold tracking-widest">NYX / SID</span>
                        </div>
                        <div className="flex justify-between border-b border-gruv-bgSoft pb-1">
                            <span className="text-gruv-gray">ROLE</span>
                            <span className="text-gruv-aqua">DEVELOPER</span>
                        </div>
                         <div className="flex justify-between border-b border-gruv-bgSoft pb-1">
                            <span className="text-gruv-gray">BUILD</span>
                            <span className="text-gruv-fg">v1.2.7-rc</span>
                        </div>
                    </div>
                </TuiBox>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.2 }}
            >
                <TuiBox title="STATUS_LEDS" borderColor="border-gruv-bgSoft">
                    <div className="space-y-3 text-sm font-mono">
                        <div className="flex items-center justify-between text-gruv-fgAlt">
                            <span className="flex items-center gap-2"><MapPin size={14}/> LOC</span>
                            <span className="text-gruv-fg">Pune</span>
                        </div>
                        <div className="flex items-center justify-between text-gruv-fgAlt">
                            <span className="flex items-center gap-2"><Coffee size={14}/> FUEL</span>
                            <span className="text-gruv-yellow animate-pulse">OPTIMAL</span>
                        </div>
                         <div className="flex items-center justify-between text-gruv-fgAlt">
                            <span className="flex items-center gap-2"><Zap size={14}/> PWR</span>
                            <span className="text-gruv-green">ONLINE</span>
                        </div>
                    </div>
                </TuiBox>
            </motion.div>
        </div>

        {/* Right Column: Content (8 cols) */}
        <div className="md:col-span-8 space-y-6">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
            >
                <TuiBox title="KERNEL_DUMP" borderColor="border-gruv-fg">
                    <div className="prose prose-invert max-w-none text-gruv-fg font-mono text-sm md:text-base">
                        <p className="mb-4">
                            <span className="text-gruv-aqua font-bold">{`>>`}</span> <GlitchText text="INITIALIZING BIO_SEQUENCE..." />
                        </p>
                        <p className="text-gruv-fgAlt leading-relaxed mb-4 border-l-2 border-gruv-bgSoft pl-4">
                            Hey there — I am Sid, or “Nyx” around here. Why Nyx? No deep reason, I just like naming my Projects after Gods — Ares, Athena, Nyx… it’s a whole Theme now. I’m a Simple, Chill guy who Loves Learning, Staying Curious ALl The Time, and Quietly Observing the World. Call me a Nerd if you want — I kind of am — but I’m also the type who Games, Studies, Explores Random Topics, and gets Excited about pretty much anything Interesting.
                        </p>
                        <p className="text-gruv-fgAlt leading-relaxed mb-6 border-l-2 border-gruv-bgSoft pl-4">
                            From Military Tech to Aerospace to Computers, AI/ML, Photography, Chess, Gaming ,Sports ,Gym ,Cooking ,Skateboarding ,Literally Anything — You Name it, I probably Enjoy it and try to Learn it. Anyway, Thanks for Reading all this. Hope I Catch you on the Other Side — whether we’re Coding, Gaming, or Building something Cool Together.</p>
                        <p> Cheers, Mate.</p>
                    </div>
                    
                    <div className="flex gap-4 mt-6 border-t border-gruv-bgSoft pt-4">
                    <TuiButton 
                        className="text-xs"
                        onClick={() => onNavigate('contact')}
                    >
                        INIT_COLLAB
                    </TuiButton>
                    <a href="/resume.pdf" download="Siddharth_Kakade_Resume.pdf">
                        <TuiButton 
                        variant="secondary" 
                        className="text-xs"
                        >
                        GET_RESUME
                        </TuiButton>
                    </a>
                    </div>
                </TuiBox>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4 }}
               className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                <TuiBox title="MODULES::FULL_STACK" borderColor="border-gruv-green">
                    <div className="flex flex-wrap gap-2">
                        {['React.js', 'Node.js', 'Three.js', 'HTML/CSS', 'JavaScript', 'Vite'].map(skill => (
                            <TuiBadge key={skill} color="text-gruv-green border-gruv-green">{skill}</TuiBadge>
                        ))}
                    </div>
                </TuiBox>
                 <TuiBox title="MODULES::DATA" borderColor="border-gruv-purple">
                    <div className="flex flex-wrap gap-2">
                        {['Python', 'Cloud', 'APIs', 'MongoDB', 'AI/ML', 'Statistical Modelling'].map(skill => (
                            <TuiBadge key={skill} color="text-gruv-purple border-gruv-purple">{skill}</TuiBadge>
                        ))}
                    </div>
                </TuiBox>
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                <TuiBox title="SYSTEM_PHILOSOPHY" borderColor="border-gruv-orange">
                    <div className="flex items-start gap-4">
                         <div className="p-2 bg-gruv-orange/10 rounded">
                            <Code className="text-gruv-orange" size={24} />
                         </div>
                         <div>
                             <h4 className="font-bold text-gruv-fg mb-1">
                                 Simplicity {'>'} Complexity
                              </h4>
                             <p className="text-sm text-gruv-fgAlt">
                                "A Jack Of All Trades Is A Master Of None, But Oftentimes Better Than A Master Of One."
                             </p>
                         </div>
                    </div>
                </TuiBox>
            </motion.div>
        </div>
      </div>
    </section>
  );
};
