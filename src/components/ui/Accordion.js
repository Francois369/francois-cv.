import React from "react";
import { Fragment } from "react";
import classes from "./Accordion.module.css";
import { FaBeer } from "react-icons/fa";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
const Accordion = () => {
  return (
    <Fragment>
      <div className={classes["accordion-header"]}>
        <Container>
          <Row>
            <Col>
              <h1 className={classes["accordion-header-heading"]}>
                Test Heading
              </h1>{" "}
            </Col>
            <Col>
              <FaBeer className={classes["icon"]}></FaBeer>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={classes["accordion-body"]}>
        <p>This is a test Paragraph</p>
      </div>
    </Fragment>
  );
};

export default Accordion;
