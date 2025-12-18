import { Loader2 } from "lucide-react";

export default function ChatLoader() {
  return (
    <div className="flex items-center gap-2 text-slate-500 text-sm">
      <Loader2 className="w-4 h-4 animate-spin" />
      Thinking…
    </div>
  );
}
