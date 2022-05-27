import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">ANIME STUDIO</Navbar.Brand>
          <Nav>
            <Nav.Link href="#populer">Populer</Nav.Link>
            <Nav.Link href="#animelist">Anime List</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
