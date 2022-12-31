import { Fragment } from "react";
import classes from "./Contact.module.css";
import Badge from "../components/ui/Badge/Badge";
import Card from "../components/ui/Card/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaEnvelope, FaPhone, FaGithub } from "react-icons/fa";

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
              <a
                href="mailto:franc.vdwalt@gmail.com"
                id="email-a"
                className={classes["email-a"]}
              >
                franc.vdwalt@gmail.com
              </a>
            </Col>
          </Row>
          <Row>
            <Col xs={1}>
              <FaPhone className={classes["contact-icon"]} />
            </Col>
            <Col>
              <a
                href="tel:+27824638075"
                id="phone-p"
                className={classes["phone-p"]}
              >
                +27824638075
              </a>
            </Col>
          </Row>
          <Row>
            <Col xs={1}>
              <FaGithub className={classes["contact-icon"]} />
            </Col>
            <Col xs={1}>
              <a
                href="https://github.com/Francois369"
                target="blank"
                id="phone-p"
                className={classes["phone-p"]}
              >
                Github:francois369
              </a>
            </Col>
          </Row>
        </Container>
      </Card>
    </Fragment>
  );
}

export default Contact;
