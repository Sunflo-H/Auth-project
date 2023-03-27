import React, { useState } from "react";
import Card from "./Card";
import styles from "../css/Management.module.css";

import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const USER_PER_PAGE = 8;
export default function Management() {
  const users = [];

  for (let i = 0; i < 100; i++) {
    users.push(i);
  }
  const [currentPage, setCurrentPage] = useState(1);
  const [isEdit, setIsEdit] = useState(false);
  const lastPage = Math.ceil(users.length / USER_PER_PAGE);
  const handleChangePage = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className={styles.position}>
      <div className={styles.main}>
        <ul className="ul">
          {getCurrentUsers(users, currentPage).map((item, i) => (
            <Card item={item} isEdit={isEdit} key={i} />
          ))}
        </ul>
        <Pagination
          currentPage={currentPage}
          lastPage={lastPage}
          onChange={handleChangePage}
        />
      </div>
      <Link to="/user/profile" className={styles.profile}>
        내 계정관리
      </Link>
      <div className={styles.edit} onClick={() => setIsEdit(true)}>
        수정하기
      </div>
    </div>
  );
}

const getCurrentUsers = (users, currentPage) => {
  const indexOfLastUser = currentPage * USER_PER_PAGE;
  const indexOfFirstUser = indexOfLastUser - USER_PER_PAGE;
  const result = users.slice(indexOfFirstUser, indexOfLastUser);
  return result;
};
