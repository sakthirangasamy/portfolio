"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { skills } from "../data/portfolioData";
import SkillCard from "../components/SkillCard";
import { fadeInUp, staggerContainer } from "../lib/utils";

const tabs = [
  { key: "backend",   label: "Backend",    icon: "⚙️" },
  { key: "frontend",  label: "Frontend",   icon: "⚛️" },
  { key: "cloud",     label: "Cloud & DevOps", icon: "☁️" },
  { key: "databases", label: "Databases",  icon: "🗄️" },
] as const;

type Tab = typeof tabs[number]["key"];

const additionalTech = [
  "Maven", "Gradle", "IntelliJ IDEA", "Git", "Linux", "Nginx",
  "Apache Tomcat", "Swagger / OpenAPI", "JUnit 5", "Mockito",
  "SonarQube", "ELK Stack", "Helm", "ArgoCD", "Vault",
];

export default function Skills() {
  const [active, setActive] = useState<Tab>("backend");

  return (
    <section id="skills" className="section-padding relative">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 80% 50%, rgba(139,92,246,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="section-label mx-auto mb-4">
            ✦ Technical Skills
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-[--text-primary]">
            Craft &{" "}
            <span className="gradient-text">Expertise</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-[--text-secondary] mt-4 max-w-xl mx-auto text-sm">
            8+ years building production systems across the full stack — from database design to Kubernetes orchestration.
          </motion.p>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className="relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all"
              style={{
                color: active === tab.key ? "white" : "var(--text-secondary)",
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {active === tab.key && (
                <motion.div
                  layoutId="skills-tab"
                  className="absolute inset-0 rounded-full"
                  style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              {active !== tab.key && (
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
                />
              )}
              <span className="relative z-10">{tab.icon}</span>
              <span className="relative z-10">{tab.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid md:grid-cols-2 gap-5 mb-12"
        >
          {(skills[active] as typeof skills.backend).map((skill, i) => (
            <div
              key={skill.name}
              className="p-4 rounded-xl border transition-all hover:border-[#6366f1]/25"
              style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
            >
              <SkillCard skill={skill} index={i} />
            </div>
          ))}
        </motion.div>

        {/* Additional tools */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={staggerContainer}
        >
          <motion.h3 variants={fadeInUp} className="text-sm font-semibold text-[--text-secondary] uppercase tracking-widest text-center mb-5">
            Also Familiar With
          </motion.h3>
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-2.5">
            {additionalTech.map((tech, i) => (
              <motion.span
                key={tech}
                className="skill-badge cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Proficiency legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <div
            className="inline-flex items-center gap-5 px-6 py-3 rounded-full text-xs text-[--text-muted]"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
          >
            <span className="font-medium text-[--text-secondary]">Proficiency:</span>
            {[
              { range: "90–100%", label: "Expert",        color: "#6366f1" },
              { range: "75–89%",  label: "Advanced",      color: "#8b5cf6" },
              { range: "60–74%",  label: "Intermediate",  color: "#06b6d4" },
            ].map(({ range, label, color }) => (
              <div key={label} className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full" style={{ background: color }} />
                <span>{range} {label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
