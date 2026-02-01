// Developer Library - Consolidated resources, cheatsheets, roadmaps, blogs, and reads

// ================== CHEAT SHEETS & ROADMAPS (Priority 1) ==================
export const cheatsheets = [
    {
        id: "dsa-roadmap",
        title: "DSA One-Shot",
        subtitle: "Crack ₹10-15 LPA Offers",
        description: "Priority-based roadmap focusing on high-impact DSA topics. Tier 1-4 coverage.",
        link: "/library/dsa-roadmap",
        tags: ["DSA", "Interview Prep", "Roadmap"],
        icon: "Rocket",
        featured: true,
        color: "purple",
        gradient: "from-purple-600 to-indigo-600"
    },
    {
        id: "mysql-one",
        title: "MySQL One-Shot",
        subtitle: "Backend Engineering",
        description: "Complete mastery of MySQL queries, indexing, and normalization for backend engineering.",
        link: "/library/mysql-one",
        tags: ["MySQL", "Database"],
        icon: "Database",
        featured: true,
        color: "cyan",
        gradient: "from-cyan-600 to-blue-600"
    },
    {
        id: "redis-one",
        title: "Redis One-Shot",
        subtitle: "High-Performance Systems",
        description: "In-depth guide to Redis caching, pub/sub, and data structures for high-performance systems.",
        link: "/library/redis-one",
        tags: ["Redis", "Caching"],
        icon: "Zap",
        featured: true,
        color: "orange",
        gradient: "from-red-600 to-orange-600"
    },
    {
        id: "django-orm-one",
        title: "Django ORM One-Shot",
        subtitle: "Advanced Querying",
        description: "Advanced Django ORM techniques, optimization, and query tuning for scalable apps.",
        link: "/library/django-orm-one",
        tags: ["Django", "ORM"],
        icon: "Container",
        featured: true,
        color: "emerald",
        gradient: "from-emerald-600 to-green-600"
    },
    {
        id: "system-design",
        title: "System Design Primer",
        subtitle: "Scalable Architecture",
        description: "Learn to design scalable systems. Distributed systems, databases, caching.",
        link: "/library/system-design",
        tags: ["System Design", "Architecture"],
        icon: "LayoutTemplate",
        featured: false,
        color: "slate",
        gradient: "from-slate-500 to-zinc-500"
    },
];

// ================== BLOGS - MY WRITINGS (Priority 2) ==================
export const blogs = [
    {
        title: "Create Your First Chrome Extension",
        date: "Sept 10, 2025",
        desc: "Guide to building your own Chrome extension with cool features.",
        url: "https://dev.to/ankushsinghgandhi/creat-your-first-chrome-extension-mk",
        tags: ["Chrome", "Extension", "Tutorial"],
    },
    {
        title: "Understanding Software Engineering",
        date: "Aug 28, 2025",
        desc: "Brief guide on software engineering process and development models.",
        url: "https://dev.to/ankushsinghgandhi/software-engineering-3gbm",
        tags: ["Software Engineering", "Process"],
    },
    {
        title: "Git & GitHub Cheat Sheet",
        date: "Cheatsheet",
        desc: "Most important and often used Git commands for everyday development.",
        url: "https://dev.to/ankushsinghgandhi/git-github-cheat-sheet-71b",
        tags: ["Git", "GitHub", "Cheat Sheet"],
    },
    {
        title: "Python Roadmap",
        date: "Cheatsheet",
        desc: "Comprehensive guide on the roadmap of learning Python and implementing its concepts.",
        url: "https://dev.to/ankushsinghgandhi/steps-to-master-python-1p06",
        tags: ["Python", "Roadmap", "Learning"],
    },
    {
        title: "Markdown Cheat Sheet",
        date: "Cheatsheet",
        desc: "Quick overview of all essential Markdown syntax elements.",
        url: "https://dev.to/ankushsinghgandhi/markdown-cheat-sheet-1il5",
        tags: ["Markdown", "Cheat Sheet"],
    },
];

// ================== READS - EXTERNAL RECOMMENDATIONS (Priority 3) ==================
export const reads = [
    {
        category: "System Design Reads",
        items: [
            {
                type: "linkedin",
                title: "System Design, LLD & Java Resources",
                author: "Apoorv R",
                url: "https://www.linkedin.com/posts/apoorv-r98_systemdesign-lld-java-activity-7404014458819215360-Cln8",
                tags: ["System Design", "LLD", "Java"],
            },
            {
                type: "linkedin",
                title: "Getting Started with System Design",
                author: "NK SystemDesign",
                url: "https://www.linkedin.com/posts/nk-systemdesign-one_if-you-want-to-get-started-with-system-design-activity-7405595393402556416-cVo1",
                tags: ["System Design", "Beginners"],
            },
            {
                type: "linkedin",
                title: "SDE1 to SDE3 Growth Path",
                author: "Ankur Dhawan",
                url: "https://www.linkedin.com/posts/ankur-dhawan01_sde1-sde2-sde3-activity-7406547203843850243-BbhS",
                tags: ["Career", "SDE Levels"],
            },
        ],
    },
    {
        category: "YouTube Channels",
        items: [
            {
                type: "youtube",
                title: "Hussein Nasser",
                author: "Hussein Nasser",
                url: "https://youtube.com/@hnasr",
                description: "Deep dives into backend engineering, databases, and system design.",
                tags: ["Backend", "System Design", "Databases"],
            },
        ],
    },
];

// ================== DSA ROADMAP FULL CONTENT ==================
export { dsaRoadmap } from "./resources";

// Social links for writings
export const writingLinks = {
    linkedin: "https://www.linkedin.com/in/ankushsinghgandhi/",
    devto: "https://dev.to/ankushsinghgandhi",
};
