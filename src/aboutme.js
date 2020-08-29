import React from 'react';
import {Card} from 'react-bootstrap';
//import defaultimg from './IMG/default-img.jpg';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import './App.css';


function aboutme() {
    return (
      <div className="App" style={{textAlign:"center", alignItems:"center", justifyContent: "center"}}>
<br>
</br>

<Card style={{ width: '80%', textAlign:"center", backgroundColor:"black",marginLeft:"auto",marginRight:"auto"}}
    text="light"
>
    <br>
    </br>
{/*<Card.Img variant="top" src={defaultimg} style={{ width: '55%',marginLeft:"auto",marginRight:"auto",}}/>*/}
  <Card.Body>
    <Card.Title><h2>BigRayCutz</h2></Card.Title>
    <Card.Text style={{fontSize:20}}>
    BigRayCutz is a Mobile Barber that is based in Manchester close to the City Centre. He has been cutting hair for 7+ years. He started of by cutting himself then went onto cutting friends hair as favours. Now he's taken this on as a profession cutting hair as a self employed Mobile Barber. BigRayCutz has grown his client base over time, to the point now he covers not just Manchester but Greater Manchester as a whole.    </Card.Text>
  </Card.Body>
<hr style={{ width: '80%', marginLeft:"auto", marginRight:"auto", backgroundColor:"white"}}></hr>
  <Card.Body>
  <a href="/#/portfolio"><Card.Text style={{color:"rgb(0, 140, 255)"}}>click here to see my work</Card.Text></a>
<br></br>
    <Card.Link>
    <a href="https://www.facebook.com/pages/category/Barber-Shop/Big-Ray-Cutz-103155061092391/" class="socials" style={{paddingRight:3,paddingLeft:3}}><FacebookIcon style={{fontSize:40}}/></a>
            <a href="https://twitter.com/bigraycutz" class="socials" style={{paddingRight:3,paddingLeft:3}}><TwitterIcon style={{fontSize:40}}/></a>
            <a href="https://instagram.com/bigraycutz?igshid=j6uamfakd39q" class="socials" style={{paddingRight:3,paddingLeft:2}}><InstagramIcon style={{fontSize:39}}/></a>
    </Card.Link>
  </Card.Body>
</Card>
      </div>
    );
  }
  
  export default aboutme