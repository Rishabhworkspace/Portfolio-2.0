import { motion } from 'framer-motion';

export default function ActivityView() {
    const journeyLog = [
        { year: 'NOW', text: 'Building AlgoForge 2.0 & ViTravelBuddy (AI). Always shipping.', type: 'commit' },
        { year: '2024', text: 'Participated in Smart India Hackathon. Built MindCare in 36h.', type: 'push' },
        { year: 'MID 2024', text: 'Full-stack mode unlocked: Next.js, Node.js, MongoDB.', type: 'commit' },
        { year: 'EARLY 2024', text: 'Learned HTML/CSS/JS from scratch. Built first sites.', type: 'push' },
        { year: '2023', text: 'Wrote first lines of code in C & C++.', type: 'other' },
    ];

    return (
        <motion.div
            className="activity-rendered"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
        >
            <div className="activity-header">
                <h2 className="activity-title">Activity Log</h2>
                <div className="activity-subtitle">Parsed event history for @Rishabhworkspace</div>
            </div>

            <div style={{ padding: '16px', borderRadius: '6px', background: 'var(--bg-secondary)', border: '1px solid var(--border)', marginBottom: '32px' }}>
                <img
                    src="http://ghchart.rshah.org/4d9cf8/Rishabhworkspace"
                    alt="Rishabh's GitHub Activity Graph"
                    style={{ width: '100%', filter: 'var(--theme) === "dark" ? "none" : "invert(0.8) hue-rotate(180deg)"' }}
                />
            </div>

            <h3 style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 20, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Journey Timeline
            </h3>

            <div className="activity-timeline">
                {journeyLog.map((event, i) => (
                    <motion.div
                        key={i}
                        className="timeline-item"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                    >
                        <div className={`timeline-dot ${event.type}`} />
                        <div className="timeline-time">{event.year}</div>
                        <div className="timeline-event">{event.text}</div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
