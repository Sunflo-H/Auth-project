import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link to="/user/profile" className={styles["nav-btn"]}>
        Profile
      </Link>
      <Link to="/user/Management" className={styles["nav-btn"]}>
        Management
      </Link>
    </nav>
  );
}
