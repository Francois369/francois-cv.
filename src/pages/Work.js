import { Fragment } from "react";
import Accordion from "../components/ui/Accordion";
import WORK_EXPERIENCE from "../data/WORK_EXPERIENCE.json";

import classes from "../custom/custom.module.css";

function Work() {
  return (
    <Fragment>
      <h1>
        <span className="badge badge-pill">Work</span>
      </h1>
      {WORK_EXPERIENCE.map((item) => (
        <Accordion data={item}></Accordion>
      ))}
      {/* <Accordion></Accordion>
      <Accordion></Accordion> */}
    </Fragment>
  );
}

export default Work;
