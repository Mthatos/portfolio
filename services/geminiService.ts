import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { PROJECTS, SKILLS, BIO, CAREER_OBJECTIVE, MY_NAME } from '../constants';

const API_KEY = process.env.API_KEY || '';

// System instruction to ground the AI in the portfolio context
const SYSTEM_INSTRUCTION = `
You are an AI assistant for ${MY_NAME}'s professional portfolio. 
Your goal is to answer questions from potential employers or visitors about ${MY_NAME}'s projects, skills, and experience.

Here is the context about ${MY_NAME}:

Bio:
${BIO}

Career Objective:
${CAREER_OBJECTIVE}

Skills:
${SKILLS.map(s => `- ${s.name} (${s.category})`).join('\n')}

Projects:
${PROJECTS.map(p => `- Name: ${p.title}\n  Description: ${p.description}\n  Tech Stack: ${p.tags.join(', ')}\n  Link: ${p.link}`).join('\n')}

Guidelines:
1. Be professional, polite, and concise.
2. Only answer questions related to the portfolio, professional experience, or AI/Tech.
3. If asked about contact info, refer them to the Contact section or mention LinkedIn.
4. If asked about a specific project, provide details from the context.
5. Act as an advocate for the candidate.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (chatSession) return chatSession;

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
    },
  });
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    if (!API_KEY) {
      return "I'm sorry, I can't connect to my brain right now (Missing API Key).";
    }
    const chat = getChatSession();
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I encountered an error while processing your request. Please try again later.";
  }
};