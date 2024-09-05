import styles from "./NavigationMenu.module.css";

export default function NavigationMenu() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperNavMenu}>
        <div className={styles.avatar}></div>
        <nav>
          <ul>
            <li>Arrival</li>
            <li>Groups</li>
            <li>Products</li>
            <li>Users</li>
            <li>Settings</li>
          </ul>
        </nav>
      </div>
      <div className={styles.wrapperContent}>SelectedComponent</div>
    </div>
  );
}
