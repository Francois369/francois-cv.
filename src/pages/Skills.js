import { Fragment } from "react";
import Card from "../components/ui/Card/Card";
import Badge from "../components/ui/Badge/Badge";
import classes from "../custom/custom.module.css";
import styles from "./Skills.module.css";
import { FaReact } from "react-icons/fa";

const Skills = () => {
  const skillsself = [
    "5 years Managment information systems development and maintanance experience",
    "5 years General Programming experience surounding Management Information Systems.",
    "5 years experience in Illiciting requirement for System end Users and comuniacting suroudning immplementation and delivery",
    "5 years experiecne in the project lifecycle of Managment Information Systems",
    "2 years experience in succsesfully managing business opperations with large staff compliments (Unrelated industry)",
    "Sql - Extracting data - writing reports - creating tables for custom development - updating of data",
    "SSRS - SQL Server Reporting Service",
    "SAP Chrystal Reporting (Prefered over SSRS)",
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
