import React from "react";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => (
  <Navbar bg="light" variant="dark" fixed="top" className="shadow">
    <h1><i class="fas fa-bars"></i></h1>
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="https://www.itsacheckmate.com/wp-content/uploads/2018/08/itsacheckmate.png"
        className="d-inline-block align-top"
      />
      {' ItsaCheckmate'}
    </Navbar.Brand>
    <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <span className="login-text">Signed in as: <span className="username">Vishal Agarwal</span></span>
        </Navbar.Text>
      </Navbar.Collapse>
  </Navbar>
);

export default Navigation;