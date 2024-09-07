import { NavLink, useLocation } from "react-router-dom";
import styles from "./NavigationMenu.module.css";
import { useState, useEffect } from "react";
import portret from "../../assets/portrait.jpg";

import Incoming from "../../pages/Incoming/Incoming";
import Groups from "../../pages/Groups/Groups";
import Products from "../../pages/Products/Products";
import Users from "../../pages/Users/Users";
import Settings from "../../pages/Settings/Settings";

const componentsMap = {
  Incoming,
  Groups,
  Products,
  Users,
  Settings,
};

const navList = ["Incoming", "Groups", "Products", "Users", "Settings"];

export default function NavigationMenu() {
  const location = useLocation();

  const [selectedComponent, setSelectedComponent] = useState(() => {
    const currentPath = location.pathname.split("/").pop();
    return (
      navList.find((tabId) => tabId.toLowerCase() === currentPath) || navList[0]
    );
  });

  useEffect(() => {
    const currentPath = location.pathname.split("/").pop();
    const foundComponent = navList.find(
      (tabId) => tabId.toLowerCase() === currentPath
    );
    if (foundComponent) {
      setSelectedComponent(foundComponent);
    }
  }, [location]);

  const ComponentToRender = componentsMap[selectedComponent];

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperNavMenu}>
        <div
          className={styles.avatar}
          style={{
            backgroundImage: `url(${portret})`,
            backgroundSize: " cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <div>
          <nav className={styles.navMenu}>
            <ul className={styles.navList}>
              {navList.map((tabId) => (
                <NavLink
                  to={`/${encodeURIComponent(tabId.toLowerCase())}`}
                  key={tabId}
                  className={selectedComponent === tabId ? styles.active : ""}
                  onClick={() => setSelectedComponent(tabId)}
                  state={[]}
                >
                  {({ isActive }) => (
                    <li
                      style={{
                        textDecorationLine: isActive ? "underline" : "",
                        textDecorationColor: isActive ? "green" : "",
                      }}
                    >
                      {tabId}
                    </li>
                  )}
                </NavLink>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.wrapperContent}>
        <ComponentToRender />
      </div>
    </div>
  );
}
