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
          My name is Francois van der Walt. I am a 34 year old from South
          Africa. Currently looking to immigrate to Canada (Details of
          immigration progress in the immigration section).
        </p>

        <p className={classes["my-paragraph"]}>
          I have a bachelor’s degree and Honors in Business (Logistics
          management) and previous experience in logistics operations
          management. More recently (5 years) I have been working as a
          Programmer Analyst on business information systems (Mostly HCM and
          Payroll Related).
        </p>

        <p className={classes["my-paragraph"]}>
          Through my career I have found that I take fulfillment from providing
          solutions to business problems. This is the focus I am looking for in
          a job. I do love computer programming however what I enjoy more is
          being involved end to end in the solving of business problems (Even
          when that might not involve development). More recently I have worked
          as a full stack developer however if I am honest, it lacks focus on
          solving business problems. Sometimes you commit your solution and
          don’t even know if it worked as you are not involved in communicating
          with the end user. immigration.
        </p>

        <p className={classes["my-paragraph"]}>
          The positions I am looking for would be Programmer Analyst, Software
          consultant and Business Analyst.
        </p>
      </Card>
    </Fragment>
  );
}

export default About;
