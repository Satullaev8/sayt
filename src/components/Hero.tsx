import React from 'react';
import { HeroCanvas } from './HeroCanvas';
import { ArrowDown, Sparkles, MoveRight } from 'lucide-react';
import { soundFX } from '../utils/audioFeedback';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] pt-20">
      {/* 3D WebGL Canvas Layer */}
      <HeroCanvas />

      {/* Cyber Grid & Ambient Glowing Background Accents */}
      <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-brand-purple/20 via-brand-cyan/10 to-transparent blur-3xl pointer-events-none -z-1" />

      {/* Futuristic Corner HUD Tech Markers */}
      <div className="hidden md:flex absolute top-28 left-8 flex-col space-y-1 pointer-events-none z-20 font-mono text-[10px] text-slate-500">
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
          <span className="text-slate-400 font-semibold">LOC // 41.2995° N, 69.2401° E</span>
        </div>
        <div>SYS // SATULLAEV.UZ CORE v2.6</div>
        <div>DISP // HIGH PERFORMANCE 3D MODE</div>
      </div>

      <div className="hidden md:flex absolute top-28 right-8 flex-col space-y-1 pointer-events-none z-20 font-mono text-[10px] text-slate-500 text-right">
        <div>FRAME // 60 FPS ULTRA</div>
        <div>RENDER // THREE.JS / GLSL</div>
        <div className="text-brand-purple">STATUS // READY FOR EXPLORATION</div>
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Futuristic Badge */}
        <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6 hover:border-brand-cyan/40 transition-colors">
          <Sparkles className="w-3.5 h-3.5 text-brand-cyan animate-spin-slow" />
          <span className="text-xs uppercase tracking-[0.25em] text-slate-300 font-medium">
            Next-Gen Creative & 3D Agency
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
        </div>

        {/* Main Heading: SATULLAEV */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-white mb-4 select-none">
          <span className="relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-400">
              SATULLAEV
            </span>
            {/* Holographic underline glow */}
            <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-75" />
          </span>
        </h1>

        {/* Secondary Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-slate-100 to-brand-purple mb-6">
          Beyond Imagination. Beyond Digital.
        </h2>

        {/* Description */}
        <p className="max-w-2xl text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-10 text-balance">
          We create extraordinary digital experiences through technology, creativity, and innovation.
          Pioneering spatial 3D web platforms, cinematic campaigns, and enterprise technology for visionaries.
        </p>

        {/* Two Premium Animated Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          {/* Button 1: Explore Our Work */}
          <a
            href="#projects"
            onMouseEnter={() => soundFX.playHover()}
            onClick={() => soundFX.playClick()}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-semibold tracking-wider uppercase text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-brand-cyan/80 backdrop-blur-md transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.15)] hover:shadow-[0_0_35px_rgba(0,240,255,0.4)]"
          >
            <span>Explore Our Work</span>
            <MoveRight className="w-4 h-4 text-brand-cyan transition-transform group-hover:translate-x-1.5" />
          </a>

          {/* Button 2: Let's Create Something */}
          <a
            href="#contact"
            onMouseEnter={() => soundFX.playHover()}
            onClick={() => soundFX.playClick()}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-brand-violet to-brand-purple hover:from-brand-purple hover:to-brand-violet transition-all duration-300 shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.7)] border border-brand-purple/50"
          >
            <span>Let's Create Something</span>
            <div className="w-2 h-2 rounded-full bg-white group-hover:scale-150 transition-transform" />
          </a>
        </div>

        {/* Tech Stack Ticker in Hero */}
        <div className="mt-14 pt-8 border-t border-white/[0.06] flex items-center justify-center flex-wrap gap-6 sm:gap-10 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
            THREE.JS / WEBGL
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
            REACT THREE FIBER
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-neonBlue" />
            GSAP & GLSL
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            SUB-SECOND SPEED
          </span>
        </div>
      </div>

      {/* Floating Bottom Scroll Indicator */}
      <a
        href="#about"
        onClick={() => soundFX.playClick()}
        onMouseEnter={() => soundFX.playHover()}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-500 hover:text-brand-cyan transition-colors"
        aria-label="Scroll Down to About Section"
      >
        <span className="text-[10px] uppercase font-mono tracking-widest">SCROLL TO DISCOVER</span>
        <div className="w-5 h-9 rounded-full border border-slate-700 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-brand-cyan animate-bounce" />
        </div>
      </a>
    </section>
  );
};
