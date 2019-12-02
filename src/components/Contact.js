import React, {Component} from 'react';
import {Button,  Modal , Card, Image} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
         return (
             <Modal
                 {...this.props}
                 size="lg"
                 aria-labelledby="contained-modal-title-vcenter"
                 centered
                >
                    <Modal.Body>
                        <div className="row mb-2">
                        <h4 className="d-flex mb-0 col-12 justify-content-center">Mobile number</h4>
                        <p className="d-flex mb-0 col-12 justify-content-center">864-915-6152</p>
                        </div>
                        <div className="row mb-2">
                        <h4 className="d-flex mb-0 col-12 justify-content-center" >Email</h4>
                        <p className="d-flex mb-0 col-12 justify-content-center">izay.carter0509@gmail.com</p>
                        </div>
                        <div className="icons-div d-flex justify-content-center">
                            <a href="http://www.linkedin.com/in/isaiah-c-gvl" target="_blank" className="icon-a d-flex pl-2" ><FontAwesomeIcon className="icon" icon={faLinkedin} size="lg"/></a>
                            <a href="https://github.com/izaycarter" target="_blank" className="icon-a d-flex pl-2"><FontAwesomeIcon className="icon" icon={faGithub} size="lg" /></a>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
         );
       }
}

export default Contact;
