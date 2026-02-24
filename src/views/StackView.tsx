import { motion } from 'framer-motion';
import { SKILLS } from '../data/skills';

export default function StackView() {
    const categories = Array.from(new Set(SKILLS.map(s => s.category)));

    return (
        <motion.div
            className="stack-rendered"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
        >
            <div style={{ marginBottom: 32 }}>
                <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 24, color: 'var(--text-accent)', marginBottom: 8 }}>
                    Skills & Technologies
                </h2>
                <p style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace" }}>
          /* CSS custom properties parsed */
                </p>
            </div>

            {categories.map((cat, i) => {
                const catSkills = SKILLS.filter(s => s.category === cat);
                return (
                    <motion.div
                        key={cat}
                        className="stack-category"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                    >
                        <div className="category-title">{cat}</div>
                        <div className="skills-grid">
                            {catSkills.map(skill => (
                                <div key={skill.name} className={`skill-chip ${skill.level}`}>
                                    <span className="skill-dot" />
                                    {skill.name}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                );
            })}
        </motion.div>
    );
}
