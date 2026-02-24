import { useMemo } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import type { FileId, Theme } from '../types';
import {
    WHOAMI_CODE, FEATURED_CODE, STACK_CODE, ACTIVITY_CODE, CONTACT_CODE
} from '../data/codeStrings';

interface CodePaneProps {
    fileId: FileId;
    theme: Theme;
}

const FILE_CODE: Record<FileId, { code: string; lang: string }> = {
    whoami: { code: WHOAMI_CODE, lang: 'jsx' },
    featured: { code: FEATURED_CODE, lang: 'json' },
    stack: { code: STACK_CODE, lang: 'css' },
    activity: { code: ACTIVITY_CODE, lang: 'accesslog' },
    resume: { code: '// resume.pdf — opens in preview pane →', lang: 'javascript' },
    contact: { code: CONTACT_CODE, lang: 'bash' },
};

export default function CodePane({ fileId, theme }: CodePaneProps) {
    const { code, lang } = FILE_CODE[fileId];
    const lines = code.split('\n');
    const hlStyle = theme === 'dark' ? atomOneDark : atomOneLight;

    // Minimap
    const minimapLines = useMemo(() => {
        return lines.map(() => ({
            width: Math.max(10, Math.min(95, 30 + Math.random() * 60)),
            opacity: 0.3 + Math.random() * 0.5,
        }));
    }, [fileId]);

    return (
        <div className="code-pane">
            <div className="pane-header">
                <span>source</span>
                <span style={{ color: 'var(--accent-blue)', fontSize: 9 }}>READ ONLY</span>
            </div>
            <div className="code-display">
                {/* Line numbers */}
                <div className="line-numbers">
                    {lines.map((_, i) => (
                        <div key={i}>{i + 1}</div>
                    ))}
                </div>

                {/* Code */}
                <div className="code-content" style={{ overflowX: 'auto' }}>
                    <SyntaxHighlighter
                        language={lang}
                        style={hlStyle}
                        customStyle={{
                            background: 'transparent',
                            padding: 0,
                            margin: 0,
                            fontSize: '13px',
                            lineHeight: '1.6',
                            fontFamily: "'JetBrains Mono', monospace",
                        }}
                        wrapLines
                        wrapLongLines={false}
                    >
                        {code}
                    </SyntaxHighlighter>
                </div>

                {/* Minimap */}
                <div className="minimap">
                    <div className="minimap-content">
                        {minimapLines.map((l, i) => (
                            <div
                                key={i}
                                className="minimap-line"
                                style={{ width: `${l.width}%`, opacity: l.opacity }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
