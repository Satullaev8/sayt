import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail, MapPin, MessageSquare, Phone, ArrowUpRight } from 'lucide-react';
import { ContactFormData } from '../types';
import { soundFX } from '../utils/audioFeedback';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    service: '3D Web Experiences',
    budget: '$5,000 - $15,000',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const servicesList = [
    '3D Web Experiences',
    'Creative Advertising',
    'Website Development',
    'UI/UX Design Systems',
    'Digital Branding',
    'AI-Powered Solutions'
  ];

  const budgetList = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $35,000',
    '$35,000+'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    soundFX.playClick();

    // Basic Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all mandatory fields (Name, Email, and Message).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    // Check if external API endpoint is configured (e.g. Formspree, Resend, or custom backend /api/contact)
    const apiUrl = import.meta.env.VITE_CONTACT_API_URL;

    if (apiUrl) {
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setStatus('success');
          soundFX.playSuccess();
        } else {
          throw new Error('API server returned an error.');
        }
      } catch (err: unknown) {
        setStatus('error');
        setErrorMessage(
          'Transmission failed. You can also reach us directly via contact@satullaev.uz or Telegram.'
        );
      }
    } else {
      // Direct reliable mailto trigger with pre-filled parameters + success prompt
      const subject = encodeURIComponent(`[New Project Inquiry] ${formData.name} - ${formData.service}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nBudget: ${formData.budget}\n\nProject Brief:\n${formData.message}`
      );
      
      // Open default mail client
      window.location.href = `mailto:contact@satullaev.uz?subject=${subject}&body=${body}`;

      setTimeout(() => {
        setStatus('success');
        soundFX.playSuccess();
      }, 600);
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-[#07070d] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-violet/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Info (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan font-mono text-xs uppercase tracking-widest mb-4">
                <span>06 // INITIATE TRANSMISSION</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
                Let's Build Something{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">
                  Extraordinary.
                </span>
              </h2>
              <p className="text-base text-slate-300 font-light leading-relaxed mb-10">
                Have an ambitious idea, high-stakes brand campaign, or spatial 3D experience?
                We collaborate with founders and enterprises to redefine modern digital presence.
              </p>

              {/* Direct Touchpoints */}
              <div className="space-y-4 mb-10">
                <a
                  href="mailto:contact@satullaev.uz"
                  className="flex items-center gap-4 p-4 rounded-2xl glass-panel border border-white/10 hover:border-brand-cyan/40 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">DIRECT INQUIRIES</div>
                    <div className="text-sm font-semibold text-white group-hover:text-brand-cyan transition-colors">
                      contact@satullaev.uz
                    </div>
                  </div>
                </a>

                <a
                  href="https://t.me/satullaev_agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl glass-panel border border-white/10 hover:border-brand-purple/40 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] font-mono text-slate-400">TELEGRAM DIRECT</div>
                    <div className="text-sm font-semibold text-white group-hover:text-brand-purple transition-colors">
                      @satullaev_agency
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl glass-panel border border-white/10">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.05] text-slate-300 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">HQ LOCATION</div>
                    <div className="text-sm font-semibold text-white">
                      Tashkent, Uzbekistan (UTC+5)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response SLA */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-slate-400">
              <span className="text-emerald-400 font-bold">GUARANTEED SLA:</span> Rapid response within 24 business hours. Non-disclosure agreement (NDA) provided upon request.
            </div>
          </div>

          {/* Right Column: Glassmorphism Interactive Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative">
              {status === 'success' ? (
                <div className="py-16 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(52,211,153,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Transmission Dispatched</h3>
                  <p className="text-sm text-slate-300 max-w-md leading-relaxed mb-8">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your project brief has been initiated. Our creative directors will review your scope and get in touch within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({
                        name: '',
                        email: '',
                        service: '3D Web Experiences',
                        budget: '$5,000 - $15,000',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Aziz Satullaev"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan text-sm text-white placeholder-slate-600 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. client@brand.com"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple text-sm text-white placeholder-slate-600 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Primary Service Selection */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Primary Service Discipline
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090912] border border-white/10 focus:border-brand-cyan text-sm text-white outline-none transition-all cursor-pointer"
                    >
                      {servicesList.map((s) => (
                        <option key={s} value={s} className="bg-[#090912] text-white">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Estimated Project Budget */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Estimated Project Scope / Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetList.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => {
                            soundFX.playClick();
                            setFormData({ ...formData, budget: b });
                          }}
                          className={`py-2 px-3 rounded-xl text-xs font-mono transition-all ${
                            formData.budget === b
                              ? 'bg-brand-purple text-white font-bold shadow-[0_0_15px_#a855f7]'
                              : 'bg-black/40 text-slate-400 hover:text-white border border-white/5'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Project Vision / Brief Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your brand, goals, timeline, and aesthetic expectations..."
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan text-sm text-white placeholder-slate-600 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Error Notification */}
                  {status === 'error' && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-2.5 text-xs text-red-300">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    onMouseEnter={() => soundFX.playHover()}
                    className="w-full py-4 rounded-xl text-sm font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-brand-violet via-brand-purple to-brand-cyan hover:shadow-[0_0_35px_rgba(168,85,247,0.5)] transition-all duration-300 flex items-center justify-center gap-2.5 border border-white/20 disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <div className="flex items-center gap-2 font-mono text-xs">
                        <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>TRANSMITTING BRIEF...</span>
                      </div>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="text-[11px] font-mono text-center text-slate-500">
                    Integration Ready: Supports direct mailto, Formspree, Resend, or custom Nginx API
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
