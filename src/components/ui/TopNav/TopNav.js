import styles from "./TopNav.module.css";
import React from "react";
import { useContext } from "react";
import { FaReact } from "react-icons/fa";
import AuthContext from "../../../store/auth-context";

const TopNav = () => {
  const ctx = useContext(AuthContext);

  return (
    <div className={styles["topnav"]}>
      <h1 className={styles["topnav-heading"]}>Francois van der Walt</h1>
      <div className={styles["topnav-button"]} onClick={ctx.onLogOut}>
        <FaReact className={styles["topnav-icon"]} /> <strong>Log Out</strong>
      </div>
    </div>
  );
};

export default TopNav;
