import settingsImg from "../../assets/settings.png";
import styles from "./Settings.module.css";

export default function Settings() {
  return (
    <div className={styles.settingPageWrapper}>
      <h3>Settings Page</h3>
      <img
        src={settingsImg}
        className={styles.settingImage}
        alt="setting image"
      />
    </div>
  );
}
