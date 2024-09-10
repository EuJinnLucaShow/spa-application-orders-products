import PropTypes from "prop-types";

import Products from "../Products/Products";
import closeIcon from "../../assets/close.svg";
import styles from "./ListProducts.module.css";
import ItemOrder from "../ItemOrder/ItemOrder";
import { useState } from "react";

export default function ListProducts({
  orders,
  openProduct,
  date,
  activeItem,
}) {
  const [currentProducts, setCarrentProducts] = useState(date);
  const [isActiveItem, setIsActiveItem] = useState(activeItem);

  return (
    <div className={styles.wrapper}>
      <button className={styles.closeBtn} onClick={() => openProduct()}>
        <img src={closeIcon} className={styles.closeIcon} alt="close icon" />
      </button>

      <ul className={styles.ordersList}>
        {orders.map((order, index) => (
          <ItemOrder
            key={index}
            order={order}
            optionProducts={(products) => setCarrentProducts(products)}
            activeItem={isActiveItem}
            isActiveItem={(id) => setIsActiveItem(id)}
          />
        ))}
      </ul>

      <div>
        <ul className={styles.productList}>
          <h3></h3>
          {currentProducts.map((item, index) => (
            <Products key={index} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

ListProducts.propTypes = {
  activeItem: PropTypes.string.isRequired,
  date: PropTypes.array.isRequired,
  orders: PropTypes.array.isRequired,
  openProduct: PropTypes.func.isRequired,
};
