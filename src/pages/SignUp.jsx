import { useNavigate } from "react-router-dom";
import styles from "../css/SignUp.module.css";
import { BiMessageCheck } from "react-icons/bi";
import { BsGoogle } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";

export default function SignUp() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className={styles.position}>
      <div className={styles.header}>
        <BiMessageCheck className={styles.icon} />
        <div className={styles.text}>Sign Up!</div>
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
            type="email"
            placeholder="Email address"
            required
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            required
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Nickname"
            required
          />

          <div className={styles["btn-box"]}>
            <button className={`${styles.cancel}`}>
              <span>Cancel</span>
            </button>
            <button className={`${styles.signup}`}>
              <span>Sign Up</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
