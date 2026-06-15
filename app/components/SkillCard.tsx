"use client";

import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface Props {
  skill: Skill;
  index: number;
}

export default function SkillCard({ skill, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0, 0, 0.2, 1] }}
      className="group"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="text-lg leading-none">{skill.icon}</span>
        <span className="flex-1 text-sm font-medium text-[--text-primary]">{skill.name}</span>
        <motion.span
          className="text-xs font-semibold tabular-nums"
          style={{ color: "#6366f1" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.06 + 0.3 }}
        >
          {skill.level}%
        </motion.span>
      </div>

      {/* Progress track */}
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
        <motion.div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)",
            backgroundSize: "200% 100%",
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.06 + 0.2, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </motion.div>
  );
}
