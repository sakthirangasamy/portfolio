"use client";

import { motion } from "framer-motion";
import { stats } from "../data/portfolioData";
import AnimatedCounter from "../components/AnimatedCounter";

const extras = [
  { label: "GitHub Contributions", value: "2,400+", icon: "📦" },
  { label: "Lines of Code",        value: "500K+",  icon: "💻" },
  { label: "Code Reviews",         value: "800+",   icon: "🔍" },
  { label: "Deployments",          value: "1,200+", icon: "🚀" },
];

export default function Stats() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(99,102,241,0.05) 0%, rgba(139,92,246,0.03) 50%, rgba(6,182,212,0.04) 100%)",
          borderTop:    "1px solid rgba(99,102,241,0.1)",
          borderBottom: "1px solid rgba(99,102,241,0.1)",
        }}
      />

      <div className="container-custom relative">
        {/* Primary stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group text-center"
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(ellipse at center, rgba(99,102,241,0.08), transparent)" }}
              />
              <div className="relative p-6 rounded-2xl border transition-all group-hover:border-[#6366f1]/25"
                style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                <div className="text-5xl font-black gradient-text mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-[--text-secondary] font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {extras.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              className="flex items-center gap-3 p-4 rounded-xl border"
              style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}
            >
              <span className="text-xl flex-shrink-0">{item.icon}</span>
              <div>
                <div className="text-base font-bold gradient-text">{item.value}</div>
                <div className="text-[11px] text-[--text-muted]">{item.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
