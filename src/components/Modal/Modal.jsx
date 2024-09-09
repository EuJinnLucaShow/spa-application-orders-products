import { useEffect } from "react";
import PropTypes from "prop-types";

import closeIcon from "../../assets/close.svg";
import styles from "./Modal.module.css";

export default function Modal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";

      const handleEscape = (event) => {
        if (event.key === "Escape") {
          onClose();
        }
      };

      window.addEventListener("keydown", handleEscape);

      return () => {
        document.body.style.overflow = "auto";
        window.removeEventListener("keydown", handleEscape);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeBtn}>
          <img src={closeIcon} className={styles.closeIcon} alt="close icon" />
        </button>

        <h4 className={styles.titleModal}>
          Are you sure you want to delete this product?
        </h4>
        <div className={styles.contentModal}></div>
        <div className={styles.btnSectionModal}></div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
