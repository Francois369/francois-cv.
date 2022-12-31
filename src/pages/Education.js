import { Fragment } from "react";
import classes from "../custom/custom.module.css";
import Badge from "../components/ui/Badge/Badge";
import Card from "../components/ui/Card/Card.js";
function Education() {
  return (
    <Fragment>
      <Badge>Education</Badge>
      <Card>
        <h6>
          <b>Bachelors of commerce Logistics Management</b> <br /> 2007 - 2009
          <br />
          University of Johannesburg
        </h6>
        <p>
          <b>Major Subjects:</b> Logistics Management and Marketing Management.
          <br />
          <b>Other Subjects:</b> Transport Economics, Accounting, Business
          Management
        </p>
      </Card>

      <Card>
        <h6>
          <b>Bachelors of commerce Logistics Management</b> <br /> 2007 - 2009
          <br />
          University of Johannesburg
        </h6>
        <p>
          <b>Major Subjects:</b> Logistics Management and Marketing Management.
          <br />
          <b>Other Subjects:</b> Transport Economics, Accounting, Business
          Management
        </p>
      </Card>
    </Fragment>
  );
}

export default Education;
