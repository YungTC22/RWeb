import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './Main.css';
import { AnimatedTypingComponent } from './Typer.js'

export class Main extends Component {
    state = {
        val: "RANI CHANG"
    }
    render() {
        return (
            <div className="container">
                <h1> < AnimatedTypingComponent val={this.state.val} /> </h1>
                <br />
                <h2 className="text-dark">Hello :) Welcome to my personal website!</h2>

                <div className="introduction">
                    <p>I am currently a sophomore at the University of Washington pursuing a double degree in Informatics,
                        Health Informatics and Health Information Management (HIHIM)
                        and a minor in Business Entrepreneurship. I aspire to become a data scientist
                        that utilizes data to help others boost their careers/businesses!
                    </p>
                </div>

                <section>
                    <a target="blank" href="https://github.com/YungTC22">
                        <Button outline color="success" size="lg">GitHub</Button>
                    </a>
                </section>

                <br />
                
                <section>
                    <a target="blank" href="https://linkedin.com/in/yungtc/">
                        <Button outline color="success" size="lg">Linkedin</Button>
                    </a>
                </section>

            </div>
        );
    }
}