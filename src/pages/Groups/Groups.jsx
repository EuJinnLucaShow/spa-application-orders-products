import groupImg from "../../assets/ProductGroup.jpeg";
import styles from "./Groups.module.css";

export default function Groups() {
  return (
    <div className={styles.groupsPageWrapper}>
      <h3>Groups Page</h3>
      <img src={groupImg} className={styles.groupsImage} alt="groups image" />
    </div>
  );
}
