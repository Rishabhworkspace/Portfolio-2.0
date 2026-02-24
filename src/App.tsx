import { useState, useEffect } from 'react';
import type { FileId, Theme } from './types';
import Sidebar from './components/Sidebar';
import TabBar from './components/TabBar';
import SplitView from './components/SplitView';
import StatusBar from './components/StatusBar';
import CommandPalette from './components/CommandPalette';
import BootSequence from './components/BootSequence';
import { FILES } from './data/files';

function App() {
  const [booting, setBooting] = useState(true);
  const [theme, setTheme] = useState<Theme>('dark');
  const [openFiles, setOpenFiles] = useState<FileId[]>(['whoami']);
  const [activeFile, setActiveFile] = useState<FileId>('whoami');
  const [paletteOpen, setPaletteOpen] = useState(false);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'p') {
        e.preventDefault();
        setPaletteOpen(true);
      }
      // Ctrl+K fallback for windows users used to discord/slack
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setPaletteOpen(true);
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
      </div>

      <div className="editor-body">
        <Sidebar
          activeFile={activeFile}
          openFiles={openFiles}
          onFileClick={handleFileClick}
        />
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
      </div>

      <StatusBar
        activeFile={activeFile}
        theme={theme}
        onToggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
        onOpenPalette={() => setPaletteOpen(true)}
      />

      {paletteOpen && (
        <CommandPalette
          onClose={() => setPaletteOpen(false)}
          onNavigate={handleFileClick}
          onToggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
        />
      )}
    </div>
  );
}

export default App;
