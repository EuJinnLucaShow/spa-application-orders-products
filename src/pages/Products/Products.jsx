import { useSelector } from "react-redux";
import { useState } from "react";

import ProductsItem from "../../components/ProductsItem/ProductsItem";
import { selectOrders } from "../../redux/selectors";
import iconBtn from "../../assets/plus.svg";
import styles from "./Products.module.css";
import PopUp from "../../components/PopUp/PopUp";

export default function Products() {
  const [ModalOpen, setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedType, setSelectedType] = useState("");
  const orders = useSelector(selectOrders);
  const allProducts = orders.flatMap((order) => order.products);

  const productTypes = [...new Set(allProducts.map((product) => product.type))];

  const filteredProducts = selectedType
    ? allProducts.filter((product) => product.type === selectedType)
    : allProducts;

  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentProducts = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleBox}>
        <button className={styles.addBtn} onClick={() => setModalOpen(true)}>
          <img src={iconBtn} className={styles.iconBtn} alt="add button" />
        </button>
        <h3 className={styles.title}>
          Products / <span>{filteredProducts.length}</span>
        </h3>
        <select
          className={styles.filterSelect}
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">All</option>
          {productTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <ul className={styles.productsList}>
        {currentProducts.map((product) => (
          <ProductsItem key={product.id} item={product} />
        ))}
      </ul>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                className={`${styles.pageButton} ${
                  currentPage === pageNumber ? styles.active : ""
                }`}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            )
          )}
        </div>
      )}

      <PopUp isOpen={ModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
