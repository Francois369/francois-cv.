import React, { useState } from "react";
import { Fragment } from "react";
import classes from "./Accordion.module.css";
import { FaAngleDown } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
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

  const listItems = props.data.List.map((item) => (
    <p className={classes["accordion-li-p"]}>
      <FaReact className={classes["react-icon"]} />
      {item}
    </p>
  ));

  return (
    <Fragment>
      <div className={classes[`accordion-header${expanded}`]}>
        <Container>
          <Row>
            <Col xs={3}>
              <p
                className={classes["DateStamp-paragraph"]}
              >{`${props.data.DateFromMonth} ${props.data.DateFromYear} to ${props.data.DateToMonth} ${props.data.DateToYear} `}</p>
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
              <p className={classes[`accordion-paragraph${expanded}`]}>
                <strong>
                  <i>{props.data.Position}</i>
                </strong>
              </p>
              <p className={classes[`accordion-paragraph${expanded}`]}>
                {props.data.Paragraph}
              </p>
              {listItems}
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Accordion;
