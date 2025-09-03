import React, { useState } from "react";
import support from "../../assets/Common/Support/bx_support.svg";
import { chatbotApi } from "../../API/Web/chatbotApi";

function Support() {
  const [isOpen, setIsOpen] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (userMessage.trim() === "") return;

    const newMessages = [
      ...chatMessages,
      { message: userMessage, sender: "user" },
    ];
    setChatMessages(newMessages);
    setUserMessage("");

    try {
      setLoading(true);

      const data = await chatbotApi(userMessage);
      const botResponse = data.candidates[0].content.parts[0].text;

      setChatMessages([
        ...newMessages,
        { message: botResponse, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      setChatMessages([
        ...newMessages,
        { message: "Error: Could not get response from AI", sender: "bot" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Support Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-full shadow-lg hover:bg-indigo-500 transition-all duration-300"
        >
          <img src={support} alt="Support" className="w-5 h-5" />
          <span className="hidden sm:inline">Support</span>
          <svg
            className={`w-4 h-4 ml-1 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-5 right-6 z-50 w-96 h-[500px] rounded-lg shadow-xl flex flex-col bg-white">
          <div className="p-4 border-b bg-indigo-600 text-white rounded-t-lg flex justify-between items-center">
            <p className="text-lg font-semibold">Customer Support</p>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-gray-400 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {chatMessages.map((message, idx) => (
              <div
                key={idx}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[75%] rounded-lg p-3 shadow-md ${
                    message.sender === "user"
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-gray-800"
                  }`}
                >
                  <p className="text-sm">{message.message}</p>
                </div>
              </div>
            ))}
            {loading && <div className="text-gray-500">Typing...</div>}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 flex space-x-2">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Ask your question..."
              className="flex-1 p-2 rounded-lg border bg-white text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              onClick={handleSendMessage}
              className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg p-2 transition-colors duration-200"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Support;
