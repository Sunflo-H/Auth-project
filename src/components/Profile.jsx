import React from "react";
import styles from "../css/Profile.module.css";

export default function Profile() {
  return (
    <div>
      <div>이미지</div>
      <div>이름</div>
      <div className={styles.main}>이메일</div>
      <div className={styles.main} style={{ backgroundColor: "orange" }}>
        닉네임
      </div>
      <div className={styles.main} style={{ backgroundColor: "orange" }}>
        패스워드
      </div>
    </div>
  );
}
