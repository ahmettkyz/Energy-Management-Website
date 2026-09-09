"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Zap,
  RotateCcw,
  Bot,
  User,
  Loader2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export default function ChatBot() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        language === "tr"
          ? "Merhaba! Ben Apollo Yapay Zeka Asistanıyım. Apollo donanımları (Gateway Pro, Pulse Analyzer), GridOS yazılımı, BESS batarya optimizasyonu veya kurucumuz Rafail Kasapis hakkında her şeyi bana sorabilirsiniz."
          : "Hello! I am the Apollo AI Assistant. Ask me anything about our hardware (Gateway Pro, Pulse Analyzer), GridOS platform, battery storage optimization, or our mission!",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const starterQuestions =
    language === "tr"
      ? [
          "Güneş ve Kehanet felsefesi nedir?",
          "Apollo Gateway Pro teknik özellikleri",
          "BESS Batarya optimizasyonu nasıl çalışır?",
          "Apollo'yu kim, ne zaman kurdu?",
        ]
      : [
          "What is the Sun & Prophecy duality?",
          "Tell me about Apollo Gateway Pro specs",
          "How does BESS battery optimization work?",
          "Who founded Apollo Green Solutions?",
        ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: query,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    const assistantMessageId = (Date.now() + 1).toString();
    // Add empty assistant message that will be populated by stream
    setMessages((prev) => [
      ...prev,
      { id: assistantMessageId, role: "assistant", content: "" },
    ]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) throw new Error("Failed to send message");

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let accumulatedText = "";

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const rawChunk = decoder.decode(value, { stream: true });
          accumulatedText += rawChunk;
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantMessageId
                ? { ...msg, content: accumulatedText }
                : msg
            )
          );
        }
      }
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantMessageId
            ? {
                ...msg,
                content:
                  language === "tr"
                    ? "Üzgünüm, şu an bağlantı kurulamadı. Lütfen tekrar deneyin veya doğrudan /contact sayfamızdan iletişime geçin."
                    : "Sorry, I encountered an issue connecting. Please try again or reach out through our contact page.",
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: "welcome-reset",
        role: "assistant",
        content:
          language === "tr"
            ? "Görüşme sıfırlandı. Size nasıl yardımcı olabilirim?"
            : "Conversation cleared. How can I help you today?",
      },
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Trigger Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            aria-label="Open Apollo AI Chatbot"
            className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 via-blue-500 to-cyan-400 p-[2px] shadow-2xl shadow-blue-500/40 cursor-pointer flex items-center justify-center group"
          >
            <div className="w-full h-full bg-[#081326] rounded-full flex items-center justify-center text-cyan-400 group-hover:text-white transition-colors">
              <MessageSquare className="w-6 h-6" />
            </div>

            {/* Glowing active pulse ring */}
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-cyan-400 border-2 border-[#060D1A] flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 280 }}
            className="w-[92vw] sm:w-[420px] h-[580px] bg-[#070F1F] border border-blue-800/60 rounded-3xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Window Header */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-[#0C1935] via-[#09152B] to-[#0C1935] border-b border-blue-900/40 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1.5px]">
                  <div className="w-full h-full bg-[#08101E] rounded-[10px] flex items-center justify-center text-cyan-400">
                    <Zap className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>Apollo AI</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-950 text-cyan-400 border border-blue-800 font-mono">
                      Vercel AI SDK
                    </span>
                  </div>
                  <div className="text-[11px] text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Apollo GS Expert Online</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleReset}
                  title={language === "tr" ? "Sohbeti Temizle" : "Clear Chat"}
                  aria-label="Clear chat"
                  className="w-8 h-8 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 flex items-center justify-center transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chat"
                  className="w-8 h-8 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-7 h-7 rounded-lg bg-blue-900/40 border border-blue-700/50 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] p-3.5 rounded-2xl leading-relaxed whitespace-pre-line ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-br-none shadow-md shadow-blue-600/20"
                        : "bg-[#0B172E] border border-blue-900/40 text-slate-200 rounded-bl-none"
                    }`}
                  >
                    {msg.content || (
                      <span className="inline-flex items-center gap-1.5 text-slate-400">
                        <Loader2 className="w-3 h-3 animate-spin text-cyan-400" />
                        <span>{language === "tr" ? "Yanıt oluşturuluyor..." : "Thinking..."}</span>
                      </span>
                    )}
                  </div>

                  {msg.role === "user" && (
                    <div className="w-7 h-7 rounded-lg bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center text-cyan-300 shrink-0 mt-0.5">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Starter Suggestions */}
            {messages.length <= 2 && (
              <div className="px-4 py-2 border-t border-slate-800/60 bg-slate-950/40">
                <div className="text-[10px] uppercase font-bold text-slate-400 mb-1.5 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  <span>{language === "tr" ? "Önerilen Sorular" : "Suggested Inquiries"}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {starterQuestions.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(q)}
                      className="px-2.5 py-1 rounded-lg bg-blue-950/70 hover:bg-blue-900/80 border border-blue-800/50 text-slate-300 text-[11px] text-left transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Message Input Box */}
            <div className="p-3.5 bg-[#060D1A] border-t border-blue-900/40">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="relative flex items-center"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={
                    language === "tr"
                      ? "Apollo ürünleri ve mühendislik hakkında sorun..."
                      : "Ask about Apollo hardware, software, or specs..."
                  }
                  className="w-full pl-4 pr-11 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  aria-label="Send message"
                  className="absolute right-1.5 w-8 h-8 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:hover:bg-blue-600 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
