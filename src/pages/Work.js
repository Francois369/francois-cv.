import { Fragment } from "react";
import Accordion from "../components/ui/Accordion";

import "./MainPages.css";
function Work() {
  return (
    <Fragment>
      <h1>
        <span className="badge badge-pill">Work</span>
      </h1>
      <Accordion></Accordion>
    </Fragment>
  );
}

export default Work;
