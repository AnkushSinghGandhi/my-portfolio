import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini
let genAI = null;
let model = null;

export const initializeGemini = (apiKey) => {
    if (!apiKey) return;
    genAI = new GoogleGenerativeAI(apiKey);
    model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
};

const envKey = import.meta.env.VITE_GEMINI_API_KEY;
if (envKey) {
    initializeGemini(envKey);
}

const cleanAndParseJSON = (text) => {
    try {
        let cleanText = text.replace(/```json/gi, "").replace(/```/g, "").trim();
        const firstBrace = cleanText.indexOf('{');
        const firstBracket = cleanText.indexOf('[');
        const lastBrace = cleanText.lastIndexOf('}');
        const lastBracket = cleanText.lastIndexOf(']');

        let start = -1;
        let end = -1;

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
        throw new Error("⚠️ PARSE ERROR: AI returned invalid format. Try again.");
    }
};

const classifyError = (error) => {
    const msg = error.message || error.toString();
    if (msg.includes('429')) return `⏳ RATE LIMIT: Free tier quota exceeded.`;
    if (msg.includes('403')) return '🔒 ACCESS DENIED: Check API permissions.';
    if (msg.includes('401')) return '🔑 INVALID KEY: Check your API key.';
    if (msg.includes('CORS') || msg.includes('network')) return '🌐 NETWORK ERROR: Check connection.';
    return `❌ ERROR: ${msg.substring(0, 100)}`;
};

const getContextHash = (context) => {
    if (!context) return "general";
    let hash = 0;
    for (let i = 0; i < context.length; i++) {
        const char = context.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0;
    }
    return Math.abs(hash).toString(16);
};

const getUserContext = (profile) => {
    if (!profile) return "";
    const parts = [];
    if (profile.occupation) parts.push(`Occupation: ${profile.occupation}`);
    if (profile.goal) parts.push(`Goal: ${profile.goal}`);
    if (profile.skills) parts.push(`Skills: ${profile.skills}`);

    if (parts.length === 0) return "";
    return `\nUser Context:\n${parts.map(p => `- ${p}`).join("\n")}\nTailor the technical depth and examples to this user.`;
};

export const generateQuiz = async (context, userProfile) => {
    if (!model) throw new Error("Gemini API Key not set");
    const cacheKey = `ai_cache_quiz_${getContextHash(context)}_${getContextHash(JSON.stringify(userProfile))}`;
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) return JSON.parse(cached);

    const prompt = `Generate 3 MCQ questions based on this content. ${getUserContext(userProfile)} \n\nContent:\n${context.substring(0, 10000)}\n\nReturn JSON with questions array (id, question, options, correctAnswer, explanation).`;

    try {
        const result = await model.generateContent(prompt);
        const data = cleanAndParseJSON(result.response.text());
        sessionStorage.setItem(cacheKey, JSON.stringify(data));
        return data;
    } catch (error) {
        throw new Error(classifyError(error));
    }
};

export const generateRoadmap = async (context, userProfile) => {
    if (!model) throw new Error("Gemini API Key not set");
    const cacheKey = `ai_cache_roadmap_${getContextHash(context)}_${getContextHash(JSON.stringify(userProfile))}`;
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) return JSON.parse(cached);

    const prompt = `Create an actionable checklist from this content. ${getUserContext(userProfile)} \n\nContent:\n${context.substring(0, 10000)}\n\nReturn JSON array (id, step, details).`;

    try {
        const result = await model.generateContent(prompt);
        const data = cleanAndParseJSON(result.response.text());
        sessionStorage.setItem(cacheKey, JSON.stringify(data));
        return data;
    } catch (error) {
        throw new Error(classifyError(error));
    }
};

export const generatePathfinder = async (context, userProfile) => {
    if (!model) throw new Error("Gemini API Key not set");
    const cacheKey = `ai_cache_pathfinder_${getContextHash(context)}_${getContextHash(JSON.stringify(userProfile))}`;
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) return JSON.parse(cached);

    const prompt = `Suggest next topic and 3 project ideas. ${getUserContext(userProfile)} \n\nContent:\n${context.substring(0, 10000)}\n\nReturn JSON {nextTopic: {title, description}, projects: [{title, description, difficulty}]}.`;

    try {
        const result = await model.generateContent(prompt);
        const data = cleanAndParseJSON(result.response.text());
        sessionStorage.setItem(cacheKey, JSON.stringify(data));
        return data;
    } catch (error) {
        throw new Error(classifyError(error));
    }
};

export const generateTutorStream = async (history, message, context, userProfile, onChunk) => {
    if (!model) throw new Error("Gemini API Key not set");

    const chatHistory = history.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
    }));

    const systemInstruction = `You are an AI Expert. ${getUserContext(userProfile)} \n\nContext:\n${context || "General"}\n\nGuidelines: Concise, technical, markdown.`;

    try {
        const chat = model.startChat({
            history: [
                { role: "user", parts: [{ text: systemInstruction }] },
                { role: "model", parts: [{ text: "Understood." }] },
                ...chatHistory
            ]
        });

        const result = await chat.sendMessageStream(message);
        for await (const chunk of result.stream) {
            onChunk(chunk.text());
        }
    } catch (error) {
        throw new Error(classifyError(error));
    }
};
