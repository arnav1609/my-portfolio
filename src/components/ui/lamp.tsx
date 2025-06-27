"use client";

import * as React from "react";

export function LampContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col items-center justify-center px-4 py-24 sm:px-6 lg:px-8 bg-black">
      <div className="absolute w-[80%] h-40 top-0 left-1/2 transform -translate-x-1/2 bg-purple-500 blur-[100px] opacity-20 rounded-full" />
      {children}
    </div>
  );
}
