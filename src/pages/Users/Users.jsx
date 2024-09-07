import usersImage from "../../assets/users.png";
import styles from "./Users.module.css";

export default function Users() {
  return (
    <div className={styles.userPageWrapper}>
      <h3>Users Page</h3>
      <img src={usersImage} className={styles.usersImage} alt="usrers image" />
    </div>
  );
}
