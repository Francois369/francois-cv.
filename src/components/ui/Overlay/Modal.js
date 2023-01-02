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
  const targetPortal = document.getElementById("overlay");

  return (
    <Fragment>
      {props.children}
      {ReactDOM.createPortal(
        <Backdrop>
          <ModalOverlay>
            <Login />
          </ModalOverlay>
        </Backdrop>,
        targetPortal
      )}
    </Fragment>
  );
}

export default Modal;
