import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.argv[2];
if (!apiKey) {
    console.error("Please provide an API key: node test-gemini-connection.js YOUR_KEY");
    process.exit(1);
}

async function test() {
    console.log("-----------------------------------------");
    console.log("🔍 Testing Gemini API Key...");
    console.log("-----------------------------------------");

    const genAI = new GoogleGenerativeAI(apiKey);

    // Test 1: gemini-1.5-flash
    try {
        process.stdout.write("Testing model 'gemini-1.5-flash'... ");
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent("Reply with just the word 'Working'");
        const text = result.response.text();
        console.log("✅ SUCCESS!");
        console.log("   Response:", text.trim());
    } catch (error) {
        console.log("❌ FAILED");
        console.log("   Error:", error.message.split(' ').slice(0, 10).join(' ') + "...");
    }

    // Test 2: gemini-pro
    try {
        console.log("\nTesting model 'gemini-pro' (Legacy)... ");
        const modelPro = genAI.getGenerativeModel({ model: "gemini-pro" });
        const resultPro = await modelPro.generateContent("Reply with 'Working'");
        console.log("✅ SUCCESS!");
    } catch (error) {
        console.log("❌ FAILED");
        console.log("   Error:", error.message.split(' ').slice(0, 10).join(' ') + "...");
    }

    console.log("-----------------------------------------");
}

test();
