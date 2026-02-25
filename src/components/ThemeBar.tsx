import type { Theme } from '../types';
import { Monitor } from 'lucide-react';

interface ThemeBarProps {
    currentTheme: Theme;
    onSetTheme: (theme: Theme) => void;
}

const THEMES: { id: Theme; label: string }[] = [
    { id: 'dark', label: 'Dark' },
    { id: 'light', label: 'Light' },
    { id: 'dracula', label: 'Dracula' },
    { id: 'tokyo-night', label: 'Tokyo Night' },
    { id: 'monokai', label: 'Monokai' },
    { id: 'nord', label: 'Nord' },
    { id: 'gruvbox', label: 'Gruvbox' },
    { id: 'synthwave', label: 'Synthwave' },
];

export default function ThemeBar({ currentTheme, onSetTheme }: ThemeBarProps) {
    return (
        <div className="theme-bar">
            <div className="theme-bar-label">
                <Monitor size={12} />
                <span>Theme Selector:</span>
            </div>
            <div className="theme-bar-options">
                {THEMES.map(theme => (
                    <button
                        key={theme.id}
                        className={`theme-bar-btn ${currentTheme === theme.id ? 'active' : ''}`}
                        onClick={() => onSetTheme(theme.id)}
                    >
                        {theme.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
