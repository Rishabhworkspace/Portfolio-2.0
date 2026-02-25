import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function ResumeView() {
    return (
        <motion.div
            className="resume-rendered"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
        >
            <div className="resume-header-section">
                <h1 className="resume-name">RISHABH TRIPATHI</h1>
                <div className="resume-title">Full-Stack Developer · AI/ML Enthusiast</div>
                <div className="resume-contacts">
                    <div>Pune, India</div>
                    <div>•</div>
                    <a href="mailto:rishabh.j.tripathi2903@gmail.com" className="resume-contact-link">rishabh.j.tripathi2903@gmail.com</a>
                    <div>•</div>
                    <div>+91 9325455913</div>
                    <div>•</div>
                    <a href="https://www.linkedin.com/in/rishabh-tripathi-728a77317" className="resume-contact-link" target="_blank" rel="noreferrer">LinkedIn</a>
                    <div>•</div>
                    <a href="https://github.com/Rishabhworkspace" className="resume-contact-link" target="_blank" rel="noreferrer">GitHub</a>
                    <div>•</div>
                    <a href="https://www.instagram.com/rishabh_t106/" className="resume-contact-link" target="_blank" rel="noreferrer">Instagram</a>
                </div>
            </div>

            <div className="resume-section">
                <div className="resume-section-title">Education</div>
                <div className="resume-entry">
                    <div className="resume-entry-header">
                        <div className="resume-entry-title">B.Tech - Computer Science and Engineering (AI + Robotics)</div>
                        <div className="resume-entry-meta">2024 – 2028</div>
                    </div>
                    <div className="resume-entry-org">Vellore Institute of Technology (VIT), Chennai</div>
                    <div className="resume-entry-desc">CGPA: 9.14 / 10</div>
                </div>
            </div>

            <div className="resume-section">
                <div className="resume-section-title">Projects</div>

                <div className="resume-entry">
                    <div className="resume-entry-header">
                        <div className="resume-entry-title">AlgoForge 2.0</div>
                        <div className="resume-entry-meta">Next.js, Node.js, MongoDB</div>
                    </div>
                    <div className="resume-entry-desc">
                        A gamified DSA learning platform with structured roadmaps, XP systems, streaks, and global leaderboards.
                    </div>
                </div>

                <div className="resume-entry">
                    <div className="resume-entry-header">
                        <div className="resume-entry-title">FoodNest</div>
                        <div className="resume-entry-meta">Next.js, Tailwind, Framer Motion</div>
                    </div>
                    <div className="resume-entry-desc">
                        A modern restaurant discovery platform using "vibe-based" filtering (e.g., quiet cafes, date spots).
                    </div>
                </div>

                <div className="resume-entry">
                    <div className="resume-entry-header">
                        <div className="resume-entry-title">MindCare</div>
                        <div className="resume-entry-meta">React, Node.js, Express, MongoDB</div>
                    </div>
                    <div className="resume-entry-org">Smart India Hackathon (SIH) 2025</div>
                    <div className="resume-entry-desc">
                        A supportive platform for student mental well-being built during a 36-hour hackathon.
                    </div>
                </div>
            </div>

            <div className="resume-download-bar">
                <a href="/resume.pdf" download className="download-btn">
                    <Download size={14} /> Download Final PDF
                </a>
            </div>
        </motion.div>
    );
}
