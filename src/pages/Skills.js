import { Fragment } from "react";
import Card from "../components/ui/Card/Card";
import Badge from "../components/ui/Badge/Badge";
import classes from "../custom/custom.module.css";
import styles from "./Skills.module.css";
import { FaReact } from "react-icons/fa";

const Skills = () => {
  const skillsself = [
    "5 years Management information systems experience regarding development and maintenance ",
    "5 years General Programming experience surrounding Management Information Systems.",
    "5 years experience in eliciting requirement for System end Users and communicating surrounding implementation and delivery.",
    "5 years experience in the project lifecycle of Management Information Systems",
    "2 years experience in successfully managing business operations with large staff compliments (Unrelated industry)",
    "SQL - Extracting data - writing reports - creating tables for custom development - updating of data",
    "SSRS - SQL Server Reporting Service",
    "SAP Chrystal Reporting (Preferred over SSRS)",
    "C#",
    "HTML",
    "CSS",
    "JavaScript",
    ".net Framework",
    ".net Core",
    "Asp.net Webforms",
    "React",
    "Node.js",
    "Visual Studio 2022 and 2019",
    "Visual Studio Code",
  ];

  const renderList = skillsself.map((item) => (
    <p className={classes["my-paragraph"]}>
      <FaReact className={styles["skills-icon"]} />
      &emsp;
      {item}
    </p>
  ));

  console.log(renderList);
  return (
    <Fragment>
      <Badge>Skills</Badge>
      <Card>{renderList}</Card>
    </Fragment>
  );
};

export default Skills;
