import axios from "axios";

const BASE_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyA1ArI3yYq42zTultXI7YC51EcA6LrxgZ0";

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
