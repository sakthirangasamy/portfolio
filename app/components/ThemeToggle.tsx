"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  const toggle = () => {
    setIsDark((prev) => !prev);
    // Portfolio is dark-only by design; this is a visual toggle
  };

  return (
    <motion.button
      onClick={toggle}
      className="relative w-10 h-10 rounded-xl glass flex items-center justify-center text-[--text-secondary] hover:text-[--text-primary] transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        key={isDark ? "moon" : "sun"}
        initial={{ rotate: -30, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 30, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {isDark ? <Moon size={16} /> : <Sun size={16} />}
      </motion.div>
    </motion.button>
  );
}
