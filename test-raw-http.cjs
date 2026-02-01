const https = require('https');

const apiKey = process.argv[2];
if (!apiKey) {
    console.error("Please provide an API key");
    process.exit(1);
}

const data = JSON.stringify({
    contents: [{
        parts: [{ text: "Explain how AI works" }]
    }]
});

const options = {
    hostname: 'generativelanguage.googleapis.com',
    path: `/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

console.log(`\nTesting raw HTTP request to: ${options.hostname}${options.path.replace(apiKey, 'HIDDEN_KEY')}`);

const req = https.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);

    let body = '';

    res.on('data', (chunk) => {
        body += chunk;
    });

    res.on('end', () => {
        try {
            const parsed = JSON.parse(body);
            if (res.statusCode === 200) {
                console.log("✅ SUCCESS! Raw HTTP works.");
                console.log("Response snippet:", parsed.candidates?.[0]?.content?.parts?.[0]?.text?.substring(0, 50) + "...");
            } else {
                console.log("❌ FAILED. Response body:");
                console.log(JSON.stringify(parsed, null, 2));
            }
        } catch (e) {
            console.log("Response (not JSON):", body);
        }
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

req.write(data);
req.end();
