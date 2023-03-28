import React, { useEffect, useState } from "react";
import styles from "../css/Card.module.css";
import { IoClose } from "react-icons/io5";

export default function Card({ item, isEdit, isAni_show }) {
  return (
    <div
      className={`${styles.card} ${isAni_show && styles["ani-show"]} ${
        isEdit && styles["ani-shake"]
      }`}
    >
      <div className={styles.circle}></div>
      {isEdit && <IoClose className={styles.delete} />}

      {isEdit ? (
        <>
          <img
            className={styles.image}
            src={`https://source.unsplash.com/random/${item}`}
          ></img>
          <div className={styles["info-box"]}>
            <div className={styles.name}>회원 {item}</div>
            <div className={styles.email}>user{item}@sample.com </div>
            {/* <div style={{ backgroundColor: "orange" }}>닉네임 </div> */}
          </div>
        </>
      ) : (
        <>
          <img
            className={styles.image}
            src={`https://source.unsplash.com/random/${item}`}
          ></img>
          <div className={styles["info-box"]}>
            <div className={styles.name}>회원 {item}</div>
            <div className={styles.email}>user{item}@sample.com </div>
            {/* <div style={{ backgroundColor: "orange" }}>닉네임 </div> */}
          </div>
        </>
      )}
    </div>
  );
}
