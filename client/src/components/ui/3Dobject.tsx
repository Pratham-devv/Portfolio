import type { FC } from 'react';
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float, Center } from '@react-three/drei';
import * as THREE from 'three';

const TorusKnot: FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Replicates the automatic rotation from your provided script
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Float speed={3} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        {/* Matches the geometry from your script: TorusKnotGeometry(2.1, 0.7, 100, 16) */}
        <torusKnotGeometry args={[2.1, 0.7, 100, 16]} />
        
        {/* Advanced Glass Shader: Handles IOR, thickness, and refraction */}
        <MeshTransmissionMaterial
          backside
          samples={16}
          resolution={512}
          thickness={5}
          roughness={0}
          anisotropy={0.1}
          chromaticAberration={0.1}
          ior={1.15}
          distortion={0.2}
          distortionScale={0.1}
          temporalDistortion={0.1}
          color="white"
        />
      </mesh>
    </Float>
  );
};

const FluidGlass: FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }} shadows>
        {/* Replicating the lighting setup from your script */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 5]} intensity={3} />
        <pointLight position={[-2, -2, 5]} intensity={2} />
        
        <Center>
          <TorusKnot />
        </Center>
      </Canvas>
    </div>
  );
};

export default FluidGlass;