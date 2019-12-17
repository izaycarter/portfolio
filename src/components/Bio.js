import React, {Component} from 'react';
import "../Css/Bio.css";

// <blockquote cite="https://www.goodreads.com/quotes/660272-there-is-nothing-like-a-dream-to-create-the-future">
//     <p>There is nothing like a dream to create the future.</p>
//     <footer>—Victor Hugo, Les Misérables</footer>
// </blockquote>
//

class Bio extends Component{

    render(){
        return(
            <div id="about-me" className="bio-wrapper d-flex col-12">
                <div className="bio-box d-flex">
                <p className="bio-title justify-content-center d-flex">About Me</p>
                <p className="bio d-flex">I live for challenges, finding new ways to impove on my ablitlies , and designing impressive applications visually as well as structurally. When I'm not working on code I love to explore greenville with my wife. I love waking up early for the gym, it's my way of starting the day. I help lead the worship team for my church in Taylors.</p>
                </div>
            </div>
        );
    }
}

export default Bio;
