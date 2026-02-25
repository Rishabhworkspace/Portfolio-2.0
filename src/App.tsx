import { useState, useEffect, useRef } from 'react';
import type { FileId, Theme } from './types';
import Sidebar from './components/Sidebar';
import TabBar from './components/TabBar';
import SplitView from './components/SplitView';
import StatusBar from './components/StatusBar';
import CommandPalette from './components/CommandPalette';
import BootSequence from './components/BootSequence';
import ThemeBar from './components/ThemeBar';
import { Panel, Group, Separator, PanelImperativeHandle } from 'react-resizable-panels';
import { Sun, Moon } from 'lucide-react';
import { FILES } from './data/files';

function App() {
  const [booting, setBooting] = useState(true);
  const [theme, setTheme] = useState<Theme>('dark');
  const [openFiles, setOpenFiles] = useState<FileId[]>(['whoami']);
  const [activeFile, setActiveFile] = useState<FileId>('whoami');
  const [paletteOpen, setPaletteOpen] = useState(false);
  const sidebarRef = useRef<PanelImperativeHandle>(null);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl + Shift + P for Command Palette
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key.toLowerCase() === 'p') {
        e.preventDefault();
        setPaletteOpen(true);
      }
      // Ctrl + ` (backtick) for Terminal
      if ((e.metaKey || e.ctrlKey) && e.key === '`') {
        e.preventDefault();
        handleFileClick('terminal');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Update document title and theme
  useEffect(() => {
    const file = FILES.find(f => f.id === activeFile);
    document.title = file ? `${file.name} — Rishabh Tripathi` : 'portfolio';
    document.documentElement.setAttribute('data-theme', theme);
  }, [activeFile, theme]);

  const handleFileClick = (id: FileId) => {
    if (!openFiles.includes(id)) {
      setOpenFiles([...openFiles, id]);
    }
    setActiveFile(id);
  };

  const handleTabClose = (id: FileId) => {
    const newOpenFiles = openFiles.filter(f => f !== id);
    setOpenFiles(newOpenFiles);
    if (activeFile === id) {
      setActiveFile(newOpenFiles.length > 0 ? newOpenFiles[newOpenFiles.length - 1] : 'whoami'); // fallback
    }
    // Prevent closing all files (always keep whoami open if empty)
    if (newOpenFiles.length === 0) {
      setOpenFiles(['whoami']);
      setActiveFile('whoami');
    }
  };

  if (booting) {
    return <BootSequence onComplete={() => setBooting(false)} />;
  }

  return (
    <div className="editor-layout">
      {/* Title Bar (macOS style decorative) */}
      <div className="title-bar">
        <div className="title-bar-dots">
          <div className="title-bar-dot red" />
          <div className="title-bar-dot yellow" />
          <div className="title-bar-dot green" />
        </div>
        <div className="title-bar-name">Rishabh Tripathi — Portfolio 2.0</div>
        <div className="title-bar-actions">
          <button
            className="title-bar-action-btn"
            onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
            title="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>
      </div>

      <ThemeBar currentTheme={theme} onSetTheme={setTheme} />

      <div className="editor-body">
        <Group orientation="horizontal" style={{ width: '100%', height: '100%' }}>
          {/* Sidebar Panel */}
          <Panel panelRef={sidebarRef} defaultSize={220} minSize={150} maxSize={400} collapsible className="panel-sidebar">
            <Sidebar
              activeFile={activeFile}
              openFiles={openFiles}
              onFileClick={handleFileClick}
              onCollapse={() => sidebarRef.current?.collapse()}
            />
          </Panel>

          <Separator className="resize-handle" />

          {/* Main Editor Panel */}
          <Panel className="panel-main">
            <div className="editor-main">
              <TabBar
                openFiles={openFiles}
                activeFile={activeFile}
                onTabClick={setActiveFile}
                onTabClose={handleTabClose}
              />
              <SplitView
                activeFile={activeFile}
                theme={theme}
              />
            </div>
          </Panel>
        </Group>
      </div>

      <StatusBar
        activeFile={activeFile}
        onOpenPalette={() => setPaletteOpen(true)}
      />

      {paletteOpen && (
        <CommandPalette
          onClose={() => setPaletteOpen(false)}
          onNavigate={handleFileClick}
        />
      )}
    </div>
  );
}

export default App;
