import UserShield from "../../assets/user-shield.png";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.wrapper}>
      <img src={UserShield} className={styles.logoImg} alt="User Shield" />
      <p className={styles.logoText}>inventory</p>
    </div>
  );
}
