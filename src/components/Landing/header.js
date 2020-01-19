import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Button";

class Header extends Component {
  render() {
    return (
     
      <header>
      
        <div className="head">
            <h1>Articole< br/>  sportive</h1>
            <div>
              <p>ASport este o companie din România care se ocupă cu vânzarea online de articole sportive.</p>
              <div><Link to="/produse"><a className="contact">Produse</a></Link></div>
              
            
            </div>
        </div>
        
       
      </header>
      
    );
  }
}

export default Header;
