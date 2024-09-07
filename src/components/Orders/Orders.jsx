import burgermenu from "../../assets/menu.svg";
import trashIcon from "../../assets/trash.svg";
import styles from "./Orders.module.css";

export default function Orders() {
  return (
    <li className={styles.orderItem}>
      <p className={styles.orderName}>Orders</p>
      <button className={styles.menubtn}>
        <img src={burgermenu} className={styles.menuIcon} alt="menu" />
      </button>

      <div className={styles.orderItemQuantity}>
        <span>23</span>
        <p>Orders</p>
      </div>
      <div className={styles.orderDate}>
        <p>01 / 12</p>
        <p>06 / Apr / 2017</p>
      </div>
      <div className={styles.orderPrice}>
        <p>250000 UAH</p>
      </div>
      <button className={styles.trashBtn}>
        <img src={trashIcon} className={styles.trashIcon} alt="trash button" />
      </button>
    </li>
  );
}
