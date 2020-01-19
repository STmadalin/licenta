import React, { Component } from 'react'
import Main from "./Landing/main";
import Header from "./Landing/header";


export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        
      </div>
    )
  }
}
