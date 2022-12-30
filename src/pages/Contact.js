import { Fragment } from "react";
import classes from "../custom/custom.module.css";
import Badge from "../components/ui/Badge/Badge";
import Card from "../components/ui/Card/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaEnvelope } from "react-icons/fa";
function Contact() {
  return (
    <Fragment>
      <Badge>Contact</Badge>
      <Card>
        <Container>
          <Row>
            <Col xs={1}>
              <FaEnvelope className={classes["contact-icon"]} />
            </Col>
            <Col>
              <p> </p>
            </Col>
          </Row>
        </Container>
      </Card>
    </Fragment>
  );
}

export default Contact;
