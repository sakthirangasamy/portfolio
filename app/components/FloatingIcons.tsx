"use client";

import { motion } from "framer-motion";
import { techIcons } from "../data/portfolioData";

interface FloatingIconProps {
  name: string;
  icon: string;
  color: string;
  x: string;
  y: string;
  delay: number;
  size?: "sm" | "md" | "lg";
}

function FloatingIcon({ name, icon, color, x, y, delay, size = "md" }: FloatingIconProps) {
  const sizeMap = { sm: "w-10 h-10 text-lg", md: "w-12 h-12 text-xl", lg: "w-14 h-14 text-2xl" };

  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6, type: "spring", stiffness: 200 }}
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut" }}
        className={`${sizeMap[size]} rounded-xl glass flex items-center justify-center cursor-default select-none`}
        style={{
          boxShadow: `0 0 20px ${color}30, 0 4px 16px rgba(0,0,0,0.3)`,
          border: `1px solid ${color}25`,
        }}
        title={name}
        whileHover={{ scale: 1.2, boxShadow: `0 0 30px ${color}60` }}
      >
        <span style={{ filter: "drop-shadow(0 0 6px rgba(255,255,255,0.3))" }}>{icon}</span>
      </motion.div>
    </motion.div>
  );
}

const positions: { x: string; y: string; size: "sm" | "md" | "lg" }[] = [
  { x: "8%",  y: "15%", size: "lg" },
  { x: "88%", y: "12%", size: "md" },
  { x: "3%",  y: "55%", size: "md" },
  { x: "92%", y: "45%", size: "sm" },
  { x: "12%", y: "80%", size: "sm" },
  { x: "85%", y: "75%", size: "lg" },
  { x: "50%", y: "5%",  size: "sm" },
  { x: "72%", y: "22%", size: "sm" },
  { x: "25%", y: "90%", size: "md" },
  { x: "65%", y: "88%", size: "sm" },
];

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {techIcons.slice(0, positions.length).map((tech, i) => (
        <FloatingIcon
          key={tech.name}
          name={tech.name}
          icon={tech.icon}
          color={tech.color}
          x={positions[i].x}
          y={positions[i].y}
          delay={i * 0.15}
          size={positions[i].size}
        />
      ))}
    </div>
  );
}
