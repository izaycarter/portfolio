import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Base from "./components/Base";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <Base>
            <Switch>

            </Switch>
        </Base>
    </Router>, document.getElementById('root'));


serviceWorker.unregister();
