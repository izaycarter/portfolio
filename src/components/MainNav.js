import React, {Component} from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import "../Css/MainNav.css";

class MainNav extends Component{

    render(){
        return (
            <Navbar className="top-nav"  expand="lg">
              <Navbar.Brand className="initials" href="/">I.C</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto top-nav-links">
                  <Nav.Link className="top-links" href="/">Home</Nav.Link>
                  <Nav.Link className="top-links" href="/contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        );
    }

}

export default MainNav;
