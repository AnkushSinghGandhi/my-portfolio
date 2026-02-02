import { clientProjects, labProjects, lowLevelProjects } from "./projects";
import { experiences } from "./experience";

// This map allows you to provide detailed, AI-specific descriptions for each project.
// The key should match the exact title of the project or experience ID.
export const detailedDescriptions = {
    // Client Projects
    "Budi Travel - App": `
        Full-stack travel booking application. 
        frontend: Flutter (Dart), 
        backend: Django (Python) & Laravel (PHP), 
        database: MySQL. 
        Key features: agent connection, trip planning, secure booking. 
        Challenges: Synchronizing data between two different backends.
    `,
    "Option ARO - WebApp": `
        High-performance options trading analytics platform.
        Tech: Flask, Redis, WebSockets, MongoDB, AWS.
        Key work: Implemented real-time data streaming for stock prices, optimized latency for option chain updates.
    `,

    // Experience Logs
    "LOG_01": `
        Role: SDE at Desi Diaries.
        Focus: Python/Django backend, Microservices, Financial Data.
        Key achievements: Reduced API latency by 40%, built real-time trading dashboards, managed Kubernetes clusters.
    `,
    "LOG_02": `
        Role: Flutter Developer at Desi Diaries.
        Focus: Mobile App Development (iOS/Android).
        Key achievements: Built cross-platform travel and social apps, integrated Firebase and Google Maps.
    `,
};

export const getAIContext = () => {
    const allProjects = [...clientProjects, ...labProjects, ...lowLevelProjects];

    let context = "SYSTEM KNOWLEDGE BASE:\n\n";

    // Add Projects
    context += "## PROJECTS:\n";
    allProjects.forEach(p => {
        const details = detailedDescriptions[p.title] || p.desc;
        context += `- NAME: ${p.title}\n  TECH: ${p.tech.join(", ")}\n  DETAILS: ${details}\n\n`;
    });

    // Add Experience
    context += "## EXPERIENCE LOGS:\n";
    experiences.forEach(e => {
        const details = detailedDescriptions[e.id] || e.details.join(" ");
        context += `- ID: ${e.id}\n  ROLE: ${e.role} @ ${e.company}\n  PERIOD: ${e.period}\n  DETAILS: ${details}\n\n`;
    });

    return context;
};
