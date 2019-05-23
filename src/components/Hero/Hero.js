import React from "react";
import Moment from "react-moment";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Nav from "react-bootstrap/Nav";
import "./Hero.css";

const Hero = props => (
  <Jumbotron className="hero-clear pb-3">
    <Row>
      <Col md="8">
        <h1>Menu Management</h1>
      </Col>
      <Col md="4">
        <p>
          Last pushed{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{props.datePushed}</Moment>
        </p>
      </Col>
    </Row>
    <h2>Five Guys - AL0193</h2>
    <p>This is a prototype of the ItsaCheckmate Menu Management Dashboard</p>
    <div class="dropdown-divider" />
    <Nav
      activeKey="all"
      onSelect={selectedKey => alert(`filter ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link
          className={props.showAll ? "isActive filter-item" : "filter-item"}
          onClick={props.renderAll}
        >
          All
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          className={
            props.showAll === false && props.showBurgers === true
              ? "isActive filter-item"
              : "filter-item"
          }
          onClick={props.renderBurgers}
        >
          Burgers
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          className={
            props.showAll === false && props.showDogs === true
              ? "isActive filter-item"
              : "filter-item"
          }
          onClick={props.renderDogs}
        >
          Dogs
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          className={
            props.showAll === false && props.showSandwiches === true
              ? "isActive filter-item"
              : "filter-item"
          }
          onClick={props.renderSandwiches}
        >
          Sandwiches
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          className={
            props.showAll === false && props.showFries === true
              ? "isActive filter-item"
              : "filter-item"
          }
          onClick={props.renderFries}
        >
          Fries
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          className={
            props.showAll === false && props.showDrinks === true
              ? "isActive filter-item"
              : "filter-item"
          }
          onClick={props.renderDrinks}
        >
          Drinks
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          className={
            props.showAll === false && props.showShakes === true
              ? "isActive filter-item"
              : "filter-item"
          }
          onClick={props.renderShakes}
        >
          Shakes
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Jumbotron>
);

export default Hero;
