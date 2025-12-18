import { Bot, User, FileText, Image as ImageIcon } from "lucide-react";

export default function ChatMessage({ message }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && <Bot className="w-6 h-6 text-primary mt-1" />}

      <div
        className={`max-w-[70%] rounded-xl p-4 text-sm ${
          isUser
            ? "bg-primary text-white"
            : "bg-slate-100 text-slate-800"
        }`}
      >
        <p className="whitespace-pre-line">{message.content}</p>

        {/* Sources */}
        {message.sources?.length > 0 && (
          <div className="mt-4">
            <div className="flex items-center gap-2 mb-2 text-xs font-medium text-slate-600">
              <FileText className="w-4 h-4" />
              Sources
            </div>
            <ul className="text-xs text-slate-600 space-y-1">
              {message.sources.map((src, i) => (
                <li key={i}>
                  {src.document} – page {src.page}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Images */}
        {message.images?.length > 0 && (
          <div className="mt-4">
            <div className="flex items-center gap-2 mb-2 text-xs font-medium text-slate-600">
              <ImageIcon className="w-4 h-4" />
              Images
            </div>

            <div className="grid grid-cols-2 gap-2">
              {message.images.map((img, i) => (
                <img
                  key={i}
                  src={`http://127.0.0.1:8000/static/${img}`}
                  alt="Manual"
                  className="rounded-lg border"
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {isUser && <User className="w-6 h-6 text-slate-400 mt-1" />}
    </div>
  );
}
