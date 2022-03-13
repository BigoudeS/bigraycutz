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

  </Jumbotron>

        </header>

    <div className="Cards" style={{alignItems: "center", justifyContent: "center"}}>
  
    <CardDeck>

    <a href="./#/charcoalgrooming" >
    <Card style={{backgroundColor:"black",color:"white"}}>
    <Card.Body >
      <Card.Title className="hptitle">Charcoal Male Grooming (Incall)</Card.Title>
  
    </Card.Body>

  </Card></a>
  <br></br>

  <a href="./#/mcr" >
    <Card style={{backgroundColor:"black",color:"white"}}>
    <Card.Body >
      <Card.Title className="hptitle">Manchester & Salford (Outcall)</Card.Title>
  
    </Card.Body>

  </Card></a>
  <br></br>
  <a href="./#/grtrmcr">
    <Card>

    <Card.Body className="locationCard" style={{backgroundColor:"black",color:"white"}}>
        
      <Card.Title className="hptitle">Greater Manchester (Outcall)</Card.Title>
  
    </Card.Body>
  </Card></a>
<br></br>
  <a href="./#/outsidemcr">
    <Card >
    <Card.Body className="locationCard" style={{backgroundColor:"black",color:"white"}}>
      <Card.Title className="hptitle">Outside Greater Manchester & Other Cities (Outcall)</Card.Title>
  
    </Card.Body>
  </Card></a>
  </CardDeck>
    </div>

      </div>
    );
  }
  
  
  export default App