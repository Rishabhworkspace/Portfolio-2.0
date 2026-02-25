# Portfolio 2.0 - Rishabh Tripathi

A developer portfolio built to resemble a modern Integrated Development Environment (IDE) with a NeoBrutalist aesthetic. Featuring interactive resizable panes, a functioning command palette, a terminal UI, and multi-theme support, this portfolio merges artificial intelligence with raw design to create a digital experience that refuses to be boring.

## Key Features

- **IDE-Like Interface**: A fully interactive split-pane layout using `react-resizable-panels` with drag-to-resize and code peeking functionality.
- **Command Palette (Ctrl+Shift+P)**: Fast, keyboard-driven navigation with global search across projects, skills, and pages modeled after macOS Spotlight and VS Code.
- **Interactive Terminal**: A dedicated terminal tab (`TerminalView`) supporting commands like `help`, `about`, `projects`, and `whoami`.
- **Multi-Theme Support**: Instantly toggle between developer themes (Light, Dark, Gruvbox, and Synthwave).
- **Activity Log & GitHub Integration**: A Git-history style timeline with animated graphs tracking real-world commits and project milestones.

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Vanilla CSS (Custom properties for dynamic theming & NeoBrutalism)
- **Animations**: Framer Motion
- **Layout Engine**: React Resizable Panels v4
- **Icons**: Lucide React
- **Syntax Highlighting**: React Syntax Highlighter
- **Deployment**: Vercel (Recommended)

## Prerequisites

- Node.js 18.0 or higher
- npm (or yarn / pnpm)
- Git

## Getting Started

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/Rishabhworkspace/Portfolio-2.0.git
cd Portfolio-2.0
\`\`\`

### 2. Install Dependencies

Install the required JavaScript/TypeScript packages:

\`\`\`bash
npm install
\`\`\`

### 3. Start Development Server

Run the Vite development server:

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:5173](http://localhost:5173) in your browser.


### Key Components

**Layout Engine (`SplitView` & `react-resizable-panels`)**
Provides the core drag-and-drop structural resizing mimicking VS Code. Handled via `<Group>` and `<Panel>` components with customized `<Separator>` handles for interaction. Panels can be programmatically collapsed.

**Theming System (`index.css` & `ThemeBar`)**
Relies heavily on CSS Custom Properties (`--bg-primary`, `--accent-primary`, etc.) defined in `:root` and overridden via `data-theme` attributes on the `<body>` element. Supported themes: `light`, `dark`, `gruvbox`, and `synthwave`.

**Command Palette (`CommandPalette.tsx`)**
A globally mounted overlay triggered by `Cmd/Ctrl + Shift + P` or `Cmd/Ctrl + K`. Manges its own active state and utilizes `framer-motion` for depth, blur (`backdrop-filter`), and entry animations.



## Deployment

This static React app is extremely portable and can be deployed virtually anywhere. Vercel is highly recommended for zero-config deployments.

