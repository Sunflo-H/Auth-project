import React from "react";
import Card from "./Card";
import styles from "../css/Management.module.css";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { Link } from "react-router-dom";

export default function Management() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className={styles.position}>
      <div className={styles.main}>
        <ul className="ul">
          {arr.map((item, i) => {
            if (i > 7) return;
            return <Card key={i} />;
          })}
        </ul>

        <div className={styles["page-box"]}>
          <div className={styles["page-btn"]}>
            <MdOutlineKeyboardDoubleArrowLeft />
          </div>
          <div className={styles["page-btn"]}>
            <MdOutlineKeyboardArrowLeft />
          </div>
          <ul className={styles["page-num-box"]}>
            <li className={styles["page-num"]}>1</li>
            <li className={styles["page-num"]}>2</li>
            <li className={styles["page-num"]}>3</li>
            <li className={styles["page-num"]}>4</li>
            <li className={styles["page-num"]}>5</li>
          </ul>
          <div className={styles["page-btn"]}>
            <MdOutlineKeyboardArrowRight />
          </div>
          <div className={styles["page-btn"]}>
            <MdOutlineKeyboardDoubleArrowRight />
          </div>
        </div>
      </div>
      <Link to="/user/profile" className={styles.profile}>
        내 계정관리
      </Link>
    </div>
  );
}
