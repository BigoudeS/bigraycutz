import React from 'react';
import './App.css';


function form() {
    return (
      <div id="form">

<a href="./#/" id="BigRayCutzForm"><h2>Big Ray Cutz</h2></a>
    <p><strong>Booking Form</strong></p>
    <hr style={{backgroundColor:"black", width:"95%"}} ></hr>
    
      <form id="fs-frm" name="survey-form" accept-charset="utf-8" action="https://formspree.io/xnqgjqak" method="post">
    
          <label for="full-name">Name</label>
          <input type="text" name="name" id="full-name" placeholder="Full Name" required=""></input>
    
            <label for="region">Region</label>
            <select name="region" required="">
              <option value="Choose" selected="" disabled="">Choose</option>
              <option value="Manchester/Salford/Tameside">Manchester/Salford/Tameside</option>
              <option value="Greater Manchester">Greater Manchester</option>
              <option value="Outside Manchester">Outside Manchester</option>
            </select>
            <label for="booking" required="">Booking</label>
            <select name="booking" id="quality" required="">
              <option value="Choose" selected="" disabled="">Choose</option>
              <option value="Standard (11am-8pm)">Standard (11am-8pm)</option>
              <option value="Early (6am-11am)">Early (6am-11am)</option>
              <option value="Late (8pm-12am)">Late (8pm-12am)</option>
            </select>
    
                <label for="email-address">Email Address</label>
          <input type="text" name="email-address" placeholder="example@email.com" required=""></input>
    <label for="phone-number">Phone Number</label>
          <input type="text" name="phone-number" placeholder="07xxxxxxxxx" required=""></input>
    
        <input type="submit" value="Submit"></input>
      </form>

      </div>
    );
  }
  
  export default form