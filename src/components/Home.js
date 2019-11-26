import React, {Component} from 'react';
import "../Css/Home.css";
import MainNav from "./MainNav";
import Bio from "./Bio";
import profile from "../img/profile.png";


class Home extends Component{

    render(){
        return(
            <div className="home-page-div row ">
                <div className="intro col-12">
                    <MainNav/>
                    <div className="img-div d-flex">
                        <div className="img-warp d-flex">
                            <img  src={profile} alt="Isaiah Carter"/>
                        </div>
                    </div>
                    <span className="homepage-title d-flex">Isaiah Carter</span>
                    <span className="homepage-position d-flex"> Full Stack Developer</span>
                </div>
                <Bio/>

            </div>
        )
    }

}

export default Home;
