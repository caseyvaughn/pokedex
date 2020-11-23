import React from "react";
import { Col, Container, Image, Nav, Navbar } from "react-bootstrap";

import "./App.css";

function App() {
  return (
    <>
      <Navbar className="bg-dark d-flex justify-content-between px-5">
        <Nav>
          <Navbar.Brand className="d-flex align-items-center" href="https://pokeapi.co/">
            <Image
              src="https://www.freeiconspng.com/uploads/pokeball-transparent-png-2.png"
              width="55"
              height="55"
              roundedCircle
              className="d-inline-block align-top m-2 d-inline"
              alt="Pokéball"
            />
            <Nav.Item className="text-white font-weight-bold">
              Pokédex
            </Nav.Item>
          </Navbar.Brand>
        </Nav>
      </Navbar>
      <Container className="d-flex justify-content-center align-items-center" fluid>
        <Col
          id="results"
          className="d-flex justify-content-center flex-wrap"
          xs={10}
          sm={10}
          md={10}
          lg={10}
        ></Col>
      </Container>
    </>
  );
}

export default App;
