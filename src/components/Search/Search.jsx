import { useState } from "react";
import styles from "./Search.module.css";

export default function Search() {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <input
      type="search"
      value={query}
      onChange={handleInputChange}
      placeholder="Search..."
      className={styles.input}
    />
  );
}
