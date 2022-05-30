import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">Saga</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/home" className="text-white m-1">
            Home
          </NavLink>{" "}
          <NavLink to="/posts" className="text-white m-1">
            Post
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
