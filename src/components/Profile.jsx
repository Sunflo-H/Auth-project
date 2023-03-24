import React from "react";
import styles from "../css/Profile.module.css";

export default function Profile() {
  return (
    <div className={styles.position}>
      <div className={styles.main}>
        <div className={styles["image-box"]}>이미지</div>
        <div>이름</div>
        <div>이메일</div>
        <div style={{ backgroundColor: "orange" }}>닉네임</div>
        <div style={{ backgroundColor: "orange" }}>패스워드</div>
      </div>
    </div>
  );
}
