import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ExternalLink, Sparkles, X, Terminal, Cpu, Layers } from 'lucide-react';
import { soundFX } from '../utils/audioFeedback';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['All', '3D Web', 'AI Platforms', 'Creative Tech', 'Brand Systems'];

  const filteredProjects =
    selectedCategory === 'All'
      ? portfolioData
      : portfolioData.filter((p) => p.category === selectedCategory);

  const handleFilterClick = (cat: string) => {
    soundFX.playClick();
    setSelectedCategory(cat);
  };

  const openProjectModal = (proj: ProjectItem) => {
    soundFX.playClick();
    setActiveModalProject(proj);
  };

  return (
    <section id="projects" className="relative py-28 bg-[#050505] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-brand-purple/10 border border-brand-purple/20 text-brand-purple font-mono text-xs uppercase tracking-widest mb-4">
              <span>03 // PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Selected Demo Projects
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-light max-w-xl">
              Explorations in spatial computing, procedural shaders, and avant-garde interface architecture.
            </p>
          </div>

          {/* Demo Disclaimer notice badge */}
          <div className="mt-4 md:mt-0 p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-400 max-w-xs">
            <span className="text-brand-cyan font-semibold">NOTE:</span> All items below are labeled demo and concept prototypes showcasing technology benchmarks.
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterClick(cat)}
              className={`px-5 py-2 rounded-xl text-xs font-mono tracking-wider transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-brand-violet to-brand-purple text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] border border-brand-purple'
                  : 'bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openProjectModal(project)}
              onMouseEnter={() => soundFX.playHover()}
              className="group relative rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-brand-cyan/50 transition-all duration-500 cursor-pointer flex flex-col"
            >
              {/* Media Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/60">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-110 filter contrast-125"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090910] via-black/30 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-brand-cyan border border-brand-cyan/30">
                    DEMO CONCEPT
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-slate-300 border border-white/10">
                    {project.year}
                  </span>
                </div>

                {/* Hover Quick Action */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-cyan text-black text-xs font-mono font-bold shadow-[0_0_15px_#00f0ff]">
                    <span>INSPECT SPEC</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-[#0b0b14]/70">
                <div>
                  <div className="text-[11px] font-mono text-brand-purple tracking-widest uppercase mb-1">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Performance Metric */}
                  <div className="text-[11px] font-mono text-slate-400 mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>{project.metrics}</span>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-slate-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 text-slate-500">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Detailed Project Inspection */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
            <div className="relative w-full max-w-3xl rounded-3xl glass-panel border border-brand-purple/40 p-6 sm:p-8 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 relative">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded bg-black/70 backdrop-blur text-brand-cyan font-mono text-xs border border-brand-cyan/30">
                  DEMO PROTOTYPE SPECIFICATION
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-brand-purple mb-2">
                <span>{activeModalProject.category}</span>
                <span>•</span>
                <span>YEAR {activeModalProject.year}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                {activeModalProject.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {activeModalProject.description} Designed as a production blueprint illustrating our architectural capabilities, shader pipeline, and interactive state management.
              </p>

              <div className="p-4 rounded-xl bg-black/40 border border-white/10 mb-6 flex items-center gap-3">
                <Terminal className="w-5 h-5 text-brand-cyan" />
                <div className="text-xs font-mono text-slate-300">
                  <span className="text-slate-500">BENCHMARK //</span> {activeModalProject.metrics}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-3">
                  Applied Tech Stack & Libraries
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-brand-purple/10 text-brand-purple border border-brand-purple/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={() => {
                    setActiveModalProject(null);
                    soundFX.playClick();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-violet to-brand-purple text-xs font-semibold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                >
                  Commission Similar Project
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
