import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileCode, Download, Terminal, Mail, BarChart2 } from 'lucide-react';
import type { FileId } from '../types';

interface CommandPaletteProps {
    onClose: () => void;
    onNavigate: (id: FileId) => void;
    onToggleTheme: () => void;
}

interface Command {
    id: string;
    label: string;
    hint?: string;
    icon: React.ReactNode;
    action: () => void;
}

export default function CommandPalette({ onClose, onNavigate, onToggleTheme }: CommandPaletteProps) {
    const [query, setQuery] = useState('');
    const [focused, setFocused] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const commands: Command[] = [
        { id: 'whoami', label: '> Open: whoami.jsx', hint: 'About Me', icon: <FileCode size={14} />, action: () => { onNavigate('whoami'); onClose(); } },
        { id: 'featured', label: '> Open: featured.json', hint: 'Projects', icon: <FileCode size={14} />, action: () => { onNavigate('featured'); onClose(); } },
        { id: 'stack', label: '> Open: stack.css', hint: 'Skills', icon: <FileCode size={14} />, action: () => { onNavigate('stack'); onClose(); } },
        { id: 'activity', label: '> Open: activity.log', hint: 'GitHub Activity', icon: <BarChart2 size={14} />, action: () => { onNavigate('activity'); onClose(); } },
        { id: 'resume', label: '> Download Resume', hint: 'resume.pdf', icon: <Download size={14} />, action: () => { onNavigate('resume'); onClose(); } },
        { id: 'contact', label: '> Hire Me', hint: 'contact.sh', icon: <Terminal size={14} />, action: () => { onNavigate('contact'); onClose(); } },
        {
            id: 'theme',
            label: '> Toggle: Theme',
            hint: 'Dark / Light',
            icon: <span style={{ fontSize: 13 }}>◑</span>,
            action: () => { onToggleTheme(); onClose(); }
        },
        {
            id: 'email',
            label: '> Send Email',
            hint: 'rishabh.j.tripathi2903@gmail.com',
            icon: <Mail size={14} />,
            action: () => { window.location.href = 'mailto:rishabh.j.tripathi2903@gmail.com'; onClose(); }
        },
    ];

    const filtered = commands.filter(c =>
        c.label.toLowerCase().includes(query.toLowerCase()) ||
        (c.hint?.toLowerCase().includes(query.toLowerCase()) ?? false)
    );

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    useEffect(() => {
        setFocused(0);
    }, [query]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown') { e.preventDefault(); setFocused(f => Math.min(f + 1, filtered.length - 1)); }
        if (e.key === 'ArrowUp') { e.preventDefault(); setFocused(f => Math.max(f - 1, 0)); }
        if (e.key === 'Enter') { filtered[focused]?.action(); }
        if (e.key === 'Escape') { onClose(); }
    };

    return (
        <AnimatePresence>
            <motion.div
                className="palette-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="palette-container"
                    initial={{ opacity: 0, y: -20, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    onClick={e => e.stopPropagation()}
                >
                    <input
                        ref={inputRef}
                        className="palette-input"
                        placeholder="Type a command or file name..."
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <div className="palette-results">
                        {filtered.map((cmd, i) => (
                            <div
                                key={cmd.id}
                                className={`palette-item ${i === focused ? 'focused' : ''}`}
                                onClick={cmd.action}
                                onMouseEnter={() => setFocused(i)}
                            >
                                <span className="palette-icon">{cmd.icon}</span>
                                <span>{cmd.label}</span>
                                {cmd.hint && <span className="palette-hint">{cmd.hint}</span>}
                            </div>
                        ))}
                        {filtered.length === 0 && (
                            <div className="palette-item" style={{ color: 'var(--text-muted)', cursor: 'default' }}>
                                No results for "{query}"
                            </div>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
