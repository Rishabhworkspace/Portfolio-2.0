import { useState, useEffect } from 'react';
import type { FileId, Theme } from '../types';
import CodePane from './CodePane';
import WhoAmIView from '../views/WhoAmIView';
import FeaturedView from '../views/FeaturedView';
import StackView from '../views/StackView';
import ActivityView from '../views/ActivityView';
import ResumeView from '../views/ResumeView';
import ContactView from '../views/ContactView';

interface SplitViewProps {
    activeFile: FileId;
    theme: Theme;
}

export default function SplitView({ activeFile, theme }: SplitViewProps) {
    const [mobilePeek, setMobilePeek] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // When active file changes, disable peek to show rendered
    useEffect(() => {
        setMobilePeek(false);
    }, [activeFile]);

    const Views: Record<FileId, React.ReactNode> = {
        whoami: <WhoAmIView />,
        featured: <FeaturedView />,
        stack: <StackView />,
        activity: <ActivityView />,
        resume: <ResumeView />,
        contact: <ContactView />,
    };

    return (
        <div className="split-view">
            {/* Code Pane - left side desktop, full screen on mobile peek */}
            {(!isMobile || mobilePeek) && (
                <div className={`code-pane ${mobilePeek ? 'mobile-peek' : ''}`}>
                    <CodePane fileId={activeFile} theme={theme} />
                    {mobilePeek && (
                        <button
                            className="peek-btn"
                            onClick={() => setMobilePeek(false)}
                            style={{ bottom: 16, border: '1px solid var(--accent-blue)', color: 'var(--accent-blue)' }}
                        >
                            « Back to Preview
                        </button>
                    )}
                </div>
            )}

            {/* Rendered Pane - right side desktop, full screen mobile default */}
            <div className="rendered-pane">
                <div className="pane-header">
                    <span>preview</span>
                    <span style={{ color: 'var(--accent-blue)', fontSize: 9 }}>LIVE</span>
                </div>
                {Views[activeFile]}
            </div>

            {/* Mobile Peek Toggle Button */}
            {isMobile && !mobilePeek && (
                <button className="peek-btn" onClick={() => setMobilePeek(true)}>
                    <span style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>{'</>'}</span> Peek Source
                </button>
            )}
        </div>
    );
}
