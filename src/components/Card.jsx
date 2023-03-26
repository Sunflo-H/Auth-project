import React from "react";
import styles from "../css/Card.module.css";

export default function Card({ item }) {
  return (
    <div className={styles.main}>
      <img
        className={styles.image}
        src={`https://source.unsplash.com/random/${item}`}
      ></img>
      <div className={styles["info-box"]}>
        <div className={styles.name}>회원 {item}</div>
        <div>user{item}@sample.com </div>
        <div style={{ backgroundColor: "orange" }}>닉네임 </div>
      </div>
    </div>
  );
}
