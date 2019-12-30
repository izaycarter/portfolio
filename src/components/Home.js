import React, {Component} from 'react';
import "../Css/Home.css";
import About from  "./About"
import Skills from "./Skills";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fab, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import profile from "../img/profile.png";


class Home extends Component{

    constructor(props){
        super(props);
        this.state={
        }

    }

    render(){
        return(
            <div className="home-page-div row ">
                <div className="intro col-12">
                    <div className="img-div d-flex">
                        <div className="img-warp d-flex">
                            <img  src={profile} alt="Isaiah Carter"/>
                        </div>
                    </div>
                    <span className="homepage-title d-flex">Isaiah Carter</span>
                    <span className="homepage-position d-flex"> Full Stack Developer</span>
                </div>
                <About/>
                <Skills />

            </div>
        )
    }

}

export default Home;
