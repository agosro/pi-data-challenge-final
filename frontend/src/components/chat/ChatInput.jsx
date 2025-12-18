import { Send } from "lucide-react";

export default function ChatInput({ value, onChange, onSend, loading }) {
  return (
    <div className="border-t p-4">
      <div className="flex gap-3">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSend()}
          placeholder="Escribe tu pregunta aquí..."
          className="flex-1 border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <button
          onClick={onSend}
          disabled={loading}
          className="bg-primary hover:bg-primaryHover text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>

      <p className="text-xs text-center text-slate-400 mt-2">
        DocuAssist AI busca en documentación técnica, manuales de sistema y guías de usuario.
      </p>
    </div>
  );
}
