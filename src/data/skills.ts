import type { Skill } from '../types';

export const SKILLS: Skill[] = [
    // Languages
    { name: 'JavaScript', level: 'expert', category: 'Languages' },
    { name: 'Python', level: 'advanced', category: 'Languages' },
    { name: 'C++', level: 'advanced', category: 'Languages' },
    { name: 'Java', level: 'intermediate', category: 'Languages' },
    { name: 'C', level: 'intermediate', category: 'Languages' },

    // Frontend
    { name: 'React.js', level: 'expert', category: 'Frontend' },
    { name: 'Next.js', level: 'advanced', category: 'Frontend' },
    { name: 'TypeScript', level: 'advanced', category: 'Frontend' },
    { name: 'Tailwind CSS', level: 'expert', category: 'Frontend' },
    { name: 'Framer Motion', level: 'advanced', category: 'Frontend' },
    { name: 'HTML/CSS', level: 'expert', category: 'Frontend' },

    // Backend & DB
    { name: 'Node.js', level: 'advanced', category: 'Backend' },
    { name: 'Express.js', level: 'advanced', category: 'Backend' },
    { name: 'MongoDB', level: 'advanced', category: 'Backend' },
    { name: 'MySQL', level: 'intermediate', category: 'Backend' },
    { name: 'Supabase', level: 'intermediate', category: 'Backend' },
    { name: 'REST APIs', level: 'expert', category: 'Backend' },

    // Tools
    { name: 'Git/GitHub', level: 'expert', category: 'Tools' },
    { name: 'Vercel', level: 'expert', category: 'Tools' },
    { name: 'OAuth', level: 'intermediate', category: 'Tools' },

    // Fields
    { name: 'Machine Learning', level: 'beginner', category: 'AI / ML' },
    { name: 'Generative AI', level: 'beginner', category: 'AI / ML' },
    { name: 'DSA', level: 'intermediate', category: 'CS Fundamentals' },
    { name: 'DBMS', level: 'intermediate', category: 'CS Fundamentals' },
];
