import burgermenu from "../../assets/menu.svg";
import trashIcon from "../../assets/trash.svg";
import styles from "./Orders.module.css";

export default function Orders() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.orderName}>Orders</p>
      <button className={styles.menubtn}>
        <img src={burgermenu} className={styles.menupng} alt="menu" />
      </button>

      <div className={styles.quantity}>
        <span>23</span>
        <p>Orders</p>
      </div>
      <div>
        <p>01 / 12</p>
        <p>06 / Apr / 2017</p>
      </div>
      <div>
        <p>250000 UAH</p>
      </div>
      <button className={styles.trashBtn}>
        <img src={trashIcon} className={styles.trashIcon} alt="trash button" />
      </button>
    </div>
  );
}
