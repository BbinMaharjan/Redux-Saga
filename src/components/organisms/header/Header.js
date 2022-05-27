import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">Saga</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/" className="text-white m-1">
            Home
          </Link>{" "}
          <Link to="/posts" className="text-white m-1">
            Post
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
