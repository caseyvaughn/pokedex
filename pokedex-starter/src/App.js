import { useState, useEffect } from "react";
import axios from "axios";
import { Col, Container, Image, Nav, Navbar } from "react-bootstrap";
// import PageLoad from "./components/PageLoad";

import "./App.css";

function App() {
  // 

  const [pokeData, setPokeData] = useState({});
  const [newSearch, setNewSearch] = useState("pikachu");
  useEffect(() => {
    // console.log("test for use effect");
    const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${newSearch}`;
    const makeApiCall = async () => {
      const res = await axios.get(pokeUrl);
      setPokeData(res.data);
    }
    makeApiCall();
  }) 

  return (
    
    <>
      {/* <PageLoad /> */}
      <Navbar className="bg-dark d-flex justify-content-between px-5">
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
        <Nav>
          {/* TODO: search goes here! */}
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
        >
        { /* TODO: results go here! */ }
        </Col>
      </Container>
    </>
  );
}

export default App;
