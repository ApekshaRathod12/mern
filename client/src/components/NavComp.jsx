import React from "react";
import { Navbar, Container, Nav, Button, NavDropdown } from "react-bootstrap";
import "./NavComp.scss";

const NavComp = () => {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="/" className="brand">
          Trakky
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <NavDropdown
              title={
                <span>
                  Ahmedabad <i className="fas fa-chevron-down ms-1"></i>
                </span>
              }
              id="location-dropdown"
            >
              <NavDropdown.Item href="#mumbai">Mumbai</NavDropdown.Item>
              <NavDropdown.Item href="#delhi">Delhi</NavDropdown.Item>
              <NavDropdown.Item href="#bangalore">Bangalore</NavDropdown.Item>
            </NavDropdown>
            <Button variant="outline-primary" className="book-salon-btn">
              BOOK salon
            </Button>
            <Button variant="link" className="user-btn">
              <i className="fas fa-user"></i>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavComp;
