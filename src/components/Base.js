import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from "./Nav";

class Base extends Component{

    render(){
        return(
            <Container>
                <Nav />

            </Container>

        );
    }
}

export default Base;
