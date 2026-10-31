import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Instagram, Send, ShieldCheck, Cpu } from 'lucide-react';
import { soundFX } from '../utils/audioFeedback';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundFX.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/satullaev' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'Telegram', icon: Send, href: 'https://t.me/satullaev_agency' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'X / Twitter', icon: Twitter, href: 'https://x.com' }
  ];

  const quickLinks = [
    { label: 'Hero', href: '#' },
    { label: 'About Agency', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Selected Work', href: '#projects' },
    { label: '3D Showcase Lab', href: '#showcase3d' },
    { label: 'Why SATULLAEV', href: '#whyus' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative bg-[#030305] text-slate-400 border-t border-white/[0.08] overflow-hidden pt-16 pb-12">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-brand-purple/10 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/[0.06]">
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5">
            <a
              href="#"
              onClick={() => soundFX.playClick()}
              className="inline-flex items-center space-x-3 mb-6 focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20 border border-white/10 flex items-center justify-center">
                <span className="font-mono font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">
                  S
                </span>
              </div>
              <span className="font-bold tracking-widest text-xl text-white">
                SATULLAEV<span className="text-brand-cyan">.UZ</span>
              </span>
            </a>

            <p className="text-sm text-slate-400 font-light max-w-sm leading-relaxed mb-6">
              Extraordinary 3D web experiences, creative advertising campaigns, and futuristic digital systems engineered for the vanguard of modern business.
            </p>

            {/* Status Beacon */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              <span className="text-slate-300">ALL SYSTEMS NOMINAL • SSL SECURED</span>
            </div>
          </div>

          {/* Quick Links Col (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => soundFX.playClick()}
                    onMouseEnter={() => soundFX.playHover()}
                    className="hover:text-brand-cyan transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Headquarters Col (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-4">
              Connect With Us
            </h4>
            <div className="flex flex-wrap gap-2.5 mb-6">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.name}
                    onMouseEnter={() => soundFX.playHover()}
                    className="w-10 h-10 rounded-xl glass-panel border border-white/10 hover:border-brand-purple/50 hover:bg-brand-purple/10 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] font-mono text-xs text-slate-400">
              <div className="text-white font-medium mb-1">Domain: https://satullaev.uz</div>
              <div>Hosted on AWS EC2 • Ubuntu • Nginx</div>
              <div className="text-[11px] text-slate-500 mt-1">Tashkent, Uzbekistan</div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center space-x-2">
            <span>SATULLAEV © 2026.</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="hover:text-slate-400 transition-colors cursor-default">Privacy Protocol</span>
            <span className="hover:text-slate-400 transition-colors cursor-default">Security Architecture</span>

            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-brand-cyan transition-colors"
              aria-label="Back to Top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
