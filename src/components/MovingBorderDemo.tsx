"use client";

import React from "react";
import { Button } from "./ui/moving-border"; // Ensure this path is correct

export function MovingBorderDemo() {
  return (
    <div className="flex justify-center items-center h-48 bg-black">
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border border-neutral-200 dark:border-slate-800"
      >
        Borders are cool
      </Button>
    </div>
  );
}
