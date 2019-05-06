import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Nav from "react-bootstrap/Nav";
import './Hero.css';

const Hero = props => (
  <Jumbotron className="hero-clear">
    <Row>
      <Col md="8">
        <h1>Menu Management</h1>
      </Col>
      <Col md="4">
        <p>Last pushed {}</p>
      </Col>
    </Row>
    <h2>Five Guys - AL0193</h2>
    <p>This is a prototype of the ItsaCheckmate Menu Management Dashboard</p>
    <div class="dropdown-divider"></div>
    <Nav
      activeKey="all"
      onSelect={selectedKey => alert(`filter ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link className="filter-item isActive first-filter" eventKey="all">All</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="filter-item" eventKey="burgers">Burgers</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="filter-item" eventKey="dogs">Dogs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="filter-item" eventKey="sandwiches">Sandwiches</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="filter-item" eventKey="fries">Drinks</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="filter-item" eventKey="shakes">Shakes</Nav.Link>
      </Nav.Item>
    </Nav>
  </Jumbotron>
);

export default Hero;
