// /api/groq.js
// Vercel serverless function — proxies requests to Groq so the API key
// never gets shipped to the browser.
//
// Your frontend calls: fetch('/api/groq', { method: 'POST', body: JSON.stringify({ messages, ... }) })
// This function attaches the real Groq key (from Vercel env vars) and forwards the request.

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const GROQ_API_KEY = process.env.GROQ_API_KEY;

  if (!GROQ_API_KEY) {
    return res.status(500).json({ error: 'Server misconfiguration: missing API key' });
  }

  try {
    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`,
      },
      // Forward whatever body the frontend sent (model, messages, temperature, etc.)
      body: JSON.stringify(req.body),
    });

    const data = await groqResponse.json();

    // Forward Groq's status code too (e.g. 401, 429) so frontend error handling still works
    return res.status(groqResponse.status).json(data);

  } catch (err) {
    console.error('Groq proxy error:', err);
    return res.status(500).json({ error: 'Failed to reach Groq API' });
  }
}
