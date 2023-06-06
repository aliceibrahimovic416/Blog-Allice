import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Routes from "./Routes";
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
       
            <Nav>
              <LinkContainer to="/register" className="btn btn-primary btn-block">
                <NavItem>Register</NavItem>
              </LinkContainer>
              <br />
              <LinkContainer to="/login" className="btn btn-primary btn-block">
                <NavItem>Login</NavItem>
              </LinkContainer>
            </Nav>
          
        <Routes />
      </div>
    );
  }}
export default App;