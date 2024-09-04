import { useState, useEffect } from "react";
import styles from "./TopMenu.module.css";

const daysOfWeek = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "Пʼятниця",
  "Субота",
];

export default function TopMenu() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const dayOfWeek = daysOfWeek[dateTime.getDay()];
  const formattedDate = dateTime.toLocaleDateString("uk-UA", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const formattedTime = dateTime.toLocaleTimeString("uk-UA", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={styles.menu}>
      <div className={styles.dateTime}>
        {dayOfWeek}, {formattedDate} {formattedTime}
      </div>
    </div>
  );
}
