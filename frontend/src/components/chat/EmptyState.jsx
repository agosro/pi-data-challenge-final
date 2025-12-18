import { Sparkles } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center text-slate-500">
      <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
        <Sparkles className="w-6 h-6 text-primary" />
      </div>

      <h2 className="text-lg font-semibold text-slate-800 mb-1">
        Como puedo ayudarte?
      </h2>

      <p className="text-sm max-w-md">
        Preguntame cualquier cosa sobre nuestra documentación. Puedo ayudarte a encontrar información
        sobre configuración, solución de problemas, mejores prácticas y más.
      </p>
    </div>
  );
}
