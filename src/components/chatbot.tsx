import { useState, useRef } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { GoogleGenerativeAI, ChatSession } from "@google/generative-ai";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([
    { text: "Hi! I'm your InvestIQ AI assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState("");
  const chatSession = useRef<ChatSession | null>(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' as const };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    try {
      if (!chatSession.current) {
        const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const history = [
          {
            role: "user",
            parts: "Hello, I'm looking for an investment advisor.",
          },
          {
            role: "model",
            parts: "Great, I can help with that. What are your investment goals?",
          },
        ];
        chatSession.current = model.startChat({
          history,
          generationConfig: {
            maxOutputTokens: 100,
          },
        });
      }

      const result = await chatSession.current.sendMessage(input);
      const response = await result.response;
      const text = response.text();
      
      setMessages(prev => [...prev, { text, sender: 'bot' }]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages(prev => [...prev, { text: "Sorry, I'm having trouble connecting. Please try again later.", sender: 'bot' }]);
    }
  };

  return (
    <>
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 h-[500px] flex flex-col shadow-lg z-50">
          <div className="flex items-center justify-between p-4 border-b bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <span style={{ fontWeight: 600 }}>AI Assistant</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask a question..."
              />
              <Button onClick={handleSend} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-40"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </>
  );
}
