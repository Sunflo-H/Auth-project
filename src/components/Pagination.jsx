import React, { useState } from "react";
import styles from "../css/Management.module.css";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const USER_PER_PAGE = 8;

export default function Pagination({ count, currentPage, onChange }) {
  const currentPages = getCurrentPages(currentPage);
  return (
    <div className={styles["page-box"]}>
      <div
        className={styles["page-btn"]}
        onClick={() => onChange(currentPage - 1)}
      >
        <MdOutlineKeyboardArrowLeft />
      </div>

      <ul className={styles["page-num-box"]}>
        {currentPages.map((page) => {
          return (
            <li
              className={`${styles["page-num"]} ${
                currentPage === page && styles.active
              } `}
              onClick={() => onChange(page)}
            >
              {page}
            </li>
          );
        })}
      </ul>
      <div
        className={styles["page-btn"]}
        onClick={() => onChange(currentPage + 1)}
      >
        <MdOutlineKeyboardArrowRight />
      </div>
    </div>
  );
}
const getCurrentPages = (currentPage) => {
  const firstPage = Math.floor((currentPage - 1) / 5) * 5 + 1;
  const currentPages = [
    firstPage,
    firstPage + 1,
    firstPage + 2,
    firstPage + 3,
    firstPage + 4,
  ];
  return currentPages;
};

const getMaxPage = (userNum) => {
  /**
   * * 회원수 100일때 MaxPage 구하기
   * (회원수 / 보여질 유저수) 올림!
   */

  let result = Math.ceil(userNum / USER_PER_PAGE);

  return result;
};
