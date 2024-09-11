import PropTypes from "prop-types";
import burgermenu from "../../assets/menu.svg";
import trashIcon from "../../assets/trash.svg";
import styles from "./OrdersItem.module.css";
import { useState } from "react";
import Modal from "../Modal/Modal";

export default function OrdersItem({
  order,
  openProduct,
  optionProducts,
  isActive,
}) {
  const [ModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <li className={styles.orderItem}>
        <p className={styles.orderName}>{order.title}</p>
        <button
          className={styles.menubtn}
          onClick={() => {
            openProduct();
            optionProducts(order.products);
            isActive(order._id);
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
        <div className={styles.orderPrice}>
          <p>
            {order.price} <span>{order.symbol}</span>
          </p>
        </div>
        <button className={styles.trashBtn} onClick={() => setModalOpen(true)}>
          <img
            src={trashIcon}
            className={styles.trashIcon}
            alt="trash button"
          />
        </button>
      </li>
      <Modal
        isOpen={ModalOpen}
        onClose={() => setModalOpen(false)}
        order={order}
      />
    </>
  );
}

OrdersItem.propTypes = {
  isActive: PropTypes.func.isRequired,
  optionProducts: PropTypes.func.isRequired,
  openProduct: PropTypes.func.isRequired,
  order: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    symbol: PropTypes.string,
    products: PropTypes.array,
  }).isRequired,
};
