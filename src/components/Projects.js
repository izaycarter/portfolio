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
                <div className="d-flex project-box">
                    <p className="project-title">Gathering Well</p>
                    <p className="">The Gathering Well is a application  designed to help people new to the Greenville area explore christian based churches.This is a central location of information provided by the churches directly through their profile on this site. Prior to being visible to the public every profile is verified of it's context and information. This in return allows churches to present their personal characteristics as well as beliefs.</p>
                    <ul className="d-flex tech-list">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>React</li>
                        <li>Django</li>
                        <li>Google Map API</li>
                        <li>Twilio API</li>
                    </ul>
                </div>
                <div className="d-flex project-box">
                    <p className="project-title">Gathering Well</p>
                    <p className="">The Gathering Well is a application  designed to help people new to the Greenville area explore christian based churches.This is a central location of information provided by the churches directly through their profile on this site. Prior to being visible to the public every profile is verified of it's context and information. This in return allows churches to present their personal characteristics as well as beliefs.</p>
                    <ul className="d-flex tech-list">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>React</li>
                        <li>Django</li>
                        <li>Google Map API</li>
                        <li>Twilio API</li>
                    </ul>
                </div>
            </div>    

        );
    }
}

export default Projects;