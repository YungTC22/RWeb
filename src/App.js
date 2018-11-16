
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Projects } from './Projects';
import { About } from './About';
import { Main } from './Main';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <React.Fragment>
                        <img src={logo} className="App-logo" alt="logo" />
                        <Link className="text-info" to="/">MAIN</Link>
                        <Link className="text-info" to="/about">ABOUT</Link>
                        <Link className="text-info" to="/projects">PROJECTS</Link>
                        <Route exact path="/" component={Main} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/about" component={About} />
                    </React.Fragment>
                </Router>
            </div>
        );
    }
}
