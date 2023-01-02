import { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import classes from "./Modal.module.css";
import { Col, Row, Container } from "react-bootstrap";

function Backdrop(props) {
  return (
    <div className={classes.backdrop} onClick={props.onClose}>
      {props.children}
    </div>
  );
}

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

function Modal(props) {
  const [loggedIn, setloggedin] = useState(false);
  const targetPortal = document.getElementById("overlay");
  if (loggedIn === false) {
    return (
      <Fragment>
        {props.children}
        {ReactDOM.createPortal(
          <Backdrop>
            <ModalOverlay>
              <Login click={setloggedin} />
            </ModalOverlay>
          </Backdrop>,
          targetPortal
        )}
      </Fragment>
    );
  }
}

export default Modal;
