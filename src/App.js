import styles from "./css/App.module.css";

function App() {
  return (
    <main className={styles.main}>
      <div className={styles["sign-box"]}>
        <div className={styles["main-contents"]}>
          <h1 className="title">Welcome</h1>

          {/* 이메일 로그인 활성화시 */}
          <p>or use your email account</p>
          <form>
            <div>
              <input type="text" id="id" placeholder="ID" />
              <br></br>

              <input type="text" id="password" placeholder="PASSWORD" />
            </div>

            <button className="login-button">로그인</button>
            <div>
              {/* <FcGoogle className="icon" />
        <RiKakaoTalkFill className="icon" /> */}
            </div>
            <button>회원가입</button>
          </form>
        </div>
        <div className={styles["sub-contents"]}>
          <h1>Hello, Friend!</h1>
          <h4>Enter your personal details and start journey with us</h4>
          <button>SIGN UP</button>
        </div>
      </div>
    </main>
  );
}

export default App;
