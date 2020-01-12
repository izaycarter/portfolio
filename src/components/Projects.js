import React, {Component} from 'react';
import "../Css/Projects.css";


class Projects extends Component{
    constructor(props){
        super(props);
        this.state={
            ShowModal: false,
        }

    }


    render(){

        return(
            <div id="Projects" className="projects-wrapper d-flex col-12">
                <div className="projects-title-box d-flex">
                        <p className="projects-title d-flex justify-content-center" >Projects</p>
                </div>
                <div className="d-flex">
                        project
                </div>
            </div>    

        );
    }
}

export default Projects;