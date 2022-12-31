import { Fragment } from "react";
import classes from "../custom/custom.module.css";
import Card from "../components/ui/Card/Card";
import Badge from "../components/ui/Badge/Badge";

function About() {
  return (
    <Fragment>
      <Badge>About</Badge>
      <Card>
        <p className={classes["my-paragraph"]}>
          I have a bachelor’s of commerce and honors in Business and previous
          experience in business management. More recently (5 years) I have been
          working as a Programmer Analyst on business information systems
          (Mostly HCM and Payroll Related).
        </p>

        <p className={classes["my-paragraph"]}>
          I am a dilligent worker who posesses a good balance of problem solving
          and people skills. I believe some of the achievements listed in the
          Attributes and Achievements section and my refrences would be able to
          attest to that. Due to my work over the last 5 years I aslo posses
          good programming skills and knowledge of business systems.
        </p>

        <p className={classes["my-paragraph"]}>
          Through my career I have found that I take fulfillment from providing
          solutions to business problems. This is the focus I am looking for in
          a job. I do love computer programming however what I enjoy more is
          being involved end to end in the solving of business problems (Even
          when that might not involve development).
        </p>

        <p className={classes["my-paragraph"]}>
          The positions I am looking for would be Programmer Analyst, Software
          consultant or Business Analyst.
        </p>

        <p className={classes["my-paragraph"]}>
          I am a South African currently in the proscess of immigrating to
          Canada. (Details of immigration progress in the immigration section).
        </p>
      </Card>
    </Fragment>
  );
}

export default About;
