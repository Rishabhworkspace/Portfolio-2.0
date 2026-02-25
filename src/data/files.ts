import type { PortfolioFile } from '../types';

export const FILES: PortfolioFile[] = [
    {
        id: 'whoami',
        name: 'whoami.jsx',
        extension: 'jsx',
        icon: '⚛️',
        language: 'JSX',
    },
    {
        id: 'featured',
        name: 'featured.json',
        extension: 'json',
        icon: '{}',
        language: 'JSON',
        folder: 'projects',
    },
    {
        id: 'stack',
        name: 'stack.css',
        extension: 'css',
        icon: '🎨',
        language: 'CSS',
    },
    {
        id: 'activity',
        name: 'activity.log',
        extension: 'log',
        icon: '📋',
        language: 'Log',
    },
    {
        id: 'resume',
        name: 'resume.pdf',
        extension: 'pdf',
        icon: '📄',
        language: 'PDF',
    },
    {
        id: 'contact',
        name: 'contact.sh',
        extension: 'sh',
        icon: '🖥️',
        language: 'Shell',
    },
    {
        id: 'terminal',
        name: 'terminal.exe',
        extension: 'exe',
        icon: '💻',
        language: 'Terminal',
    }
];

export const SIDEBAR_STRUCTURE = {
    name: 'portfolio',
    children: [
        { type: 'file', id: 'whoami' },
        {
            type: 'folder',
            name: 'projects',
            children: [
                { type: 'file', id: 'featured' },
            ],
        },
        { type: 'file', id: 'stack' },
        { type: 'file', id: 'activity' },
        { type: 'file', id: 'resume' },
        { type: 'file', id: 'contact' },
        { type: 'file', id: 'terminal' },
    ],
};
