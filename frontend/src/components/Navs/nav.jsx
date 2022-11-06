import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import "./nav.css";
function Navs() {
  return (
    <Navbar expand="lg" fixed="top">
      <Container className="nav-bar">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Brand href="/annoucements">Annoucements</Navbar.Brand>
        <Nav>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navs;
