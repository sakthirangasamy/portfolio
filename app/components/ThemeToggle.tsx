"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Set initial theme
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggle = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#0f0f1a";
      document.body.style.color = "#ffffff";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#18181b";
    }
  };

  return (
    <motion.button
      onClick={toggle}
      className="relative w-10 h-10 rounded-xl glass flex items-center justify-center text-[--text-secondary] hover:text-[--text-primary] transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {isDark ? <Moon size={16} /> : <Sun size={16} />}
    </motion.button>
  );
}