import { Fragment } from "react";
import "./MainPages.css";
import classes from "../custom/custom.module.css";
function About() {
  return (
    <Fragment>
      <h1>
        <span className="badge badge-pill">About</span>
      </h1>
      <div>
        <div className="card-body bg-secondary">
          <p className={classes["my-paragraph"]}>Personal</p>
          <p className={classes["my-paragraph"]}>
            I am Francois van der Walt a 34 year old male from South Africa. I
            am maried and have a young daughter. We are currently in the
            proscess of moving the Canada. Things are looking good in this
            regard and most of the tedious paperwork is behind us. More details
            on this in the imigration section. Other than that I enjoy playing
            guitar, watching sport mostly Soccer and Rugby.
          </p>

          <p className={classes["my-paragraph"]}>Career overview</p>
          <p className={classes["my-paragraph"]}>
            Although my recent current position is Full Stack Developer I have
            spent the last 5 years working as a Programmer Analyst on business
            focused software applications. These system centered around mostly
            HCM and Payroll and at times Acounting and Logistics. Before this I
            spent time as a Financial Advisor. Prior to this I worked as a
            Transport Opperations Manager. Before that I obtained a Bachelors of
            Business and an Honours from the University of Johannesburg.
          </p>

          <p className={classes["my-paragraph"]}>Current Career Objective</p>
          <p className={classes["my-paragraph"]}>
            Ideally what I am looking for is a Programmer Analyst position. I
            really enjoy and thrive in the end to end nature of this position.
            Although I love development I enjoy it more as part of solving a
            larger business problem or customer needs. My Hopeis to obtain an
            employment offer on a work permit as this will help expediate my
            existing immigration efforts. More on imigration in the section on
            immigration.
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
