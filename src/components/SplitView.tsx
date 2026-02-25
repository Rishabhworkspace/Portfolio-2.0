import { useState, useEffect, useRef } from 'react';
import type { FileId, Theme } from '../types';
import CodePane from './CodePane';
import WhoAmIView from '../views/WhoAmIView';
import FeaturedView from '../views/FeaturedView';
import StackView from '../views/StackView';
import ActivityView from '../views/ActivityView';
import ResumeView from '../views/ResumeView';
import ContactView from '../views/ContactView';
import TerminalView from '../views/TerminalView';
import { Panel, Group, Separator, PanelImperativeHandle } from 'react-resizable-panels';

interface SplitViewProps {
    activeFile: FileId;
    theme: Theme;
}

export default function SplitView({ activeFile, theme }: SplitViewProps) {
    const [mobilePeek, setMobilePeek] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const codePaneRef = useRef<PanelImperativeHandle>(null);

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
        terminal: <TerminalView />,
    };

    return (
        <div className="split-view">
            {isMobile ? (
                // Mobile layout - no resizable panels, toggle between peek and render
                <>
                    {mobilePeek && (
                        <div className={`code-pane mobile-peek`}>
                            <CodePane fileId={activeFile} theme={theme} />
                            <button
                                className="peek-btn"
                                onClick={() => setMobilePeek(false)}
                                style={{ bottom: 16, border: '1px solid var(--accent-blue)', color: 'var(--accent-blue)' }}
                            >
                                « Back to Preview
                            </button>
                        </div>
                    )}
                    <div className="rendered-pane">
                        <div className="pane-header">
                            <span>preview</span>
                            <span style={{ color: 'var(--accent-blue)', fontSize: 9 }}>LIVE</span>
                        </div>
                        {Views[activeFile]}
                    </div>
                </>
            ) : (
                // Desktop Layout - Resizable Panels
                <Group orientation="horizontal" style={{ width: '100%', height: '100%' }}>
                    <Panel panelRef={codePaneRef} defaultSize="50%" minSize="20%" collapsible className="panel-code">
                        <CodePane fileId={activeFile} theme={theme} onClose={() => codePaneRef.current?.collapse()} />
                    </Panel>

                    <Separator className="resize-handle" />

                    <Panel defaultSize="50%" minSize="30%" className="panel-rendered">
                        <div className="rendered-pane">
                            <div className="pane-header">
                                <span>preview</span>
                                <span style={{ color: 'var(--accent-blue)', fontSize: 9 }}>LIVE</span>
                            </div>
                            {Views[activeFile]}
                        </div>
                    </Panel>
                </Group>
            )}

            {/* Mobile Peek Toggle Button */}
            {isMobile && !mobilePeek && (
                <button className="peek-btn" onClick={() => setMobilePeek(true)}>
                    <span style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>{'</>'}</span> Peek Source
                </button>
            )}
        </div>
    );
}
