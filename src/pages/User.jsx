import React from "react";
import { Outlet } from "react-router-dom";
import styles from "../css/User.module.css";
import Nav from "../components/Nav";

export default function user() {
  return (
    <div className={styles.main}>
      <Nav />
      <Outlet />
    </div>
  );
}
