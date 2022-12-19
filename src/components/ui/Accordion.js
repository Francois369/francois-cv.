import React, { useState } from "react";
import { Fragment } from "react";
import classes from "./Accordion.module.css";
import { FaAngleDown } from "react-icons/fa";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const Accordion = () => {
  const [expanded, setExpanded] = useState("");

  function iconClickHandler(event) {
    console.log(event);
    if (expanded == "-expanded") {
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
            <Col>
              <h4 className={classes["accordion-header-heading"]}>
                2022-01 - 2022-08
              </h4>
            </Col>

            <Col>
              <h4 className={classes["accordion-header-heading"]}>
                XFour Solutions
              </h4>
            </Col>

            <Col>
              <FaAngleDown
                onClick={iconClickHandler}
                className={classes[`icon${expanded}`]}
              ></FaAngleDown>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col>
            <div className={classes[`accordion-body${expanded}`]}>
              <p className={classes[`accordion-body-paragraph${expanded}`]}>
                {`${expanded}`}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Accordion;
