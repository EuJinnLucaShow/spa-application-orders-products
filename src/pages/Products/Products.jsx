import { useSelector } from "react-redux";
import { useState } from "react";

import ProductsItem from "../../components/ProductsItem/ProductsItem";
import { selectOrders } from "../../redux/selectors";
import iconBtn from "../../assets/plus.svg";
import styles from "./Products.module.css";
import PopUp from "../../components/PopUp/PopUp";

export default function Products() {
  const [ModalOpen, setModalOpen] = useState(false);
  const orders = useSelector(selectOrders);
  const allProducts = orders.flatMap((order) => order.products);

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleBox}>
        <button className={styles.addBtn} onClick={() => setModalOpen(true)}>
          <img src={iconBtn} className={styles.iconBtn} alt="add button" />
        </button>
        <h3 className={styles.title}>
          Products / <span>{allProducts.length}</span>
        </h3>
      </div>
      <ul className={styles.productsList}>
        {allProducts.map((product) => (
          <ProductsItem key={product.id} item={product} />
        ))}
      </ul>
      <PopUp isOpen={ModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
