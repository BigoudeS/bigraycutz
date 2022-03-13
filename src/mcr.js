import React from 'react';
import {Card} from "react-bootstrap";
import './App.css';


function mcr() {

  return (
      <div className="App">
          <Card className="text-center">
  <Card.Header>All these prices are subject to areas in Manchester & Salford as they are in close proximity to where I live.</Card.Header>
  
  <Card.Body>
    <Card.Title><h1>Manchester & Salford</h1></Card.Title>
    <Card.Text>
    <hr></hr>
    <h3>Haircut</h3>
    £25 <br></br>

<hr></hr>

<h3>Beard</h3>
£10 <br></br>

<hr></hr>

<h3>Haircut & Beard</h3>
£30 <br></br>

    </Card.Text>

  </Card.Body>
 
</Card>
<br></br>

      </div>

  );
};

export default mcr