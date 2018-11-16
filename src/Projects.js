import React, { Component } from 'react';
import * as d3 from 'd3';
import { Card, Button, CardBody, CardTitle, CardText, Col, CardDeck } from 'reactstrap';

export class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        d3.csv('data/projects.csv').then((d) => {
            console.log(d);
            this.setState({ data: d });
        })
    }

    render() {
        console.log(this.state.data)
        return <div className="container">
            <h1 className="text-success">PROJECTS COMPLETED</h1>
            <p></p>
            {this.state.data.map((d, i) => {
                return (
                    <Col key={"project" + i}>
                        <CardDeck>
                            <Card body outline color="info">
                                <CardBody>
                                    <CardTitle>
                                        <h2 className="text-info"> {d.Name}</h2>
                                    </CardTitle>
                                    <CardText>
                                        {d.Description}
                                    </CardText>
                                    <a target="blank" href={d.Link}>
                                        <Button outline color="dark" size="lg">Link</Button>
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