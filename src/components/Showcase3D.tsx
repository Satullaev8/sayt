import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';
import { RotateCw, Palette, Box, Sun, Compass } from 'lucide-react';
import { soundFX } from '../utils/audioFeedback';

type GeometryType = 'knot' | 'icosahedron' | 'octahedron' | 'torus';
type MaterialType = 'chrome' | 'wireframe' | 'iridescent' | 'hologram';
type LightPreset = 'cyberpunk' | 'violet' | 'cyan' | 'gold';

interface InteractiveArtifactProps {
  geometry: GeometryType;
  material: MaterialType;
  lightPreset: LightPreset;
  isRotating: boolean;
}

const InteractiveArtifact: React.FC<InteractiveArtifactProps> = ({
  geometry,
  material,
  lightPreset,
  isRotating
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (isRotating && meshRef.current) {
      meshRef.current.rotation.y += delta * 0.45;
      meshRef.current.rotation.x += delta * 0.2;
    }
    if (isRotating && ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.3;
    }
  });

  // Dynamic color palette based on lighting preset
  const colorMap = {
    cyberpunk: { main: '#a855f7', glow: '#00f0ff', emissive: '#1f0d3d' },
    violet: { main: '#7c3aed', glow: '#c084fc', emissive: '#190a36' },
    cyan: { main: '#00f0ff', glow: '#38bdf8', emissive: '#022438' },
    gold: { main: '#eab308', glow: '#f59e0b', emissive: '#332002' }
  }[lightPreset];

  return (
    <group position={[0, 0, 0]}>
      <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh ref={meshRef} castShadow receiveShadow>
          {geometry === 'knot' && <torusKnotGeometry args={[1.3, 0.4, 140, 36, 2, 5]} />}
          {geometry === 'icosahedron' && <icosahedronGeometry args={[1.6, 1]} />}
          {geometry === 'octahedron' && <octahedronGeometry args={[1.7, 0]} />}
          {geometry === 'torus' && <torusGeometry args={[1.4, 0.45, 32, 100]} />}

          {material === 'chrome' && (
            <meshStandardMaterial
              color="#d4d4d8"
              metalness={0.96}
              roughness={0.08}
              wireframe={false}
            />
          )}

          {material === 'wireframe' && (
            <meshStandardMaterial
              color={colorMap.glow}
              emissive={colorMap.glow}
              emissiveIntensity={0.7}
              wireframe
            />
          )}

          {material === 'iridescent' && (
            <MeshDistortMaterial
              color={colorMap.main}
              emissive={colorMap.emissive}
              roughness={0.15}
              metalness={0.9}
              clearcoat={1}
              distort={0.3}
              speed={2}
            />
          )}

          {material === 'hologram' && (
            <meshPhysicalMaterial
              color={colorMap.glow}
              transmission={0.85}
              roughness={0.1}
              ior={1.5}
              thickness={1.2}
              wireframe={false}
            />
          )}
        </mesh>
      </Float>

      {/* Orbiting Tech Ring */}
      <group ref={ringRef}>
        <mesh rotation={[Math.PI / 2.5, 0, 0]}>
          <torusGeometry args={[2.5, 0.02, 16, 100]} />
          <meshBasicMaterial color={colorMap.glow} transparent opacity={0.6} />
        </mesh>
      </group>
    </group>
  );
};

export const Showcase3D: React.FC = () => {
  const [geometry, setGeometry] = useState<GeometryType>('knot');
  const [material, setMaterial] = useState<MaterialType>('iridescent');
  const [lightPreset, setLightPreset] = useState<LightPreset>('cyberpunk');
  const [isRotating, setIsRotating] = useState<boolean>(true);

  const lightColors = {
    cyberpunk: { light1: '#00f0ff', light2: '#a855f7' },
    violet: { light1: '#c084fc', light2: '#7c3aed' },
    cyan: { light1: '#00f0ff', light2: '#38bdf8' },
    gold: { light1: '#fde047', light2: '#f59e0b' }
  }[lightPreset];

  return (
    <section id="showcase3d" className="relative py-28 bg-[#07070c] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan font-mono text-xs uppercase tracking-widest mb-4">
            <span>04 // INTERACTIVE 3D LAB</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Real-Time WebGL Sandbox
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light">
            Manipulate geometries, PBR materials, and lighting states. Click and drag on desktop or touch to orbit 360°.
          </p>
        </div>

        {/* 3D Canvas + Controls Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
          {/* Main 3D Canvas Box (Cols 1-3) */}
          <div className="lg:col-span-3 h-[480px] sm:h-[580px] rounded-3xl glass-panel border border-white/10 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            {/* Top HUD Tag */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 font-mono text-xs text-slate-400 bg-black/60 px-3 py-1.5 rounded-xl border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              <span>ORBIT: DRAG / TOUCH • ZOOM: SCROLL</span>
            </div>

            {/* Canvas */}
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center text-slate-400 font-mono text-xs">
                  INITIALIZING WEBGL BUFFER...
                </div>
              }
            >
              <Canvas
                camera={{ position: [0, 0, 5.5], fov: 45 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
                className="w-full h-full cursor-grab active:cursor-grabbing"
              >
                <ambientLight intensity={0.4} />
                <pointLight position={[5, 4, 3]} intensity={2.5} color={lightColors.light1} />
                <pointLight position={[-5, -4, 3]} intensity={2.5} color={lightColors.light2} />
                <directionalLight position={[0, 6, 4]} intensity={1.2} />

                <InteractiveArtifact
                  geometry={geometry}
                  material={material}
                  lightPreset={lightPreset}
                  isRotating={isRotating}
                />

                <OrbitControls
                  enableZoom={true}
                  minDistance={3.5}
                  maxDistance={8}
                  enablePan={false}
                  dampingFactor={0.05}
                />
              </Canvas>
            </Suspense>

            {/* Bottom HUD Specs */}
            <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-slate-400 bg-black/70 px-4 py-2 rounded-xl border border-white/10 backdrop-blur-md">
              <div>
                GEO: <span className="text-white uppercase font-bold">{geometry}</span>
              </div>
              <div>
                SHADER: <span className="text-brand-cyan uppercase font-bold">{material}</span>
              </div>
              <div>
                ILLUM: <span className="text-brand-purple uppercase font-bold">{lightPreset}</span>
              </div>
            </div>
          </div>

          {/* Interactive Control Deck (Col 4) */}
          <div className="lg:col-span-1 flex flex-col gap-6 p-6 rounded-3xl glass-panel border border-white/10">
            {/* Geometry Selector */}
            <div>
              <label className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                <Box className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Geometry Mesh</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(['knot', 'icosahedron', 'octahedron', 'torus'] as GeometryType[]).map((geo) => (
                  <button
                    key={geo}
                    onClick={() => {
                      soundFX.playClick();
                      setGeometry(geo);
                    }}
                    className={`py-2 px-3 rounded-xl text-xs font-mono capitalize transition-all ${
                      geometry === geo
                        ? 'bg-brand-cyan text-black font-bold shadow-[0_0_15px_#00f0ff]'
                        : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] border border-white/5'
                    }`}
                  >
                    {geo}
                  </button>
                ))}
              </div>
            </div>

            {/* Material Selector */}
            <div>
              <label className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                <Palette className="w-3.5 h-3.5 text-brand-purple" />
                <span>PBR Shader Material</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(['iridescent', 'chrome', 'wireframe', 'hologram'] as MaterialType[]).map((mat) => (
                  <button
                    key={mat}
                    onClick={() => {
                      soundFX.playClick();
                      setMaterial(mat);
                    }}
                    className={`py-2 px-3 rounded-xl text-xs font-mono capitalize transition-all ${
                      material === mat
                        ? 'bg-brand-purple text-white font-bold shadow-[0_0_15px_#a855f7]'
                        : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] border border-white/5'
                    }`}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>

            {/* Lighting Preset Selector */}
            <div>
              <label className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span>Lighting Color Aura</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(['cyberpunk', 'violet', 'cyan', 'gold'] as LightPreset[]).map((preset) => (
                  <button
                    key={preset}
                    onClick={() => {
                      soundFX.playClick();
                      setLightPreset(preset);
                    }}
                    className={`py-2 px-3 rounded-xl text-xs font-mono capitalize transition-all ${
                      lightPreset === preset
                        ? 'bg-white text-black font-bold shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                        : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] border border-white/5'
                    }`}
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>

            {/* Auto Rotation Switch */}
            <div className="pt-4 border-t border-white/[0.08]">
              <button
                onClick={() => {
                  soundFX.playClick();
                  setIsRotating(!isRotating);
                }}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-mono flex items-center justify-center gap-2 transition-all ${
                  isRotating
                    ? 'bg-white/[0.08] text-white border border-brand-cyan/40'
                    : 'bg-white/[0.02] text-slate-400 border border-white/5'
                }`}
              >
                <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} />
                <span>AUTO-ROTATION: {isRotating ? 'ENABLED' : 'PAUSED'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
