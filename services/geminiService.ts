import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize safely. 
// Note: In a real prod app, you might want to handle missing keys gracefully in UI.
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

const SYSTEM_INSTRUCTION = `
You are ARES, a portfolio assistant AI running in a TUI (Text User Interface) environment.
Your persona is dry, witty, technically precise, and slightly retro-futuristic.
You speak in a concise, terminal-like manner.
Avoid flowery language. Use technical jargon where appropriate but remain accessible.
You know about the developer "NYX / SID" (the owner of this portfolio).
The NYX / SID is a Full Stack Engineer specializing in React, Node.js, Python and AI / ML and APIs.
If asked about contact info, suggest looking at the Contact section or email "siddharthkakade7777@gmail.com".
Format your responses with markdown if needed for code blocks, but keep them text-heavy.
`;

export const createChatSession = (): Chat | null => {
  if (!ai) return null;
  
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const sendMessageToGemini = async (chat: Chat, message: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "NO DATA RECEIVED.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "ERROR: CONNECTION INTERRUPTED. RETRY SEQUENCE INITIATED... FAILED.";
  }
};