"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMusic } from "react-icons/fi";

interface SpotifyTrack {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  albumArt?: string;
  songUrl?: string;
}

export function SpotifyWidget() {
  const [data, setData] = useState<SpotifyTrack>({ isPlaying: false });
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const fetchNowPlaying = async () => {
      try {
        const res = await fetch("/api/spotify");
        if (res.ok) {
          const json = await res.json();
          setData(json);
        }
      } catch {
        // Silently fail if Spotify not configured
      }
    };
    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 30000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted || !data.isPlaying) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 left-6 z-50 max-w-xs"
        >
          <div className="relative flex items-center gap-3 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            {/* Close */}
            <button
              onClick={() => setVisible(false)}
              className="absolute top-1.5 right-2 text-neutral-500 hover:text-white text-xs leading-none"
            >
              ✕
            </button>

            {/* Album art */}
            {data.albumArt ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={data.albumArt} alt="album" className="w-10 h-10 rounded-lg flex-shrink-0" />
            ) : (
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <FiMusic className="text-green-400" size={18} />
              </div>
            )}

            {/* Track info */}
            <div className="flex-1 min-w-0 pr-4">
              <div className="flex items-center gap-1.5 mb-0.5">
                {/* Animated bars */}
                <div className="flex items-end gap-[2px] h-3">
                  {[0.6, 1.0, 0.7].map((h, i) => (
                    <motion.div
                      key={i}
                      animate={{ scaleY: [1, h, 0.4, h, 1] }}
                      transition={{ repeat: Infinity, duration: 0.8 + i * 0.15, ease: "easeInOut" }}
                      className="w-[3px] rounded-full bg-green-400 origin-bottom"
                      style={{ height: "12px" }}
                    />
                  ))}
                </div>
                <span className="text-[10px] text-green-400 font-semibold tracking-wider uppercase">Now Playing</span>
              </div>
              <a
                href={data.songUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white text-sm font-semibold truncate hover:underline leading-tight"
              >
                {data.title}
              </a>
              <p className="text-neutral-400 text-xs truncate">{data.artist}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
