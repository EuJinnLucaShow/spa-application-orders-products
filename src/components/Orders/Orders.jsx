import PropTypes from "prop-types";

import burgermenu from "../../assets/menu.svg";
import trashIcon from "../../assets/trash.svg";
import styles from "./Orders.module.css";

export default function Orders({ order }) {
  return (
    <li className={styles.orderItem}>
      <p className={styles.orderName}>{order.title}</p>
      <button className={styles.menubtn}>
        <img src={burgermenu} className={styles.menuIcon} alt="menu" />
      </button>

      <div className={styles.orderItemQuantity}>
        <span>{order.products.length}</span>
        <p>orders</p>
      </div>
      <div className={styles.orderDate}>
        <p>01 / 12</p>
        <p>06 / Apr / 2017</p>
      </div>
      <div className={styles.orderPrice}>
        <p>
          {order.price} <span>{order.symbol}</span>
        </p>
      </div>
      <button className={styles.trashBtn}>
        <img src={trashIcon} className={styles.trashIcon} alt="trash button" />
      </button>
    </li>
  );
}

Orders.propTypes = {
  order: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    symbol: PropTypes.string,
    products: PropTypes.array,
  }).isRequired,
};
