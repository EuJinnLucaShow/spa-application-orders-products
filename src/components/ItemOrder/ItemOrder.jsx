import PropTypes from "prop-types";
import burgermenu from "../../assets/menu.svg";
import greaterThan from "../../assets/greater-than.svg";
import styles from "./ItemOrder.module.css";

export default function ItemOrder({
  order,
  optionProducts,
  activeItem,
  isActiveItem,
}) {
  const isActive = activeItem === order._id;

  return (
    <li className={styles.orderItem}>
      <button
        className={styles.menubtn}
        onClick={() => {
          optionProducts(order.products);
          isActiveItem(order._id);
        }}
      >
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
      {isActive && (
        <div className={styles.greaterThan}>
          <img
            src={greaterThan}
            className={styles.greaterThanIcon}
            alt="Greater-Than icon"
          />
        </div>
      )}
    </li>
  );
}

ItemOrder.propTypes = {
  activeItem: PropTypes.string.isRequired,
  isActiveItem: PropTypes.func,
  optionProducts: PropTypes.func.isRequired,
  order: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    products: PropTypes.array.isRequired,
  }).isRequired,
};
