import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { selectOrders } from "../../redux/selectors";
import { fetchOrders } from "../../redux/operations";
import Orders from "../../components/Orders/Orders";
import iconBtn from "../../assets/plus.svg";
import styles from "./Incoming.module.css";
import ListProducts from "../../components/ListProducts/ListProducts";
import PopUp from "../../components/PopUp/PopUp";

export default function Incoming() {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  const [openProducts, setOpenProducts] = useState(true);
  const [date, setDate] = useState([]);
  const [activeItem, setActiveItem] = useState("");
  const [ModalOpen, setModalOpen] = useState(false);

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
    <>
      <div className={styles.wrapper}>
        <div className={styles.titleBox}>
          <button className={styles.addBtn} onClick={() => setModalOpen(true)}>
            <img src={iconBtn} className={styles.iconBtn} alt="add button" />
          </button>
          <h3 className={styles.title}>
            Incoming / <span>{orders.length}</span>
          </h3>
        </div>
        {openProducts ? (
          <ul className={styles.ordersList}>
            {orders.map((order, index) => (
              <Orders
                key={index}
                order={order}
                openProduct={() => setOpenProducts(false)}
                optionProducts={(products) => setDate(products)}
                isActive={(id) => setActiveItem(id)}
              />
            ))}
          </ul>
        ) : (
          <ListProducts
            orders={orders}
            openProduct={() => setOpenProducts(true)}
            date={date}
            activeItem={activeItem}
          />
        )}
      </div>
      <PopUp isOpen={ModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
