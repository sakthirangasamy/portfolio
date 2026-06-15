"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../data/portfolioData";
import ProjectCard from "../components/ProjectCard";
import { fadeInUp, staggerContainer } from "../lib/utils";

const categories = ["All", "Enterprise", "DevOps", "Full Stack", "Backend", "Frontend"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(6,182,212,0.04) 0%, transparent 70%)",
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
            ✦ Projects
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-[--text-primary]">
            Work That{" "}
            <span className="gradient-text">Ships</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-[--text-secondary] mt-4 max-w-xl mx-auto text-sm">
            Production-grade systems serving millions of users — from microservices architectures to full-stack platforms.
          </motion.p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              className="relative px-4 py-2 rounded-full text-sm font-medium transition-all"
              style={{ color: filter === cat ? "white" : "var(--text-secondary)" }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              {filter === cat && (
                <motion.div
                  layoutId="project-filter"
                  className="absolute inset-0 rounded-full"
                  style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              {filter !== cat && (
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Featured badge */}
        {filter === "All" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 mb-6 text-xs text-[--text-muted]"
          >
            <div className="flex-1 h-px bg-white/6" />
            <span className="px-3 py-1 rounded-full border border-amber-500/20 text-amber-400 bg-amber-500/5">
              ★ Featured Projects First
            </span>
            <div className="flex-1 h-px bg-white/6" />
          </motion.div>
        )}

        {/* Projects grid */}
        <motion.div
          key={filter}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/sakthirangasamy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            View All on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
