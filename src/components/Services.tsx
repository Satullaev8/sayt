import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { Box, Sparkles, Code2, Layers, Compass, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import { soundFX } from '../utils/audioFeedback';

const iconMap = {
  Box,
  Sparkles,
  Code2,
  Layers,
  Compass,
  Cpu
};

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <section id="services" className="relative py-28 bg-[#07070a] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-brand-violet/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan font-mono text-xs uppercase tracking-widest mb-4">
              <span>02 // CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Futuristic Services for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan">
                Uncompromising Brands
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-light">
              We deploy full-cycle creative engineering — from bespoke WebGL shaders to autonomous AI solutions.
            </p>
          </div>
          <div className="mt-6 md:mt-0 font-mono text-xs text-slate-400">
            TOTAL SPECIALIZATIONS // [06 DISCIPLINES]
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Box;
            const isHovered = activeService === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => {
                  setActiveService(service.id);
                  soundFX.playHover();
                }}
                onMouseLeave={() => setActiveService(null)}
                className={`group relative p-8 rounded-3xl glass-panel transition-all duration-300 flex flex-col justify-between ${
                  isHovered
                    ? 'border-brand-purple/50 bg-[#12121d] -translate-y-1.5 shadow-[0_15px_35px_-10px_rgba(168,85,247,0.25)]'
                    : 'border-white/[0.08] hover:border-white/20'
                }`}
              >
                {/* Top Glowing Header inside Card */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        service.accentColor === 'cyan'
                          ? 'bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30 group-hover:shadow-[0_0_20px_#00f0ff]'
                          : 'bg-brand-purple/10 text-brand-purple border border-brand-purple/30 group-hover:shadow-[0_0_20px_#a855f7]'
                      }`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.04] text-slate-400 border border-white/[0.08]">
                      {service.badge}
                    </span>
                  </div>

                  <div className="font-mono text-xs text-slate-400 mb-1">0{index + 1} // CAPABILITY</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-brand-accent mb-4 tracking-wide">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="pt-6 border-t border-white/[0.06]">
                  <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-3">
                    Key Deliverables
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Explore Service CTA */}
                  <a
                    href="#contact"
                    onClick={() => soundFX.playClick()}
                    className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 group-hover:text-white transition-colors"
                  >
                    <span>REQUEST BRIEF</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
