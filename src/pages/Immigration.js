import styles from "./Immigration.module.css";

import Card from "../components/ui/Card/Card";
import Badge from "../components/ui/Badge/Badge";
import classes from "../custom/custom.module.css";

import { Fragment } from "react";

const Immigration = () => {
  return (
    <Fragment>
      <Badge>Immigration</Badge>
      <Card>
        <p className={classes["my-paragraph"]}>
          My wife and I have submitted our application for permanent residency
          through the express entry portal. We have completed most if not all
          the tedious administrative requirement surrounding this (Police
          clearances, IELTS exams and WES certification of qualifications). We
          possess the necessary means to immigrate, funds , qualifications, we
          are well researched and have visited Canada on a reconnaissance
          mission. We are committed to the idea of immigrating to Canada.
          <br />
          <br /> With our current score in the CRS system we should be invited
          to apply for permanent residency withing the next six months. A valid
          job offer at this point for a term of 12 months or longer would boost
          the CRS score to where we will be invited to apply in the next draw. I
          believe this will make the turnaround time acceptable to possible
          employers.
          <br />
          <br />
          Alternative I would also be very willing to come across on a work
          permit in the interim. This method once again I believe should ensure
          a farts enough turnaround time for any potential employers.
          <br />
          <br /> The immigrations office have provided some reference numbers
          below which they state we should use in our efforts to look for work.{" "}
          <br />
          a. Express Entry profile number: E003104119 <br />
          b. Job Seeker validation code: 4737
          <br />
          c. Current CRS Score: 452
        </p>
      </Card>
    </Fragment>
  );
};

export default Immigration;
