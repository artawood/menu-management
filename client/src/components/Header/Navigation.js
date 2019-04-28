import React from "react";
import Navbar from "react-bootstrap/Navbar";

const Navigation = props => (
  <Navbar bg="light" variant="dark" fixed="top" className="shadow">
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