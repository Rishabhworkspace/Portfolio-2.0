import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BootSequenceProps {
    onComplete: () => void;
}

const STEPS = [
    'Initializing editor...',
    'Loading workspace...',
    'Parsing whoami.jsx...',
    'Ready.',
];

export default function BootSequence({ onComplete }: BootSequenceProps) {
    const [progress, setProgress] = useState(0);
    const [stepIdx, setStepIdx] = useState(0);

    useEffect(() => {
        const total = 2000; // ms
        const interval = 20;
        let elapsed = 0;

        const timer = setInterval(() => {
            elapsed += interval;
            const pct = Math.min((elapsed / total) * 100, 100);
            setProgress(pct);
            setStepIdx(Math.floor((pct / 100) * (STEPS.length - 1)));

            if (elapsed >= total) {
                clearInterval(timer);
                setTimeout(onComplete, 300);
            }
        }, interval);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            <motion.div
                className="boot-overlay"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
            >
                <motion.div
                    className="boot-logo"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                >
                    RT.
                </motion.div>
                <motion.div
                    className="boot-tagline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                >
                    portfolio — rishabh tripathi
                </motion.div>
                <motion.div
                    className="boot-bar-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="boot-bar-fill" style={{ width: `${progress}%` }} />
                </motion.div>
                <div className="boot-status">{STEPS[stepIdx]}</div>
            </motion.div>
        </AnimatePresence>
    );
}
