import React from "react";
import styles from "../css/Card.module.css";

export default function Card() {
  return (
    <div className={styles.main}>
      <div className={styles.image}>이미지</div>
      <div className={styles["info-box"]}>
        <div className={styles.name}>이름</div>
        <div>이메일 </div>
        <div style={{ backgroundColor: "orange" }}>닉네임 </div>
      </div>
    </div>
  );
}
