"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, TrendingUp } from "lucide-react";
import { IconGithub } from "../lib/socialIcons";
import { useRef } from "react";
import type { Project } from "../data/portfolioData";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX  = useMotionValue(0);
  const mouseY  = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]),  { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]),  { stiffness: 300, damping: 30 });
  const glowX   = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glowY   = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width  - 0.5);
    mouseY.set((e.clientY - rect.top)  / rect.height - 0.5);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0, 0, 0.2, 1] }}
      className="group relative"
    >
      {/* Glow layer */}
      <motion.div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glowX} ${glowY}, ${project.color}30, transparent 60%)`,
        }}
      />

      <div
        className="relative rounded-2xl overflow-hidden border transition-all duration-300"
        style={{
          background: "var(--bg-card)",
          borderColor: "var(--border)",
        }}
      >
        {/* Animated top border */}
        <div
          className="absolute top-0 inset-x-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
        />

        {/* Header: color block + category */}
        <div
          className="relative h-40 flex items-center justify-center overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)` }}
        >
          <div
            className="text-7xl font-black select-none"
            style={{ color: `${project.color}20` }}
          >
            {project.title.split(" ").map(w => w[0]).join("").slice(0, 3)}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-4xl"
              style={{ filter: `drop-shadow(0 0 20px ${project.color}80)` }}
            >
              {project.category === "Enterprise" ? "🏦"
                : project.category === "DevOps"    ? "⚙️"
                : project.category === "Full Stack" ? "🌐"
                : project.category === "Backend"    ? "🔧"
                : project.category === "Frontend"   ? "🎨"
                : "💡"}
            </span>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <span
              className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
              style={{ background: `${project.color}20`, color: project.color, border: `1px solid ${project.color}30` }}
            >
              {project.category}
            </span>
            {project.featured && (
              <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                ★ Featured
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-base font-semibold text-[--text-primary] mb-2 leading-snug">{project.title}</h3>
          <p className="text-xs text-[--text-secondary] leading-relaxed mb-4 line-clamp-3">{project.description}</p>

          {/* Metrics */}
          <div className="flex gap-3 mb-4">
            {Object.entries(project.metrics).slice(0, 3).map(([key, val]) => (
              <div key={key} className="flex-1 rounded-xl p-2 text-center" style={{ background: `${project.color}08`, border: `1px solid ${project.color}15` }}>
                <div className="text-sm font-bold" style={{ color: project.color }}>{val}</div>
                <div className="text-[10px] text-[--text-muted] capitalize mt-0.5">{key}</div>
              </div>
            ))}
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.slice(0, 5).map((t) => (
              <span key={t} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-[--text-secondary] border border-white/8">
                {t}
              </span>
            ))}
            {project.tech.length > 5 && (
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-[--text-muted]">
                +{project.tech.length - 5}
              </span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-medium text-[--text-secondary] hover:text-[--text-primary] transition-all border border-white/8 hover:border-white/18 hover:bg-white/5"
            >
              <IconGithub size={13} /> Code
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-medium text-white transition-all"
              style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)`, boxShadow: `0 4px 16px ${project.color}30` }}
            >
              <ExternalLink size={13} /> Live Demo
            </a>
          </div>
        </div>

        {/* Bottom metrics bar */}
        <div className="px-5 pb-4 flex items-center gap-1.5 text-[10px] text-[--text-muted]">
          <TrendingUp size={10} style={{ color: project.color }} />
          <span>{Object.values(project.metrics).join(" · ")}</span>
        </div>
      </div>
    </motion.div>
  );
}
