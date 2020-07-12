import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import './index.css';
import home from './home';
import mcr from './mcr';
import grtrmcr from './grtrmcr';
import outsidemcr from './outsidemcr';
import booking from './booking';
import portfolio from './portfolio';
import form from "./form";
import aboutme from './aboutme';
import newsletter from './newsletter';

const Main = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch id="router"> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={home}></Route>
      <Route exact path='/booking' component={booking}></Route>
      <Route exact path='/portfolio' component={portfolio}></Route>
      <Route exact path='/mcr' component={mcr}></Route>
      <Route exact path='/grtrmcr' component={grtrmcr}></Route>
      <Route exact path='/outsidemcr' component={outsidemcr}></Route>
      <Route exact path='/form' component={form}></Route>
      <Route exact path='/aboutme' component={aboutme}></Route>
      <Route exact path='/newsletter' component={newsletter}></Route>
      
    </Switch>
    </BrowserRouter>
  );
}

export default Main;