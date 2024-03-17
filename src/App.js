import logo from './logo.svg';
import './App.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import bg from './bg.png'
import data from "./data";
import {useState} from "react";
import Card from "./Card";
function App() {
    let [shoes] = useState(data);
  return (
      <div>



        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>




          <div>
              <div className="main-bg" style={{ backgroundImage : 'url(' + bg + ')' }}></div>
          </div>




          {/*가로 3등분*/}
          <div className="container">
              <div className="row">

                  <Card shoes={shoes[0]} i={1} />
                  <Card shoes={shoes[1]} i={2} />
                  <Card shoes={shoes[2]} i={3} />



              </div>
          </div>
      </div>
  );
}

export default App;
