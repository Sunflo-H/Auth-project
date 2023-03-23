import { useNavigate } from "react-router-dom";
import styles from "../css/Login.module.css";
import { BiMessageCheck } from "react-icons/bi";

export default function Login() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/user/profile");
  };
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <BiMessageCheck className={styles.icon} />
        <div className={styles.text}>Welcome Back!</div>
      </div>
      <div className={styles.main}>
        <form className={styles["btn-box"]} onSubmit={handleSubmit}>
          <button className={styles["login-btn"]}>구글 로그인</button>
          <button className={styles["login-btn"]}>카카오 로그인</button>
        </form>
      </div>
    </div>
  );
}
