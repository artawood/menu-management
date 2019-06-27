import React from "react";
import Moment from "react-moment";
import { Row, Col, Jumbotron, Nav } from "react-bootstrap";
import LocationSelector from "../LocationSelector";
import "./Hero.css";

const Hero = props => (
  <Jumbotron className="hero-clear pb-3">
    <Row>
      <Col md="8" className="pb-3">
        <h1>Menu Management</h1>
      </Col>
      <Col md="4">
        <p>
          Last pushed{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{props.datePushed}</Moment>
        </p>
      </Col>
    </Row>
    <LocationSelector class="py-5" />
    <div class="dropdown-divider py-3" />
    <Nav
      activeKey="all"
      onSelect={selectedKey => alert(`filter ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link
          className={
            props.showAll
              ? "isActive filter-item category-text first-nav"
              : "filter-item category-text first-nav"
          }
          onClick={props.renderAll}
        >
          All
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          className={
            props.showAll === false && props.showBurgers === true
              ? "isActive filter-item category-text"
              : "filter-item category-text"
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
              ? "isActive filter-item category-text"
              : "filter-item category-text"
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
              ? "isActive filter-item category-text"
              : "filter-item category-text"
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
              ? "isActive filter-item category-text"
              : "filter-item category-text"
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
              ? "isActive filter-item category-text"
              : "filter-item category-text"
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
              ? "isActive filter-item category-text"
              : "filter-item category-text"
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
