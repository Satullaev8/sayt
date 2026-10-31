import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Showcase3D } from './components/Showcase3D';
import { WhyUs } from './components/WhyUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#050505] text-slate-100 selection:bg-brand-purple selection:text-white overflow-x-hidden">
      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Futuristic Minimal Navigation Bar */}
      <Navbar />

      <main>
        {/* SECTION 1: Full-Screen Cinematic 3D Hero */}
        <Hero />

        {/* SECTION 2: About SATULLAEV */}
        <About />

        {/* SECTION 3: Capabilities & Services */}
        <Services />

        {/* SECTION 4: Selected Work & Concept Blueprints */}
        <Projects />

        {/* SECTION 5: Interactive 3D Lab / Sandbox */}
        <Showcase3D />

        {/* SECTION 6: Why Choose Us (Standards & Telemetry) */}
        <WhyUs />

        {/* SECTION 7: Futuristic Contact Experience */}
        <Contact />
      </main>

      {/* SECTION 8: Minimal Futuristic Footer */}
      <Footer />
    </div>
  );
};

export default App;
