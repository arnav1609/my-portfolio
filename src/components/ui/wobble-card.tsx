// app/components/ui/wobble-card.tsx
"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { ReactNode } from "react";
import clsx from "clsx";

type WobbleCardProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function WobbleCard({
  children,
  className,
  containerClassName,
}: WobbleCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-5, 5]);

  const springX = useSpring(rotateX, { stiffness: 200, damping: 10 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 10 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = (e.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className={clsx("relative w-full h-full", containerClassName)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={clsx(
          "relative w-full h-full rounded-xl p-6 overflow-hidden bg-neutral-900",
          className
        )}
        style={{
          rotateX: springX,
          rotateY: springY,
          transformPerspective: 1000,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
