import UserShield from "../../assets/user-shield.png";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img src={UserShield} style={{ width: "50px" }} alt="User Shield" />
      <p className={styles.logoText}>invertory</p>
    </div>
  );
}
