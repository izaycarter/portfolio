import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import MainNav from "./MainNav";
import Home from "./Home";
import Contact from "./Contact";
import "../Css/Base.css";

class Base extends Component{
    constructor(props){
        super(props);
        this.state={
            ShowModal: false,
        }

    }


    handleClick = (event) => {
     this.setState({ ShowModal: true })
     }
    render(){
        let showContact = this.state.ShowModal;

        return(
            <Container fluid>
                <MainNav onClick={this.handleClick} />
                <Home  />
                {showContact ?  <Contact
                        show={this.state.ShowModal}
                        onHide={() => this.setState({ShowModal:false})}
                    />: null
                }
            </Container>

        );
    }
}

export default Base;
