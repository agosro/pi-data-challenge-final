import { useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import { sendQuestion } from "../services/chatService";

import ChatHeader from "../components/chat/ChatHeader";
import ChatMessages from "../components/chat/ChatMessages";
import ChatInput from "../components/chat/ChatInput";

export default function AskAI() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔹 Filtros alineados con backend
  const [filters, setFilters] = useState({
    categoria_equipo: "",
    tipo_documentacion: "",
    subtipo: "",
    marca: "",
    modelo: "",
    sistema: "",
  });

  const handleSend = async () => {
    if (!input.trim()) return;

    const question = input;
    setMessages((prev) => [...prev, { role: "user", content: question }]);
    setInput("");
    setLoading(true);

    // 🔹 limpiar filtros vacíos
    const cleanedFilters = Object.fromEntries(
      Object.entries(filters).filter(([, v]) => v !== "" && v != null)
    );

    try {
      const result = await sendQuestion(question, cleanedFilters);

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: result.answer,
          sources: result.sources || [],
          images: result.images || [],
          usedRag: result.used_rag,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: "Error while contacting the AI service." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppLayout>
      <div className="flex flex-col flex-1 min-h-0 gap-6">
        <ChatHeader filters={filters} onChangeFilters={setFilters} />

        <div className="bg-white rounded-xl shadow-card flex flex-col flex-1 min-h-0">
          <div className="flex-1 overflow-y-auto p-6">
            <ChatMessages messages={messages} loading={loading} />
          </div>

          <ChatInput
            value={input}
            onChange={setInput}
            onSend={handleSend}
            loading={loading}
          />
        </div>
      </div>
    </AppLayout>
  );
}
