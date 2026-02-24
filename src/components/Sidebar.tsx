import { useState } from 'react';
import { Folder, FolderOpen } from 'lucide-react';
import type { FileId } from '../types';
import { FILES } from '../data/files';

interface SidebarProps {
    activeFile: FileId;
    openFiles: FileId[];
    onFileClick: (id: FileId) => void;
}

const EXT_ICONS: Record<string, string> = {
    jsx: '⚛',
    json: '{}',
    css: '✦',
    log: '≡',
    pdf: '□',
    sh: '$',
};

const EXT_COLORS: Record<string, string> = {
    jsx: 'ext-jsx',
    json: 'ext-json',
    css: 'ext-css',
    log: 'ext-log',
    pdf: 'ext-pdf',
    sh: 'ext-sh',
};

export default function Sidebar({ activeFile, openFiles, onFileClick }: SidebarProps) {
    const [projectsOpen, setProjectsOpen] = useState(true);

    const rootFiles = FILES.filter(f => !f.folder);
    const projectFiles = FILES.filter(f => f.folder === 'projects');

    return (
        <aside className="sidebar">
            <div className="sidebar-header">Explorer</div>
            <div className="sidebar-tree">

                {/* Root: portfolio/ */}
                <div className="sidebar-folder">
                    <div
                        className="sidebar-folder-header"
                        style={{ paddingLeft: 8 }}
                    >
                        <FolderOpen size={13} style={{ color: '#fbbf24', flexShrink: 0 }} />
                        <span style={{ fontSize: 12, color: 'var(--text-primary)', fontWeight: 500 }}>portfolio</span>
                    </div>

                    <div className="sidebar-children">
                        {/* whoami.jsx */}
                        {rootFiles.slice(0, 1).map(file => (
                            <FileItem
                                key={file.id}
                                file={file}
                                active={activeFile === file.id}
                                modified={openFiles.includes(file.id)}
                                onClick={() => onFileClick(file.id)}
                            />
                        ))}

                        {/* projects/ folder */}
                        <div className="sidebar-folder">
                            <div
                                className="sidebar-folder-header"
                                onClick={() => setProjectsOpen(o => !o)}
                            >
                                <span className={`sidebar-folder-icon ${projectsOpen ? 'open' : ''}`}>▶</span>
                                {projectsOpen
                                    ? <FolderOpen size={13} style={{ color: '#fbbf24' }} />
                                    : <Folder size={13} style={{ color: '#fbbf24' }} />
                                }
                                <span>projects</span>
                            </div>
                            {projectsOpen && (
                                <div className="sidebar-children">
                                    {projectFiles.map(file => (
                                        <FileItem
                                            key={file.id}
                                            file={file}
                                            active={activeFile === file.id}
                                            modified={openFiles.includes(file.id)}
                                            onClick={() => onFileClick(file.id)}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* rest of root files */}
                        {rootFiles.slice(1).map(file => (
                            <FileItem
                                key={file.id}
                                file={file}
                                active={activeFile === file.id}
                                modified={openFiles.includes(file.id)}
                                onClick={() => onFileClick(file.id)}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </aside>
    );
}

function FileItem({
    file,
    active,
    modified,
    onClick,
}: {
    file: (typeof FILES)[number];
    active: boolean;
    modified: boolean;
    onClick: () => void;
}) {
    return (
        <div
            className={`sidebar-file ${active ? 'active' : ''}`}
            onClick={onClick}
            title={file.name}
        >
            <span className={`file-icon ${EXT_COLORS[file.extension]}`}>
                {EXT_ICONS[file.extension]}
            </span>
            <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {file.name}
            </span>
            {modified && !active && (
                <span style={{ color: 'var(--accent-amber)', fontSize: 8 }}>●</span>
            )}
        </div>
    );
}
