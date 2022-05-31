import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">MyStore</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/home" className="text-white m-1">
            Home
          </NavLink>{" "}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
