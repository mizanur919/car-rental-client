import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

var styles = {
  back: {
    display: "block",
  },
};

const Navigation = () => {
  return (
    <div>
      <Navbar
        style={{ backgroundColor: "#616161" }}
        collapseOnSelect
        expand="lg"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="#home">Get-Car</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav navbarScroll className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#collection">Collection</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#signup">Signup</Nav.Link>
              <Nav.Link href="#login">Signin</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
