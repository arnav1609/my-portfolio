// @ts-nocheck
"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function RotatingShape(props: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2} {...props}>
      <mesh ref={meshRef} castShadow receiveShadow>
        <icosahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial 
          color="#60a5fa" 
          roughness={0.1}
          metalness={0.8}
          transmission={0.5} 
          thickness={0.5}
          ior={1.5}
        />
      </mesh>
    </Float>
  );
}

export function Floating3DShapes() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Environment preset="city" />
        
        <RotatingShape position={[-3, 1, 0]} scale={1.2} />
        <RotatingShape position={[3, -1, -2]} scale={0.8} />
        <RotatingShape position={[0, 2, -4]} scale={1.5} />
        
        <ContactShadows position={[0, -2.5, 0]} scale={20} blur={2} far={4.5} opacity={0.5} />
      </Canvas>
    </div>
  );
}
