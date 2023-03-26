import React, { useState } from "react";
import Card from "./Card";
import styles from "../css/Management.module.css";

import { Link } from "react-router-dom";
import Pagenation from "./Pagenation";

export default function Management() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className={styles.position}>
      <div className={styles.main}>
        <ul className="ul">
          {arr.map((item, i) => {
            if (i > 7) return;
            return <Card item={item} key={i} />;
          })}
        </ul>
        <Pagenation />
      </div>
      <Link to="/user/profile" className={styles.profile}>
        내 계정관리
      </Link>
    </div>
  );
}
