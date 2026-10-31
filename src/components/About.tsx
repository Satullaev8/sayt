import React from 'react';
import { ShieldCheck, Zap, Globe2, Compass, Award, Terminal } from 'lucide-react';
import { soundFX } from '../utils/audioFeedback';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Terminal,
      title: 'Avant-Garde Engineering',
      desc: 'Merging cutting-edge computer graphics with production-level TypeScript to engineer interfaces previously deemed impossible on the web.'
    },
    {
      icon: Zap,
      title: 'Quantum Performance',
      desc: 'Optimized rendering loops, lightweight geometry pipelines, and adaptive DPR ensuring smooth 60+ FPS across mobile and desktop.'
    },
    {
      icon: Compass,
      title: 'Digital Distinction',
      desc: 'Refusing cookie-cutter templates. Every layout, shader, and interaction is tailored specifically to define industry-leading brands.'
    },
    {
      icon: Globe2,
      title: 'Global Standards, Local Origin',
      desc: 'Rooted in Tashkent, Uzbekistan, building world-class interactive experiences for progressive brands and visionary founders across the globe.'
    }
  ];

  const metrics = [
    { value: '60+ FPS', label: 'Average WebGL Frame Rate', subtext: 'Optimized for high-refresh displays' },
    { value: '< 800ms', label: 'FCP Load Time', subtext: 'Global edge-cached assets' },
    { value: '100%', label: 'Custom Architecture', subtext: 'Zero generic templates used' },
    { value: '2026', label: 'Next-Gen Standards', subtext: 'Built for modern spatial devices' }
  ];

  return (
    <section id="about" className="relative py-28 bg-[#050505] overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-brand-purple/10 border border-brand-purple/20 text-brand-purple font-mono text-xs uppercase tracking-widest mb-4">
            <span>01 // THE AGENCY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            We operate at the intersection of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">
              high technology & creative art.
            </span>
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed font-light">
            <strong className="text-white font-medium">SATULLAEV</strong> is a creative digital technology studio.
            We dismantle the boundaries between traditional graphic design, 3D gaming technology, and modern web software.
            Our mission is clear: craft unforgettable digital spaces that turn casual visitors into loyal brand advocates.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                onMouseEnter={() => soundFX.playHover()}
                className="group relative p-6 rounded-2xl glass-panel glass-panel-hover overflow-hidden"
              >
                {/* Glow bar top */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-purple to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-6 group-hover:border-brand-cyan/40 group-hover:bg-brand-cyan/10 transition-colors">
                  <Icon className="w-6 h-6 text-brand-cyan group-hover:scale-110 transition-transform" />
                </div>

                <div className="font-mono text-xs text-slate-500 mb-2">PILLAR 0{idx + 1}</div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Studio Live Metrics HUD */}
        <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-md">
              <div className="flex items-center space-x-2 text-xs font-mono text-brand-cyan mb-2">
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                <span>BENCHMARK METRICS</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Engineered to Outperform.</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Real-time performance standards applied across all our spatial 3D and full-stack digital builds.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full lg:w-auto">
              {metrics.map((metric) => (
                <div key={metric.label} className="p-4 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple font-mono mb-1">
                    {metric.value}
                  </div>
                  <div className="text-xs font-medium text-slate-200 mb-1">{metric.label}</div>
                  <div className="text-[10px] text-slate-400 font-mono">{metric.subtext}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
