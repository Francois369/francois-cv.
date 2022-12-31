import { Fragment } from "react";
import classes from "../custom/custom.module.css";
import styles from "./Education.module.css";
import Badge from "../components/ui/Badge/Badge";
import Card from "../components/ui/Card/Card.js";
import { FaGraduationCap } from "react-icons/fa";
function Education() {
  return (
    <Fragment>
      <Badge>Education</Badge>
      <Card>
        <h6 className={classes["my-headings"]}>
          <FaGraduationCap className={styles["education-icon"]} />
          <b>Bachelors of commerce Honours Logistics Management </b>
          <br /> 2010
          <br />
          University of Johannesburg
        </h6>
        <p className={classes["my-paragraph"]}>
          <b>Major Subjects: </b>
          <i>Supply Chain Management and Strategic Logistics Management.</i>
          <br />
          <b>Other Subjects:</b> <i>Quantitative Techniques</i>
        </p>
        <br />
        <h6 className={classes["my-paragraph"]}>
          <FaGraduationCap className={styles["education-icon"]} />
          <b>Bachelors of commerce Logistics Management</b>
          <br /> 2007 - 2009
          <br />
          University of Johannesburg
        </h6>
        <p className={classes["my-paragraph"]}>
          <b>Major Subjects:</b>{" "}
          <i>Logistics Management and Marketing Management.</i>
          <br />
          <b>Other Subjects:</b>{" "}
          <i>Transport Economics, Accounting, Business Management</i>
        </p>
      </Card>
    </Fragment>
  );
}

export default Education;
