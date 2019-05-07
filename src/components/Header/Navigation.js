import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import "./Navigation.css";

const Navigation = () => (
  <Navbar bg="light" variant="dark" fixed="top" className="shadow navbar-large">
    <h1 className="pt-3 pr-4 menu-btn"><i class="fas fa-bars"></i></h1>
    <Navbar.Brand className="pl-2">
      <Link to="/">
        <img
          alt=""
          src="https://www.itsacheckmate.com/wp-content/uploads/2018/08/itsacheckmate.png"
          className="d-inline-block align-top"
        />
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          {/* <span className="login-text">Signed in as: <span className="username">Vishal Agarwal</span></span> */}
        </Navbar.Text>
      </Navbar.Collapse>
  </Navbar>
);

export default Navigation;