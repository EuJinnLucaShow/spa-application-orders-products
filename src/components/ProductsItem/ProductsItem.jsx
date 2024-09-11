import PropTypes from "prop-types";

import trashIcon from "../../assets/trash.svg";
import styles from "./ProductsItem.module.css";
import PopUp from "../PopUp/PopUp";
import { useState } from "react";

export default function ProductsItem({ item }) {
  const [ModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <li className={styles.productItem}>
        <div className={styles.pointProduct}></div>
        <img
          src={item.photo}
          className={styles.imgProduct}
          alt="product image"
        />
        <h5 className={styles.titleProduct}>{item.title}</h5>
        <div className={styles.typeProduct}>
          <h4>{item.type}</h4>
          <p>{item.serialNumber}</p>
        </div>
        <div className={styles.guaranteeProduct}>
          <h5>Guarantee</h5>
          <p>
            <span>from </span>
            {item.guarantee.start.split(" ")[0]}
          </p>
          <p>
            <span>to </span>
            {item.guarantee.end.split(" ")[0]}
          </p>
        </div>
        <div className={styles.priceProduct}>
          <h5>Price</h5>
          <p>
            {item.price[0].value}
            <span> {item.price[0].symbol}</span>
          </p>
          <p>
            {item.price[1].value}
            <span> {item.price[1].symbol}</span>
          </p>
        </div>
        <p className={styles.accessible}>Accessible</p>
        <button className={styles.trashBtn} onClick={() => setModalOpen(true)}>
          <img
            src={trashIcon}
            className={styles.trashIcon}
            alt="trash button"
          />
        </button>
      </li>
      <PopUp isOpen={ModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

ProductsItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    serialNumber: PropTypes.number.isRequired,
    guarantee: PropTypes.object.isRequired,
    price: PropTypes.array.isRequired,
  }).isRequired,
};
