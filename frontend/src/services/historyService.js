const API_URL = "http://127.0.0.1:8000";

export async function getSearchHistory (limit = 10) {
  const res = await fetch(`${API_URL}/history?limit=${limit}`);
  if (!res.ok) throw new Error("Error al traer historial");
  return res.json();
}
