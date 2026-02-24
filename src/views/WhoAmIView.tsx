import { motion } from 'framer-motion';

export default function WhoAmIView() {
    return (
        <motion.div
            className="whoami-rendered"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
        >
            {/* Header */}
            <div className="whoami-header">
                <div className="avatar-ring">
                    <div className="avatar-inner">RT</div>
                </div>
                <div>
                    <div className="whoami-name">
                        Rishabh Tripathi
                        <span className="cursor-blink" />
                    </div>
                    <div className="whoami-role">Full-Stack Developer · AI/ML Enthusiast</div>
                </div>
            </div>

            {/* Badges */}
            <div className="whoami-badges">
                <span className="badge badge-available">● Open to Work</span>
                <span className="badge badge-location">📍 Pune, India</span>
                <span className="badge badge-edu">🎓 VIT Chennai · CGPA 9.14</span>
            </div>

            {/* Tagline */}
            <p className="whoami-tagline">
                Merging artificial intelligence with raw design.<br />
                Building software that allows humans to do less, so they can create more.
            </p>

            {/* Mission */}
            <div className="whoami-mission">
                <div className="mission-comment">// about me</div>
                <div className="mission-text">
                    I'm a Computer Science student at VIT Chennai (B.Tech CSE — AI + Robotics, 2024–2028).
                    I build digital products that refuse to be boring — full-stack apps, gamified platforms,
                    and AI-powered experiences.
                </div>
                <div className="mission-comment" style={{ marginTop: 12 }}>// currently obsessing over</div>
                <div className="mission-text">
                    Generative AI · Full-stack system design · VS Code themes · LeetCode daily grind
                </div>
            </div>

            {/* Contact Links */}
            <div style={{ marginTop: 24, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {[
                    { label: 'GitHub', url: 'https://github.com/Rishabhworkspace', color: 'var(--accent-blue)' },
                    { label: 'LinkedIn', url: 'https://linkedin.com/in/rishabhtripathi29', color: 'var(--accent-lavender)' },
                    { label: 'Email', url: 'mailto:rishabh.j.tripathi2903@gmail.com', color: 'var(--accent-mint)' },
                ].map(link => (
                    <a key={link.label} href={link.url} target="_blank" rel="noreferrer"
                        style={{
                            padding: '6px 14px', borderRadius: 4, border: `1px solid ${link.color}40`,
                            color: link.color, fontSize: 12, textDecoration: 'none', background: `${link.color}0d`,
                            fontFamily: "'JetBrains Mono', monospace", transition: 'opacity 0.15s',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                    >
                        {link.label} →
                    </a>
                ))}
            </div>
        </motion.div>
    );
}
