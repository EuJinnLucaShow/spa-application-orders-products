import { useEffect, useState } from "react";
import io from "socket.io-client";
import styles from "./ActiveSessions.module.css";

export default function ActiveSessions() {
  const [activeSessions, setActiveSessions] = useState(0);

  useEffect(() => {
    const socket = io("https://orders-products-backend.onrender.com", {
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
    <h5 className={styles.activeSession}>
      Active Sessions: <span>{activeSessions}</span>
    </h5>
  );
}
