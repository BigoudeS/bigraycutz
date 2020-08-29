import React from 'react';
import './App.css';
import { CardDeck, Card, Jumbotron} from "react-bootstrap";
import logo from "./IMG/Logo.jpg";

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <br></br>
        <Jumbotron id="JumbotronHeader">
  <img src={logo} alt="BigRayCutz" style={{height:"auto",width:"95%"}}/>
  <hr style={{backgroundColor:"white"}} ></hr>
  <h4>
      <a href="/#/aboutme" style={{color:"white"}}>Manchester's Mobile Barber</a>
  </h4>

  </Jumbotron>

        </header>

    <div className="Cards" style={{alignItems: "center", justifyContent: "center"}}>
  
    <CardDeck>
  <a href="/#/mcr" >
    <Card style={{backgroundColor:"black",color:"white"}}>
    <Card.Body >
      <Card.Title className="hptitle">Manchester & Salford</Card.Title>
  
    </Card.Body>

  </Card></a>
  <br></br>
  <a href="/#/grtrmcr">
    <Card>

    <Card.Body className="locationCard" style={{backgroundColor:"black",color:"white"}}>
        
      <Card.Title className="hptitle">Greater Manchester</Card.Title>
  
    </Card.Body>
  </Card></a>
<br></br>
  <a href="/#/outsidemcr">
    <Card >
    <Card.Body className="locationCard" style={{backgroundColor:"black",color:"white"}}>
      <Card.Title className="hptitle">Outside Greater Manchester & Other Cities</Card.Title>
  
    </Card.Body>
  </Card></a>
  </CardDeck>
    </div> 
  
    <i><a href="/#/newsletter"><mark style={{backgroundColor:"black",color:"white"}}>
Please click here to read the newsletter
      <br></br>
before booking any appointments
                  </mark></a></i>

      </div>
    );
  }
  
  
  export default App