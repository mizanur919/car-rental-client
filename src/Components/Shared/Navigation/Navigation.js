import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

var styles = {
  back: {
    display: "block",
  },
};

const Navigation = () => {
  return (
    <Navbar
      style={{ backgroundColor: "#616161" }}
      collapseOnSelect
      expand="lg"
      variant="dark"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="#home">Get-Car</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/aboutUs">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/addBrand">
              Add Brand
            </Nav.Link>
            <Nav.Link as={Link} to="/addServices">
              Add Services
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/signup">
              Signup
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
