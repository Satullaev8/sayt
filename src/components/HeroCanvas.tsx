import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Morphing Cyber Structure (Core 3D sculpture)
const FuturisticCore: React.FC<{ mouse: React.MutableRefObject<{ x: number; y: number }> }> = ({ mouse }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Group>(null);
  const secondRingRef = useRef<THREE.Group>(null);
  const innerSphereRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // Smooth subtle mouse reaction (damped lerp)
    const targetX = mouse.current.x * 0.45;
    const targetY = mouse.current.y * 0.35;

    if (meshRef.current) {
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, t * 0.25 + targetY, 0.05);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, t * 0.35 + targetX, 0.05);
      meshRef.current.rotation.z = Math.sin(t * 0.15) * 0.2;
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.x = -t * 0.4 - targetY * 0.5;
      outerRingRef.current.rotation.y = t * 0.25 - targetX * 0.5;
    }

    if (secondRingRef.current) {
      secondRingRef.current.rotation.z = t * 0.35;
      secondRingRef.current.rotation.y = -t * 0.3;
    }

    if (innerSphereRef.current) {
      const pulse = 1 + Math.sin(t * 1.5) * 0.05;
      innerSphereRef.current.scale.set(pulse, pulse, pulse);
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central Metallic Floating Abstract Knot / Icosahedron */}
      <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh ref={meshRef} castShadow receiveShadow>
          <torusKnotGeometry args={[1.35, 0.42, 128, 32, 2, 3]} />
          <MeshDistortMaterial
            color="#8b5cf6"
            emissive="#1e1035"
            roughness={0.12}
            metalness={0.92}
            clearcoat={1}
            clearcoatRoughness={0.1}
            distort={0.25}
            speed={1.5}
          />
        </mesh>
      </Float>

      {/* Internal Quantum Pulsing Core */}
      <mesh ref={innerSphereRef}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={0.8}
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Futuristic Orbiting Gyro Ring 1 */}
      <group ref={outerRingRef}>
        <mesh>
          <torusGeometry args={[2.5, 0.02, 16, 100]} />
          <meshBasicMaterial color="#00f0ff" transparent opacity={0.65} />
        </mesh>
        {/* Orbit Node */}
        <mesh position={[2.5, 0, 0]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshBasicMaterial color="#00f0ff" />
        </mesh>
      </group>

      {/* Futuristic Orbiting Gyro Ring 2 */}
      <group ref={secondRingRef} rotation={[Math.PI / 3, 0, 0]}>
        <mesh>
          <torusGeometry args={[2.85, 0.015, 16, 100]} />
          <meshBasicMaterial color="#a855f7" transparent opacity={0.5} />
        </mesh>
        {/* Orbit Node */}
        <mesh position={[-2.85, 0, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color="#c084fc" />
        </mesh>
      </group>
    </group>
  );
};

// Background Particle Cloud
const CosmicParticles: React.FC<{ count?: number }> = ({ count = 900 }) => {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const cyan = new THREE.Color('#00f0ff');
    const purple = new THREE.Color('#a855f7');
    const white = new THREE.Color('#ffffff');

    for (let i = 0; i < count; i++) {
      // Distribute in a spherical cylinder volume
      const r = 4 + Math.random() * 12;
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 16;

      pos[i * 3] = Math.cos(theta) * r;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = Math.sin(theta) * r - 2;

      // Color variation between cyan, purple, and white sparks
      const choice = Math.random();
      const chosenColor = choice < 0.45 ? cyan : choice < 0.85 ? purple : white;

      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};

// WebGL Fallback component when WebGL is disabled or unsupported
export const WebGLFallback: React.FC = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div className="relative w-80 h-80 rounded-full bg-gradient-to-tr from-brand-violet/40 via-brand-purple/20 to-brand-cyan/30 blur-2xl animate-pulse-slow" />
    <div className="absolute w-64 h-64 rounded-full border border-brand-cyan/40 shadow-[0_0_50px_rgba(0,240,255,0.3)] animate-spin-slow" />
    <div className="absolute w-48 h-48 rounded-full border border-brand-purple/50 border-dashed animate-reverse" />
  </div>
);

export const HeroCanvas: React.FC = () => {
  const mouse = useRef({ x: 0, y: 0 });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width) * 2 - 1;
    const y = -(((clientY - top) / height) * 2 - 1);
    mouse.current = { x, y };
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      className="absolute inset-0 z-10 w-full h-full overflow-hidden select-none"
    >
      <Suspense fallback={<WebGLFallback />}>
        <Canvas
          camera={{ position: [0, 0, 6.2], fov: 45 }}
          dpr={[1, 2]} // High DPI optimization
          gl={{
            antialias: true,
            powerPreference: 'high-performance',
            alpha: true,
          }}
          className="w-full h-full"
        >
          {/* Ambient & Cinematic Neon Lighting */}
          <ambientLight intensity={0.4} />
          
          {/* Neon Blue Key Light */}
          <pointLight position={[5, 4, 4]} intensity={2.2} color="#00f0ff" />
          
          {/* Electric Purple Rim Light */}
          <pointLight position={[-5, -3, 3]} intensity={2.8} color="#a855f7" />
          
          {/* Cyber Top Accent */}
          <directionalLight position={[0, 6, 2]} intensity={1.5} color="#ffffff" />
          
          {/* Floating Metallic Kinetic Core */}
          <FuturisticCore mouse={mouse} />

          {/* Animated Ambient Cosmic Particle Swarm */}
          <CosmicParticles count={850} />
        </Canvas>
      </Suspense>
    </div>
  );
};
