import Orders from "../../components/Orders/Orders";
import iconBtn from "../../assets/plus.svg";

import styles from "./Incoming.module.css";

export default function Incoming() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleBox}>
        <button className={styles.addBtn}>
          <img src={iconBtn} className={styles.iconBtn} alt="add button" />
        </button>
        <h3 className={styles.title}>
          Incoming / <span>25</span>
        </h3>
      </div>
      <Orders />
    </div>
  );
}
