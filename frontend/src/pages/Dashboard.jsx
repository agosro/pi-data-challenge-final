import { useEffect, useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import IconCircle from "../components/ui/IconCircle";
import { getSearchHistory } from "../services/historyService";

import {
  MessageSquare,
  Clock,
  FileText,
  Settings,
  BookOpen,
  Search
} from "lucide-react";

export default function Dashboard() {
  const [recentSearches, setRecentSearches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSearchHistory(3)
      .then(setRecentSearches)
      .finally(() => setLoading(false));
  }, []);

  const formatTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now - date;
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInHours < 1) return "hace menos de 1 hora";
    if (diffInHours < 24) return `hace ${diffInHours} hora${diffInHours > 1 ? 's' : ''}`;
    if (diffInDays === 1) return "hace 1 día";
    if (diffInDays < 7) return `hace ${diffInDays} días`;
    return date.toLocaleDateString();
  };

  return (
    <AppLayout>
      {/* Header */}
      <h1 className="text-2xl font-bold mb-2">Bienvenido!</h1>
      <p className="text-slate-600 mb-6">
        Accede a la documentación, hace preguntas y encontra la información que necesites.
      </p>

      {/* Cards principales */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Ask AI */}
        <div className="bg-card p-6 border rounded-xl shadow-card flex gap-4 items-start">
          <IconCircle icon={MessageSquare} />

          <div>
            <h3 className="font-semibold text-lg">Preguntar a la IA</h3>
            <p className="text-slate-500 text-sm mb-2">
              Consulta la documentación usando lenguaje natural
            </p>
            <a href="/ask" className="text-primary font-medium text-sm">
              Iniciar una conversación →
            </a>
          </div>
        </div>

        {/* Search History */}
        <div className="bg-card p-6 border rounded-xl shadow-card flex gap-4 items-start">
          <IconCircle icon={Clock} />

          <div>
            <h3 className="font-semibold text-lg">Historial de Búsqueda</h3>
            <p className="text-slate-500 text-sm mb-2">
              Ver y revisar tus consultas anteriores
            </p>
            <a href="/history" className="text-primary font-medium text-sm">
              Ver historial →
            </a>
          </div>
        </div>
      </div>

      {/* About DocuAssist AI */}
      <div className="bg-card p-6 border rounded-xl shadow-card mb-8">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Acerca de DocuAssist AI</h3>
        </div>

        <p className="text-slate-600 text-sm mb-6">
          DocuAssist AI es tu asistente inteligente de documentación impulsado por
          tecnología avanzada de IA. Utiliza Generación Aumentada por Recuperación (RAG)
          para buscar en documentación técnica y manuales del sistema
          para proporcionarte respuestas precisas y contextuales.
        </p>

        <div className="grid grid-cols-3 gap-6">
          <div className="flex gap-3">
            <IconCircle
              icon={FileText}
              bg="bg-blue-100"
              color="text-blue-600"
              size="w-8 h-8"
            />
            <div>
              <p className="font-medium text-sm">Documentación Técnica</p>
              <p className="text-xs text-slate-500">
                Referencias de API, guías de integración
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <IconCircle
              icon={Settings}
              bg="bg-green-100"
              color="text-green-600"
              size="w-8 h-8"
            />
            <div>
              <p className="font-medium text-sm">Manuales del Sistema</p>
              <p className="text-xs text-slate-500">
                Configuración, requisitos
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Searches */}
      <div className="bg-card p-6 border rounded-xl shadow-card">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-primary" />
            <h3 className="font-semibold">Búsquedas Recientes</h3>
          </div>

          <a href="/history" className="text-sm text-primary font-medium">
            Ver todas
          </a>
        </div>

        {loading ? (
          <p className="text-sm text-slate-500">Cargando búsquedas...</p>
        ) : recentSearches.length === 0 ? (
          <p className="text-sm text-slate-500">Aún no has realizado búsquedas</p>
        ) : (
          <ul className="space-y-3 text-sm">
            {recentSearches.map((search) => (
              <li key={search.id} className="p-3 rounded-lg bg-slate-50">
                <p className="font-medium line-clamp-2">
                  {search.question}
                </p>
                <p className="text-xs text-slate-500">
                  {formatTimeAgo(search.created_at)}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </AppLayout>
  );
}
