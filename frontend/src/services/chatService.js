const API_URL = "http://127.0.0.1:8000/chat";

export async function sendQuestion(question, filters = {}) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // CORRECCIÓN: Usamos '...filters' para aplanar el objeto
    // Genera: { "question": "...", "sistema": "...", "marca": "..." }
    body: JSON.stringify({ question, ...filters }), 
  });

  if (!response.ok) throw new Error("Error con la solicitud al servicio de IA");
  return response.json();
}