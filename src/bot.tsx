import { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "Hi! I'm PitchMate, your pitch assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [isBotTyping, setIsBotTyping] = useState(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
  
    const userMessage = { id: Date.now(), sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
  
    const textarea = document.querySelector("textarea");
    if (textarea) textarea.style.height = "auto";
  
    setIsBotTyping(true);

    const apikey = import.meta.env.VITE_APIKEY;

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apikey}`, // Replace with your key
          "Content-Type": "application/json",
          // "HTTP-Referer": `${window.location.href}`, // Optional
          "X-Title": "PitchMate" // Optional
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-chat-v3-0324:free",
          messages: [
            {
              role: "user",
              content: input
            }
          ]
        }),
      });
  
      const data = await response.json();
      const botReply = data.choices?.[0]?.message?.content || "Sorry, I didn't get that.";
  
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: botReply.trim(),
        },
      ]);
    } catch (error) {
      console.error("Error talking to AI:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: "Oops! Something went wrong. Please try again later.",
        },
      ]);
    } finally {
      setIsBotTyping(false);
    }
  };
  

  return (
    <div className="min-h-screen bg-[#F7FAFC] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl h-[85vh] bg-white shadow-2xl rounded-3xl flex flex-col overflow-hidden border border-gray-200">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#3F78F9] text-white">
          <Link to="/" className="flex items-center space-x-2 bg-white text-black rounded-full px-4">
            <img src="/logo.png" alt="PitchMate" className="h-10" />
            <span className="text-xl font-bold">PitchMate</span>
          </Link>
          <p className="text-lg font-semibold hidden md:flex">Assistant</p>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4 scroll-smooth my-1 flex flex-col"> 
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`font-semibold self-start break-words w-fit max-w-[75%] h-auto px-5 py-3 rounded-2xl shadow text-sm leading-relaxed transition-all duration-200 ease-in-out ${
                msg.sender === "user"
                  ? "ml-auto bg-[#3F78F9] text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
              style={{ whiteSpace: "pre-wrap" }}
            >
              {msg.text}
            </div>
          ))}

          {isBotTyping && (
            <div className="w-fit px-5 py-3 rounded-2xl shadow text-sm bg-gray-100 text-gray-800 flex space-x-1">
              <span className="h-2 w-2 bg-gray-400 rounded-full animate-pulse animate-wave" />
              <span className="h-2 w-2 bg-gray-400 rounded-full animate-pulse animate-wave " />
              <span className="h-2 w-2 bg-gray-400 rounded-full animate-pulse animate-wave " />
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>


        {/* Input Area */}
        <div className="px-3 md:px-6 py-4 shadow-lg bg-white">
          <div className="flex items-center space-x-4">
            <textarea
              rows={1}
              className="flex-1 resize-none border border-gray-300 rounded-2xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3F78F9] overflow-hidden max-h-40"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = "auto";
                target.style.height = `${target.scrollHeight}px`;
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
            <button
              onClick={handleSend}
              className="px-4 md:px-8 py-3 bg-[#3F78F9] text-white rounded-full hover:bg-[#2C5ED4] transition duration-200"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
