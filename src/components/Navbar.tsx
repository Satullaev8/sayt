import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight, Cpu } from 'lucide-react';
import { soundFX } from '../utils/audioFeedback';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(soundFX.isMuted);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const muted = soundFX.toggleMute();
    setIsMuted(muted);
    if (!muted) soundFX.playClick();
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Selected Work', href: '#projects' },
    { label: '3D Lab', href: '#showcase3d' },
    { label: 'Why Us', href: '#whyus' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = () => {
    soundFX.playClick();
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#050505]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={() => soundFX.playClick()}
            onMouseEnter={() => soundFX.playHover()}
            className="group flex items-center space-x-3 text-left focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20 border border-white/10 group-hover:border-brand-cyan/50 transition-colors">
              <span className="font-mono font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">
                S
              </span>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-brand-cyan shadow-[0_0_8px_#00f0ff] animate-ping" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-brand-cyan" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-bold tracking-widest text-lg sm:text-xl text-white group-hover:text-brand-cyan transition-colors">
                  SATULLAEV
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-brand-purple/20 text-brand-purple border border-brand-purple/30">
                  .UZ
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-mono tracking-wider">CREATIVE TECH AGENCY</p>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1 rounded-full p-1.5 bg-[#0a0a12]/80 border border-white/[0.08] backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onMouseEnter={() => soundFX.playHover()}
                onClick={handleLinkClick}
                className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Sound Toggle + System Status + CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              title={isMuted ? 'Enable Sound FX' : 'Mute Sound FX'}
              className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-brand-purple/50 text-slate-300 hover:text-white transition-all flex items-center gap-1.5 text-xs font-mono"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-slate-500" /> : <Volume2 className="w-4 h-4 text-brand-cyan animate-pulse" />}
              <span className="hidden xl:inline text-[11px]">{isMuted ? 'MUTED' : 'AUDIO ON'}</span>
            </button>

            {/* System Status Pill */}
            <div className="hidden md:flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-slate-400">
              <Cpu className="w-3.5 h-3.5 text-brand-cyan" />
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              <span className="text-slate-300">WEBGL 2.0</span>
            </div>

            {/* Primary Action Button */}
            <a
              href="#contact"
              onMouseEnter={() => soundFX.playHover()}
              onClick={() => soundFX.playClick()}
              className="group relative inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white rounded-xl overflow-hidden transition-all duration-300 bg-gradient-to-r from-brand-violet to-brand-purple hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] border border-brand-purple/40"
            >
              <span>Let's Create</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleSound}
              className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300"
              aria-label="Toggle Sound"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-brand-cyan" />}
            </button>
            <button
              onClick={() => {
                soundFX.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-200 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-4 p-6 rounded-2xl bg-[#090910]/95 backdrop-blur-2xl border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.9)] animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="py-2.5 px-4 text-base font-medium text-slate-200 hover:text-brand-cyan hover:bg-white/[0.04] rounded-xl transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="w-full text-center py-3 text-sm font-semibold uppercase tracking-wider text-white rounded-xl bg-gradient-to-r from-brand-violet to-brand-purple shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              >
                Let's Create Something
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
