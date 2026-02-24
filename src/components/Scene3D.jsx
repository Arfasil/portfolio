import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef();
  const particleCount = 2000;

  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.05;
      ref.current.rotation.y -= delta * 0.075;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00F0FF"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

function FloatingCube() {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.2;
    meshRef.current.rotation.y = Math.cos(time * 0.2) * 0.2;
    meshRef.current.position.y = Math.sin(time * 0.5) * 0.2;
  });

  return (
    <mesh ref={meshRef} position={[2, 0, 0]}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial
        color="#8338EC"
        wireframe
        emissive="#8338EC"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

function FloatingSphere() {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.cos(time * 0.4) * 0.3;
    meshRef.current.rotation.z = Math.sin(time * 0.3) * 0.3;
    meshRef.current.position.y = Math.cos(time * 0.6) * 0.3;
  });

  return (
    <mesh ref={meshRef} position={[-2, 0, 0]}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial
        color="#FF006E"
        wireframe
        emissive="#FF006E"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <ParticleField />
        <FloatingCube />
        <FloatingSphere />
      </Canvas>
    </div>
  );
}