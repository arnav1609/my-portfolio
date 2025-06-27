"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  borderRadius?: string;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, borderRadius = "1.75rem", children, ...props }, ref) => {
    return (
      <motion.button
        {...(props as any)} // ✅ Cast to avoid conflict
        ref={ref}
        className={cn(
          "relative z-10 inline-flex items-center justify-center px-6 py-3 font-medium transition-colors duration-200 overflow-hidden shadow-lg border bg-background",
          className
        )}
        style={{
          borderRadius,
        }}
      >
        <motion.span
          aria-hidden
          className="absolute inset-0 z-[-1] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-border"
        />
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
