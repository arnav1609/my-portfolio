import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"; // ✅ Corrected here

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
