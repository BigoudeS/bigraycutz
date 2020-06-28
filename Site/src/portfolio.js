import React from 'react';
import {Carousel} from 'react-bootstrap';
import one from './IMG/1.PNG';
import two from './IMG/2.PNG';
import three from './IMG/3.PNG';
import four from './IMG/4.PNG';
import five from './IMG/5.PNG';
import six from './IMG/6.PNG';
import seven from './IMG/7.PNG';
import eight from './IMG/8.PNG';
import nine from './IMG/9.PNG';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import './App.css';


function portfolio() {

  return (
      <div className="App" style={{backgroundColor:"black"}}>
        
<h1 style={{color:"white"}}>Portfolio</h1>
<i><h2 style={{color:"white"}}>My Work</h2></i>
<div id="mywork">
<Carousel id="Carousel">
<Carousel.Item className="container">
<img src={one} alt="Trimmed off the top, with skin fade" className="portfolioimg"/>
<Carousel.Caption><p className="caption" style={{color:"white"}}>Trim off the top, with skin fade</p></Carousel.Caption>
</Carousel.Item>

<Carousel.Item className="container">
<img src={two} alt="Tapered hairstyle, with shape up" className="portfolioimg"/>
<Carousel.Caption><p className="caption" style={{color:"white"}}>Tapered hairstyle, with shape up</p></Carousel.Caption>
</Carousel.Item>

<Carousel.Item className="container">
<img src={three} alt="Number 1 on top with the grain, skin fade on sides" className="portfolioimg"/>
<Carousel.Caption><p className="caption" style={{color:"white"}}>Number 1 on top with the grain, skin fade on sides</p></Carousel.Caption>
</Carousel.Item>

<Carousel.Item className="container">
<img src={four} alt="Tapered fade" className="portfolioimg"/>
<Carousel.Caption><p className="caption" style={{color:"white"}}>Tapered fade</p></Carousel.Caption>
</Carousel.Item>

<Carousel.Item className="container">
<img src={five} alt="2 on the top, with mid fade" className="portfolioimg"/>
<Carousel.Caption><p className="caption" style={{color:"white"}}>2 on the top, with mid fade</p></Carousel.Caption>
</Carousel.Item>

<Carousel.Item className="container">
<img src={six} alt="1.5 on the top with the grain, skin fade on sides" className="portfolioimg"/>
<Carousel.Caption><p className="caption" style={{color:"white"}}>1.5 on the top with the grain, skin fade on sides</p></Carousel.Caption>
</Carousel.Item>

<Carousel.Item className="container">
<img src={seven} alt="High top, with fade" className="portfolioimg"/>
<Carousel.Caption><p className="caption" style={{color:"white"}}>High top, with fade</p></Carousel.Caption>
</Carousel.Item>

<Carousel.Item className="container">
<img src={eight} alt="Top untouched, skin fade sides and back" className="portfolioimg"/>
<Carousel.Caption><p className="caption" style={{color:"white"}}>Top untouched, skin fade sides and back</p></Carousel.Caption>
</Carousel.Item>

<Carousel.Item className="container">
<img src={nine} alt="1.5 curls on top, with high fade" className="portfolioimg"/>
<Carousel.Caption><p className="caption" style={{color:"white"}}>1.5 curls on top, with high fade</p></Carousel.Caption>
</Carousel.Item>

</Carousel>

</div>
<br>
</br>
<br>
</br>
<mark style={{backgroundColor:"white"}}>Check out the socials to see more of my work & reviews</mark>
<br>
</br>
<ArrowDownwardIcon style={{color:"white"}}/><ArrowDownwardIcon style={{color:"white"}}/>
<br>
</br>
      </div>

  );
};

export default portfolio