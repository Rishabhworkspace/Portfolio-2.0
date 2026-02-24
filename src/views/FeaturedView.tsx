import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../data/projects';

export default function FeaturedView() {
    return (
        <motion.div
            className="projects-rendered"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
        >
            <div style={{ marginBottom: 24 }}>
                <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 22, color: 'var(--text-accent)', marginBottom: 4 }}>
                    Featured Projects
                </h2>
                <p style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace" }}>
          // featured.json — 4 objects
                </p>
            </div>
            <div className="projects-grid">
                {PROJECTS.map((project, i) => (
                    <motion.div
                        key={project.title}
                        className="project-card"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08, duration: 0.3 }}
                        style={{ borderTop: `2px solid ${project.color}` }}
                    >
                        <div className="project-card-title">{project.title}</div>
                        <div className="project-card-desc">{project.description}</div>
                        <div className="project-stack">
                            {project.stack.map(t => (
                                <span key={t} className="stack-tag">{t}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            <a className="project-link primary" href={project.live_url} target="_blank" rel="noreferrer">
                                <ExternalLink size={11} /> Live
                            </a>
                            <a className="project-link" href={project.repo_url} target="_blank" rel="noreferrer">
                                <Github size={11} /> Repo
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
