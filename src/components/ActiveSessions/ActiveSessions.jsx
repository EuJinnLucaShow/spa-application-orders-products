import { useEffect, useState } from "react";
import io from "socket.io-client";

export default function ActiveSessions() {
  const [activeSessions, setActiveSessions] = useState(0);

  useEffect(() => {
      const socket = io("http://localhost:3000/", {
      transports: ["websocket", "polling"],
      withCredentials: true,
    });

    socket.on("sessionUpdate", (count) => {
      setActiveSessions(count);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <h3>
      Active Sessions: <span>{activeSessions}</span>
    </h3>
  );
}
