import React, { useState, useEffect } from 'react';
import { Cpu, Zap, Eye, Shield, Check, Flame, Activity } from 'lucide-react';
import { soundFX } from '../utils/audioFeedback';

export const WhyUs: React.FC = () => {
  const [fps, setFps] = useState<number>(60);
  const [dpr, setDpr] = useState<number>(1);
  const [rendererInfo, setRendererInfo] = useState<string>('Standard WebGL 2.0');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDpr(window.devicePixelRatio || 1);

      // Lightweight FPS calculation
      let frameCount = 0;
      let lastTime = performance.now();
      let animId: number;

      const calcFps = () => {
        frameCount++;
        const now = performance.now();
        if (now - lastTime >= 1000) {
          setFps(Math.round((frameCount * 1000) / (now - lastTime)));
          frameCount = 0;
          lastTime = now;
        }
        animId = requestAnimationFrame(calcFps);
      };
      animId = requestAnimationFrame(calcFps);

      // Detect GPU renderer string safely
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
        if (gl) {
          const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
          if (debugInfo) {
            const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
            if (renderer) setRendererInfo(renderer.slice(0, 36) + '...');
          }
        }
      } catch {
        // Fallback
      }

      return () => cancelAnimationFrame(animId);
    }
  }, []);

  const comparison = [
    {
      feature: '3D & Spatial Immersion',
      satullaev: 'Interactive WebGL, custom GLSL shaders, 60+ FPS',
      others: 'Static images or pre-rendered heavy MP4 videos'
    },
    {
      feature: 'Frontend Architecture',
      satullaev: 'Next-Gen Vite, TypeScript, React Three Fiber, Tree-shaken bundles',
      others: 'Bloated WordPress themes or generic drag-and-drop templates'
    },
    {
      feature: 'Speed & Optimization',
      satullaev: 'Sub-second edge caching, compressed assets, zero frame drops',
      others: 'Sluggish load times, render-blocking scripts (>3s FCP)'
    },
    {
      feature: 'Brand Distinction',
      satullaev: '100% bespoke design crafted to dominate market attention',
      others: 'Commoditized layouts resembling thousands of competitors'
    },
    {
      feature: 'Audio & Tactile Feedback',
      satullaev: 'Native Web Audio API synth feedback for futuristic tactile UX',
      others: 'Mute flat pages without sensory dimension'
    }
  ];

  return (
    <section id="whyus" className="relative py-28 bg-[#050505] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-brand-purple/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-brand-purple/10 border border-brand-purple/20 text-brand-purple font-mono text-xs uppercase tracking-widest mb-4">
            <span>05 // THE SATULLAEV STANDARD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Engineered Without Compromise.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            In an era overflowing with generic, templated websites, SATULLAEV stands as the anti-ordinary.
            We treat every digital touchpoint as an architectural masterwork.
          </p>
        </div>

        {/* Live Client Performance Telemetry HUD */}
        <div className="mb-14 p-6 rounded-2xl glass-panel border border-brand-cyan/30 shadow-[0_0_25px_rgba(0,240,255,0.1)] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Activity className="w-5 h-5 text-brand-cyan animate-pulse" />
            <div>
              <div className="text-xs font-mono text-brand-cyan uppercase">Client-Side Diagnostic Telemetry</div>
              <div className="text-[11px] font-mono text-slate-400">Real-time stats from your current display hardware</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="text-slate-500">REFRESH RATE:</span>
              <span className="text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                {fps} FPS
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-500">PIXEL RATIO:</span>
              <span className="text-brand-purple font-bold px-2 py-0.5 rounded bg-brand-purple/10 border border-brand-purple/20">
                {dpr.toFixed(1)}x DPR
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-slate-500">HARDWARE:</span>
              <span className="text-slate-300 font-mono text-[10px]">{rendererInfo}</span>
            </div>
          </div>
        </div>

        {/* High-Tech Comparison Table */}
        <div className="rounded-3xl glass-panel border border-white/10 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="py-5 px-6 font-mono text-xs uppercase tracking-wider text-slate-400 w-1/4">
                    Dimension
                  </th>
                  <th className="py-5 px-6 font-mono text-xs uppercase tracking-wider text-brand-cyan w-2/5 bg-brand-cyan/[0.03]">
                    <div className="flex items-center gap-2">
                      <Flame className="w-4 h-4 text-brand-cyan" />
                      <span>SATULLAEV Method</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 font-mono text-xs uppercase tracking-wider text-slate-500 w-1/3">
                    Ordinary Agencies
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-sm">
                {comparison.map((item) => (
                  <tr
                    key={item.feature}
                    onMouseEnter={() => soundFX.playHover()}
                    className="hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-5 px-6 font-medium text-white flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
                      <span>{item.feature}</span>
                    </td>
                    <td className="py-5 px-6 font-medium text-slate-100 bg-brand-cyan/[0.02]">
                      <div className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                        <span>{item.satullaev}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 text-slate-400">
                      {item.others}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
