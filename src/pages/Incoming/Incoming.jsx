import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { selectOrders } from "../../redux/selectors";
import { fetchOrders } from "../../redux/operations";
import Orders from "../../components/Orders/Orders";
import iconBtn from "../../assets/plus.svg";
import styles from "./Incoming.module.css";

export default function Incoming() {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);

  useEffect(() => {
    toast.promise(dispatch(fetchOrders()), {
      pending: "Orders list is pending",
      success:
        orders.length === 0
          ? "Orders list empty 😒"
          : "Orders list received 👌",
      error: "Orders list failed 🤯",
    });
  }, [dispatch, orders.length]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleBox}>
        <button className={styles.addBtn}>
          <img src={iconBtn} className={styles.iconBtn} alt="add button" />
        </button>
        <h3 className={styles.title}>
          Incoming / <span>{orders.length}</span>
        </h3>
      </div>
      <ul className={styles.ordersList}>
        {orders.map((order, index) => (
          <Orders key={index} order={order} />
        ))}
      </ul>
    </div>
  );
}
