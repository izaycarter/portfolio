import React, {Component} from 'react';
import {Button,  Modal } from "react-bootstrap";


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
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
         );
       }
}

export default Contact;
