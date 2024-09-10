import PropTypes from "prop-types";

import styles from "./Products.module.css";

export default function Products({ item }) {
  return (
    <li className={styles.productItem}>
      <div className={styles.pointProduct}></div>
      {item.type}
    </li>
  );
}

Products.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }).isRequired,
};
