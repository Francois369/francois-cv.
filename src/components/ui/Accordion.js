import React, { useState } from "react";
import { Fragment } from "react";
import classes from "./Accordion.module.css";
import { FaAngleDown } from "react-icons/fa";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const Accordion = (props) => {
  const [expanded, setExpanded] = useState("");

  function iconClickHandler(event) {
    console.log(event);
    if (expanded === "-expanded") {
      setExpanded("");
    } else {
      setExpanded("-expanded");
    }
  }

  return (
    <Fragment>
      <div className={classes[`accordion-header${expanded}`]}>
        <Container>
          <Row>
            <Col xs={3}>
              <h4 className={classes["accordion-header-heading"]}>
                {`${props.data.DateFrom} to ${props.data.DateTo} `}
              </h4>
            </Col>

            <Col xs={7}>
              <h4 className={classes["accordion-header-heading"]}>
                {`${props.data.Employer}`}
              </h4>
            </Col>

            <Col xs={1}>
              <FaAngleDown
                onClick={iconClickHandler}
                className={classes[`accordion-icon${expanded}`]}
              ></FaAngleDown>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row>
          <Col>
            <div className={classes[`accordion-body${expanded}`]}>
              <p className={classes[`accordion-paragraph${expanded}`]}>Hello</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Accordion;
