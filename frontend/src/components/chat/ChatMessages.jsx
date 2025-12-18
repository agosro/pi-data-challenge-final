import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import ChatLoader from "./ChatLoader";
import EmptyState from "./EmptyState";

export default function ChatMessages({ messages, loading }) {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  if (messages.length === 0 && !loading) {
    return <EmptyState />;
  }

  return (
    <div className="space-y-6">
      {messages.map((msg, i) => (
        <ChatMessage key={i} message={msg} />
      ))}

      {loading && <ChatLoader />}

      <div ref={endRef} />
    </div>
  );
}
