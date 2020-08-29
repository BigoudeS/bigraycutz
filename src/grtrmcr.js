import React from 'react';
import {Card} from "react-bootstrap"
import './App.css';


function grtrmcr() {

  return (
      <div className="App">
          <Card className="text-center">
          <Card.Header>These are areas outside of Manchester, Salford & Tameside but within Greater Manchester like Bolton, Bury, Stockport, etc.</Card.Header>
  <Card.Body>
    <Card.Title><h1>Greater Manchester</h1></Card.Title>
    <Card.Text>
    <hr></hr>
        <h3>Standard Booking</h3>
    Hours from 11am-8pm <br></br>
Haircuit & Beard Shape Up - £25 <br></br>

<hr></hr>

<h3>Early Booking</h3>
bookings from 6am-11am<br></br>
Haircut & Beard Shape Up - £30 <br></br>

<hr></hr>

<h3>Late Booking</h3>
bookings from 8pm-12am<br></br>
Haircut & beard Shape Up - £40<br></br>

    </Card.Text>

  </Card.Body>
 
</Card>
<br>
</br>
<i><a href="./#/newsletter"><mark style={{backgroundColor:"black",color:"white"}}>
Please click here to read the newsletter
      <br></br>
before booking any appointments
                  </mark></a></i>
      </div>

  );
};

export default grtrmcr