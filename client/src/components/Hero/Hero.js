import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Hero = props => (
  <Jumbotron>
    <Container>
    <h1>Menu Management System</h1>
    <p>
      This is a prototype of the ItsaCheckamte Menu Management System
    </p>
    <p>
      <Button variant="primary">Learn more</Button>
    </p>
    </Container>
  </Jumbotron>
);

export default Hero;
