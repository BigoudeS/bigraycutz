import React from 'react';
import './App.css';
import { Card } from "react-bootstrap";

function newsletter() {
    return (
      <div className="App">
        <br></br>

       <h2>Newsletter</h2>

       <p style={{marginLeft:45,marginRight:45}}><i>Letter to all regular clients and new clients regarding to booking appointments for a haircut.</i></p>


       <Card style={{ width: '80%', textAlign:"center", backgroundColor:"black",marginLeft:"auto",marginRight:"auto"}} text="light">

  <Card.Body>
    <Card.Text style={{fontSize:20}}>
    For guaranteed bookings, it would be best to contact me days beforehand in advance to not be left disappointed. As trying to book on the day will not guarantee you a space, as times right now I am busy pre booked out throughout the day. If there are available spaces on the day, I will be posting time slots that are available on my story. If there is no post on my story on the day that would mean there is no spaces available on the day.
<hr style={{ width: '95%', marginLeft:"auto", marginRight:"auto", backgroundColor:"white"}}></hr>
    </Card.Text>
  </Card.Body>
</Card>
<br></br>
<Card style={{ width: '80%', textAlign:"center", backgroundColor:"black",marginLeft:"auto",marginRight:"auto"}}     text="light">
<Card.Body>
    <Card.Text style={{fontSize:20}}>
    When booking please also inform me if you are booking for more than 1 person, so I can know time wise how long I'll be spending. If you only book for yourself and have other people in the household that ends up wanting a haircut, unfortunately I will refuse as I will not have time to go over the booking schedule as I would have other clients to attend afterwards. So please make sure you make it clear whether you're booking for yourself or for other members as well as yourself. 
    <br></br>
    Last notice is I'll be working Monday to Friday only, I will not be working weekends.
<hr style={{ width: '95%', marginLeft:"auto", marginRight:"auto", backgroundColor:"white"}}></hr>
    </Card.Text>
  </Card.Body>
</Card>
      
<br></br>

<i><a href="/booking"><mark style={{backgroundColor:"black",color:"white"}}>
    Know what you want? 
      <br></br>
    Click here to book an appointment now
                  </mark></a></i>

      </div>
    );
  }
  
  
  export default newsletter