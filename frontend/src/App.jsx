import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import AskAI from "./pages/AskAI";
import SearchHistory from "./pages/SearchHistory";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/ask" element={<AskAI />} />
      <Route path="/history" element={<SearchHistory />} />

      {/* fallback */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
