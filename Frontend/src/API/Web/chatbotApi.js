import axios from "axios";

const BASE_URL = import.meta.env.VITE_GEMINI_API_KEY;

export const chatbotApi = async (userMessage) => {
  const response = await axios.post(BASE_URL, {
    contents: [
      {
        parts: [{ text: userMessage }],
      },
    ],
  });
  return response.data;
};
