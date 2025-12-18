import { useEffect, useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import { getSearchHistory } from "../services/historyService";

export default function SearchHistory() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSearchHistory()
      .then(setHistory)
      .finally(() => setLoading(false));
  }, []);

  const getProductDisplay = (item) => {
    if (item.sistema) return item.sistema;
    if (item.subtipo === "fiscal") return "Impresora Fiscal";
    if (item.subtipo === "no_fiscal") return "Impresora No Fiscal";
    return "—";
  };

  return (
    <AppLayout>
      <h1 className="text-2xl font-bold mb-6">Historial de Búsquedas</h1>

      <div className="bg-white rounded-xl shadow p-6 overflow-x-auto">
        {loading ? (
          <p className="text-slate-500">Cargando historial...</p>
        ) : (
          <table className="w-full text-sm">
            <thead className="text-left text-slate-500 border-b">
              <tr>
                <th className="py-2">Fecha</th>
                <th>Pregunta</th>
                <th>Tipo de Documento</th>
                <th>Producto/Sistema</th>
                <th>Modelo</th>
              </tr>
            </thead>

            <tbody>
              {history.map(item => (
                <tr key={item.id} className="border-b">
                  <td className="py-3 whitespace-nowrap">
                    {new Date(item.created_at).toLocaleDateString()}
                  </td>

                  <td className="max-w-md truncate">
                    {item.question}
                  </td>

                  <td>
                    {item.tipo_documentacion ? (
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        item.tipo_documentacion === "sistema" 
                          ? "bg-blue-100 text-blue-700" 
                          : "bg-green-100 text-green-700"
                      }`}>
                        {item.tipo_documentacion === "sistema" ? "Sistema" : "Técnico"}
                      </span>
                    ) : (
                      <span className="text-slate-400">—</span>
                    )}
                  </td>

                  <td>
                    {getProductDisplay(item) !== "—" ? (
                      <span className="px-2 py-1 rounded bg-slate-100 text-slate-700 text-xs">
                        {getProductDisplay(item)}
                      </span>
                    ) : (
                      <span className="text-slate-400">—</span>
                    )}
                  </td>

                  <td>
                    {item.tipo_documentacion === "tecnica" && item.modelo ? (
                      <span className="px-2 py-1 rounded bg-purple-100 text-purple-700 text-xs font-medium">
                        {item.modelo}
                      </span>
                    ) : (
                      <span className="text-slate-400">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </AppLayout>
  );
}
