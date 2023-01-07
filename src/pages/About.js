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
          My name is Francois van der Walt I am 34 years old. I posses a
          business degree and have previous management experience. However more
          recently (5 year) I have found where my passion lies. This is in the
          problem-solving nature of the environment surrounding Management
          Information systems. I have worked most of the last 5 years as a
          Analyst and currently as a full stack developer.
        </p>

        <p className={classes["my-paragraph"]}>
          I am a diligent worker who possesses a good balance of problem solving
          and people skills. I believe some of the achievements listed in the
          Attributes and Achievements section and my references would be able to
          attest to that. Due to my work over the last 5 years I also possess
          rich Systems, programming and report writing experience.
        </p>

        <p className={classes["my-paragraph"]}>
          Through my career I have found that I take fulfilment from providing
          solutions to business problems. This is the focus I am looking for in
          a job. I do love computer programming however what I enjoy more is
          being involved end to end in the solving of business problems (Even
          when that might not involve development).
        </p>

        <p className={classes["my-paragraph"]}>
          The positions I am looking for would be Programmer Analyst,
          Applications Programmer, Functional Consultant and Business analyst.
        </p>

        <p className={classes["my-paragraph"]}>
          I am a South African currently in the process of immigrating to
          Canada. (Details of immigration progress in the immigration section).
        </p>
      </Card>
    </Fragment>
  );
}

export default About;
