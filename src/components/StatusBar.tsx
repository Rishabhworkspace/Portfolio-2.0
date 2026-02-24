import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Sun, Moon, MapPin, Clock } from 'lucide-react';
import type { FileId, Theme } from '../types';
import { FILES } from '../data/files';

interface StatusBarProps {
    activeFile: FileId;
    theme: Theme;
    onToggleTheme: () => void;
    onOpenPalette: () => void;
}

export default function StatusBar({ activeFile, theme, onToggleTheme, onOpenPalette }: StatusBarProps) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const file = FILES.find(f => f.id === activeFile);
    const lang = file?.language ?? 'Text';

    return (
        <div className="status-bar">
            <div className="status-left">
                {/* Git / name */}
                <span className="status-item" style={{ fontWeight: 600, letterSpacing: '0.02em' }}>
                    ⎇ RT.portfolio
                </span>

                {/* Availability */}
                <span className="status-item status-available">
                    ● Open to Work
                </span>

                {/* Command palette trigger */}
                <button
                    className="status-item"
                    onClick={onOpenPalette}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.8)', fontFamily: 'inherit', fontSize: 'inherit' }}
                    title="Open Command Palette (Ctrl+Shift+P)"
                >
                    <span style={{ fontSize: 10 }}>⌘</span> Ctrl+Shift+P
                </button>
            </div>

            <div className="status-right">
                {/* Language */}
                <span className="status-item">{lang}</span>

                {/* UTF-8 */}
                <span className="status-item">UTF-8</span>

                {/* Location */}
                <span className="status-item">
                    <MapPin size={10} />
                    Pune, IN
                </span>

                {/* Clock */}
                <span className="status-item">
                    <Clock size={10} />
                    {format(time, 'HH:mm:ss')} IST
                </span>

                {/* Theme Toggle */}
                <button className="theme-toggle" onClick={onToggleTheme} title="Toggle Theme">
                    {theme === 'dark' ? <Sun size={11} /> : <Moon size={11} />}
                </button>
            </div>
        </div>
    );
}
