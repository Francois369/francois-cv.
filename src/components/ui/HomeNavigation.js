import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Fragment } from "react";
import About from "../../pages/About";
import LeftList from "./LeftList/LeftList.js";
import LIST_MAINMENU from "../../data/LIST_MAINMENU.json";
import Contact from "../../pages/Contact";
import Education from "../../pages/Education";
import Work from "../../pages/Work";
import Attributes from "../../pages/Attributes";
function HomeNavigation() {
  // console.log(LIST_MAINMENU);
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col xs={3}>
            <LeftList data={LIST_MAINMENU}></LeftList>
          </Col>

          <Col>
            <Switch>
              <Route path="/About">
                <About></About>
              </Route>
              <Route path="/Contact" exact>
                <Contact></Contact>
              </Route>
              <Route path="/Education" exact>
                <Education></Education>
              </Route>
              <Route path="/Work" exact>
                <Work></Work>
              </Route>
              <Route path="/Attributes" exact>
                <Attributes> </Attributes>
              </Route>
              <Route path="/" exact>
                <Fragment></Fragment>
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default HomeNavigation;
