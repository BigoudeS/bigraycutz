import React from 'react';
import {Nav, Navbar} from "react-bootstrap"
import './App.css';
import logo from "./IMG/brandLogo.jpg";

function Navigationbar() {
function hp(){
  window.location.href='/#/';
}
    return (

<Navbar collapseOnSelect expand="lg" variant="dark" style={{ backgroundColor: "black",position:"static",top:0}}>

<img  src={logo} alt="BigRayCutz" style={{height:"auto",width:"30%",align:"left"}} onClick={hp}/>

  <Navbar.Toggle aria-controls="responsive-navbar-nav" id="dropdownbutton" style={{marginRight:"5px"}}/>
  <Navbar.Collapse id="responsive-navbar-nav">

    <Nav>
<Nav.Item>
  <Nav.Link href="/#/" style={{fontSize:22.5}}>Regions (with Prices)</Nav.Link>
</Nav.Item>
<Nav.Item>
    <Nav.Link href="/#/portfolio" style={{fontSize:22.5}}>Portfolio (My Work)</Nav.Link>
</Nav.Item>
<Nav.Item>
< Nav.Link href="/#/booking" style={{fontSize:22.5}}>Book An Appointment</Nav.Link>
</Nav.Item>
<Nav.Item>
< Nav.Link href="/#/aboutme" style={{fontSize:22.5}}>About Me</Nav.Link>
</Nav.Item>
<Nav.Item>
< Nav.Link href="/#/newsletter" style={{fontSize:22.5}}>Newsletter</Nav.Link>
</Nav.Item>
    </Nav>
  </Navbar.Collapse>
</Navbar>

    );}

export default Navigationbar;
