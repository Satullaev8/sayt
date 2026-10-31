import { ProjectItem } from '../types';

export const portfolioData: ProjectItem[] = [
  {
    id: 'demo-kinetic-realm',
    title: 'KINETIC REALM',
    category: '3D Web',
    year: '2026',
    description: 'An interactive spatial 3D showcase featuring real-time physics, fluid shader mechanics, and procedural geometric morphing.',
    metrics: '60 FPS on Mobile • Sub-second WebGL Boot',
    technologies: ['React Three Fiber', 'GLSL Custom Shaders', 'Three.js', 'WebAudio API'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    accent: '#00f0ff',
    isDemo: true
  },
  {
    id: 'demo-neural-synapse',
    title: 'NEURAL SYNAPSE',
    category: 'AI Platforms',
    year: '2026',
    description: 'Generative intelligence dashboard visualizing high-dimensional neural network activations as an interactive 3D particle constellation.',
    metrics: '100,000+ Particles • Real-time Instanced Mesh',
    technologies: ['Three.js InstancedMesh', 'TensorFlow.js', 'Vite', 'TailwindCSS'],
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
    accent: '#a855f7',
    isDemo: true
  },
  {
    id: 'demo-chronos-metaverse',
    title: 'CHRONOS SPATIAL',
    category: '3D Web',
    year: '2026',
    description: 'Photorealistic architectural 3D environment with dynamic sun positioning, HDR skybox reflections, and interactive spatial audio.',
    metrics: 'PBR Metallic Materials • Adaptive Resolution',
    technologies: ['WebGL 2.0', 'Three.js PBR', 'PostProcessing', 'GSAP'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    accent: '#38bdf8',
    isDemo: true
  },
  {
    id: 'demo-aura-cybernetics',
    title: 'AURA CYBERNETICS',
    category: 'Brand Systems',
    year: '2026',
    description: 'Futuristic luxury cybernetics brand experience with holographic typography, metallic garment simulation, and tactile sound design.',
    metrics: 'Bespoke Design System • 4K Assets',
    technologies: ['Framer Motion', 'Canvas2D', 'SVG Filters', 'CSS Grid'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    accent: '#c084fc',
    isDemo: true
  },
  {
    id: 'demo-vortex-engine',
    title: 'VORTEX ADVERTISING',
    category: 'Creative Tech',
    year: '2026',
    description: 'High-impact creative advertising format delivering interactive 3D product previews directly inside modern mobile and web placements.',
    metrics: '+42% User Engagement • Lightweight <1.2MB Bundle',
    technologies: ['Draco Geometry Compression', 'Three.js', 'Web Components'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    accent: '#06b6d4',
    isDemo: true
  },
  {
    id: 'demo-quantum-horizon',
    title: 'QUANTUM HORIZON',
    category: 'AI Platforms',
    year: '2026',
    description: 'Autonomous financial intelligence terminal with glowing volumetric data surfaces and predictive simulation controls.',
    metrics: 'Sub-millisecond WebSocket Sync • 99.9% Uptime',
    technologies: ['TypeScript', 'WebGL Graphing', 'TailwindCSS', 'Zustand'],
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80',
    accent: '#8b5cf6',
    isDemo: true
  }
];
