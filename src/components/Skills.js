import React, {Component} from 'react';
import "../Css/Skills.css";

// import "../Css/Bio.css";

// <blockquote cite="https://www.goodreads.com/quotes/660272-there-is-nothing-like-a-dream-to-create-the-future">
//     <p>There is nothing like a dream to create the future.</p>
//     <footer>—Victor Hugo, Les Misérables</footer>
// </blockquote>
//

class Skills extends Component{

    render(){
        return(
            <div id="Skills" className="skill-wrapper d-flex col-12">
                <div className="skill-title-box d-flex">
                <p className="skill-title justify-content-center d-flex">Skills</p>
                </div>
                <ul className="d-flex justify-content-between list">
                    <li className="skill-item">HTML5</li>
                    <li className="skill-item">CSS3</li>
                    <li className="skill-item">JavaScript</li>
                    <li className="skill-item">C#</li>
                    <li className="skill-item">Python</li>
                    <li className="skill-item">React</li>
                    <li className="skill-item">Django</li>
                    <li className="skill-item">Sass</li>
                    <li className="skill-item">Google Map API</li>
                    <li className="skill-item">Twilio API</li>
                    <li className="skill-item">Bootstrap</li>
                </ul>
            </div>
        );
    }
}

export default Skills;
