import React, {Component} from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import "../Css/MainNav.css";

class MainNav extends Component{
    constructor(props){
       super(props);
       this.state={

       }
   }


    render(){
        return (
            <Navbar className="top-nav"  expand="lg" fixed="top">
              <Navbar.Brand className="initials" href="/">I.C</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto top-nav-links">
                  <Nav.Link className="top-links" onClick={this.props.onClick} >Contact</Nav.Link>
                  <Nav.Link className="top-links" href="#About">About</Nav.Link>
                  <Nav.Link className="top-links" href="#Skills">Skills</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        );
    }

}

export default MainNav;
