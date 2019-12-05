import React, { Component } from "react";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import { Navbar, NavDropdown, NavbarBrand } from 'react-bootstrap';
import logo from './Images/logo.jpg'
import RenderProp from './RenderProps'

import "bootstrap/dist/css/bootstrap.min.css";

// import LoginPage from "./LoginPage";
// import SendToStrava from "./OAuthSender";

import HomePage from "./HomePage";
import SegmentShow from "./SegmentShow";
import LoginPage from "./LoginPage";



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userId: null
    
  }
}
    logUserOut = (e) => {
        e.preventDefault()
        this.setState({userID: null});
    }
  
  render() {

    console.log(this.props)
    return (
  
        <div className="container">
          <Navbar bg="light" expand="lg">
            <NavbarBrand >
              <img
                src={logo}
                width="50"
                height="auto"
                className="d-inline-block align-top"
                alt="Mountain Crown Logo"
              />Mountain Crown
            </NavbarBrand>
            <NavDropdown className="ml-auto" title="menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="/home">My Segments</NavDropdown.Item>
              <NavDropdown.Item href="/">Logout</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.strava.com">Go to Strava</NavDropdown.Item>
            </NavDropdown>
          </Navbar>
          <br/>
          <HomePage />
        </div>

    );
  }
}

export default App;
