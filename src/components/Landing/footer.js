import React, { Component } from 'react';
import styled from 'styled-components';


class Footer extends Component {
  render() {
    return (
     
      <FooterB>
        <div class="wrapper">
          <h3>Designed by Madalin Sterian</h3>
          <p>Powered by <a href="https://reactjs.org/">React </a></p>
          <ul>
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          </ul>
          </div>
          
      </FooterB>
      
    );
  }
}

export default Footer;

export const FooterB = styled.footer`
min-height: calc(10vh - 0px);
`