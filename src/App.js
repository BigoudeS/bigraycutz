import React from 'react';
import './App.css';
import Main from "./main";
import Navigationbar from "./navbar";
import Footer from "./footer";

function App() {
    return (
      <div className="App">
        <Navigationbar />
        <Main />
        <Footer />
      </div>
    );
  }
  
  export default App