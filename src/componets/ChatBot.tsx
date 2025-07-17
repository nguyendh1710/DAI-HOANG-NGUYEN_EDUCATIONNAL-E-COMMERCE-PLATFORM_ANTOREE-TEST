import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

type Message = { sender: "user" | "ai"; text: string };

const products = [
  { name: "Khóa tiếng Anh giao tiếp", keyword: "tiếng Anh giao tiếp" },
  { name: "Khóa tiếng Anh thương mại", keyword: "tiếng Anh thương mại" },
  { name: "Khóa tiếng Anh phỏng vấn", keyword: "tiếng Anh phỏng vấn" },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const suggestions = products
      .filter((p) => input.toLowerCase().includes(p.keyword))
      .map((p) => `Gợi ý khóa học: ${p.name}`)
      .join("\n");

    const aiReply =
      suggestions ||
      "Xin lỗi! Mình chưa tìm thấy khóa học phù hợp. Bạn có thể mô tả rõ hơn không?";

    setTimeout(() => {
      const aiMessage: Message = { sender: "ai", text: aiReply };
      setMessages((prev) => [...prev, aiMessage]);
    }, 600);

    setInput("");
  };

  return (
    <>
      <img
        src="/chatbot.png"
        alt="Tư vấn viên"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-[18vh] right-5 w-20 h-20 rounded-full object-cover shadow-2xl ring-2 ring-indigo-400 hover:ring-pink-400 transition-all duration-300 ease-out hover:scale-105 cursor-pointer animate-pulse"
      />

      {isOpen && (
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed right-5"
          style={{
            bottom: "30vh",
            width: "400px", // Phóng to chatbot
          }}
        >
          <div className="bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden border">
            <div className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-bold px-4 py-2">
              Tư vấn viên Anh Le
            </div>

            <div className="flex-1 p-3 space-y-2 overflow-y-auto max-h-96 bg-gray-50">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-start gap-2 ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.sender === "ai" && (
                    <img
                      src="/chatbot.png" // 👉 Thay ảnh người thật tại đây
                      alt="Tư vấn viên"
                      className="w-8 h-8 rounded-full bg-white border shadow"
                    />
                  )}

                  <div
                    className={`p-2 rounded-xl text-sm max-w-[70%] whitespace-pre-line ${
                      msg.sender === "user"
                        ? "bg-blue-500 text-white rounded-br-none"
                        : "bg-white border shadow-sm rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>

                  {msg.sender === "user" && (
                    <img
                      src="https://i.imgur.com/DPz8f2F.png"
                      alt="User"
                      className="w-8 h-8 rounded-full bg-white border shadow"
                    />
                  )}
                </motion.div>
              ))}
            </div>

            <div className="flex items-center border-t bg-white">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Nhập câu hỏi..."
                className="flex-1 p-2 outline-none text-sm"
              />
              <button
                aria-label="Gửi tin nhắn"
                onClick={handleSend}
                className="p-2 text-blue-600 hover:text-blue-800"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
