import { useEffect } from "react";
import PropTypes from "prop-types";

import { deleteOrder, fetchOrders } from "../../redux/operations";
import deleteTrashIcon from "../../assets/delete-trash.svg";
import closeIcon from "../../assets/close.svg";
import styles from "./Modal.module.css";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

export default function Modal({ isOpen, onClose, order }) {
  const dispatch = useDispatch();

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

  const deleteOrders = (_id) => {
    dispatch(deleteOrder(_id))
      .then(() => dispatch(fetchOrders()))
      .then(() => toast.info("The order was deleted."))
      .catch(() => toast.error("Failed to delete the order."));
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeBtn}>
          <img src={closeIcon} className={styles.closeIcon} alt="close icon" />
        </button>

        <h4 className={styles.titleModal}>
          Are you sure you want to delete this order?
        </h4>
        <div className={styles.contentModal}>{order.title}</div>
        <div className={styles.btnSectionModal}>
          <button onClick={onClose} className={styles.cancelBtn}>
            CANCEL
          </button>
          <button
            className={styles.deleteBtn}
            onClick={() => deleteOrders(order._id)}
          >
            <img
              src={deleteTrashIcon}
              className={styles.deleteTrashIcon}
              alt="delete trash icon"
            />
            <span>DELETE</span>
          </button>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  order: PropTypes.object.isRequired,
};
