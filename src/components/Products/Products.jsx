import PropTypes from "prop-types";

import trashIcon from "../../assets/trash.svg";
import styles from "./Products.module.css";
import PopUp from "../PopUp/PopUp";
import { useState } from "react";

export default function Products({ item }) {
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
        <div className={styles.titleProduct}>
          <h4>{item.type}</h4>
          <p>{item.serialNumber}</p>
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

Products.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    serialNumber: PropTypes.number.isRequired,
  }).isRequired,
};
