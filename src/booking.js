import React from 'react';
import {Jumbotron, Button} from "react-bootstrap";
import './App.css';





function booking() {

  return (
      <div className="App">


<Jumbotron>
  <h1>Booking Appointments</h1>
  <hr></hr>
  <h3 style={{color:"black",fontSize:22.5}}>
    
    <br></br>
    Prices are not for negotiation and exapected to be paid in full
  </h3>

  <p>
      <a href="./#/"><small><i><mark style={{backgroundColor:"black",color:"white"}}>**To get prices, make sure you check which region you're in at the home page</mark></i></small></a><br></br>
  </p>
  <p>
    For my mobile service, I’m available full day on Monday. Tuesday to Friday I’m available from 7pm onwards. Contact me through my socials or through my contact number: <a href='https://wa.me/447990394004' target='blank_'>07990 394004</a>
  </p>
  <p>
  Workdays in the shop are Tuesdays to Saturdays.
  </p>

  <a href="https://www.charcoalmalegrooming.com/" target='blank_'><Button>For bookings in the shop, <strong>Click Here</strong></Button></a>


  </Jumbotron>
      </div>

  );
};

export default booking
