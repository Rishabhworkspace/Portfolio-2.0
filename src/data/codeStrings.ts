export const WHOAMI_CODE = `import React from 'react';

/**
 * @component WhoAmI
 * @author Rishabh Tripathi
 * @description The human behind the keyboard.
 *
 * // yes, I did stay up until 3am for this one.
 * // TODO: change the world
 */

const WhoAmI = ({
  name = "Rishabh Tripathi",
  role = "Full-Stack Developer · AI/ML Enthusiast",
  location = "Pune, India",
  university = "VIT Chennai | B.Tech CSE (AI + Robotics)",
  cgpa = 9.14,
  yearOfStudy = 2,
  isAvailable = true,
  githubHandle = "Rishabhworkspace",
  email = "rishabh.j.tripathi2903@gmail.com",
  linkedin = "www.linkedin.com/in/rishabh-tripathi-728a77317",
  instagram = "www.instagram.com/rishabh_t106/",
}) => {
  // I build digital products that refuse to be boring.
  const tagline = \`Merging artificial intelligence\n              with raw design.\`;

  const traits = {
    thinkingIn: "systems",
    breakfastOf: "champions", // coffee + leetcode
    missionStatement: "Build software that allows humans\\n    to do less, so they can create more.",
    currentlyObsessing: [
      "Generative AI",
      "VS Code themes",
      "Full-stack architecture",
    ],
  };

  return (
    <div className="about-section">
      <Avatar src="/avatar.jpg" alt={name} />
      <h1>{name}<span className="cursor">_</span></h1>
      <p className="role">{role}</p>
      <p className="tagline">{tagline}</p>
      <p className="location">📍 {location}</p>
      <p className="education">
        🎓 {university} · CGPA {cgpa}
      </p>
      {isAvailable && (
        <span className="badge available">
          ● Open to Work
        </span>
      )}
    </div>
  );
};

export default WhoAmI;`;

export const FEATURED_CODE = `[
  {
    "title": "AlgoForge 2.0",
    "description": "Gamified DSA learning platform with XP systems, streaks, and global leaderboards. Learning algorithms should feel like leveling up.",
    "stack": ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS", "Framer Motion", "OAuth"],
    "live_url": "https://algo-forge-2-0.vercel.app/",
    "repo_url": "https://github.com/Rishabhworkspace/AlgoForge-2.0",
    "highlight": "10k+ problems, 5+ learning paths"
  },
  {
    "title": "FoodNest",
    "description": "Restaurant discovery using vibe-based filtering. Find a quiet cafe for deep work or a buzzy spot for a first date. It gets you.",
    "stack": ["Next.js", "Node.js", "Tailwind CSS", "Framer Motion"],
    "live_url": "https://food-nest-nu.vercel.app/",
    "repo_url": "https://github.com/Rishabhworkspace/FoodNest",
    "highlight": "Mood-based restaurant discovery"
  },
  {
    "title": "LevelUp",
    "description": "A to-do list with game mechanics — XP, streaks, achievements. Because adulting is just a game with worse graphics.",
    "stack": ["HTML", "CSS", "JavaScript"],
    "live_url": "https://level-up-eight-mauve.vercel.app/",
    "repo_url": "https://github.com/Rishabhworkspace/LevelUp-",
    "highlight": "Productivity gamified"
  },
  {
    "title": "Portfolio 1.0",
    "description": "Previous developer portfolio featuring a clean, responsive design to showcase technical experience and projects.",
    "stack": ["Next.js", "Tailwind CSS", "Vercel"],
    "live_url": "https://rishabhtripathi2903.vercel.app/",
    "repo_url": "https://github.com/Rishabhworkspace/Portfolio",
    "highlight": "The predecessor to this site"
  }
]`;

export const STACK_CODE = `:root {
  /* === PROFICIENCY LEVELS ===
   * expert    → I dream in this
   * advanced  → My daily driver
   * intermediate → Getting comfortable
   * beginner  → Learning fast
   */

  /* === LANGUAGES === */
  --javascript: expert;
  --python: advanced;
  --cpp: advanced;
  --java: intermediate;
  --c: intermediate;

  /* === FRONTEND === */
  --react: expert;
  --nextjs: advanced;
  --typescript: advanced;
  --tailwindcss: expert;
  --framer-motion: advanced;
  --html-css: expert;

  /* === BACKEND & DB === */
  --nodejs: advanced;
  --expressjs: advanced;
  --mongodb: advanced;
  --mysql: intermediate;
  --supabase: intermediate;
  --rest-apis: expert;

  /* === TOOLS === */
  --git-github: expert;
  --vercel: expert;
  --oauth: intermediate;

  /* === AI / ML === */
  --machine-learning: beginner; /* ... for now */
  --generative-ai: beginner;    /* watching closely */

  /* === CS FUNDAMENTALS === */
  --dsa: intermediate; /* LeetCode daily grind */
  --dbms: intermediate;

  /* current-focus: AI/ML integration with full-stack */
  /* next-unlock: system-design, kubernetes, rust */
}`;

export const ACTIVITY_CODE = `[INFO]  2026-02-24 16:49 IST  Portfolio 2.0 initiated
[INFO]  Connecting to GitHub API... ✓
[INFO]  Fetching recent activity for @Rishabhworkspace

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 RECENT COMMIT LOG
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[COMMIT] ──────────────────────────────────────
         Loading from GitHub API...
         github.com/Rishabhworkspace

[INFO]  GitHub Username: Rishabhworkspace
[INFO]  LeetCode: Rishabhworkspace
[INFO]  Current streak: counting...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 JOURNEY LOG
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[2023]      Started with C & C++ — fell in love with logic
[EARLY-24]  Discovered the web — learned HTML/CSS/JS
[MID-24]    Full-stack mode: Next.js, Node, MongoDB, Supabase
[LATE-24]   Smart India Hackathon — built MindCare
[NOW]       AlgoForge 2.0, ViTravelBuddy, FoodNest — always shipping

[INFO]  Status: ● Online — midnight coder, perpetual builder`;

export const CONTACT_CODE = `#!/bin/bash
# contact.sh — Rishabh Tripathi's contact script
# Run this to start a conversation.
# Warning: May result in interesting projects.

set -e

RECIPIENT="Rishabh Tripathi"
EMAIL="rishabh.j.tripathi2903@gmail.com"
GITHUB="https://github.com/Rishabhworkspace"
LINKEDIN="https://www.linkedin.com/in/rishabh-tripathi-728a77317"
INSTAGRAM="https://www.instagram.com/rishabh_t106/"
PORTFOLIO="https://rishabhtripathi2903.vercel.app"

# ── Check if open to work ─────────────────────
availability_status() {
  echo "● Open to Work"
  echo "Available for: freelance, internships, full-time"
  echo "Response time: usually within 24h"
}

# ── Send a message ────────────────────────────
send_message() {
  local subject="$1"
  local body="$2"

  echo "Sending to: $EMAIL"
  echo "Subject: $subject"
  echo "---"
  echo "$body"
  echo "---"
  echo "✓ Message queued. Expect a reply soon."
}

# ── Open social links ─────────────────────────
open_links() {
  echo "GitHub    → $GITHUB"
  echo "LinkedIn  → $LINKEDIN"
  echo "Instagram → $INSTAGRAM"
  echo "Portfolio → $PORTFOLIO"
}

# ── Main ──────────────────────────────────────
main() {
  echo "👋 Hey! I'm $RECIPIENT."
  echo "Let's build something great together."
  echo ""
  availability_status
  echo ""
  open_links
}

main "$@"

# TODO: automate hiring process with AI
# (just kidding... unless?)`;
