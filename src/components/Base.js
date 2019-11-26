import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
// import MainNav from "./MainNav";

class Base extends Component{
    constructor(props){
        super(props);
        this.state={
        }

    }

    render(){
        return(
            <Container fluid>
                {this.props.children}
            </Container>

        );
    }
}

export default Base;
