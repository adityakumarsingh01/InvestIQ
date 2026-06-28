import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function analyzeNewsSentiment(
  headline: string
) {
  try {

    const completion =
      await client.chat.completions.create({

        model: "gpt-4.1-mini",

        messages: [

          {
            role: "system",

            content:
              "You are a financial analyst. Return only JSON.",

          },

          {

            role: "user",

            content: `Analyze this financial news.

Headline:
${headline}

Return JSON:

{
"sentiment":"",
"impact":"",
"confidence":0,
"reason":""
}
`,

          },

        ],

        response_format: {
          type: "json_object",
        },

      });

    return JSON.parse(
      completion.choices[0].message.content!
    );

  } catch {

    return {

      sentiment: "Neutral",

      impact: "Medium",

      confidence: 70,

      reason: "AI analysis unavailable.",

    };

  }

}