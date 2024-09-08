import ActiveSessions from "../ActiveSessions/ActiveSessions";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import TopMenu from "../TopMenu/TopMenu";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <div>
      <header className={styles.header}>
        <Logo />
        <Search />
        <TopMenu />
        <ActiveSessions />
      </header>
    </div>
  );
}
