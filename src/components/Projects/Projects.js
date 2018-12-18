import React, { Component } from 'react';
import * as d3 from 'd3';
import { Card, Button, CardBody, CardTitle, CardText, Col, CardDeck } from 'reactstrap';
import './Projects.css';
import { AnimatedTypingComponent } from '../../Typer.js'

export class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            val: "PROJECTS COMPLETED"
        }
    }

    componentDidMount() {
        d3.csv('data/projects.csv').then((d) => {
            console.log(d);
            this.setState({ data: d });
        })
    }

    render() {
        return <div className="container">
            <h1>< AnimatedTypingComponent val={this.state.val} /> </h1>
            <p></p>
            {this.state.data.map((d, i) => {
                return (
                    <Col key={"project" + i}>
                        <CardDeck>
                            <Card body outline color="light">
                                <CardBody>
                                    <CardTitle>
                                        <h2 className="text-dark"> {d.Name}</h2>
                                    </CardTitle>
                                    <CardText>
                                        {d.Description}
                                    </CardText>
                                    <a target="blank" href={d.Link}>
                                        <Button className="Buttonz" outline color="success" size="lg">Link</Button>
                                    </a>
                                </CardBody>
                            </Card>
                        </CardDeck>
                        <br />
                    </Col>
                )
            })}
        </div>
    }
}