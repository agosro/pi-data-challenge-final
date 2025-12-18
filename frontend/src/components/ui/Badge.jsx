import { FileText, Settings, BookOpen } from "lucide-react";

const variants = {
  technical: {
    label: "Technical",
    icon: FileText,
    className: "bg-blue-100 text-blue-600",
  },
  system: {
    label: "Sistema",
    icon: Settings,
    className: "bg-green-100 text-green-600",
  },
};

export default function Badge({ type }) {
  const { label, icon: Icon, className } = variants[type];

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${className}`}>
      <Icon className="w-3 h-3" />
      {label}
    </span>
  );
}
