import { Link, useNavigate } from "react-router-dom";
import styles from "../css/Login.module.css";
import { BiMessageCheck } from "react-icons/bi";
import { BsGoogle } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/user/profile");
  };

  const isNoId = false;

  if (isNoId) {
    return (
      <>
        <div className={styles.body}>
          <div className={styles.header}>
            <BiMessageCheck className={styles.icon} />
            <div className={styles.text}>Welcome Back!</div>
          </div>
          <div className={`${styles.main} ${styles.no}`}>
            <form
              className={styles.form}
              onSubmit={handleSubmit}
              action="/"
              method="GET"
            >
              <div className={styles["btn-box"]}>
                <button className={`${styles.oauth} ${styles.google}`}>
                  <FcGoogle className={styles["oauth-icon"]} />
                  <span>Google로 시작하기</span>
                </button>
                <button className={`${styles.oauth} ${styles.kakao}`}>
                  <RiKakaoTalkFill className={styles["oauth-icon"]} />
                  <span>카카오로 시작하기</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className={styles.body}>
        <div className={styles.header}>
          <BiMessageCheck className={styles.icon} />
          <div className={styles.text}>Welcome Back!</div>
        </div>
        <div className={styles.main}>
          <form
            className={styles.form}
            onSubmit={handleSubmit}
            action="/"
            method="GET"
          >
            <input
              className={styles.input}
              type="text"
              placeholder="Email address"
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Password"
            />

            <div className={styles["btn-box"]}>
              <button className={styles["login"]}>Sign in</button>

              <button className={`${styles.oauth} ${styles.google}`}>
                <FcGoogle className={styles["oauth-icon"]} />

                <span>Sign in with Google</span>
              </button>
              <button className={`${styles.oauth} ${styles.kakao}`}>
                <RiKakaoTalkFill className={styles["oauth-icon"]} />
                <span>Sign in with Kakao </span>
              </button>
            </div>
          </form>
        </div>
        <div className={styles["sign-box"]}>
          <span>Do you want to join us?</span>
          <Link to="/signup" className={styles["signup"]}>
            Sign up
          </Link>
        </div>
      </div>
    </>
  );
}
