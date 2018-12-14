
import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Projects } from './Projects';
import { About } from './About';
import { Main } from './Main';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="wrapper navbar navbar-default">
                        <Link className="text-dark" to="/">MAIN</Link>
                        {' '}
                        <Link className="text-dark" to="/about">ABOUT</Link>
                        {' '}
                        <Link className="text-dark" to="/projects">PROJECTS</Link>
                        {' '}
                    </nav>

                    <Route exact path="/" component={Main} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/about" component={About} />
                </div>
            </Router>
        );
    }
}
