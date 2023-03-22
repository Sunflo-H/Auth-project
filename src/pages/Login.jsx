import { useNavigate } from "react-router-dom";
import styles from "../css/Login.module.css";

export default function Login() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/user/profile");
  };
  return (
    <div className={styles.main}>
      <h1 className={styles.text}>Welcome!</h1>
      <form className={styles["btn-box"]} onSubmit={handleSubmit}>
        <button className={styles["login-btn"]}>구글 로그인</button>
        <button className={styles["login-btn"]}>카카오 로그인</button>
      </form>
    </div>
  );
}
