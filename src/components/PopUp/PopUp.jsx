import { useEffect } from "react";
import PropTypes from "prop-types";

import closeIcon from "../../assets/close.svg";
import styles from "./PopUp.module.css";

export default function PopUp({ isOpen, onClose }) {
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
        <h4 className={styles.titleModal}>Functionality was not delivered</h4>
      </div>
    </div>
  );
}

PopUp.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
