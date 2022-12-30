import { Fragment } from "react";
import classes from "../custom/custom.module.css";
import Badge from "../components/ui/Badge/Badge";
import Card from "../components/ui/Card/Card";
function Contact() {
  return (
    <Fragment>
      <Badge>Contact</Badge>
      <Card>This is the card where contact info will be added</Card>
    </Fragment>
  );
}

export default Contact;
