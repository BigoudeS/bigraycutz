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
    Workdays are Monday's to Friday's
    <br></br>
    Prices are not for negotiation and exapected to be paid in full
  </h3>

  <p>
      <a href="/"><small><i><mark style={{backgroundColor:"black",color:"white"}}>**To get prices, make sure you check which region you're in at the home page</mark></i></small></a><br></br>
You can book an appointment on my <a href="https://www.facebook.com/pages/category/Barber-Shop/Big-Ray-Cutz-103155061092391/">Facebook page</a>, it's easy to use and I will resopnd to you as soon as
I can
  </p>

  <a href="/form"><Button>If you don't have a facebook account, <strong>Click Here</strong></Button></a>


  </Jumbotron>
      </div>

  );
};

export default booking
