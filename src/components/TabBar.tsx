import { X } from 'lucide-react';
import type { FileId } from '../types';
import { FILES } from '../data/files';

interface TabBarProps {
    openFiles: FileId[];
    activeFile: FileId;
    onTabClick: (id: FileId) => void;
    onTabClose: (id: FileId) => void;
}

const EXT_COLORS: Record<string, string> = {
    jsx: '#61dafb',
    json: '#fbbf24',
    css: '#a78bfa',
    log: '#34d399',
    pdf: '#f87171',
    sh: '#4ade80',
};

export default function TabBar({ openFiles, activeFile, onTabClick, onTabClose }: TabBarProps) {
    const fileMap = Object.fromEntries(FILES.map(f => [f.id, f]));

    return (
        <div className="tab-bar">
            {openFiles.map(id => {
                const file = fileMap[id];
                if (!file) return null;
                return (
                    <div
                        key={id}
                        className={`tab ${activeFile === id ? 'active' : ''}`}
                        onClick={() => onTabClick(id)}
                    >
                        <span style={{ color: EXT_COLORS[file.extension], fontSize: 10 }}>●</span>
                        <span>{file.name}</span>
                        <span
                            className="tab-close"
                            onClick={e => { e.stopPropagation(); onTabClose(id); }}
                            title="Close"
                        >
                            <X size={10} />
                        </span>
                    </div>
                );
            })}
        </div>
    );
}
