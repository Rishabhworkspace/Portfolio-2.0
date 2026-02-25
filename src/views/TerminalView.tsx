import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Command {
    cmd: string;
    output: React.ReactNode;
}

export default function TerminalView() {
    const [history, setHistory] = useState<Command[]>([
        {
            cmd: '',
            output: (
                <div>
                    Welcome to RishabhOS v2.0.<br />
                    Type <span style={{ color: 'var(--accent-mint)' }}>'help'</span> to see available commands.
                </div>
            )
        }
    ]);
    const [input, setInput] = useState('');
    const endRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            let output: React.ReactNode = '';

            switch (cmd) {
                case 'help':
                    output = (
                        <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '8px' }}>
                            <span style={{ color: 'var(--accent-blue)' }}>whoami</span><span>Display user info</span>
                            <span style={{ color: 'var(--accent-blue)' }}>about</span><span>Show bio details</span>
                            <span style={{ color: 'var(--accent-blue)' }}>projects</span><span>List latest projects</span>
                            <span style={{ color: 'var(--accent-blue)' }}>contact</span><span>Show contact info</span>
                            <span style={{ color: 'var(--accent-blue)' }}>clear</span><span>Clear terminal screen</span>
                        </div>
                    );
                    break;
                case 'whoami':
                    output = 'guest';
                    break;
                case 'about':
                    output = 'Rishabh Tripathi - Full-Stack Developer & AI/ML Enthusiast based in Pune, India.';
                    break;
                case 'projects':
                    output = 'Try checking out the `featured.json` file in the sidebar!';
                    break;
                case 'contact':
                    output = 'Email: rishabh.j.tripathi2903@gmail.com | GitHub: @Rishabhworkspace';
                    break;
                case 'clear':
                    setHistory([]);
                    setInput('');
                    return;
                case '':
                    break;
                default:
                    output = `Command not found: ${cmd}. Type 'help' for a list of commands.`;
            }

            setHistory(prev => [...prev, { cmd: input, output }]);
            setInput('');
        }
    };

    return (
        <motion.div
            className="terminal-rendered"
            style={{ padding: '24px', fontFamily: '"JetBrains Mono", monospace', fontSize: '13px', color: 'var(--text-primary)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={() => document.getElementById('terminal-input')?.focus()}
        >
            {history.map((item, i) => (
                <div key={i} style={{ marginBottom: '12px' }}>
                    {item.cmd && (
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <span style={{ color: 'var(--accent-mint)' }}>visitor@rishabh-os:~$</span>
                            <span>{item.cmd}</span>
                        </div>
                    )}
                    {item.output && <div style={{ marginTop: '4px', color: 'var(--text-secondary)' }}>{item.output}</div>}
                </div>
            ))}
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ color: 'var(--accent-mint)' }}>visitor@rishabh-os:~$</span>
                <input
                    id="terminal-input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleCommand}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--text-primary)',
                        fontFamily: 'inherit',
                        fontSize: 'inherit',
                        outline: 'none',
                        flex: 1
                    }}
                    autoFocus
                    autoComplete="off"
                />
            </div>
            <div ref={endRef} />
        </motion.div>
    );
}
