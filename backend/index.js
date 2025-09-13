import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import fetch from "node-fetch";
import { connectDB } from "./config/db.js";

const apiKey = 'AIzaSyBI207U0yLX57rfgYMB-NEm2qgmKeGocVA'

dotenv.config();
const app = express();
connectDB();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/generate-quiz", async (req, res) => {
    const { topic, subtopic, language, difficulty, numQuestions } = req.body;

    try {
        const prompt = `
You are an AI quiz generator.
Generate ${numQuestions} multiple-choice questions based on the following preferences:

- Topic: ${topic}
${subtopic ? `- Subtopic: ${subtopic}` : ""}
- Language: ${language}
- Difficulty: ${difficulty}

⚠️ Important: Return only valid JSON, nothing else. Do not include explanations, notes, or markdown.

Format:
[
  {
    "id": number,
    "question": "string",
    "options": ["string", "string", "string", "string"],
    "correctAnswer": number
  }
]`;

        const response = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" +
            apiKey,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                }),
            }
        );

        const data = await response.json();

        let quizJson;

        try {
            let text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

            text = text.replace(/```json|```/g, "").trim();

            console.log("Cleaned Gemini text:", text);

            quizJson = JSON.parse(text);
        } catch (err) {
            console.error("Failed to parse Gemini response:", err);
            return res.status(500).json({ error: "Invalid AI response format" });
        }

        res.json(quizJson);
    } catch (error) {
        console.error("Error calling Gemini:", error);
        res.status(500).json({ error: "Failed to generate quiz" });
    }
});

app.listen(5000, () => {
    console.log(`Server is running on port 3000`);
});
