import React, { useState } from "react";
import styles from "../css/Management.module.css";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const USER_PER_PAGE = 8;

export default function Pagination({ currentPage, lastPage, onChange }) {
  const currentPages = getCurrentPages(currentPage, lastPage);

  return (
    <div className={styles["page-box"]}>
      <div
        className={styles["page-btn"]}
        onClick={() => {
          if (currentPage === 1) return;
          onChange(currentPage - 1);
        }}
      >
        <MdOutlineKeyboardDoubleArrowLeft />
      </div>
      <div
        className={styles["page-btn"]}
        onClick={() => {
          if (currentPage === 1) return;
          onChange(currentPage - 1);
        }}
      >
        <MdOutlineKeyboardArrowLeft />
      </div>

      <ul className={styles["page-num-box"]}>
        {currentPages.map((page, i) => {
          return (
            <li
              className={`${styles["page-num"]} ${
                currentPage === page && styles.active
              } `}
              onClick={() => onChange(page)}
              key={i}
            >
              {page}
            </li>
          );
        })}
      </ul>
      <div
        className={styles["page-btn"]}
        onClick={() => {
          if (currentPage === lastPage) return;
          onChange(currentPage + 1);
        }}
      >
        <MdOutlineKeyboardArrowRight />
      </div>
      <div
        className={styles["page-btn"]}
        onClick={() => {
          if (currentPage === 1) return;
          onChange(currentPage + 1);
        }}
      >
        <MdOutlineKeyboardDoubleArrowRight />
      </div>
    </div>
  );
}
const getCurrentPages = (currentPage, lastPage) => {
  const firstPage = Math.floor((currentPage - 1) / 5) * 5 + 1;
  const currentPages = [];
  console.log(firstPage);
  for (let i = 0; i < 5; i++) {
    if (firstPage + i > lastPage) break;
    else currentPages.push(firstPage + i);
  }

  return currentPages;
};
