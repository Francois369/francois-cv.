import styles from "./Login.module.css";
import { useContext } from "react";
import AuthContext from "../../../store/auth-context";

function Login(props) {
  const ctx = useContext(AuthContext);

  function clickHandler() {
    console.log(ctx);
  }
  return (
    <div className={styles["login-form"]}>
      <div className={styles["control"]}>
        <label htmlFor="ticketNumber">
          <i>
            <strong>User Name:</strong>
          </i>
        </label>
        <input
          //   type="text"
          id="userName"
          //   name="ticketNumber"
          //   required
          //   minLength="4"
          //   maxLength="20"
          //   size="20"
          //   onChange={""}
        ></input>
      </div>
      <br />

      <div className={styles["control"]}>
        <label htmlFor="client">
          <i>
            <strong>Password:</strong>
          </i>
        </label>
        <input
          //   type="text"
          id="password"
          type="password"
          //   name="client"
          //   required
          //   minLength="4"
          //   maxLength="20"
          //   size="20"
          //   onChange={""}
        ></input>
      </div>
      <br />
      <button onClick={ctx.onLogIn}>
        <strong>Log In</strong>
      </button>
    </div>
  );
}

export default Login;
