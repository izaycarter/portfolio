import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Base from "./Components/Base";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <Base>
            <Switch>
                <Route exact path="" component={Home}/>
                <Route path="/contact" component={Contact}/>

            </Switch>
            <link href="https://fonts.googleapis.com/css?family=Bevan|Rye&display=swap" rel="stylesheet"/>
        </Base>
    </Router>
    , document.getElementById('root'));


serviceWorker.unregister();
