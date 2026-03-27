// @ts-nocheck
"use client";

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, MeshDistortMaterial, Environment, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

function CrazyText() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
      
      // Reactive rotation based on mouse
      const targetRotationX = (state.pointer.y * Math.PI) / 8;
      const targetRotationY = (state.pointer.x * Math.PI) / 8;
      
      meshRef.current.rotation.x += 0.05 * (targetRotationX - meshRef.current.rotation.x);
      meshRef.current.rotation.y += 0.05 * (targetRotationY - meshRef.current.rotation.y);
    }
  });

  return (
    <Text
      ref={meshRef}
      fontSize={2.5}
      maxWidth={200}
      lineHeight={1}
      letterSpacing={-0.05}
      textAlign="center"
      font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
      anchorX="center"
      anchorY="middle"
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      ARNAV BHANDARI
      <MeshDistortMaterial
        color={hovered ? "#8b5cf6" : "#ffffff"}
        attach="material"
        distort={hovered ? 0.4 : 0.1}
        speed={hovered ? 5 : 2}
        roughness={0}
        metalness={1}
      />
    </Text>
  );
}

export const HeroCrazy3D = () => {
  return (
    <section className="relative h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      
      {/* 3D Canvas Layer */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={2} />
          <Environment preset="city" />
          
          <CrazyText />
          
          <Sparkles count={500} scale={12} size={2} speed={0.4} opacity={0.5} color="#fff" />
        </Canvas>
      </div>

      {/* HTML Overlay Layer */}
      <div className="z-10 mt-[40vh] pointer-events-none text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-neutral-400 text-lg md:text-2xl mt-4 font-light tracking-widest uppercase"
        >
          Creative Developer • Innovator
        </motion.p>
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 2, duration: 1 }}
           className="mt-8 border border-white/20 rounded-full px-6 py-2 text-sm text-white/70 backdrop-blur-sm mx-auto w-max"
        >
          Scroll to explore
        </motion.div>
      </div>
      
      {/* Gradient masks to blend smoothly into next sections */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20" />
    </section>
  );
};
