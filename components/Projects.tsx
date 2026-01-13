import React from 'react';
import { motion } from 'framer-motion';
import { TuiBox, TuiBadge, TuiButton, GlitchText } from './TuiComponents';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { Project } from '../types';

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'STATISTICAL TRADING MODELS',
    description: 'A suite of 40+ microstructure trading models powered by decade-long high-frequency BTC data, built for real predictive edge.',
    tags: ['Python', 'Data Anlysis', 'Visualization'],
    stats: { commits: 432, stars: 128, status: 'LIVE' },
    image: 'https://picsum.photos/400/200?random=1'
  },
  {
    id: '2',
    title: 'MULTI EXCHANGE ARBITRAGE SYSTEM',
    description: 'Real-time funding arbitrage engine processing 120+ req/sec across 17 exchanges with sub-20ms detection latency.',
    tags: ['Python', 'REST APIs', 'Telegram Bot'],
    stats: { commits: 89, stars: 56, status: 'DEV' },
    image: 'https://picsum.photos/400/200?random=2'
  },
  {
    id: '3',
    title: 'NEURAL NETWORK GAMING',
    description: 'A self-learning neural network that plays and masters a custom-built game, improving autonomously through reinforcement learning.',
    tags: ['Neural Networks', 'React', 'Game Mechanics'],
    stats: { commits: 1205, stars: 890, status: 'ARCHIVED' },
    image: 'https://picsum.photos/400/200?random=3'
  },
  {
    id: '4',
    title: 'ESPORTS ANALYTICS',
    description: 'Full-stack esports analytics platform combining Python-driven data pipelines with a React frontend for interactive performance insights.',
    tags: ['React', 'Python', 'Data Analysis & ML'],
    stats: { commits: 210, stars: 45, status: 'LIVE' },
    image: 'https://picsum.photos/400/200?random=4'
  },
  {
    id: '5',
    title: 'MULTI MODEL AI/ML TRADING BOT',
    description: 'AI-driven trading engine powered by multiple ML models—linear/logistic regression, neural networks, gradient boosting, random forests, and XGBoost—to generate high-confidence market signals.',
    tags: ['Neural Networks', 'ML', 'Data Science'],
    stats: { commits: 210, stars: 45, status: 'LIVE' },
    image: 'https://picsum.photos/400/200?random=5'
  },
  {
    id: '6',
    title: 'OTHER PROJECTS',
    description: 'I always try to Build something Fun and something Unique and it must be Cool so here are some other Cool Projects that i Built.',
    tags: ['GAMES', 'WIKIPEDIA SPEEDRUN', 'FRAUD DETECTION'],
    stats: { commits: 210, stars: 45, status: 'LIVE' },
    image: 'https://picsum.photos/400/200?random=6'
  }
];

export const Projects: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <div className="flex items-end justify-between mb-8 border-b-2 border-gruv-bgSoft pb-2">
        <h2 className="text-3xl font-bold text-gruv-orange">
           <span className="text-gruv-gray mr-2">02.</span>PROJECT_INDEX
        </h2>
        <span className="text-xs text-gruv-gray hidden md:block">Loading Directory Listing... DONE</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <TuiBox title={`PID_${project.id.padStart(3, '0')}`} className="h-full flex flex-col group hover:border-gruv-orange transition-colors">
               <div className="relative mb-4 border border-gruv-bgSoft overflow-hidden h-40 group-hover:border-gruv-orange/50 transition-colors">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal" />
                  <div className="absolute inset-0 bg-gruv-bg/20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')]"></div>
               </div>

               <div className="flex justify-between items-start mb-2">
                 <h3 className="text-xl font-bold text-gruv-fg"><GlitchText text={project.title} /></h3>
                 <div className="flex gap-2">
                   {project.stats.status === 'LIVE' && <span className="w-2 h-2 rounded-full bg-gruv-green animate-pulse mt-2"/>}
                   {project.stats.status === 'DEV' && <span className="w-2 h-2 rounded-full bg-gruv-yellow animate-pulse mt-2"/>}
                   {project.stats.status === 'ARCHIVED' && <span className="w-2 h-2 rounded-full bg-gruv-gray mt-2"/>}
                 </div>
               </div>

               <p className="text-gruv-fgAlt text-sm mb-6 flex-grow font-light leading-relaxed">
                 {project.description}
               </p>

               <div className="flex flex-wrap gap-2 mb-6">
                 {project.tags.map(tag => (
                   <TuiBadge key={tag} color="text-gruv-purple border-gruv-purple border-opacity-50 text-[10px]">{tag}</TuiBadge>
                 ))}
               </div>

               <div className="border-t border-gruv-bgSoft pt-4 flex justify-between items-center text-xs text-gruv-gray">
                 <div className="flex gap-4">
                   <span>COMMITS: {project.stats.commits}</span>
                   <span>STARS: {project.stats.stars}</span>
                 </div>
                 <div className="flex gap-2">
                   <button className="hover:text-gruv-orange transition-colors"><Github size={18}/></button>
                   <button className="hover:text-gruv-orange transition-colors"><ExternalLink size={18}/></button>
                 </div>
               </div>
            </TuiBox>
          </motion.div>
        ))}
      </div>
    </section>
  );
};