import styles from "./Login.module.css";
import Modal from "./Modal";
function Login(props) {
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
        //   id="ticketNumber"
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
        //   id="client"
        //   name="client"
        //   required
        //   minLength="4"
        //   maxLength="20"
        //   size="20"
        //   onChange={""}
        ></input>
      </div>
      <br />
      <button>
        <strong>Log In</strong>
      </button>
    </div>
  );
}

export default Login;
