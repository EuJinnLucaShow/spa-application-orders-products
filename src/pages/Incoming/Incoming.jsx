import styles from "./Incoming.module.css";
import Orders from "../../components/Orders/Orders";

export default function Incoming() {
  return (
    <div className={styles.wrapper}>
      <div>
        <button>+</button>
        <h3>Incoming / 25</h3>
      </div>
      <Orders />
    </div>
  );
}
