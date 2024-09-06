import styles from "./Incoming.module.css";
import Orders from "../../components/Orders/Orders";

export default function Incoming() {
  return (
    <div className={styles.wrapper}>
      <button>+</button>
      <h3>Incoming / 24</h3>
      <Orders />
    </div>
  );
}
