import React, {Component} from 'react';
import "../Css/Experience.css";

// import "../Css/Bio.css";

// <blockquote cite="https://www.goodreads.com/quotes/660272-there-is-nothing-like-a-dream-to-create-the-future">
//     <p>There is nothing like a dream to create the future.</p>
//     <footer>—Victor Hugo, Les Misérables</footer>
// </blockquote>
//

class Experience extends Component{

    render(){
        return(
            <div className="experience-wrapper d-flex col-12">
                <div className="experience-box d-flex">
                <p className="experience-title justify-content-center d-flex">Experience</p>
                <ul className="d-flex justify-content-between list">
                <li className="list-experience">HTML5</li>
                <li className="list-experience">CSS3</li>
                <li className="list-experience">JavaScript</li>
                <li className="list-experience">Sass</li>
                <li className="list-experience">Python</li>
                <li className="list-experience">React</li>
                <li className="list-experience">Django</li>
                </ul>
                </div>
            </div>
        );
    }
}

export default Experience;
