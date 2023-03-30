import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/Profile.module.css";
import { BsPencilFill } from "react-icons/bs";
import { MdAdminPanelSettings } from "react-icons/md";
import { BsFillShieldFill, BsFillKeyFill } from "react-icons/bs";
import { RiShieldKeyholeFill, RiKeyFill } from "react-icons/ri";
import { MdAutorenew, MdLogout } from "react-icons/md";

export default function Profile() {
  const [isAdmin, setIsAdmin] = useState(true);
  let isNoId = true;
  const [isEdit, setIsEdit] = useState();
  const [inputs, setInputs] = useState({
    name: "도지",
    email: "doge@google.com",
  });

  const handleClick = (e) => {
    const type = e.target.dataset.type;
    setIsEdit(type);
  };
  const handleKeyDown = (e) => {
    if (e.code !== "Enter") return;
    setIsEdit("");
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({ ...inputs, [name]: value });
  };
  return (
    <div className={styles.position}>
      <div className={styles.main}>
        <div className={styles.circle}></div>
        {isAdmin && (
          <div className={styles.admin}>
            <RiKeyFill className={styles["admin-icon"]} />
            Admin
          </div>
        )}

        <img className={styles.image} src="/dog.png" />

        <div className={styles.info}>
          {isEdit === "name" ? (
            <input
              type="text"
              name="name"
              value={inputs.name}
              onKeyDown={handleKeyDown}
              onChange={handleChange}
            />
          ) : (
            <span
              className={styles.name}
              onClick={handleClick}
              data-type="name"
            >
              {inputs.name}
              <BsPencilFill className={styles.pen} />
            </span>
          )}
          <br />
          {isEdit === "email" ? (
            <input
              type="text"
              name="email"
              value={inputs.email}
              onKeyDown={handleKeyDown}
              onChange={handleChange}
            />
          ) : (
            <span
              className={styles.email}
              onClick={handleClick}
              data-type="email"
            >
              {inputs.email}
              <BsPencilFill className={styles.pen} />
            </span>
          )}
        </div>
      </div>
      <Link to="/" className={styles.signout}>
        Sign out
      </Link>
      {isAdmin && (
        <Link to="/user/management" className={styles.management}>
          Management <MdAutorenew className={styles.icon} />
        </Link>
      )}
    </div>
  );
}
