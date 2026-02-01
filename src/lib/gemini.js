import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini
// Note: In a production app, you'd want to handle keys more securely or proxy requests.
// For this portfolio demo, we'll ask the user for a key or use a provided one.
let genAI = null;
let model = null;

export const initializeGemini = (apiKey) => {
    genAI = new GoogleGenerativeAI(apiKey);
    // Using gemini-2.5-flash as verified by the user's curl command
    model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
};

// Demo mode - use pre-generated responses when quota exhausted
let useDemoMode = false;
export const enableDemoMode = () => { useDemoMode = true; };
export const disableDemoMode = () => { useDemoMode = false; };
export const isDemoMode = () => useDemoMode;

const cleanAndParseJSON = (text) => {
    try {
        // Remove markdown code blocks if present
        let cleanText = text.replace(/```json/gi, "").replace(/```/g, "").trim();

        // If it still fails, try to find the JSON object/array bounds
        const firstBrace = cleanText.indexOf('{');
        const firstBracket = cleanText.indexOf('[');
        const lastBrace = cleanText.lastIndexOf('}');
        const lastBracket = cleanText.lastIndexOf(']');

        let start = -1;
        let end = -1;

        // Determine if it looks like an object or array
        if (firstBrace !== -1 && (firstBracket === -1 || firstBrace < firstBracket)) {
            start = firstBrace;
            end = lastBrace;
        } else if (firstBracket !== -1) {
            start = firstBracket;
            end = lastBracket;
        }

        if (start !== -1 && end !== -1) {
            cleanText = cleanText.substring(start, end + 1);
        }

        return JSON.parse(cleanText);
    } catch (e) {
        console.error("JSON Parse Error on text:", text);
        throw new Error("⚠️ PARSE ERROR: AI returned invalid format. Try again.");
    }
};

// Classify errors with specific, actionable messages
const classifyError = (error) => {
    const msg = error.message || error.toString();

    if (msg.includes('429')) {
        // Extract retry time if available
        const retryMatch = msg.match(/retry in (\d+)/i);
        const retryTime = retryMatch ? retryMatch[1] : '30';
        return `⏳ RATE LIMIT: Free tier quota exceeded. Wait ${retryTime}s or enable billing in Google Cloud Console.`;
    }

    if (msg.includes('403')) {
        return '🔒 ACCESS DENIED: API key lacks permission. Check that Generative Language API is enabled in your Google Cloud project.';
    }

    if (msg.includes('401')) {
        return '🔑 INVALID KEY: API key is incorrect or expired. Get a new key from aistudio.google.com';
    }

    if (msg.includes('404')) {
        return '❌ MODEL NOT FOUND: Your key lacks access to "gemini-2.5-flash". Please create a NEW key at aistudio.google.com.';
    }

    if (msg.includes('500') || msg.includes('503')) {
        return '🔧 SERVER ERROR: Google\'s servers are having issues. Try again in a few minutes.';
    }

    if (msg.includes('CORS') || msg.includes('network') || msg.includes('fetch')) {
        return '🌐 NETWORK ERROR: Check your internet connection or try disabling ad blockers.';
    }

    if (msg.includes('API Key not set')) {
        return '🔑 NO API KEY: Please enter your Gemini API key first.';
    }

    // Default with original message for debugging
    return `❌ ERROR: ${msg.substring(0, 100)}`;
};

// Wrapper for API calls with better error handling
const safeApiCall = async (apiFunction) => {
    try {
        return await apiFunction();
    } catch (error) {
        console.error("API Error:", error);
        throw new Error(classifyError(error));
    }
};

export const generateQuiz = async (context) => {
    if (!model) throw new Error("Gemini API Key not set");

    // Demo mode - return pre-generated content
    if (useDemoMode) {
        return {
            questions: [
                {
                    id: "demo1",
                    question: "What is the primary benefit of understanding Data Structures?",
                    options: ["Better code organization", "Optimal time and space complexity", "Easier debugging", "Faster typing speed"],
                    correctAnswer: 1,
                    explanation: "Understanding data structures helps you choose the right tool for optimal performance."
                },
                {
                    id: "demo2",
                    question: "Which approach is best for solving complex algorithmic problems?",
                    options: ["Brute force only", "Copy-paste from internet", "Break down into subproblems", "Skip difficult parts"],
                    correctAnswer: 2,
                    explanation: "Breaking problems into smaller subproblems (divide & conquer) is a fundamental problem-solving technique."
                },
                {
                    id: "demo3",
                    question: "What should you prioritize when preparing for technical interviews?",
                    options: ["Memorizing solutions", "Understanding patterns & concepts", "Speed only", "Using complex language"],
                    correctAnswer: 1,
                    explanation: "Understanding underlying patterns helps you solve variations of problems you haven't seen before."
                }
            ]
        };
    }

    const prompt = `
    You are a strict technical interviewer and teacher. 
    Based on the following content, generate a JSON object containing exactly 3 multiple-choice questions to test the user's understanding.
    
    Content:
    """
    ${context.substring(0, 10000)}
    """

    For each question, provide:
    - id (unique string)
    - question (string)
    - options (array of 4 strings)
    - correctAnswer (index of the correct option, 0-3)
    - explanation (short string explaining why)

    Return ONLY raw JSON, no markdown formatting.
  `;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return cleanAndParseJSON(response.text());
    } catch (error) {
        console.error("Quiz Generation Error:", error);
        throw new Error(classifyError(error));
    }
};

export const generateRoadmap = async (context) => {
    if (!model) throw new Error("Gemini API Key not set");

    // Demo mode
    if (useDemoMode) {
        return [
            { id: "1", step: "Understand Core Concepts", details: "Review the fundamental theory and architecture." },
            { id: "2", step: "Set Up Environment", details: "Install necessary tools, SDKs, and IDE extensions." },
            { id: "3", step: "Build Hello World", details: "Create a minimal working example to verify setup." },
            { id: "4", step: "Implement Basic Features", details: "Follow the guide to build core functionality." },
            { id: "5", step: "Test & Debug", details: "Validate your implementation with edge cases." },
            { id: "6", step: "Optimize & Refactor", details: "Improve code quality and performance." }
        ];
    }

    const prompt = `
    You are an expert technical project manager and mentor.
    Turn the following technical guide/article into a step-by-step actionable checklist.
    
    Content:
    """
    ${context.substring(0, 10000)}
    """

    Return a JSON array of objects, where each object has:
    - id (unique string)
    - step (string, concise actionable instruction)
    - details (optional string, brief extra context)

    Return ONLY raw JSON, no markdown formatting.
    Limit to 5-8 high-level steps.
  `;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return cleanAndParseJSON(response.text());
    } catch (error) {
        console.error("Roadmap Generation Error:", error);
        throw new Error(classifyError(error));
    }
};

export const generatePathfinder = async (context) => {
    if (!model) throw new Error("Gemini API Key not set");

    // Demo mode
    if (useDemoMode) {
        return {
            nextTopic: {
                title: "System Design Patterns",
                description: "Learn how to structure larger applications using proven architectural patterns."
            },
            projects: [
                { title: "Real-time Chat App", description: "Build a scalable chat service using WebSockets and Redis.", difficulty: "Intermediate" },
                { title: "E-commerce Microservice", description: "Design a product catalog service with caching.", difficulty: "Advanced" },
                { title: "Analytics Dashboard", description: "Visualize data trends using D3.js or similar libraries.", difficulty: "Beginner" }
            ]
        };
    }

    const prompt = `
    You are a career coach and tech lead.
    Based on the technical concepts discussed in this content, suggest:
    1. The NEXT logical topic to learn.
    2. Three specific project ideas to build that use these concepts.

    Content:
    """
    ${context.substring(0, 10000)}
    """

    Return a JSON object with:
    - nextTopic (object with 'title' and 'description')
    - projects (array of objects with 'title', 'description', 'difficulty' as 'Beginner'/'Intermediate'/'Advanced')

    Return ONLY raw JSON, no markdown formatting.
  `;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return cleanAndParseJSON(response.text());
    } catch (error) {
        console.error("Pathfinder Generation Error:", error);
        throw new Error(classifyError(error));
    }
};

export const generateTutorResponse = async (history, message, context) => {
    if (!model) throw new Error("Gemini API Key not set");

    if (useDemoMode) {
        return "This is a demo response from the AI Expert. I can explain concepts, debug code, or help you practice! (Real AI is disabled in demo mode)";
    }

    // Construct the chat history for the model
    // Note: Gemini API expects 'user' and 'model' roles.
    const chatHistory = history.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
    }));

    // Add context system instruction if it's the start of the chat
    const systemInstruction = `
    You are an expert personalized AI Expert for a developer portfolio.
    Your goal is to help the user understand the technical concepts presented in this portfolio.
    
    Context from current page:
    """
    ${context ? context.substring(0, 5000) : "General coding questions"}
    """
    
    Guidelines:
    - Be encouraging, concise, and technical but accessible.
    - Use Markdown for code snippets.
    - If the user asks about the portfolio owner (Ankush), speak positively about his work based on the context.
    - Focus on educational value.
  `;

    try {
        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{ text: systemInstruction }]
                },
                {
                    role: "model",
                    parts: [{ text: "Understood. I am ready to act as an expert technical tutor based on the provided context." }]
                },
                ...chatHistory
            ]
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Tutor Chat Error:", error);
        throw new Error(classifyError(error));
    }
};
