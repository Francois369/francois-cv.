import { Fragment } from "react";
import Accordion from "../components/ui/Accordion";
import WORK_EXPERIENCE from "../data/WORK_EXPERIENCE.json";
import Badge from "../components/ui/Badge/Badge";
import classes from "../custom/custom.module.css";

function Work() {
  return (
    <Fragment>
      <Badge>Work</Badge>
      {WORK_EXPERIENCE.map((item) => (
        <Accordion data={item}></Accordion>
      ))}
    </Fragment>
  );
}

export default Work;
