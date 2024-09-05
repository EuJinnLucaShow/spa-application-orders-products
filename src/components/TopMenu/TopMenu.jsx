import { useState, useEffect } from "react";
import clock from "../../assets/clock.png";
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
    month: "short",
    day: "numeric",
  });

  const capitalizedDate = formattedDate.replace(/(^|\s)(\S)/g, (match) =>
    match.toUpperCase()
  );

  const year = dateTime.getFullYear();

  const formattedTime = dateTime.toLocaleTimeString("uk-UA", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={styles.menu}>
      <div className={styles.dateTime}>
        <div>{dayOfWeek}</div>
        {capitalizedDate} {year}{" "}
        <img src={clock} className={styles.clock} alt="image clock" />
        {formattedTime}
      </div>
    </div>
  );
}
